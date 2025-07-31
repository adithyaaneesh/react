import { useEffect } from 'react'
import './Card.css'

const Card = (props) => {

const { data } = props

  return (
    <div className='card'>
        <p>{data.name}</p>
        <p>{data.course}</p>
    </div>
  )
}

export default Card
