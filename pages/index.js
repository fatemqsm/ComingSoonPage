import React, { useEffect, useState, useRef } from 'react'
import Head from 'next/head'
import Background from './containers/Background/Background'

export default function Home() {
  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Background />
    </>
  )
}
