import './Blog.css'

function Blog(){
    return(
        <>
            <div className='bg-2' id="secondSection">
                <div className='alignment'>
                    <div>
                        <img className='image-21' src = "https://media.istockphoto.com/id/1007197826/photo/people-drinking-coffee-high-angle-view.jpg?s=612x612&w=0&k=20&c=iqtHCyWTZi7rKN3n8snxi510xwXCbwmGghKYpbUcKbo="  />
                    </div>
                    <div>
                        <h1 className='s-heading'>Handmade Just For You</h1>
                        <p className='s-para'>Our organically grown coffee beans are roasted over an open flame in<br></br>a one-of-a-kind, brick roaster.There's nothing quite like a cup of Brussels<br></br>Brewery coffee.</p>
                        <button className='s-button'>View our menu</button>
                    </div>
                </div> 
                <div className='alignment'>
                    <div>
                        <h1 className='s-heading'>Made in Brussels</h1>
                        <p className='s-para'>Welcome to Brussels Brewery, where the charm of Brussels meets the<br></br>aroma of freshly brewed coffee. Our café is a cozy haven where friends<br></br>gather, ideas spark, and every sip tells a story.</p>
                        <p className='s-para'>Come and experience the soul of Brussels in every cup and bite—we<br></br>can’t wait to welcome you!</p>
                        <button className='s-button'>View our menu</button>
                    </div>
                    <div>
                        <img className='image-2' src = "https://img.freepik.com/free-photo/process-coffee-making-using-brand-new-coffee-machine-cafe-by-expirienced-barista_613910-17363.jpg"  />
                    </div>
                </div>    
            </div>
        </>
    )
}

export default Blog