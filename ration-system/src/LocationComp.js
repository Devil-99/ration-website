import {React,useState} from 'react';
import './LocationComp.css';

function LocationComp() {
    
    const [location, setLocation] = useState("Select Your Preferred Location");

    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    function filterFunction() {
        var input, filter, div, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown");
        a = div.getElementsByTagName("h3");
        for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
            } else {
            a[i].style.display = "none";
            }
        }
    }

    function submitHandle(event){
        var value = event.target.innerText;
        setLocation(value);
        console.log(event.target.innerText);
    }

  return (
    <div className='dropdown'>
        <button onClick={myFunction} className="dropbtn" >{location}</button>
        <div id="myDropdown" className="dropdown-content">
            <input type="text" placeholder="Search.." id="myInput" onKeyUp={filterFunction}/>
            <div className='locations'>
                <h3 onClick={(e)=>submitHandle(e)}>Bankura</h3>
                <h3 onClick={(e)=>submitHandle(e)}>Kolkata</h3>
                <h3 onClick={(e)=>submitHandle(e)}>Siliguri</h3>
                <h3 onClick={(e)=>submitHandle(e)}>Durgapur</h3>
                <h3 onClick={(e)=>submitHandle(e)}>Asansol</h3>
            </div>
        </div>
    </div>
  )
}

export default LocationComp