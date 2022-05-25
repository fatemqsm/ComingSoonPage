import React, { useEffect, useState, useRef } from 'react'
import { css } from '@emotion/css'
import CountDown from '../CountDown/CountDown'

export default function Background() {
  const BREACKPOINT = [576, 768, 992, 1200]
  const mq = BREACKPOINT.map((bp) => `@media (max-width: ${bp}px)`)

  return (
    <div
      className={css`
        position: relative;
      `}
    >
      <div
        className={css`
          background-image: url('images/bg01.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          position: absolute;
          width: 100%;
          height: 100vh;
          z-index: -1;
          text-align: center;
          background-position: 85% 15%;
          ${mq[1]} {
            min-height: 400px;
            background-position: 25% 75%;
          }
        `}
      ></div>
      <div
        className={css`
          top: 60px;
          position: absolute;
          width: 100%;
          margin-bottom: 60px;
          ${mq[1]} {
            top: 20px;
          }
          ${mq[0]} {
            margin-bottom: 20px;
          }
        `}
      >
        <div
          className={css`
            width: 67%;
            min-height: 350px;
            border-radius: 15px;
            background-color: rgba(255, 255, 255, 0.7);
            margin: 0 auto;
            padding: 70px 40px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            ${mq[1]} {
              width: 95%;
            }
            ${mq[0]} {
              padding: 20px 40px;
            }
          `}
        >
          <h1
            className={css`
              font-size: 1.5rem;
              text-align: center;
              color: #999999;
            `}
          >
            my website is under construction
          </h1>

          <CountDown />
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              gap: 10px;
              margin-top: 80px;
              ${mq[1]} {
                margin: 40px 0;
              }
              ${mq[0]} {
                flex-direction: column;
                margin: 20px 0;
              }
            `}
          >
            <input
              placeholder="Your Email"
              className={css`
                color: #846add;
                line-height: 1.4;
                height: 100%;
                padding: 0 20px 0 20px;
                background-color: #e6e6e6;
                height: 40px;
                border-radius: 5px;
                outline: none;
                border: none;
                color: #999999;
                '&:focus' {
                  border: 0.5px solid;
                  border-color: #846add;
                }
              `}
            />
            <button
              className={css`
                padding: 0 20px;
                background-color: #846add;
                border-radius: 5px;
                color: white;
                max-width: 120px;
                height: 40px;
                border: none;
                transition: all 0.4s;
                &:hover {
                  background-color: #333333;
                }
              `}
            >
              Get Notified
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
