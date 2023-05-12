import React from 'react'
import PropTypes from 'prop-types'


function Alert(props) {
  return (
    props.alert_msg&&<div>
      <div className="alert alert-success alert-dismissible fade show" role="alert">
        <strong>{props.alert_msg.typee}!</strong> {props.alert_msg.msgg}.
        {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
      </div>
    </div>
  )
}

export default Alert
