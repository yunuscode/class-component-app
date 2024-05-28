import { Component } from "react";
import File from "./File";
import Folder from "./Folder";
import filteredData from "../utils/filteredData";

class MyBrowser extends Component {
  state = {
    filter: "",
  };

  handleSearch = (event) => {
    this.setState({ filter: event.target.value });
  };

  renderTree(data, path = "") {
    return filteredData(data, this.state.filter).map((item) => {
      const itemPath = `${path}/${item.name}`;

      if (item.type === "FOLDER") {
        return (
          <Folder
            key={itemPath}
            path={itemPath}
            {...item}
            filter={this.state.filter}
          />
        );
      } else {
        return <File key={itemPath} {...item} />;
      }
    });
  }

  render() {
    const { data } = this.props;

    return (
      <div className="file-explorer">
        <input
          type="text"
          placeholder="Search files..."
          onChange={this.handleSearch}
        />
        {this.renderTree(data)}
      </div>
    );
  }
}

export default MyBrowser;
