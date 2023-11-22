import css from "./ImageGalleryItem.module.css"
export const GalleryItem = ({ elm, onClick }) => {
    return (
      <li className={css.ImageItem} onClick={onClick}>
        <img className={css.image} src={elm.webformatURL} alt={elm.largeImageURL} id={elm.id} />
</li>
)

}