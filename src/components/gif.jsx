/* eslint jsx-a11y/alt-text: off */
/* eslint jsx-a11y/no-noninteractive-element-interactions: off */

import React, { Component } from 'react';

// with new verision => doesn't work the props
class Gif extends Component {
  handleClick = () => {
    if (this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const { id } = this.props;
    if (!id) {
      return null;
    }

    const src = `https://media1.giphy.com/media/${id}/200.gif`;
    return (
      <img src={src} alt="" className="gif" onClick={this.handleClick} />
    );
  }
}

export default Gif;
