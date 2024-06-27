import { Link } from "react-router-dom"

function Message() {
    return (
        <div>
            <h2>Message Sent</h2>
            <br/>
            <p>Your message has been sent and will be reviewed as soon as possible, please click the Home button to return to Home page</p>
            <br/>
            <Link className="nav-link" to="/"><button type="button" className="btn btn-secondary">Home</button></Link>

        </div>
    )
}

export default Message