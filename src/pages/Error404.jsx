import { Link } from "react-router-dom";

function Error404(){
    return <>
        <h3>Page doesn't exists</h3>
        <Link to="/">Home</Link>
    </>
}

export default Error404;