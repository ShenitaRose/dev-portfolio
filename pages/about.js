import Image from 'next/image'
import { CameraIcon } from '@heroicons/react/20/solid'
import Header from '../components/header'
export default function About() {
  return (
    <div>
        <Header />
    <div className="overflow-hidden bg-gray-900 mt-10">
      <div className="relative mx-auto max-w-7xl py-16 px-6 lg:px-8">
        <div className="absolute top-0 bottom-0 left-3/4 hidden w-screen bg-gray-900 lg:block" />
        <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-lg font-semibold bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent">Hi There!</h2>
            <h3 className="mt-2 text-3xl font-bold leading-8 tracking-tight bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent sm:text-4xl">I&apos;m Shenita</h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:col-start-2 lg:row-start-1">
            <svg
              className="absolute top-0 right-0 -mt-20 -mr-20 hidden lg:block"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-teal-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
            </svg>
            <div className="relative mx-auto max-w-prose text-base lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <Image
                    className="rounded-lg object-cover object-center shadow-lg"
                    src="/images/profile.jpg"
                    alt="Shenita standing in the snow in London"
                    width={1184}
                    height={1376}
                  />
                </div>
                <figcaption className="mt-3 flex text-sm bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent">
                  <CameraIcon className="h-5 w-5 flex-none text-cyan-400" aria-hidden="true" />
                  <span className="ml-2">Photograph by Tomas Navickas</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="mx-auto max-w-prose text-base lg:max-w-none">
              <p className="text-xl bg-gradient-to-l from-teal-200 to-cyan-400 bg-clip-text text-transparent">
              I am based in London, where I make steps towards enhacing the future.
              </p>
            </div>
            <div className="prose prose-indigo mx-auto mt-5 bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text text-transparent lg:col-start-1 lg:row-start-1 lg:max-w-none">
              <p>
              For as long as I can remember, I have always been creative. It was that creativity that intially sparked my interest in the world of coding. 
              After trying it, I thought that I wasnt smart enough to be a developer. 
              I believed that in order to be great I had to be born into greatness. 
              I soon learnt that every great person started out just like me... with a dream.
              </p>
              <p>
              I put my dream on the back burner for a while and focused on reality. 
              The reality being that I would have to work twice as hard if I wanted to even be remotely good. 
              I eventually spent so much time trying to be someone that I wasn&apos;t that I had for gotten who I truly was and what it was that I truly wanted to be.
              I studied everything from Law, Psychology, Music and the like. 
              Those never made me happy and I always had this internal longing to do something else.
              </p>
              <p>
              In 2019 I grasped an opportunity that would later become one of the biggest, life-changing events for me and my family. 
              I moved to london to pursue education as a Psychologist. 
              That was a bust! 
              </p>
              <p>
              After a year of university, life decided to play hard ball and I was in a struggle with my true self. 
              I grew more and more unhappy. That was until I met my partner who happened to be a Senior Developer. 
              I was intrigued! 
              His passion, creativity, grit and most importantly his freedom, was what opened my eyes.
                </p>
              <p>
              On that day, I made the decision to learn how to code. 
              I enrolled into SheCodes, a coding workshop for women. 
              From there, everything started to make more and more sense. 
              I had finally taken control of my destiny and in doing so I realised that this is where my joy had been hiding all along!
               I wanted to know more.
              </p>
              <p>
              So, after graduating the SheCodes course, I enrolled onto freecodecamp. I learnt everything they had to teach. Today, I am still learning to code and have found out that coding is a never ending lesson. 
              The most important lesson I have learnt thus far is that I can and will be great!
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
