import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify';
import Background from '../components/Background/Background'
import notifyMe from '../utils/notifyMe';

export default function Home() {

  const [online, setOnline] = useState(true)

  useEffect(() => {
    if (online) {
      toast('You are online')
      notifyMe('You are online')
    } else {
      toast('You are offline')
      notifyMe('You are offline')
    }
  }, [online])

  useEffect(() => {
    navigator.serviceWorker.register('/sw.js', {
      scope: '/'
    }).then(() => { console.log('registered') })
  }, [])

  useEffect(() => {
    window.addEventListener('online', handeOnline)
    window.addEventListener('offline', handeOnline)
  })

  const handeOnline = () => {
    setOnline(navigator.onLine)
  }

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
