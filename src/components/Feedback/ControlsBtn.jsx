import css from './Feedback.module.css'
import PropTypes from 'prop-types'

export const ControlsBtn = ({data, increment}) => {

  return data.map(item => (
    <button
      key='item'
      onClick={increment}
      className={css.btn}
    >{item}</button>
  ))
}


ControlsBtn.propTypes = {
btnData: PropTypes.array.isRequired,
increment: PropTypes.func.isRequired,
}
