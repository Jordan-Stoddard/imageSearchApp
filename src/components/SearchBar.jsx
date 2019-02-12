import React from "react";

class SearchBar extends React.Component {
  state = { address: "", city: "", state: "", zipcode: "" };

 onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.address, this.state.city, this.state.state, this.state.zipcode)
    }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field" >
            <h1>Type in your address to see our valuation</h1>
            <label>Street Address: include suffix (dr, ave, st, etc)</label>
            <input
              type="text"
              value={this.state.address}
              onChange={e => this.setState({ address: e.target.value })}
            />
            <label>City</label>
            <input
              type="text"
              value={this.state.city}
              onChange={e => this.setState({ city: e.target.value })}
            />
            <label>State Abbreviation (CA, NY, etc)</label>
            <input
              type="text"
              value={this.state.state}
              onChange={e => this.setState({ state: e.target.value })}
            />
            <label>Zipcode</label>
            <input
              type="text"
              value={this.state.zipcode}
              onChange={e => this.setState({ zipcode: e.target.value })}
            />
            <button onClick={this.onFormSubmit}>Search</button>
       
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;


