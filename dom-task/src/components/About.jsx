import { Link } from "react-router-dom"
const About = () => {
    return(
    <div>
        <h1>This is About</h1>
        <Link to={'/contact'}>Link to contact</Link>
    </div>
    )
}
export default About
