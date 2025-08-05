import { useEffect } from "react";
import { Link } from "react-router-dom";

const Products = () => {

    const data = [
        { title: 'title 1'}, 
        { title: 'title 2'}, 
        { title: 'title 3'}, 
        { title: 'title 4'}, 
    ]

    useEffect(() => {
        console.log(data,'data')
    },[data])
    return(
        <div>
            {
                data.map(item => <h6>{item.title}</h6>)
            }
            <a href="/list" style={{ display: 'block'}}>link</a>
            <Link to={'/list'}>Link </Link>
        </div>
    )
}
export default Products