import { useEffect, useState } from 'react'
import './App.css'


function App() {






    const [isRunning,SetIsRunning]=useState(false);
    const [time,setTime]=useState(0);

    const hours = Math.floor(time / 3600000);
    const remainingHours = (time % 3600000);
    const minutes = Math.floor(remainingHours / 60000);
    const remainingMinutes = (remainingHours % 60000);
    const second = Math.floor(remainingMinutes / 1000);


      useEffect(()=>{
          let result;
          
          if (isRunning) {
            result = setInterval(() => {
              setTime((prev) => prev + 1000);
            }, 1000);
          }
      

        return ()=>{
          clearInterval(result);
        }
        

      },[isRunning])


  function startstopwatch(){
    console.log('isbdksf stosalkfds');
    console.log('is isRunning1',isRunning)
      SetIsRunning(!isRunning);      
      console.log('is isRunning2',isRunning)

  }

  function handlereset(){
    setTime(0);
    SetIsRunning(false);  

  }


  return (
    <>
     <div className='h-screen bg-black flex flex-col justify-center items-center'>
        <div className='text-white text-[15rem]'>
          {String(hours).padStart(2,0)+':'+String(minutes).padStart(2,0)+':'+String(second).padStart(2,0)}
        </div>
        <div >        
         <button onClick={startstopwatch} className='text-red-600 border border-white text-6xl p-4 rounded-lg '>{isRunning?('Stop'):('Start')}</button>
         <button onClick={handlereset} className='text-red-600 border border-white text-6xl p-4 rounded-lg ml-8 '>reset</button>
        </div>
        
     </div>
    </>
  )
}

export default App
