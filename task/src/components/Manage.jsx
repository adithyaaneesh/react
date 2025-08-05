import { managementData } from '../data/management';
import '../styles/Manage.css'
import ManageCard from './ManageCard';

const Management = () => {

    return (
       <section>
          <div className="container">
            <div className='manage'>
                <h2>Manage your entire community in a single system</h2>
                <p>Who is Nextcent suitable for?</p>
            </div>
            <div className='card-container'>
              {
               managementData.map((item, idx) => <ManageCard data={item} key={idx}/> )
              }
            </div>
          </div>
       </section>
    );
}
export default Management