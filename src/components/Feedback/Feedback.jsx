import css from './Feedback.module.css';
import React from 'react';
// import PropTypes from 'prop-types';


export class Feedback extends React.Component {

    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0,
        totalValue: 0,
    }

    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
        totalValue: this.props.totalValue,
    };

    goodIncreament = () => {
      this.setState(({ good }) => ({
            good: good + 1,
        }));
    };

    neutralIncreament = () => {
        this.setState(({ neutral })  => ({
            neutral: neutral + 1,
        }));
    };

    badIncreament = () => {
        this.setState(({ bad })  => ({
            bad: bad + 1,
        }));
    };


  countTotalFeedback = () => {
    this.setState(({ good, neutral, bad }) => ({
      totalValue: good + neutral + bad,
    }))
  }

    render() {
        return (
            <div className={css.container}>
                <h1 className={css.feedback_title}>Please leave feedback</h1>
                <div className={css.feedback_controls}>
                    <button type='button' onClick={this.goodIncreament}>Good</button>
                    <button type='button' onClick={this.neutralIncreament}>Neutral</button>
                    <button type='button' onClick={this.badIncreament}>Bad</button>
                </div>
                <h2 className={css.feedback_subtitle}>Statistics</h2>
                <ul className={css.feedback_value}>

                    <li className={css.feedback_item}>
                        <p className={css.feedback_prop}>
                           Good: <span className={css.feedback_value}>{this.state.good}</span>
                        </p>
                    </li>

                    <li className={css.feedback_item}>
                        <p className={css.feedback_prop}>
                           Neutral: <span className={css.feedback_value}>{this.state.neutral}</span>
                        </p>
                    </li>

                    <li className={css.feedback_item}>
                        <p className={css.feedback_prop}>
                           Bad: <span className={css.feedback_value}>{this.state.bad}</span>
                        </p>
                    </li>

                    <li className={css.feedback_item}>
                        <p className={css.feedback_prop}>
                  Total: <span className={css.feedback_value}>{ this.state.totalValue}</span>
                        </p>
                    </li>

                    <li className={css.feedback_item}>
                        <p className={css.feedback_prop}>
                           Positive feedback: <span className={css.feedback_value}>0</span>
                        </p>
                    </li>

                </ul>
        </div>
    )
}

};



