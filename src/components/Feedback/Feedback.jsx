import css from './Feedback.module.css';
import { ControlsBtn } from './ControlsBtn';
import { Stats } from './Stat';
import React from 'react';
// import PropTypes from 'prop-types';


export class Feedback extends React.Component {

    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,

    }

    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,

    };

    increment = () => {
      this.setState(value => ({
            value: value + 1,
        }));
    };



  totalValue = () => {
    return Object.values(this.setState).reduce((a, b) => a + b);
  };

  positiveFeedbackValue = () => {
    return this.state.good !== 0
      ? Math.round((this.state.good / this.totalValue()) * 100)
      : 0;
  }

  render() {

    const data = Object.keys(this.state);

        return (
            <div className={css.container}>
            <h1 className={css.feedback_title}>Please leave feedback</h1>

            <div className={css.feedback_controls}>

              <ControlsBtn
                increment={this.state}
                data={data}
              />
            </div>


            <h2 className={css.feedback_subtitle}>Statistics</h2>
            {this.totalValue > 0 ? (<Stats
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              totalValue={this.totalValue}
              positiveFeedbackValue={this.positiveFeedbackValue}
            />):(<p>No feedback yet</p>)
            }


        </div>
    )
}

};



