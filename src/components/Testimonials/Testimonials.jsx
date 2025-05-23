import './Testimonials.css'

function Testimonials(){
    return(
        <>
            <div className='bg-6'>
                <h1 className='te-title'>Our Wall Of Love</h1>
                <div className='te-alignment'>
                    <div className='te-card'>
                        <p className='te-card-text'>“Most incredible customer service ever! A gentleman served us called Cesar. The first day we came he lit up the room. The second day he remembered our names and read a poem he wrote to us being a married couple. It was so beautiful! Had goosebumps! Brussels, you have a gem of an employee here!”</p>
                        <p className='te-card-author'>-Thomas</p>
                    </div>
                    <div className='te-card'>
                        <p className='te-card-text'>Great experience....Its too testy....Too Good sitting area, a good place to sit and chit chat while having great coffee. Coffee aromas hitting your nose, n coffee flavour creamy, fresh made to perfection.</p>
                        <p className='te-card-author'>-Trevor</p>
                    </div>
                    <div className='te-card'>
                        <p className='te-card-text'>“This Brussels is always crowded and very popular with the locals.The service was good and the place was well-maintained. The staff were very friendly and engaging, and the drinks were great. We would definitely go back the next time that we are in the area.”</p>
                        <p className='te-card-author'>-Walter</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials