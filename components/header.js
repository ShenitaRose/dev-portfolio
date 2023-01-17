import Link from "next/link";
export default function Header() {
  return (
    <header className="bg-gray-900">
        <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
            <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
                
            </div>
            <div className="shrink w-80 sm:order-2">
                <Link href="/" className="font-bold uppercase text-3xl bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">Shenita Rose</Link>
            </div>
            <div className="w-96 order-3 flex justify-center">
                <div className="flex gap-10">
                    <Link href="/" className="text-gray-100">Home</Link>
                    <Link href="/about" className="text-gray-100">About</Link>
                    <Link href="/projects" className="text-gray-100">Projects</Link>
                    <button type="button" className="inline-flex items-center px-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-teal-500 to-cyan-600  hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900">
                        Contact
                    </button>
                </div>
            </div>

        </div>

    </header>
  )
}