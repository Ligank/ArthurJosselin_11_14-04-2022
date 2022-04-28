import './../styles/Home.css';
import Banner from "../components/Banner"
import Gallery from '../components/Gallery';
import TitreAccueil from "../components/TitreAccueil"
import Footer from '../components/Footer';

function Home() {
  return <div>
         
          <Banner />

          <div className="gallery">
            <TitreAccueil />

            <Gallery />
          </div>
          <footer className='footer--pin'>
            <Footer />
          </footer>

        </div>
}

export default Home