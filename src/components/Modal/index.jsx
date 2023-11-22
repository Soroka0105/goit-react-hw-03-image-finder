import { Component } from 'react'
import css from "./modal.module.css"

export class Modal extends Component {
backDropClose = (e) => {
		e.target === e.currentTarget && this.props.close()
	}
handleEsc = (e) => {
		e.code === 'Escape' && this.props.close()
	
    }
    componentDidMount() {
		document.addEventListener('keydown', this.handleEsc)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleEsc)
	}

    render() {
        const {children} = this.props
        return (
        <div className={css.Overlay} onClick={this.backDropClose}>
  <div className={css.Modal}>
                    <img src={children} alt={children.id} />
                    
  </div>
</div>
    )
    }
    
}