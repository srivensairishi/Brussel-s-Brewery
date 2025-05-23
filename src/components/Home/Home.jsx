import './Home.css'
import {Link} from 'react-router'

function Home(){
    return (
        <>
          <div className='bg'>
            
            <div className='bb'>
              <div>
                <h1 className='f-heading'>Brewed to Perfection,<br></br> Served With Love</h1>
                <p className='f-para'>Indulge in handcrafted coffee, freshly baked pastries, and a welcoming atmosphere<br></br>designed to inspire and unwind.</p>
                <Link to="/menu"><button className='f-button1'>Order Online</button></Link>
                <button className='f-button2'>Find a location</button>
              </div>
              <div>
                <img className='image' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1747316943/f9f77584-f1f6-4fca-9adb-9f957b192bf6_ow7r7a.png"  />
              </div>  
            </div>  

          </div>
        </>
        )
}
export default Home