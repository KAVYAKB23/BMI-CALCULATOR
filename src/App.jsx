import './App.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [height, SetHeight] = useState(0);
  const [weight, SetWeight] = useState(0);
  const [bmi, setBmi] = useState(0);

  //for conditional rendering
  const [isHeight, setIsHeight] = useState(true);
  const [isWeight, setIsWeight] = useState(true);

  const validate = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    let name = e.target.name
    let value = e.target.value
    console.log(!!value.match(/^[0-9]*$/));


    if(!!value.match(/^[0-9]*$/)){
      if (name == 'height') {
        SetHeight(value);
        setIsHeight(true)
      } else {
        SetWeight(value);
        setIsWeight(true)
      }
    }
    else{
      if (name == 'height') {
        SetHeight(value);
        setIsHeight(false)
      } else {
        SetWeight(value);
        setIsWeight(false)
      }
    }
    }

    const handleReset=()=>{
      SetHeight(0)
      SetWeight(0)
      setIsHeight(true)
      setIsWeight(true)
    }
    const calculate=()=>{
      if (height > 0 && weight > 0) {
        const heightInMeters = height / 100;
        const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
        setBmi(bmiValue);
      }
    }
    
  // console.log('height', height);
  // console.log('weight', weight);
    

  return (
    <>
      <div className="container ">
        <div className="d-flex justify-content-center align-items-center">
          <div className='p-4' style={{ width: '500px' }}>
            <h2>BMI CALCULATOR</h2>
            <p>Calculate your body mass index Easily</p>
            <form className='mt-5'>
              <div className="mb-3">

                <TextField id="outlined-basic" value={height || ""} label="HEIGHT in m" variant="outlined" className='w-100' name='height' onChange={(e) => validate(e)} />
                {!isHeight &&
                  <p className='text-danger'>*Invalid Input</p>}
              </div>
              <div className="mb-3">
                <TextField id="outlined-basic" value={weight || ""} label="WEIGHT in kg" variant="outlined" className='w-100' name='weight' onChange={(e) => validate(e)} />
                {!isWeight &&
                  <p className='text-danger'>*Invalid Input</p>}
              </div>
              <div className='d-flex justify-content-between w-100 mt-4'>
                <Button variant="contained" color="secondary" style={{ width: '190px', height: '60px' }} disabled={isHeight && isWeight? false:true}  onClick={calculate} >Calculate</Button>
                <Button variant="contained" color="secondary" style={{ width: '190px', height: '60px' }} onClick={handleReset} >Reset</Button>
              </div>
              <div>
                <h4 className='bg-dark mt-3'>Your BMI score is: {bmi}</h4>
               
              </div>
              <div className='container'style={{color:'black'}}>
                <h6><u>BMI Status</u></h6>
                <p> UnderWeight : &lt;=18.5</p>
                <p> Normal : 18.5-24.9</p>
                <p>OverWeight : 25.0-39.9</p>
                <p>Obese : &gt;=40.0</p>
              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  )

}

export default App
