import css from "./button.module.css"
export const LoadMoreButton = ({ onClick }) => {
    return (
        <button className={css.Button } type="button" onClick={onClick}>Load more</button>
)
}