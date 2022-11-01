import Head from 'next/head'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <div className="container mx-auto">

                    <div className="flex items-center justify-center mt-20">
                        <video className="h-60 w-60" autoPlay loop muted>
                            <source src="memoji.mov" type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <h1 className="text-3xl font-bold text-center mt-4">
                        Hi, my name is <span className="text-pink-600">Shenita</span>.
                    </h1>

                    <p className="text-center mt-3">
                        I&apos;m a front-end developer based in London. Currently focusing on <span className="text-pink-500 font-bold">nextJS</span>, and <span className="text-blue-500 font-bold">tailwindCSS</span>.
                    </p>
                </div>
            </main>
        </div>
    )
}
