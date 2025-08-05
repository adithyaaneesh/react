

const ManageCard = (props) => {

    const { data } = props

  return (
    <div className='card'>
        <img src={data.image}/>
        <h4>{data.title}</h4>
        <p>{data.description}</p>
    </div>
  )
}

export default ManageCard
