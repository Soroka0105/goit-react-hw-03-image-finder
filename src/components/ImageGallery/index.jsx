import { GalleryItem } from "components/ImageGalleryItem"
import { Component } from "react"
import { Loader } from "components/Loader"
import css from "./ImageGallery.module.css"
import { LoadMoreButton } from "components/Button"
// import { instance } from "components/Modal"
export class ImageGallery extends Component {

    state = {
        isLoading: false,
        error: '',
        pictures: null,
        page: 1,
        perpage: 20
    }
    handleClick = () => {
       
        this.setState(
            (prevState) => {
                return {
                    page: prevState.page + 1,
                    perpage: prevState.perpage +=10
                    
                }
            }
            
        )
    }
    componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchParams !== this.props.searchParams || prevState.page !== this.state.page) {
       const API = '?key=39342845-b067dc268014f57340e74d554&q='
        const BASEURL = 'https://pixabay.com/api/'
        let PAGE = this.state.page
        let PERPAGE = this.state.perpage

        this.setState({ isLoading: true, });
        fetch(`${BASEURL}${API}${this.props.searchParams}&page=${PAGE}&per_page=${PERPAGE}`)
            .then(res => {if (res.ok) {
                return  res.json()
            }
               return Promise.reject(new Error('not found')) 
            }
            )
            .then(pictures => this.setState({ pictures }))
            .catch(error => this.setState({error}))
        .finally(() => this.setState({isLoading: false}))
    }

    }
    render() {
        const { isLoading, pictures, error } = this.state
        const {searchParams} = this.props
        return (<div>
            {error && <h1>{error.message }</h1>}
            {!searchParams && <div>Please fill out the search form</div>}
            {isLoading && <Loader/>}
            <p>{searchParams}</p>
            <ul className={css.list}>{pictures && pictures.hits.map((elm) => (
                <GalleryItem elm={elm} key={elm.id} />
            ))}</ul>
            <LoadMoreButton onClick={this.handleClick } />
        </div>)
        
    }
}