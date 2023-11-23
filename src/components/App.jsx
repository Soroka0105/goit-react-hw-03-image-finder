import { Component } from "react";
import { SearchBar } from "./Searchbar";
import { ImageGallery } from "./ImageGallery";
import { Loader } from "components/Loader"
import { LoadMoreButton } from "components/Button"
import { getPhotos } from './../api/photos';
import { Modal } from "./Modal";

export class App extends Component {

  state = {
    pictures: [],
    isLoading: false,
    error: null,
    query: '',
    page: 1,
    total: 0,
    isShowModal: false,
    largeImg: ""
  }
  
  handleSearchSubmit = search => {
    this.setState({
      query: search,
      pictures: [],
    isLoading: false,
    error: null,
    page: 1,
    total: 0,
    isShowModal: false,
    largeImg: ""  })
   
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
handleOpen = (evt) => {
  this.setState({
      largeImg:evt.target.alt,
      isShowModal: true,
      
    })
  console.log(evt.target)
  }
  handleClose = () => {
		this.setState({
			isShowModal: false,
		})
	}

  
  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {


      this.setState({ isLoading: true, });
     
      getPhotos(this.state)
        .then(pictures => this.setState(({ pictures: [...this.state.pictures, ...pictures.hits], total: pictures.total })
        ))
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }))
    }
    console.log(this.state)

  }
 

  render() {
    const { isLoading, pictures, error, query, total, isShowModal, largeImg } = this.state;
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
         {pictures && <ImageGallery array={pictures} onClick={this.handleOpen} />} 
        {total > pictures.length && <LoadMoreButton onClick={this.handleClick} />}
        {isShowModal && <Modal children={largeImg} close={ this.handleClose} />}
      </div>)
  }
}