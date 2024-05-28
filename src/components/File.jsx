import React, { Component } from "react";

class File extends Component {
  render() {
    const { name } = this.props;
    return (
      <div className="file">
        <span>{name}</span>
      </div>
    );
  }
}

export default File;
