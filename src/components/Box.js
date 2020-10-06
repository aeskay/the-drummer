import React, { Component } from 'react';


class Box extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this);
        // this.handlePress = this.handlePress.bind(this)
    }   

    handleClick = (e) => {
        const dataId = e.currentTarget.dataset.id;
        const getData = document.getElementById(dataId);
        getData.classList.add("active");
        const audio = getData.childNodes[1];
        audio.currentTime= 0;
        audio.play()
        const removeClass = () =>{
            getData.classList.remove("active")
        }
        setTimeout(removeClass, 200);

        const parent = getData.parentNode.parentNode;
        parent.querySelector('.displayer').innerHTML = this.props.display;

    }

    render(){
        return (
            <div>
                 <div className="box" onClick={this.handleClick}  data-id={`div${this.props.text}`} id={`div${this.props.text}`}>
                    {this.props.text} 
                    <audio src={this.props.audio} className="clip" id={this.props.text}></audio>
                </div>
            </div>
            
        )
    }   
};

export default Box;
