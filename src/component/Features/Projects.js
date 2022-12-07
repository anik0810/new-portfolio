import React from 'react'
import './project.css';
import adve from '../pic/adve.png'
import saathi from '../pic/saathi.png'
import pdf from '../pic/pdf.png'
export default function Projects() {
  return (
    <>
      <div className='projects' id='projects'>
        <h1 data-aos="fade-up">Some of My Recent <span>Projects</span></h1>
        <div data-aos="fade-up" className='works'>
          
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" >
                  <div className='project'>
                    <div className='heads'><img src={adve} alt='project' /></div>
                    <div className='body'>
                      <p1><span>E</span>commerce <span>W</span>ebsite</p1>
                    </div>
                  </div>
                </div>

                <div class="back">
                  <p><span>Adventurous Essence</span><br/> I use React Js, Express sever,Node js,Sqlite3 and Razorpay API to make this website.</p>
                  <button className='live' onClick={() => { window.open('https://adventurous-essence.in/') }}>See Live</button>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" >
                  <div className='project'>
                    <div className='heads'><img src="https://raw.githubusercontent.com/TakeTalk/bot/master/Screenshots/diagram.png" alt='project' /></div>
                    <div className='body'>
                      <p1><span>W</span>hatsApp <span>C</span>hatbot </p1>
                    </div>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p><span>Saathi</span><br/> This NLP bot can find hotels,police station,hospitals and all with their details in any geo location.Here we used Google Map Api,Twilio Sandbox.</p>
                    <button className='live' onClick={() => { window.open('https://github.com/anik0810/Saathi-react') }}>Source Code</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
              <div class="container">
                <div class="front" >
                  <div className='project'>
                    <div className='heads'><img src={pdf} alt='project' /></div>
                    <div className='body'>
                      <p1><span>P</span>DF <span>C</span>onverter</p1>
                    </div>
                  </div>
                </div>
                <div class="back">
                  <div class="inner">
                    <p><span>Just Click</span><br/>Users can convert their documents and merge pdf files with just a single click securely. Files will be deleted from server after downloading the converted file. </p>
                    <button className='live' onClick={() => { window.open('https://github.com/anik0810/Pdf-Converter') }}>Source Code</button>
                  </div>
                </div>
              </div>
            </div>


          
        </div>
      </div>
    </>
  )
}
