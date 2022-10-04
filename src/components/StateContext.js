import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const StateContext = ({children}) => {
  const [value, onChange] = useState(new Date());
  const [date, setDate] = useState("")
  const [eventName, setEventName] = useState('')
  const [hostName, setHostName] = useState('')
  const [location, setLocation] = useState('')
  const [photo, setPhoto] = useState()
  const [showDatePicker, setShowDatePicker] = useState(false)

  
  return(
    <Context.Provider
    value={{
      value,
      onChange,
      eventName,
      setEventName,
      hostName,
      setHostName,
      location,
      setLocation,
      photo,
      setPhoto,
      showDatePicker,
      setShowDatePicker
    
    }}
    >
      {children}
    </Context.Provider>
  )
} 

export const useStateContext = () => useContext(Context)