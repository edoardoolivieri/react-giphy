import React, { Component } from 'react';
import giphy from 'giphy-api';

import SearchBar from './search-bar';
import Gif from './gif';
import GifList from './gif-list';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "mBjWEqDZOhqvQNTC0y"
    };
  }

  //call API
  search = (query) => {
    giphy('EYrTkHOS5II8YvE5F9uHvw81D2Rh7bDn').search({
      q: query,
      rating: 'g',
      limit: 30
    },
    (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
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
          <SearchBar searchFunction={this.search} />
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
