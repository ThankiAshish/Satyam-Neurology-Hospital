import React, { Component } from 'react';
import {animateScroll} from 'react-scroll';

class BackToTop extends Component{
	
	scrollToTop = () => {
        animateScroll.scrollToTop();
	}
	componentDidMount = () => {
        window.addEventListener("scroll",()=>{
            if(window.pageYOffset > this.state.offset){
                this.setState({
                    ...this.state,
                    show:true
                })
            }
			else{
                this.setState({
                    ...this.state,
                    show:false
                })
            }
        })
	}
	state = { 
        offset : this.props.offset || 1000,
        show   : false
    }
	
	render(){
		return(
			<>
            	{this.state.show && (
                    <button className="back-to-top" type="button" onClick={this.scrollToTop}>
						<i className="fa fa-chevron-up"></i>
                    </button>
                )}
             <a href="tel:(+91)7984807991" className="back-to-whatsapp" >
             <i className="fab fa-whatsapp  fa-2x"></i>
            </a>
            <a href="tel:(+91)7984807991" className="back-to-phone" >
             <i className="fas fa-phone-alt fa-2x"></i>
            </a>
			</>
		);
	}
}

export default BackToTop;