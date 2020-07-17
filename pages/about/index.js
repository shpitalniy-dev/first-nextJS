import React from 'react';
import Router from 'next/router';
import { MainLayout } from '../../components/MainLayout';

export default function Index({ title }) {

    const linkClickHandler = () => {
        Router.push('/');
    }

    return (
        <MainLayout>
            <h1>{JSON.stringify(title)}</h1>
            <button onClick={linkClickHandler}>Go back to home</button>
            <button onClick={() => Router.push('/posts')}>Go back to posts</button>
        </MainLayout>
    )
};

Index.getInitialProps = async () => {
    const response = await fetch(`http://localhost:4200/title`);
    const data = await response.json();

    return {
        title: data,
    }
};