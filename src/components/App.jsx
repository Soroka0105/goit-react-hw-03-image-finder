import { Component } from "react";
import { SearchBar } from "./Searchbar";

export class App extends Component {


  state = {
    pictures: null,
    isLoading: false,
    error: null,
    searchParams: ''
  }
  onSubmit = evt => {
    evt.preventDefault()
    this.setState({ searchParams: evt.target[1].value })
    
  }
  componentDidUpdate(prevProps, prevState) {
  
    
    const API = 'key=39342845-b067dc268014f57340e74d554'
    const params = this.state.searchParams
    const resp = fetch(`https://pixabay.com/api/?${API}&q=${params}`)
    if (this.state.pictures === null) {
      resp
        .then(resp => resp.json())
        .then(pictures => this.setState({pictures}))
    }
console.log(this.state.pictures)

  }
  componentDidMount() {
    console.log(this.state.pictures)
  }


  render() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <SearchBar onSubmit={this.onSubmit}  />
      
    </div>
  );
}
};
