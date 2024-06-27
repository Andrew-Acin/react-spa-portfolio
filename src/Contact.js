import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <p>Leave me you email and a message and i will get back to you ASAP</p>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <Link className="nav-link" to="/Message"><button type="button" className="btn btn-secondary">Submit</button></Link>
        </div>
    )
}


export default Contact