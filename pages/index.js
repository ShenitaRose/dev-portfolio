import Head from 'next/head'
import Header from '../components/header'
import Main from '../components/main'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Shenita portfolio</title>
                <meta name="description" content="Shenita Rose, Frontend developer"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header />
            <Main />
            
        </div>
    )
}
