import '../App.css';
import Arrow from '/assets/icons/shared/arrow-up-right.svg';
import { useNavigate } from "react-router-dom";

function Home()
{
    const navigate = useNavigate();

    return (
        <>
        <div className="body">
            <div className="content">
                <h4 data-aos="fade-up">Hi, I’m <span className="gradient-text">Stephanie Lorraine Ignas</span></h4>
                <h1 className="fw-semibold" data-aos="flip-up" data-aos-delay="300">Web Developer and UI/UX & Graphic Designer</h1>
                <p className="paragraph-text" data-aos="fade-up" data-aos-delay="500">From concept to code, bridging creativity and logic to bring interfaces to life. Let’s connect!</p>
            </div>
            <button className="button main-button" onClick={() => navigate("/portfolio")} data-aos="zoom-in" data-aos-delay="600"> 
                    <p className="gradient-text font-semibold">See My Works</p>
                    <img src={Arrow} alt="Arrow icon" />
                </button>
        </div>
        </>
    )
}

export default Home