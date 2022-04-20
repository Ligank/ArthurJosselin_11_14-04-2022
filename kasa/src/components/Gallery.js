import '../styles/Gallery.css'
import locations from "./../data/locations.json"


function Gallery() {
    return <div className="gallery-box">
        {locations.map((location) => (
        <a key={`${location.title}-${location.id}`} className='location-box' href={'/location/${location.id}'}>
            <figure className='box_img_location'>
                <img src={location.cover} alt = "cover_location" className='location_picture'></img>
            </figure>
			<div className ='text_box'>
				<p className='title-location'>{location.title}</p>
			</div>
        </a>
        ))}
        
        
    </div>
}

export default Gallery