import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';
import cards from '../data/portfolio.json';

function Portfolio()
{
    return (
        <>
        <div className="main">
            <Navbar />
            <div className="content-container">
                <h2 className="heading" data-aos="fade-up" data-aos-anchor-placement="top-bottom">My <span className="gradient-text">Works</span></h2>
                <div className="cards-list" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="300">
                    {cards.map((card, index) => (
                        <Card key={index} {...card} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
        </>
    )
}

export default Portfolio