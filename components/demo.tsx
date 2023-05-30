import { connect, consumerOpts, JSONCodec, Msg, NatsConnection, StringCodec, SubscriptionOptions } from 'nats.ws'
import React, { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import ReactConfetti from 'react-confetti';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type DemoProps = {
  name: string
  server: string
  eventName: string
  eventSubject: string
}

type Question = {
  id: string,
  options: Array<string>
}

const subscribe = (
  nc: NatsConnection,
  subject: string,
  cb: (m: Msg) => void,
  opts?: SubscriptionOptions) => {

  const sub = nc.subscribe(subject, opts);
  (async () => {
    for await (const m of sub) { cb(m) }
  })()

}

const questions = [
  {
    label: "How familiar are you with NATS?",
    id: "familiarity",
    options: [
      "I'm a complete newbie",
      "I've dabbled a bit",
      "I've evaluated NATS at my company",
      "I'm using NATS in production",
    ],
  },
  {
    label: "What topic do you want to learn?",
    id: "topic",
    options: [
      "Perform ETL with NATS and Integrated Solutions",
      "Streaming, KV & Object Store with NATS JetStream",
      "Deploying NATS with Kubernetes",
      "Scaling your service globally from cloud to edge",
    ],
  },
  {
    label: "How familiar are you with microservices?",
    id: "microservices",
    options: [
      "I am still learning the concepts of microservices",
      "I am in the process of building a microservices-based application",
      "I am running microservices in production and loving it!",
      "I have felt pain with developing or productionizing microservices"
    ],
  },
]

export const Demo = (props: DemoProps) => {
  const nc = useRef<NatsConnection>()
  const { eventName, eventSubject, name, server } = props

  const [survey, setSurvey] = useState<any>({ name: name })
  const [surveyData, setSurveyData] = useState<Array<any>>([])
  const [logs, setLogs] = useState<Array<string>>([])
  const [submitted, setSubmitted] = useState(localStorage.getItem("survey") == "true")
  const [wonLottery, setWonLottery] = useState(false)

  const updateSurvey = (k: string, v: string) => {
    survey[k] = v
    setSurvey(survey)
  }

  const submitSurvey = () => {
    const jc = JSONCodec();
    log(`Submitting survey: ${JSON.stringify(survey)}`)
    nc.current?.publish(`${eventSubject}.survey`, jc.encode(survey))
    setSubmitted(true)
    localStorage.setItem("name", name)
    localStorage.setItem("survey", "true")
  }

  const seriesData = (question: Question) => {
    return question.options.map((option) => {
      var n = 0
      surveyData.forEach((data) => {
        if (data[question.id] == option) {
          n++
        }
      })
      return n
    })
  }

  const log = (text: string) => {
    const d = new Date()
    text = `[${d.toLocaleTimeString("en-US", { timeStyle: "long" })}] ${text}`
    setLogs(current => [...current, text])
  }

  type DotProps = {
    option: string,
    index: number
  }

  const Dot = ({option, index}: DotProps) => {

    console.log(index)

    let classVar = ""
    switch (index) {
      case 0:
        classVar = "bluedot col-span-1"
        break;
      case 1:
        classVar = "greendot col-span-1"
        break
      case 2:
        classVar = "yellowdot col-span-1"
        break;
      case 3:
        classVar = "reddot col-span-1"
        break;
    }

    return (
        <div className="flex pt-2 grid grid-flow-col gap-2">
          <div className={classVar}></div>
          <div className="ml-3 text-xs font-medium text-gray-900 col-span-2" key={index}>{option}</div>
        </div>
    )
  }

  useEffect(() => {
    async function natsConnect() {
      const sc = StringCodec();
      const jc = JSONCodec();

      if (!nc.current) {
        log("Connecting to NATS...")
        nc.current = await connect({ servers: [server] });
        log(`Connected to ${server}`)
      }

      subscribe(nc.current, `${eventSubject}.rolecall`, (m) => {
        log(`Recieved message on ${eventSubject}.rolecall`)
        m.respond(sc.encode(name))
        log(`Responded with "${name}"`)
      })

      subscribe(nc.current, `${eventSubject}.lottery`, (m) => {
        log("🎉 You won the lottery!")
        setWonLottery(true)
        m.respond(sc.encode(name))
      }, { queue: "lottery" })

      subscribe(nc.current, `${eventSubject}.navigate`, (m) => {
        const url = sc.decode(m.data)
        log(`Navigating to ${url}...`)
        window.location.replace(url)
      })

      const opts = consumerOpts()
      opts.orderedConsumer()
      const sub = await nc.current.jetstream().subscribe(`${eventSubject}.survey`, opts)
      for await (const m of sub) {
        setSurveyData(current => [...current, jc.decode(m.data)])
      }
    }

    natsConnect()
  }, [name, server])

  return (
    <div>

      {!submitted && (
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            {questions.map((question, i) => (
              <div key={i} className="mb-8">
                <div>
                  <label className="text-base font-medium text-gray-900">{question.label}</label>
                  <fieldset className="mt-4">
                    <div className="space-y-3">
                      {question.options.map((option) => (
                        <div key={option} className="flex items-center">
                          <input
                            id={option}
                            name={question.id}
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            onChange={() => updateSurvey(question.id, option)}
                          />
                          <label htmlFor={option} className="ml-3 block text-sm font-medium text-gray-700">
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div>
              </div>
            ))}

            <button type="submit"
              className="mt-3 inline-flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={submitSurvey}>Submit</button>
          </div>
        </div>
      )}

      {submitted && (
        <>
          <div>
            <h2 className="text-3xl mb-6 text-bold">Survey Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {questions.map((question, i) => (
                <div key={i} className="bg-white shadow rounded-t-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-xl font-semibold mb-4 line-clamp-2">{question.label}</h3>
                    <Chart type="donut" options={{
                      labels: question.options,
                      legend: {
                        show: false,
                        position: 'bottom',
                        horizontalAlign: 'left',

                      },
                    }} series={seriesData(question)} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {questions.map((question, i) => (
                <div key={i} className="bg-white shadow rounded-b-lg">
                  <div className="px-4 py-5 sm:p-6">
                    {question.options.map((option, i2) => ( 
                      <div key={option} className="flex items-center">
                        <label className="ml-3 block text-xs font-small text-gray-700">
                          <div>
                            <Dot option={option} index={i2}/>
                          </div>
                        </label>
                      </div>))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {submitted && (
        <div>
          <h2 className="text-3xl mb-6 text-bold">Logs</h2>
          <div className="bg-slate-800 rounded-lg min-h-[384px] text-gray-50 p-6 font-mono break-all"> {logs.map((log, i) => (
            <div key={i}>{log}</div>
          ))}
          </div>
        </div>
      )}

      {wonLottery && (
        <ReactConfetti
          numberOfPieces={2000}
          colors={['#27aae1', '#34a574', '#375c93', '#8dc63f']}
          recycle={true}
          drawShape={ctx => {
            ctx.beginPath()

            const x1 = 0
            const y1 = 0
            ctx.lineTo(x1, y1)

            const x2 = 0
            const y2 = 30
            ctx.lineTo(x2, y2)

            const x3 = 30
            const y3 = 0
            ctx.lineTo(x3, y3)

            const x4 = 30
            const y4 = 30
            ctx.lineTo(x4, y4)

            ctx.stroke()
            ctx.closePath()
          }}
        />
      )}
    </div>
  )
}
