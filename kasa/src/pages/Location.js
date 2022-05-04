import '../styles/Location.css'
import locations from "./../data/locations.json"
import Banner from "../components/Banner"
import Footer from '../components/Footer';
import Tags from '../components/Tags';
import Rating from '../components/Rating';
import Collapse from '../components/Collapse';
import GalleryImg from '../components/GalleryImg';


function Location() {
    let id = window.location.pathname.replace('/location/', '')
    const location = !id ? locations : locations.filter(locations => locations.id === id);
    const rating = location[0].rating;
    window.onload = function() {
        if(!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }
    return <div className="location">
        <Banner />
        <div className='location_box'>
        <GalleryImg />
            <div className='profil_location'> 
                <div className='informations_principales_location'>
                    <div className='title_name_tags'>
                        <div className='title_location'>
                            <h2 className='font_primary title'>{location[0].title}</h2>
                            <p className='font_primary place'>{location[0].location}</p>
                        </div>
                        <div className='tags'>
                            {location[0].tags.map((tag) => (
                            <Tags 
                                key={`${location[0].id}-${tag}`}
                                tag={tag}>
                            </Tags>
                            ))}
                        </div>
                    </div>
                    <div className='rating_name'>
                        <div className='name_profil'>
                            <div className='name_box'>
                                <p className='font_primary name'>{location[0].host.name.replace(/[\W]*\S+[\W]*$/, '')}</p>
                                <p className='font_primary name'>{location[0].host.name.split(' ').slice(1).join(' ')}</p>
                            </div>
                            <figure className='figure_profil'>
                                <img src={location[0].host.picture} alt='Photo_profil' className='img_profil'></img>
                            </figure>
                        </div>
                        <div className='rating'>
                            <Rating 
                                key={`${location[0].id}-${rating}`}
                                number={location[0].rating}>
                            </Rating>
                        </div>
                    </div>
                </div>

                <div className='descriptions_equipements_location'>
                    <div className='description'>
                        <Collapse 
                            key={`${'description'}`}
                            title='Description'
                            text={location[0].description}>
                        </Collapse>
                    </div>
                    <div className='equipement'>
                         <Collapse 
                            key={`${'equipement'}`}
                            title='Equipement'
                            text={location[0].equipments.join("\n")}>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default Location