import { Component } from "react";
import { SearchBar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
// import axios from "axios";

export class App extends Component {

  state = {
    // pictures: null,
    isLoading: false,
    error: null,
    searchParams: '',
    page: 1
  }
  handleSearchSubmit = search => {
   
    this.setState({ searchParams: search })
  }

  // componentDidUpdate(prevProps, prevState) {
   

  //   if (prevState.search !== this.state.searchParams) {
  //      console.log(prevState.searchParams)
  //   console.log(this.state.searchParams)
  
      
  //   }
   

  // }


  render() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <SearchBar onSubmit={this.handleSearchSubmit} />

      <ImageGallery searchParams = {this.state.searchParams} />
      
      
    </div>
  );
}
};
