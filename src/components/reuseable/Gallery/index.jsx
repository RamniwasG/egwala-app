import ImageGallery from "react-image-gallery";
import landingPageOne from "./../../../assets/images/landing_page_1.gif";
import { useNavigate } from "react-router-dom";
const images = [
  {
    original: landingPageOne,
  }
];

const CustomGallery = () => {
    const navigate = useNavigate();

    const handleImageSlideClick = (e) => {
        navigate('/startpage')
    }

    return <ImageGallery items={images} onClick={handleImageSlideClick} />;
}

export default CustomGallery;