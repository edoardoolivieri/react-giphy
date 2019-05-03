import React, { Component } from 'react';

import SearchBar from './search-bar';
import Gif from './gif';
import GifList from './gif-list'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "mBjWEqDZOhqvQNTC0y"
    };
  }

  search = (query) => {
    //call API
  }

  render() {
    const gifs = [
      { id: "fqafgIJGh3DXrwT6Up" },
      { id: "XftfGwyrTVvLLe6yjZ" },
      { id: "iFgFe9cYIp0j1Mbpqi" },
      { id: "mBjWEqDZOhqvQNTC0y" }
    ];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
};

export default App;
