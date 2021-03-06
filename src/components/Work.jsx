import Navbar from './Navbar';
import Footer from './Footer';

export default function Work() {
    return (
        <>
            <Navbar />
            <div id="project-section">
                <div id="project-grid">
                    <a
                        href="https://genjvk.github.io/"
                        target="_blank"
                        rel="noreferrer"
                        className="project-tile"
                    >
                        <img 
                            className="project-image"
                            src="https://upload.cc/i1/2021/07/29/lRsmT6.png"
                            alt="project"
                        />
                        <h2 className="project-title">To-Do List</h2>
                    </a>
                    <a 
                        href="https://codepen.io/vic-torylf/full/ZELJyvP"
                        target="_blank"
                        rel="noreferrer"
                        className="project-tile"
                    >
                        <img             
                            className="project-image"
                            src="https://assets.codepen.io/6051557/internal/screenshots/pens/ZELJyvP.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1619520572&width=960"
                            alt="project"
                        />
                        <h2 className="project-title">Survey Form</h2>
                    </a>
                    <a
                        href="https://codepen.io/vic-torylf/full/bGgMJxw"
                        target="_blank"
                        rel="noreferrer"
                        className="project-tile"
                    >
                        <img
                        className="project-image"
                        src="https://assets.codepen.io/6051557/internal/screenshots/pens/bGgMJxw.default.png?fit=cover&format=auto&ha=false&height=540&quality=75&v=2&version=1619520593&width=960"
                        alt="project"
                        />
                        <h2 className="project-title">
                        Technical Documentation Page
                        </h2>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    )
}
