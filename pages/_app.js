import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import NextNprogress from 'nextjs-progressbar';
import createStore from '../redux/store';

const MyApp = ({ Component, pageProps, store }) => {
    return (
        <>
            {/* <NextNprogress
                color="#29D"
                height="3"
                startPosition="0.3"
                stopDelayMs="200"
            /> */}
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </>
    )
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
    return { pageProps };
}

MyApp.propTypes = {
    store: PropTypes.object.isRequired,
    Component: PropTypes.func.isRequired,
    pageProps: PropTypes.object.isRequired,
}

export default withRedux(createStore)(withReduxSaga(MyApp));