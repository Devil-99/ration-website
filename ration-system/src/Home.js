import React from 'react';
import './Home.css';
import {BiSolidCalendar} from 'react-icons/bi';
import {FaFingerprint, FaMobileAlt} from 'react-icons/fa';
import {GiGrain} from 'react-icons/gi';
import {GrMapLocation} from 'react-icons/gr';

function Home() {
  return (
    <div className='homebody'>
      <div className='cards'>
        <div className='card'>
          <h3 className='top'>Total ration card as on date</h3>
          <div className='icon'> <BiSolidCalendar/> </div>
          <h2 className='bot'>12345</h2>
        </div>
        <div className='card'>
          <h3 className='top'>Total aadhaar linked ration card</h3>
          <div className='icon'> <FaFingerprint/> </div>
          <h2 className='bot'>12345</h2>
        </div>
        <div className='card'>
          <h3 className='top'>Mobile linked family count</h3>
          <div className='icon'> <FaMobileAlt/> </div>
          <h2 className='bot'>12345</h2>
        </div>
        <div className='card'>
          <h3 className='top'>Beneficiaries lifted ration this month</h3>
          <div className='icon'> <GiGrain/> </div>
          <h2 className='bot'>12345</h2>
        </div>
        <div className='card'>
          <h3 className='top'>Total ration shops</h3>
          <div className='icon'> <GrMapLocation/> </div>
          <h2 className='bot'>12345</h2>
        </div>
      </div>
    </div>
  )
}

export default Home