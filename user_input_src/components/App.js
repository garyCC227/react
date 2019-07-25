import React from "react";

import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./imageList";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      images: []
    };

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
  }

  async onSearchSubmit(term) {
    const res = await unsplash.get("search/photos", {
      params: {
        query: term
      }
    });

    // console.log(res.data.results);
    this.setState({ images: res.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
