import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Shenita portfolio</title>
                <meta name="description" content="Shenita Rose, Frontend developer"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <div className="h-screen bg-gradient-to-b from-blue-100 to-pink-100">
                    <div className="container mx-auto">
                        <div className="flex items-center justify-center">
                            <video className="h-60 w-60" autoPlay loop muted>
                                <source src="memoji.mov" type="video/mp4"/>
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <h1 className="text-3xl font-bold text-center mt-4">
                            Hi, my name is <span className="text-pink-600">Shenita</span>.
                        </h1>

                        <p className="text-center mt-3">
                            I&apos;m a front-end developer based in London. Currently focusing on <span
                            className="text-pink-500 font-bold">nextJS</span>, and <span
                            className="text-blue-500 font-bold">tailwindCSS</span>.
                        </p>

                        <p className="m-20 text-center">Porfolio is open sourced at <a className="text-blue-400 underline" href="https://github.com/ShenitaRose/dev-portfolio">Github</a></p>
                    </div>
                </div>
            </main>
        </div>
    )
}
