import { GalleryItem } from "components/ImageGalleryItem"
import css from "./ImageGallery.module.css"






export const ImageGallery = ({ array, onClick }) => {
   
    return (
        <ul className={css.gallery}>
            {array.map((elm) => 
                <GalleryItem key={elm.id} elm={elm} onClick={onClick} />
            )}
        </ul>
    )
}

    
     

    
   
           
        
        
    