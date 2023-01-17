import Header from '../components/header'
import Image from 'next/image'

const files = [


    {
      title: 'Rhose Blog',
      description: 'A Blog Website',
      source:
        '/images/fof.jpg',
    },
    {
        title: 'Simblr',
        description: 'A Sims Blog',
        source:
          '/images/fof.jpg',
      },
      {
        title: 'Holiday Cafe',
        description: 'Landing Page for a Cafe',
        source:
          '/images/fof.jpg',
      },
      {
        title: 'Rhose Blog',
        description: 'A Blog Website',
        source:
          '/images/fof.jpg',
      },
      {
        title: 'Rhose Blog',
        description: 'A Blog Website',
        source:
          '/images/fof.jpg',
      },
      {
        title: 'Rhose Blog',
        description: 'A Blog Website',
        source:
          '/images/fof.jpg',
      },
        
  ]

export default function Projects() {
  return (
    <div>
        <Header />
        <h1 className='mt-20 text-center text-5xl font-bold bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5'>Here lies all the Projects I have worked on </h1>
        <ul role="list" className="mx-10 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8">
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className=" mt-20 group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <Image src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" width={900} height={900} />
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">View details for {file.title}</span>
            </button>
          </div>
          <div className='text-center'>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">{file.title}</p>
          <p className="pointer-events-none block text-lg font-bold bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">{file.description}</p>
          </div>
        </li>
      ))}
    </ul>
    </div>
  )
}
