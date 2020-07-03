import React, { Component } from "react";

class FixedPlugin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: "dropdown show"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    if (this.state.classes === "dropdown") {
      this.setState({ classes: "dropdown show" });
    } else {
      this.setState({ classes: "dropdown" });
    }
  }
  render() {
    return (
      <div className="fixed-plugin">
        <div className={this.state.classes}>
          <div onClick={this.handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu show">
            <li className="header-title">SIDEBAR BACKGROUND</li>
            <li className="adjustments-line">
              <div className="badge-colors text-center">
                <span
                  className={
                    this.props.bgColor === "yellow"
                      ? "badge filter badge-yellow active"
                      : "badge filter badge-yellow"
                  }
                  data-color="yellow"
                  onClick={() => {
                    this.props.handleColorClick("yellow");
                  }}
                />
                <span
                  className={
                    this.props.bgColor === "blue"
                      ? "badge filter badge-blue active"
                      : "badge filter badge-blue"
                  }
                  data-color="blue"
                  onClick={() => {
                    this.props.handleColorClick("blue");
                  }}
                />
                <span
                  className={
                    this.props.bgColor === "green"
                      ? "badge filter badge-green active"
                      : "badge filter badge-green"
                  }
                  data-color="green"
                  onClick={() => {
                    this.props.handleColorClick("green");
                  }}
                />
                <span
                  className={
                    this.props.bgColor === "orange"
                      ? "badge filter badge-orange active"
                      : "badge filter badge-orange"
                  }
                  data-color="orange"
                  onClick={() => {
                    this.props.handleColorClick("orange");
                  }}
                />
                <span
                  className={
                    this.props.bgColor === "red"
                      ? "badge filter badge-red active"
                      : "badge filter badge-red"
                  }
                  data-color="red"
                  onClick={() => {
                    this.props.handleColorClick("red");
                  }}
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default FixedPlugin;
