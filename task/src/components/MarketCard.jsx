
const MarketCard = (props) => {
    const { data } = props

    return (
        <div className="market-card">
            <img src={data.image} />
            <p>{data.description}</p>
            <a href={data.link}></a>
        </div>
    )
}
export default MarketCard