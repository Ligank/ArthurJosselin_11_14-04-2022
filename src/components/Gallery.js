import '../styles/Gallery.css'
import locations from "./../data/locations.json"
import Card from "../components/Card"

function Gallery() {
    return <div className="gallery-box">
        {locations.map((location) => (
        <Card 
            key={`${location.title}-${location.id}`}
            title={location.title}
            link={'/location/' + location.id}
            cover={location.cover}>
        </Card>
        ))}
    </div>
}

export default Gallery