import React from 'react'
import Card from './Card'
import { useStateContext } from './StateContext'

const Event = () => {
  const { date, value, eventName, setEventName, hostName, setHostName, setLocation, photo, setPhoto } = useStateContext()
  console.log(value[0], 'annenvalue')
  console.log(Object.values(value)[0], 'xxnx')
  return (
    <>
      <img src={photo} alt="" />
      <h1>{eventName}</h1>
      <p>{hostName}</p>
      <div>
        <p>{ }</p>
        {/* <p>{value}</p>
        <p>{value}</p> */} asd
      </div>
      <div>
        <p></p>
      </div>


    </>
  )
}

export default Event