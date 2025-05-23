import './Menu.css'


import { useState } from 'react'
function Menu(){
    const [count , setCount] = useState(0)
    function increment(){
        setCount(prevCount => prevCount+1)
    }
    function decrement(){
        setCount(prevCount => prevCount-1)
    }
    
    return(
        <>
            <div className='bg-4'>
                <h1 className='fo-title'>Get Your Coffee</h1>
                <div className='fo-align'>
                    <div className='fo-card'> 
                        <div>
                            <img className='fo-image' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1747373780/Cold_Coffee_brnvvx.jpg"  />
                        </div>
                        <div>
                            <h3 className='fo-heading'>Cold Coffee</h3>    
                            <p className='fo-para'>Savour our premium coffee made with top 3% Arabica beans in ...</p>
                            <p className='fo-price'>Price : $20</p>
                            <button onClick={increment} className='fo-button'>Add Item</button>
                            <button onClick={decrement} className='fo-button2'>Remove Item</button>
                        </div>    
                    </div>
                    <div className='fo-card'> 
                        <div>
                            <img className='fo-image' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1747415079/download_zvcdtt.jpg"  />
                        </div>
                        <div>
                            <h3 className='fo-heading'>Java Chip Frappuccino</h3>    
                            <p className='fo-para'>Mocha sauce and Frappuccino® chips blended with with Frappu...</p>
                            <p className='fo-price'>Price : $15</p>
                            <button onClick={increment} className='fo-button'>Add Item</button>
                            <button onClick={decrement} className='fo-button2'>Remove Item</button>
                        </div>    
                    </div>
                    <div className='fo-card'> 
                        <div>
                            <img className='fo-image' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1747415149/590177739339543_mqj5uy.jpg"  />
                        </div>
                        <div>
                            <h3 className='fo-heading'>Caffe Americano</h3>    
                            <p className='fo-para'>Rich in flavour, full-bodied espresso with hot water in true...</p>
                            <p className='fo-price'>Price : $10</p>
                            <button onClick={increment} className='fo-button'>Add Item</button>
                            <button onClick={decrement} className='fo-button2'>Remove Item</button>
                        </div>    
                    </div>

                </div>
                <div className='fo-align'>
                    <div className='fo-card'> 
                        <div>
                            <img className='fo-image' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1747415210/blueberry-muffins_ld4f9s.jpg"  />
                        </div>
                        <div>
                            <h3 className='fo-heading'>Blueberry Muffin</h3>    
                            <p className='fo-para'>Buttery vanilla cake with berries dusted with granulated sug...</p>
                            <p className='fo-price'>Price : $5</p>
                            <button onClick={increment} className='fo-button'>Add Item</button>
                            <button onClick={decrement} className='fo-button2'>Remove Item</button>
                        </div>    
                    </div>
                    <div className='fo-card'> 
                        <div>
                            <img className='fo-image' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1747415273/Belgium-Chocolate-Latte_bdgc9v.jpg"  />
                        </div>
                        <div>
                            <h3 className='fo-heading'>Belgium Chocolate Latte</h3>    
                            <p className='fo-para'>Espresso with decadent Belgian chocolate sauce, mocha sauce ...</p>
                            <p className='fo-price'>Price : $30</p>
                            <button onClick={increment} className='fo-button'>Add Item</button>
                            <button onClick={decrement} className='fo-button2'>Remove Item</button>
                        </div>    
                    </div>
                    <div className='fo-card'> 
                        <div>
                            <img className='fo-image' src = "https://res.cloudinary.com/dcisrjaxp/image/upload/v1747626451/228b72a03cb98c19063193cf0188a6a3_akoc8f.jpg"  />
                        </div>
                        <div>
                            <h3 className='fo-heading'>Caffè Mocha</h3>    
                            <p className='fo-para'>We combine our rich in flavour, full-bodied espresso with bi...</p>
                            <p className='fo-price'>Price : $12</p>
                            <button onClick={increment} className='fo-button'>Add Item</button>
                            <button onClick={decrement} className='fo-button2'>Remove Item</button>
                        </div>    
                    </div>

                </div>    
                <div className='fo-cart-alignment'>
                    <button className='fo-cart-button'>Cart Items : {count}</button>
                </div>    
                  
            </div>
        </>
    )
}

export default Menu