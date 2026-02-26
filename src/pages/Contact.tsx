import '../App.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact()
{
    return (
        <>
        <div className="main">
            <Navbar />
            <div className="calendly-inline-widget" data-url="https://calendly.com/ignasstephanie/30min" style={{ height: "500px", width: "100%" }}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            <Footer />
        </div>
        </>
    )
}

export default Contact