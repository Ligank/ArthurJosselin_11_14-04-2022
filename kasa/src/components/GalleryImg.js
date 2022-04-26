import '../styles/GalleryImg.css'
import locations from "./../data/locations.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

let id = window.location.pathname.replace('/location/', '')
const location = !id ? locations : locations.filter(locations => locations.id === id);
console.log(id)
let galleryImages = [];
if (id !== "/") {
    for (let i = 0; i < location[0].pictures.length; ++i) {
        galleryImages.push(location[0].pictures[i]);
      }
}
function GalleryImg() {

    function PreviousImg() {
        let getFullImgUrl = document.querySelectorAll(".img_gallery")[0].src;
        let getLatestOpenedImg = galleryImages.indexOf(getFullImgUrl);
        if (getLatestOpenedImg < 1) {
            getLatestOpenedImg = galleryImages.length
        }
        let newImgSrc = galleryImages[getLatestOpenedImg - 1]
        document.querySelectorAll(".img_gallery")[0].src=newImgSrc;
    }

    function NextImg() {
        let getFullImgUrl = document.querySelectorAll(".img_gallery")[0].src;
        let getLatestOpenedImg = galleryImages.indexOf(getFullImgUrl);
        if (getLatestOpenedImg === galleryImages.length - 1) {
            getLatestOpenedImg = -1;
            
        }
        let newImgSrc = galleryImages[getLatestOpenedImg + 1]
        document.querySelectorAll(".img_gallery")[0].src=newImgSrc;
    }


    return (
        <div className='gallery_box'>
            <div className='arrow_box'>
                <FontAwesomeIcon icon={faAngleLeft} className='arrow_gallery' onClick={PreviousImg}/>
                <FontAwesomeIcon icon={faAngleRight} className='arrow_gallery' onClick={NextImg}/>
            </div>
            <figure className='figure_gallery'>
                <img src={galleryImages[2]} alt='location[0].pictures.name' className='img_gallery'></img>
            </figure>
        </div>
    )
}

export default GalleryImg
