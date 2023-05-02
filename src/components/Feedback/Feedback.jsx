import css from './Feedback.module.css';
import React from 'react';
import PropTypes from 'prop-types';


class Feedback extends React.Component {


    static defaultProps = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    static PropTypes = {
        ///
    };

    state = {
        good: this.props.good,
        neutral: this.props.neutral,
        bad: this.props.bad,
    };

    goodIncreament = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));
    };

    neutralIncreament = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));
    };

    badIncreament = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    };


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
                           Good: <span className={css.feedback_value}>0</span>
                        </p>
                    </li>

                    <li className={css.feedback_item}>
                        <p className={css.feedback_prop}>
                           Neutral: <span className={css.feedback_value}>0</span>
                        </p>
                    </li>

                    <li className={css.feedback_item}>
                        <p className={css.feedback_prop}>
                           Bad: <span className={css.feedback_value}>0</span>
                        </p>
                    </li>

                    <li className={css.feedback_item}>
                        <p className={css.feedback_prop}>
                           Total: <span className={css.feedback_value}>0</span>
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


}
