import { Link } from "react-router-dom";

const About = () => {

    return(
        <div>
            <h1>This is about section</h1>
            <Link to={'/Contact'}>Link to Contact</Link>
        </div>
    )
}
export default About