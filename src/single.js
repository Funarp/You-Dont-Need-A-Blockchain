import React, { Component } from "react";
import cx from "classnames";

import SelectableAnswer from "./selectableAnswer";

export default class QuizSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      choice: false,
      disabled: false,
      answerShow: false,
      hiding: false
    };
  }

  handleStop(e) {
    if (this.state.disabled === false) {
      this.setState({
        selected: e,
        disabled: true,
        hiding: true
      });
      setTimeout(() => {
        this.setState({
          answerShow: true
        });
      }, 700);
      setTimeout(() => {
        this.setState({
          choice: true,
          hiding: false
        });
      }, 500);
    }
  }

  handleNext(e) {
    // don't go to next question if the answer e is no
    if (!e) {
      this.handleStop(e);
    } else {
      if (this.state.selected) {
        this.props.pushAnswer();
      } 
      setTimeout(() => {
        this.props.next();
      }, 10);
    }
  }

  render() {
    const { selected, choice, hiding, answerShow } = this.state;

    const { item } = this.props;

    const { question, choices, fact } = item;

    return (
      <div className="quiz__main">
        <div className="quiz__container container--xl mha">
          {choice && !hiding ? (
            <div className="px2 quiz__material anwser container--q mha">
              <div
                className={cx("quiz__material_answer", {
                  active: choice && answerShow
                })}
              >
                <div>
                  <h3 className="cw">{selected ? `` : `你不需要区块链`}</h3>
                  <div
                    className="cw"
                    dangerouslySetInnerHTML={{ __html: fact }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className={cx("px2 quiz__material question container--q mha")}>
              <h4
                className={cx("cw quiz__material_question", {
                  hiding: hiding
                })}
              >
                {question}
              </h4>
            </div>
          )}
          <div className="quiz__selections">
            <div className="quiz__selections_nest">
              <div className={cx("px1 f jcc aic mha")}>
                {choices.map(singleChoice => (
                  <SelectableAnswer
                    key={singleChoice.id}
                    topSelected={selected} // push selection back down
                    choice={singleChoice}
                    disabled={this.state.disabled}
                    size={singleChoice.fontSize}
                    onClick={e => this.handleNext(e)}
                  />
                ))}
              </div>
              <div className="f jcc aic">
                {choice && (
                  <div
                    className={cx("f jce quiz__options_next", {
                      visible: choice && answerShow
                    })}
                  >
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
