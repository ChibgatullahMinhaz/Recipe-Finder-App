import React from 'react'
import { Navber } from './Navber'
import { Home } from './Home'

export const Maincontent = () => {
  return (
    <div className='space-y-9' >
        <Navber></Navber>
        <Home></Home>
    </div>
  )
}
