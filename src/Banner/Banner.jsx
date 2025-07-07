import React, { useState } from 'react'
import './Banner.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const flightImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=600&q=80',
];

const Banner = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Searching flights from ${from} to ${to} on ${date}`);
  };

  return (
    <div className='banner'>
      <div className='banner-content'>
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          loop={true}
          className='flight-swiper'
        >
          {flightImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img src={src} alt={`Flight option ${idx + 1}`} className='flight-image' />
            </SwiperSlide>
          ))}
        </Swiper>
        <h1 className='banner-title'>Find Your Next Adventure</h1>
        <p className='banner-description'>Book the best flights at unbeatable prices!</p>
        <form className='flight-form' onSubmit={handleSubmit}>
          <input type='text' placeholder='From' className='flight-input' value={from} onChange={e => setFrom(e.target.value)} />
          <input type='text' placeholder='To' className='flight-input' value={to} onChange={e => setTo(e.target.value)} />
          <input type='date' className='flight-input' value={date} onChange={e => setDate(e.target.value)} />
          <button type='submit' className='flight-search-btn'>Search Flights</button>
        </form>
      </div>
    </div>
  )
}

export default Banner