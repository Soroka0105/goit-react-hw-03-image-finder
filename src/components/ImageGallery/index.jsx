import { GalleryItem } from "components/ImageGalleryItem"
import { Component } from "react"
import { Loader } from "components/Loader"
import css from "./ImageGallery.module.css"
export class ImageGallery extends Component {

    state = {
        isLoading: false,
        error: '',
        pictures: null,
    }

    componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchParams !== this.props.searchParams) {
       const API = '?key=39342845-b067dc268014f57340e74d554&q='
        const BASEURL = 'https://pixabay.com/api/'

        this.setState({ isLoading: true });
        fetch(`${BASEURL}${API}${this.props.searchParams}`)
        .then(res => res.json())
            .then(pictures => this.setState({ pictures }))
        .finally(() => this.setState({isLoading: false}))
    }

    }
    render() {
        const { isLoading, pictures } = this.state
        const {searchParams} = this.props
        return (<div>
            
            {!searchParams && <div>Please fill out the search form</div>}
            {isLoading && <Loader/>}
            <p>{searchParams}</p>
            <ul className={css.list}>{pictures && pictures.hits.map((elm) => (
                <GalleryItem elm={elm} key ={elm.id} />
            ) )}</ul>
        </div>)
        
    }
}