import React from 'react';
import PropTypes from 'prop-types';


export default function Buttons(props) {
  return (
    <div>
      <button type="button" className="btn btn-primary">{props.button_name}</button>
    </div>
  )
}
Buttons.propTypes = {
    button_name: PropTypes.string.isRequired
}
Buttons.defaultProps={
    button_name:"Button"
}
