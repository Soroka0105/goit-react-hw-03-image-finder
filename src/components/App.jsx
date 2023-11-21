import { Component } from "react";
import { SearchBar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { Loader } from "components/Loader"
import { LoadMoreButton } from "components/Button"
import { getPhotos } from './../api/photos';

export class App extends Component {

  state = {
    pictures: [],
    isLoading: false,
    error: null,
    query: '',
    page: 1
  }
  handleSearchSubmit = search => {
   
    this.setState({ query: search })
  }
     handleClick = () => {
       
        this.setState(
            (prevState) => {
                return {
                    page: prevState.page + 1,
                    
                }
            }
            
        )
    }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      // const API = '?key=39342845-b067dc268014f57340e74d554&q='
      // const BASEURL = 'https://pixabay.com/api/'
      // let PAGE = this.state.page


      this.setState({ isLoading: true, });
      // fetch(`${BASEURL}${API}${this.state.query}&page=${PAGE}`)
      //   .then(res => {
      //     if (res.ok) {
      //       return res.json()
      //     }
      //     return Promise.reject(new Error('not found'))
      //   }
      //   )
      getPhotos(this.state)
        .then( pictures => this.setState(({pictures: [...pictures.hits]}) ))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }))
      console.log(this.state.pictures)
    }
        

  }


  render() {
    const { isLoading, pictures, error, query } = this.state;
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
         {error && <h1>{error.message}</h1>}
        {!query && <div>Please fill out the search form</div>}
        {isLoading && <Loader />}
         {pictures && <ImageGallery array={pictures} />} 
        <LoadMoreButton onClick={this.handleClick} />
      </div>)
  }
}