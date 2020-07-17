import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { ButtonSC } from './styledComponents';

const Buttons = props => {
    const {
        changeAge,
    } = props;

    const age = useSelector(state => state.common.age);

    const upAge = () => {
        const newAge = age + 1;
        changeAge(newAge);
    }

    const downAge = () => {
        const newAge = age - 1;
        changeAge(newAge);
    }

    return (
        <>
            <h1>{age}</h1>
            <ButtonSC onClick={upAge}>Age up</ButtonSC>
            <ButtonSC onClick={downAge}>Age down</ButtonSC>
        </>
    )
}

Buttons.propTypes = {
    age: PropTypes.number.isRequired,
    changeAge: PropTypes.func.isRequired,
};

export default Buttons;