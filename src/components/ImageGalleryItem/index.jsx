export const GalleryItem = ({ elm }) => {
    return (
    <li className="gallery-item">
  <img src={elm.webformatURL} alt={elm.id} />
</li>
)

}