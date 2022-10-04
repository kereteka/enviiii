import React, { useContext, useState } from 'react'
import Calendar from 'react-calendar';
import { Link } from 'react-router-dom';
import { useStateContext } from './StateContext';

// Event name, Host name, Start and End time/date, Location and Event photo



const Create = () => {
  const { value, onChange, date, setDate, eventName, photo, setEventName, setHostName, setLocation, setPhoto } = useStateContext()
  //const [value, onChange] = useState(new Date());
  //console.log(value[0], 'valueee')
  // const [eventName, setEventName] = useState('')
  // const [hostName, setHostName] = useState('')
  // const [location, setLocation] = useState('')
  // const [photo, setPhoto] = useState()
  const [showDatePicker, setShowDatePicker] = useState(false)

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">
              Logo
            </h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Event Name
              </label>
              <div className="flex flex-col items-start">
                <input

                  type="text"
                  name="eventName"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => setEventName(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Host Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="hostName"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => setHostName(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-700 undefined "
                  onClick={() => setShowDatePicker(!showDatePicker)}
                >
                  Please select range
                </label>
                <div className={showDatePicker === true ? '  ' : ' hidden ' + ' rounded '}>
                  <Calendar className=" rounded-lg  border-2" selectRange={true} onChange={onChange} value={value} onClick={(value) => setDate(value)} />
                </div>
                {date}
              </div>
            </div>
            <div className='mt-8'>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Location
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="location"
                  className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password_confirmation"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Image
              </label>
              <div className="flex flex-col items-start">
                <input
                  placeholder='sss'
                  type="file"
                  name="password_confirmation"
                  className=" w-full mt-1 border-gray-300 rounded-md shadow-sm opacity-0  focus:border-indigo-300 z-50 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  onChange={(e) => setPhoto(URL.createObjectURL(e.target.files[0]))}
                />
                <div className="before:content-['uploadImage'] before:w-24 before:h-12 absolute mt-1 z-10 "></div>
                {/* <img src={photo} /> */}
              </div>
            </div>
          </form>
        </div>
        <Link to="/event">
          <div class="flex space-x-2 justify-center mt-2">
            <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
          </div>
        </Link>
      </div >
    </div >
  );


}

export default Create