import React, { Component } from "react";
import File from "./File";

class Folder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: true,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      expanded: !prevState.expanded,
    }));
  };

  render() {
    const { name, children, path, filter } = this.props;
    const { expanded } = this.state;
    return (
      <div className="folder">
        <div onClick={this.toggle}>
          {expanded ? "- " : "+ "} {name}
        </div>
        {expanded && (
          <div className="children">
            {children.map((child) => {
              const childPath = `${path}/${child.name}`;
              return child.type === "FOLDER" ? (
                <Folder
                  key={childPath}
                  path={childPath}
                  {...child}
                  filter={filter}
                />
              ) : (
                <File key={childPath} {...child} />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Folder;
