import React from "react";
import SearchBar from "./SearchBar";
import youtude from "../api/YoutubeAPI";
import VideoList from "../components/VideoList";
import VideoDetail from "../components/VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  onSearchSubmit = async term => {
    const res = await youtude.get("/search", {
      params: {
        q: term
      }
    });

    console.log(res.data.items);

    this.setState({ videos: res.data.items, selectedVideo: res.data.items[0] });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.onSearchSubmit("blackpink");
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
