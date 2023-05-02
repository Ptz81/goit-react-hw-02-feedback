import css from './Feedback.module.css'


export const ControlsBtn = ({goodIncreament, neutralIncreament, badIncreament}) => {


    return (
       <div className={css.feedback_controls}>
                    <button type='button' onClick={goodIncreament}>Good</button>
                    <button type='button' onClick={neutralIncreament}>Neutral</button>
                    <button type='button' onClick={badIncreament}>Bad</button>
                </div>
    )
}


