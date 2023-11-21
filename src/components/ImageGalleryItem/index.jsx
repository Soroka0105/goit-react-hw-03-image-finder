import css from "./ImageGalleryItem.module.css"
export const GalleryItem = ({ elm }) => {
    return (
      <li className={css.ImageItem}>
        <img className={css.image} src={elm.webformatURL} alt={elm.id} />
</li>
)

}