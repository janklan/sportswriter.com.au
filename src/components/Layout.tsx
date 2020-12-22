import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
type Props = {
  children: React.ReactNode;
};
export default function Layout ({ children }: Props) {
  return (
    <div className="root">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="apple-touch-icon" href="/public/images/tennis-ball.svg" />
        <link rel="mask-icon" href="/public/images/tennis-ball.svg" color="#000000" />
        <link rel="icon" href="/public/images/tennis-ball.svg"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      {children}
      <Footer></Footer>
    </div>
  )
}
