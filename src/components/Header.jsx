import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header>
            <div id="about">
                <div className="header-content">
                    <h1>Hi, <br/>I am Victor</h1>
                    <p> want to build a website that is user-centric and provides a good user experience. </p>
                    <br/>
                    <br/>
                    <Link to="/work" className="nav-link">
                        <h3>Check out my works</h3>
                    </Link>
                </div>
            </div>
        </header>
    )
}
