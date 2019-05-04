import React from 'react';

import Gif from './gif';

// class GifList extends Component {
//   render() {
//     return (
//       <div className="gif-list">
//         {this.props.gifs.map(gif => {
//           return <Gif id={gif.id} key={gif.id} />
//         })}
//       </div>
//     );
//   }
// }

// Destructuring

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectGif={props.selectGif} />)}
    </div>
  );
};

export default GifList;
