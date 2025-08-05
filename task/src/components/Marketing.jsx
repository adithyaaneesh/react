import { marketData } from '../data/Marketing'
import '../styles/Marketing.css'
import MarketCard from './MarketCard'


const Marketing = () => {

    return(
        <section>
          <div className="container">
            <div className='market '>
                <h2>Caring is the new marketing</h2>
                <p>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
            </div>
            <div className='market-container'>
              {
              marketData.map((item,idx) => <MarketCard data={item} key={idx} /> )
              }
            </div>
          </div>
       </section>
    )

}
export default Marketing