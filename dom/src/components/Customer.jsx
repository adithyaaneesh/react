import '../styles/Customer.css'

const Customer = () => {

    return (
        <section>
            <div className='container'>
                <div className='custom-content'>
                    <div className='customer-logo'>
                        <img src='/images/customer.png'/>
                    </div>
                    <div className='custom-text'>
                        <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        <h6>Tim Smith</h6>
                        <p>British Dragon Boat Racing Association</p>
                        <div className='custom-logo'>
                            <img src='/images/Logo1.png' />
                            <img src='/images/Logo2.png' />
                            <img src='/images/Logo3.png' />
                            <img src='/images/Logo4.png' />
                            <img src='/images/Logo5.png' />
                            <img src='/images/Logo1.png' />
                            <a href='#'>Meet all customers</a>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
export default Customer