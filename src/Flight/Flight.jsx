import React from 'react'
import './Flight.css'
import { MdPublic } from 'react-icons/md'



const Flight = () => {
  return (
    <div className='flight'>
      <div className='flight-content'>
        <h1 className='first-heading'>Your Journey. Our Passion.</h1>
        <div className='flight-info'>
        
        <p className='description'>
          Flying on an airplane is the fastest and most efficient way to travel long distances, allowing you to reach faraway places in just hours. It offers comfort, safety, and convenience, making it ideal for both business and leisure trips.
        </p>
        </div>

            <div className='flight-infosec'>
              <p className='sec-description'>
                Fly with the best airline for unmatched comfort, exceptional service, and reliable safety. Experience seamless travel, on-time departures, and a global network that gets you where you want to go — stress-free and in style. Your journey deserves the very best.
              </p>
          
        </div>

           <div className='flight-infothr'>
          
            <p className='thir-description'>
                Fly with the affordable and comfortable choice — where great prices meet relaxing journeys. Enjoy smooth flights, cozy seating, and friendly service without breaking the bank. Travel smart, travel comfortably.
            </p>

          
        </div>
        <div className='flight-img'>

        </div>

        


           <div className='secondflight-img'>
          
        </div>
        
      </div>
    </div>
  )
}

export default Flight