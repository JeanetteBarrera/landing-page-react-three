import { useState, useEffect } from 'react'
import { init } from './utils/initDroneLayer'
import './App.css'

function App() {
  
  useEffect(() => {

    init()
    
  }, [])

  return (
    <div className="App">

      <div className='hero'>
        <h1 className='title'>BEE Drones Bots</h1>
        <p className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In quas obcaecati perspiciatis voluptate ratione a veritatis eum rerum tempora repudiandae. Fugit inventore molestias eveniet? Modi, animi deleniti. Non, quos! Saepe molestias voluptates aperiam tenetur, facilis quas fugiat nesciunt quibusdam temporibus quaerat distinctio eos soluta totam amet similique, culpa expedita suscipit mollitia perspiciatis voluptatibus alias vitae? Provident quos obcaecati reiciendis officiis quaerat ab esse accusantium, quisquam rem deleniti tempore.
        </p>
        <div className='container-buttons'>
          <button className='btn btn-orange'>English</button>
          <button className='btn btn-transparent'>Russian</button>
        </div>
      </div>
    </div>
  )
}

export default App
