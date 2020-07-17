import Link from 'next/link';
import Head from 'next/head';
import Buttons from '../components/buttons/index';
import { MainLayout } from '../components/MainLayout';
import actionTypes from '../redux/actionTypes/actionTypes'; 

export default function Index() {
    return (
        <MainLayout title={'Home page'}>
            <h1>Hello, nextJS</h1>
            <p><Link href={'/about'}><a>About</a></Link></p>
            <p><Link href={'/posts'}><a>Posts</a></Link></p>
            <p>
                Proident elit velit commodo deserunt consectetur aliqua ex est sint labore laborum.
                Commodo veniam non ut minim consectetur laborum. Elit voluptate dolore elit ut commodo
                cupidatat ex dolore. Sunt non deserunt ea consequat pariatur elit sint id aliquip ex.
                Id non labore et aliqua elit.
            </p>
            <Buttons />
        </MainLayout>
    )
};

Index.getInitialProps = async ctx => {
    await ctx.store.dispatch({ type: actionTypes.CHANGE_AGE_DELAY, payload: Math.floor(Math.random() * 100) });

    return {};
}