import React from 'react'
import Navbar from './Navbar'

const Page = (props) => {
  return (
    <div>
      <Navbar/>
      {props.child}
    </div>
  )
}

export default Page
