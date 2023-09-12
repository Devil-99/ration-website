import {React} from 'react';
import './Customer.css';
import {BsPersonCircle} from 'react-icons/bs';
import LocationComp from './LocationComp';
import RetailerComp from './RetailerComp';

function Customer() {

  return (
    <div className='cstbody'>
        <div className='cstleft'>
            <div className='order_details'>

                <LocationComp/>
                <RetailerComp/>

            </div>
        </div>
        <div className='cstright'>
            <div className='profile'>
                <div className='dp'><BsPersonCircle className='profilephoto'/></div>
                <h2 className='cstname'>Sambit Puitandi</h2>
                <h3 className='rationid'>WD1234</h3>
                <h3 className='adhaar'>40946713768</h3>
            </div>
            <div className='cart'> 
                <h2 className='food_items'>Allocated Items</h2>
                <div className='items'>
                    <ol className='list'>
                        <li className='item'>Rice - 5kg</li>
                        <li className='item'>Wheat - 3kg</li>
                        <li className='item'>Suger - 3kg</li>
                        <li className='item'>Salt - 2kg</li>
                        <li className='item'>Pulses - 1kg</li>
                        <li className='item'>Sanitizers - 2</li>
                        <li className='item'>Dolo 650 - 2</li>
                        <li className='item'>Montek LC - 10</li>
                        <li className='item'>O2 - 5</li>
                        <li className='item'>Allegra - 10</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Customer;