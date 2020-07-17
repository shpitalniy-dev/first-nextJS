import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/Link';
import { MainLayout } from '../components/MainLayout';

export default function Posts(props) {
    // const [posts, setPosts] = useState([]);

    // useEffect(() => {
    //     async function load() {
    //         const response = await fetch('http://localhost:4200/posts');
    //         const json = await response.json();
    //         setPosts(json);
    //     }

    //     load();
    // }, []);

    const { posts } = props;

    return (
        <MainLayout>
            <Head>
                <title>Posts Page | Next</title>
            </Head>
            <h1>Posts</h1>
            <ul>
                {posts.map(post =>
                    <li key={post.id}>
                        <Link href={`/post/[id]`} as={`/post/${post.id}`}>
                            <a>{post.title}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </MainLayout>
    );
};

Posts.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/posts');
    const posts = await response.json();

    return {
        posts,
    };
};