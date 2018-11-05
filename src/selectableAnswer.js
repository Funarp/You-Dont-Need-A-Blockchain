import React from "react";

export default class SelectableAnswer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }
  handleClick(value) {
    if (!this.props.disabled) {
      this.props.onClick(value);
      this.setState({
        selected: true
      });
    }
  }
  color(top, choice) {
    if (top === choice) {
      return choice ? "cg" : "cr";
    } else {
      return "cw";
    }
  }
  render() {
    const { selected } = this.state;
    const { choice, disabled, topSelected } = this.props;
    return (
      <div
        className="quiz__options ac"
        onClick={() => this.handleClick(choice.answer)}
      >
        <div
          className={`${
            disabled && !selected ? this.color(topSelected, choice.answer) : ""
          } ${selected ? (choice.answer ? "cg" : "cr") : "cw"}`}
        >
          {choice.item}
        </div>
      </div>
    );
  }
}
