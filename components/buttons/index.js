import { connect } from 'react-redux';
import Component from './Buttons';
import actionTypes from '../../redux/actionTypes/actionTypes';

const mapStateToProps = state => ({
    age: state.common.age,
});

const mapDispatchToProps = dispatch => ({
    changeAge: payload => dispatch({ type: actionTypes.CHANGE_AGE, payload }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);