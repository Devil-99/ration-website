import {React,useState} from 'react';
import './RetailerComp.css';

function LocationComp() {
    
    const [retailer, setRetailer] = useState("Select Your Preferred Location");

    function myFunction() {
        document.getElementById("myDropdown1").classList.toggle("show1");
    }
    function filterFunction() {
        var input, filter, div, a, i, txtValue;
        input = document.getElementById("myInput1");
        filter = input.value.toUpperCase();
        div = document.getElementById("myDropdown1");
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
        setRetailer(value);
        console.log(event.target.innerText);
    }

  return (
    <div className='dropdown1'>
        <button onClick={myFunction} className="dropbtn1" >{retailer}</button>
        <div id="myDropdown1" className="dropdown-content1">
            <input type="text" placeholder="Search.." id="myInput1" onKeyUp={filterFunction}/>
            <div className='retailers'>
                <h3 onClick={(e)=>submitHandle(e)}>Sambit</h3>
                <h3 onClick={(e)=>submitHandle(e)}>Souvik</h3>
                <h3 onClick={(e)=>submitHandle(e)}>Nilesh</h3>
                <h3 onClick={(e)=>submitHandle(e)}>Pudi</h3>
                <h3 onClick={(e)=>submitHandle(e)}>Rahul</h3>
            </div>
        </div>
    </div>
  )
}

export default LocationComp