import { Component } from "react"
import css from "./index.module.css"
export class SearchBar extends Component {

  state = {
    search: ''
  }

  handleChange = evt => {
  this.setState({search: evt.currentTarget.value.toLowerCase()})
  }
  handleSubmit = evt => {
    evt.preventDefault()
    if (this.state.search.trim() === "") {
      alert('Please fill out the search form')
      return
    }
    this.props.onSubmit(this.state.search)
    this.setState({search: ''})
  }
  


  render() {
      return (
        <header className={css.searchbar}>
  <form onSubmit={this.handleSubmit} className="form">
    <button type="submit" className="button">
      <span className="button-label">Search</span>
                </button>
                

    <input
      className="input"
              type="text"    
              onChange={this.handleChange}
              value={this.state.search}
      placeholder="Search images and photos"
    />
  </form>
</header>
)
    }
    
}