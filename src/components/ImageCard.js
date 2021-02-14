import React from 'react';

class ImageCard extends React.Component
{
    constructor(props)
    {
        super(props);
        this.imageRef = React.createRef();

    }
    state = {span:0}
    componentDidMount()
    {
        //console.log(this.imageRef);
        //console.log(this.imageRef.current.clientHeight);// to access the property of image tag
        
        // Another way to do this
        this.imageRef.current.addEventListener('load',this.SetSpans);
    }

    SetSpans=()=>
    {
        const height = this.imageRef.current.clientHeight;
        console.log(height);
        const span =  Math.ceil(height/20);
        this.setState({span})
    }
    render()
    {
        const {description, urls} = this.props.image;
        return(
            <div style={{gridRowEnd:`span ${this.state.span}`}} >
                <img alt={description} src={urls.regular} ref={this.imageRef}></img>
            </div>
        )
    }




}

export default ImageCard;