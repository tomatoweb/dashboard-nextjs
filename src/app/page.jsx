'use client'

import React from 'react'
import Component from './Component'
import { SessionProvider } from 'next-auth/react'

const page = () => {
  return (
    <SessionProvider>
        <Component />
    </SessionProvider>
  )
}

export default page