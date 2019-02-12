import React from "react";
import estated from '../api/estated.js'
import SearchBar from "./SearchBar";
import Axios from "axios";
// import ImageList from './ImageList'
Axios.withCredentials = true;



class App extends React.Component {
  state = {images: []}

  onSearchSubmit = (address, city, state, zipcode) => {
    estated.get(`property/v3?token=Jn46WhDWzk8gsYFHRPNzYzoOpiQHp4&address=${address}&city=${city}&state=${state}&zipcode=${zipcode}`)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchSubmit} />
        {/* <ImageList images={this.state.images}/> */}
      </div>
    );
  }
}

export default App;

  