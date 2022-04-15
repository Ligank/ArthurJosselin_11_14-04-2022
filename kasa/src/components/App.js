import './../styles/App.css';
import Banner from "./Banner"
import ProposImage from "./ProposImage"
import Propos from "./Propos"
import Gallery from './Gallery';
import TitreAccueil from "./TitreAccueil"

function App() {
  return <div>
         
          <Banner />

          <div className="gallery">
          <TitreAccueil />

          <Gallery />
          </div>

          <div className="a_propos">
          <ProposImage />
          <Propos />
          </div>

        </div>
}

export default App