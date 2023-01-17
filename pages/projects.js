import Header from '../components/header'
import Image from 'next/image'
import Link from 'next/link'
const files = [


    {
      title: 'Rhose Blog',
      description: 'A Blog Website',
      source:'/images/fof.jpg',
      href:'https://github.com/ShenitaRose/rhoses-blog', 
    },
    {
        title: 'My Portfolio',
        description: 'The portfolio you are currently browsing',
        source:'/images/portfolio.png',
        href:'https://github.com/ShenitaRose/rhoses-blog', 
      },
      {
        title: 'Holiday Cafe',
        description: 'Landing Page for a Cafe',
        source:'/images/fof.jpg',
        href:'https://github.com/ShenitaRose/rhoses-blog', 
      },
      {
        title: 'Rhose Blog',
        description: 'A Blog Website',
        source:'/images/fof.jpg',
        href:'https://github.com/ShenitaRose/rhoses-blog', 
      },
      {
        title: 'Rhose Blog',
        description: 'A Blog Website',
        source:'/images/fof.jpg',
        href:'https://github.com/ShenitaRose/rhoses-blog', 
      },
      {
        title: 'Rhose Blog',
        description: 'A Blog Website',
        source:'/images/fof.jpg',
        href:'https://github.com/ShenitaRose/rhoses-blog', 
      },
        
  ]

export default function Projects() {
  return (
    <div>
        <Header />
        <h1 className='mt-20 text-center text-5xl font-bold bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5'>Here lies all the Projects I have worked on </h1>
        <ul role="list" className="mx-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-6">
      {files.map((file) => (
        <li key={file.source} className="relative">
          <div className=" mt-20 group aspect-w-7 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <Link href={file.href}>
            <Image src={file.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" width={500} height={500} />
            </Link>
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
