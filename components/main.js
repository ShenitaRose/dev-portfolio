
import Image from "next/image"


export default function Main() {
  return (
    <div className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14 ">
            <div className="mx-auto max-w-7xl pt-40 lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-6 sm:max-w-2xl sm:text-center lg:flex lg:items-center lg:px-0 lg:text-left">
                  <div className="lg:py-24 lg:px-10">
                    <h1 className="mt-4 text-5xl font-bold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">Hi there!👋 I&apos;m</span>
                      <span className="block bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5">
                        Shenita Rose
                      </span>
                    </h1>
                    <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                      I&apos;m a front-end developer currently focused on Nextjs and Tailwind CSS, based in London.
                    </p>
                    <div className="mt-10 sm:mt-12">
                        <div className="sm:flex">
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button
                              type="submit"
                              className="block w-full rounded-md bg-gradient-to-r from-teal-500 to-cyan-600 py-3 px-4 font-medium text-white shadow hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                            >
                              Hire Me
                            </button>
                          </div>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:relative lg:m-0">
                  <div className="mx-auto max-w-md px-6 sm:max-w-2xl lg:max-w-none lg:px-0">
                    <Image
                      className="pl-40 w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="/images/shenita_pc.png"
                      alt="memoji of Shenita using a macbook"
                      width={4000}
                      height={4000}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
  )
}
