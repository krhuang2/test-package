import PropTypes from 'prop-types';

export default function Button({ label }) {
    return (
        <button>{label}</button>
    );
}

Button.PropTypes = {
    label: PropTypes.string
}