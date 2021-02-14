import React from 'react';
import unsplash from '../api/unsplash';
import Searchbar from './Searchbar'
import ImageList from './ImageList';
import axios from 'axios';
class App extends React.Component
{
  constructor(props)
  {
    super(props);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }
  apiData = {};
  makeAPiRequest()
 {
  axios.get('http://localhost:3001/api').then(resp => {

    console.log(resp);
    
});
 }


  state = {images:[]};
  async onSearchSubmit(term) 
  {
console.log(term);
const response =  await unsplash.get('search/photos' ,
{
  params: {
     query: term
  },
  
 
});
 
   this.setState({images: response.data.results});
  }
  
    render()
  {
    return (<div className='ui container' style={{marginTop:'10px'}}>
    <Searchbar on={this.onSearchSubmit}></Searchbar>
    <ImageList images={this.state.images} />
    {/* <button onClick={this.onSearchSubmit} >makeAPiRequest</button> */}
    </div>); // onSubmit is prop passed to searchBar component 
    // this.onSearchSubmit is a reference to a call back function defined in SerachBar component
  }
    
}

export default App;