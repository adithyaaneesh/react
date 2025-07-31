import '../styles/Manage.css'

const Management = () => {

    return (
       <section>
          <div className="container">
            <div className='manage'>
                <h2>Manage your entire community in a single system</h2>
                <p>Who is Nextcent suitable for?</p>
            </div>
            <div className='card-container'>
               <div className='card'>
                <img src='/images/manage1.svg'/>
                <h4>Membership Organisations</h4>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
               </div>
               <div className='card'>
                <img src='/images/manage2.svg'/>
                <h4>National Associations</h4>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
               </div>
               <div className='card'>
                <img src='/images/manage3.svg'/>
                <h4>Clubs And Groups</h4>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
               </div>
            </div>
          </div>
       </section>
    );
}
export default Management