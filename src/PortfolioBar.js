import { Link } from 'react-router-dom';

function PortfolioBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-secondary">
            <div className="container-fluid">
                <a className="navbar-brand disabled" aria-disabled="true">React SPA Project</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        <Link className="nav-link" to="./About">About</Link>
                        <Link className="nav-link" to="./projects">Projects</Link>
                        {/* <Link className="nav-link" to="/skills">Skills</Link> */}
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default PortfolioBar;