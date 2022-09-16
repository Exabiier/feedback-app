import React from 'react'

function Button({children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
        {}
    </button>
  )
}

Button.defaultProps = {
    version: `primary`,
    type: `button`,
    isDisabled: false,
}

Button.propTyppes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    isDisabled: PropTypes.boolean.isRequired,
}

export default Button