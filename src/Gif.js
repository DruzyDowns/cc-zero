import React, { Component } from "react";

class Gif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
    };
  }

  render() {
    const { loaded } = this.state;
    const { images } = this.props;
    return (
      <img
        className={`grid-item video ${loaded && "loaded"}`}
        src={images.web.url}
        onLoadedData={() => this.setState({ loaded: true })}
      />
    );
  }
}

export default Gif;
