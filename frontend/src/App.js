import './App.css';

import Main from './components/Main/Main';
import About from './components/About/About';
import Services from './components/Services/Services';
import Portofolio from './components/Portofolio/Portofolio';
import Pricing from './components/Pricing/Pricing';
import Footer from './components/Contact/Contact';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
    return (
        <div className="open-sans">
            <Main/>
            <About/>
            <Services/>
            <Portofolio/>
            <Pricing/>
            <Footer/>
        </div>
    )
}