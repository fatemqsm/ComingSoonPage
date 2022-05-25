import React, { useEffect, useState, useRef } from 'react'
import { css } from '@emotion/css'

export default function CountDown() {
  const refSecs = useRef(null)
  const refMins = useRef(null)
  const refHours = useRef(null)
  const refDays = useRef(null)

  const BREACKPOINT = [576, 768, 992, 1200]
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)

  useEffect(() => {
    setInterval(() => {
      dateDiff()
    }, 1000)
  }, [])

  function dateDiff() {
    let date1 = new Date()
    let date2 = new Date()
    let diff = new Date()

    let date1temp = new Date(
      'Jun 27 2022 08:40:12 GMT+0430 (Iran Daylight Time)'
    )
    date2.setTime(date1temp.getTime())

    let date2temp = new Date()
    date1.setTime(date2temp.getTime())

    diff.setTime(Math.abs(date1.getTime() - date2.getTime()))

    let timediff = diff.getTime()

    let days = Math.floor(timediff / (1000 * 60 * 60 * 24))
    timediff -= days * (1000 * 60 * 60 * 24)

    let hours = Math.floor(timediff / (1000 * 60 * 60))
    timediff -= hours * (1000 * 60 * 60)

    let mins = Math.floor(timediff / (1000 * 60))
    timediff -= mins * (1000 * 60)

    let secs = Math.floor(timediff / 1000)
    timediff -= secs * 1000

    const counter =
      days +
      ' days, ' +
      hours +
      ' hours, ' +
      mins +
      ' minutes, and ' +
      secs +
      ' seconds'

    refSecs.current.innerText = secs
    refMins.current.innerText = mins
    refHours.current.innerText = hours
    refDays.current.innerText = days
  }

  return (
    <div
      className={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 20px;
        flex-wrap: wrap;
        margin-top: 40px;
        ${mq[1]} {
          margin-top: 20px;
        }
      `}
    >
      <div
        className={css`
          background-color: #333333;
          border-radius: 10px;
          color: white;
          padding: 22px 10px 15px 10px;
          width: 95px;
          text-align: center;
        `}
      >
        <div
          ref={refDays}
          className={css`
            font-size: 2.5rem;
            line-height: 20px;
            font-weight: 700;
          `}
        ></div>
        <p
          className={css`
            font-size: 0.9rem;
            margin-top: 10px;
          `}
        >
          Days
        </p>
      </div>

      <div
        className={css`
          background-color: #333333;
          border-radius: 10px;
          color: white;
          padding: 22px 10px 15px 10px;
          width: 95px;
          text-align: center;
        `}
      >
        <div
          ref={refHours}
          className={css`
            font-size: 2.5rem;
            line-height: 20px;
            font-weight: 700;
          `}
        ></div>
        <p
          className={css`
            font-size: 0.9rem;
            margin-top: 10px;
          `}
        >
          Hours
        </p>
      </div>

      <div
        className={css`
          background-color: #333333;
          border-radius: 10px;
          color: white;
          padding: 22px 10px 15px 10px;
          width: 95px;
          text-align: center;
        `}
      >
        <div
          ref={refMins}
          className={css`
            font-size: 2.5rem;
            line-height: 20px;
            font-weight: 700;
          `}
        ></div>
        <p
          className={css`
            font-size: 0.9rem;
            margin-top: 10px;
          `}
        >
          Minutes
        </p>
      </div>

      <div
        className={css`
          background-color: #333333;
          border-radius: 10px;
          color: white;
          padding: 22px 10px 15px 10px;
          width: 95px;
          text-align: center;
        `}
      >
        <div
          ref={refSecs}
          className={css`
            font-size: 2.5rem;
            line-height: 20px;
            font-weight: 700;
          `}
        ></div>
        <p
          className={css`
            font-size: 0.9rem;
            margin-top: 10px;
          `}
        >
          Seconds
        </p>
      </div>
    </div>
  )
}
