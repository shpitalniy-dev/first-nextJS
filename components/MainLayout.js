import Link from 'next/link';
import Head from 'next/head';

export function MainLayout({ children, title = 'Next App' }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
                nav {
                    height: 60px;
                    background: lightblue;
                }
            `}</style>
        </>
    )
}