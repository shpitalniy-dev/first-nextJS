import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MainLayout } from '../../components/MainLayout';

export default function Post(props) {
    const router = useRouter();

    const { post: serverPost } = props;

    const [post, setPost] = useState(serverPost);

    useEffect(() => {
        async function load() {
            const response = await fetch(`http://localhost:4200/posts/${router.query.id}`);
            const data = await response.json();
            setPost(data);
        };

        if (!serverPost) {
            load();
        }
    }, []);

    if (!post) {
        return (
            <MainLayout>
                <p>Loading...</p>
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            {/* <h1>Post {router.query.id}</h1> */}
            <hr />
            <p>{post.title}</p>
        </MainLayout>
    )
};

Post.getInitialProps = async (ctx) => {
    if (!ctx.req) { // for client render, if req is null, it means that render is happening on client side
        return { post: null };
    }

    const response = await fetch(`${process.env.API_URL}/posts/${ctx.query.id}`);
    const post = await response.json();

    return {
        post,
    };
}

// export async function getServerSideProps(ctx) {
//     if (!ctx.req) {
//         return { post: null };
//     }

//     const response = await fetch(`http://localhost:4200/posts/${ctx.query.id}`);
//     const post = await response.json();

//     return { props: { post } };
// }