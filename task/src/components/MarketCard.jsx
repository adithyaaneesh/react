const MarketingCard =(props) => {
    const {data} =props
    return(
        <div className="card">
            <img src={data.image} />
            <h3> {data.title} </h3>
            <a href={data.link}></a>
        </div>
    )
}
export default MarketingCard