import React from "react";
import ReactDOM from "react-dom";
import { Strider, Step } from "react-strider";
import cx from "classnames";

import "./style.scss";

import data from "./data";
import Button from "./button";

import QuizSingle from "./single";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="f jcc aic site">
        <div>
          <Strider activeIndex="0" transitionSpeed={300}>
            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div
                  className={cx("step__wrapper", {
                    "is-active": active,
                    "is-hiding": hiding
                  })}
                >
                  <QuizStart next={next} />
                </div>
              )}
            </Step>
            {/* consistent data store? */}
            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div
                  className={cx("step__wrapper", {
                    "is-active": active,
                    "is-hiding": hiding
                  })}
                >
                  <QuizSingle
                    {...this.props}
                    pushAnswer={() =>
                      this.setState({ })
                    }
                    number={activeIndex}
                    next={next}
                    item={data[activeIndex]}
                  />
                </div>
              )}
            </Step>
            {/* multiple entities contributing data? */}
            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div
                  className={cx("step__wrapper", {
                    "is-active": active,
                    "is-hiding": hiding
                  })}
                >
                  <QuizSingle
                    {...this.props}
                    pushAnswer={() =>
                      this.setState({ })
                    }
                    number={activeIndex}
                    next={next}
                    item={data[activeIndex]}
                  />
                </div>
              )}
            </Step>
            {/* Are data records ever updated? */}
            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div
                  className={cx("step__wrapper", {
                    "is-active": active,
                    "is-hiding": hiding
                  })}
                >
                  <QuizSingle
                    {...this.props}
                    pushAnswer={() =>
                      this.setState({ })
                    }
                    number={activeIndex}
                    next={next}
                    item={data[activeIndex]}
                  />
                </div>
              )}
            </Step>
            {/* Are sensitive identifiers not written to the data store? */}
            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div
                  className={cx("step__wrapper", {
                    "is-active": active,
                    "is-hiding": hiding
                  })}
                >
                  <QuizSingle
                    {...this.props}
                    pushAnswer={() =>
                      this.setState({ })
                    }
                    number={activeIndex}
                    next={next}
                    item={data[activeIndex]}
                  />
                </div>
              )}
            </Step>
            {/* Are there conflicts between write entities? */}
            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div
                  className={cx("step__wrapper", {
                    "is-active": active,
                    "is-hiding": hiding
                  })}
                >
                  <QuizSingle
                    {...this.props}
                    pushAnswer={() =>
                      this.setState({ })
                    }
                    number={activeIndex}
                    next={next}
                    item={data[activeIndex]}
                  />
                </div>
              )}
            </Step>
            {/* Does it need to be tamperproof */}
            <Step>
              {({ next, goTo, active, hiding, activeIndex }) => (
                <div
                  className={cx("step__wrapper", {
                    "is-active": active,
                    "is-hiding": hiding
                  })}
                >
                  <QuizSingle
                    {...this.props}
                    pushAnswer={() =>
                      this.setState({ })
                    }
                    number={activeIndex}
                    next={next}
                    item={data[activeIndex]}
                  />
                </div>
              )}
            </Step>
            <Step>
              {({ active, hiding, activeIndex }) => (
                <div
                  className={cx("step__wrapper", {
                    "is-active": active,
                    "is-hiding": hiding
                  })}
                >
                  <QuizEnd {...this.props} />
                </div>
              )}
            </Step>
          </Strider>
        </div>
      </div>
    );
  }
}

class QuizStart extends React.Component {
  render() {
    return (
      <div>
        <h1>You Don't Need a Blockchain</h1>
        <Button
          classes={`f jcb mt1 regular bold cw`}
          clickHandle={() => this.props.next()}
        >
          I think I need a Blockchain
        </Button>
      </div>
    );
  }
}

class QuizEnd extends React.Component {
  render() {
    return (
      <div className="mha container--q">
        <h4>You Might Need a Blockchain</h4>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
