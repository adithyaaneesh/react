import { MarketingData } from '../data/marketing';
import '../styles/Marketing.css';
import MarketingCard from './MarketCard';
const Marketing = () => {
    return(
        <section className='marketing-section'>
            <div className='marketing-content'>
                <h2>Caring is the new marketing</h2>
                <p className="subheading">
                    The Nexcent blog is the best place to read about the latest membership insights,
                    trends and more. See who's joining the community, read about how our community
                    are increasing their membership income and lots more.
                </p>
                <div className="blog-cards">
                    {
                        MarketingData.map((item,idx) => <MarketingCard data={item} key={idx}/>)
                    }
                </div>
            </div>
        </section>
    );
};
export default Marketing;