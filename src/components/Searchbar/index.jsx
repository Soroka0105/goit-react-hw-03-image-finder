import css from "./index.module.css"
export const SearchBar = ({ onSubmit }) => {
    
    return (
        <header className={css.searchbar}>
  <form onSubmit={onSubmit} className="form">
    <button type="submit" className="button">
      <span className="button-label">Search</span>
                </button>
                

    <input
      className="input"
                    type="text"
    //   autocomplete="off"
    //   autofocus
      placeholder="Search images and photos"
    />
  </form>
</header>
)
}