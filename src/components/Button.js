import PropTypes from 'prop-types'

const Button  = ({ color, text, onClick}) => {
    return (
        <buttom 
            onClick={onClick} 
            style={{backgroundColor: color}} 
            className='btn'>
            {text}
        </buttom> 
    )
}

Button.defaultProps = { 
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
