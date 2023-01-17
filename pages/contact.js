import Image from "next/image"
import Header from "../components/header"
import Link from "next/link"



export default function Contact() {
    return (
        <div>
            <Header />
      <div className="relative bg-gray-900">
        <div className="lg:absolute lg:inset-0 mt-20 mx-10">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <Image
              className="h-56 w-full object-cover lg:absolute lg:h-full rounded-md"
              src="/images/cute.jpg"
              alt=""
              width={1000}
              height={1000}
            />
          </div>
        </div>
        <div className="relative py-16 px-6 sm:py-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:px-8 lg:py-32">
          <div className="lg:pr-8">
            <div className="mx-auto max-w-md sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-l from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5 sm:text-4xl">Let's work together</h2>
              <p className="mt-4 text-lg bg-gradient-to-r from-teal-200 to-cyan-400 bg-clip-text pb-3 text-transparent sm:pb-5 sm:mt-3">
                I would love to hear from you! Send  a message using the form opposite, or email us. We’d love to hear from
                you! Send us a message using the form opposite, or email us.
              </p>
              <form action="#" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium bg-gradient-to-l from-teal-200 to-cyan-400 bg-clip-text text-transparent">
                    First name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-teal-300 shadow-sm focus:border-teal-200 focus:ring-cyan-400 sm:text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium bg-gradient-to-l from-teal-200 to-cyan-400 bg-clip-text text-transparent">
                    Last name
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-200 focus:ring-cyan-400 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="block text-sm font-medium bg-gradient-to-l from-teal-200 to-cyan-400 bg-clip-text text-transparent">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-200 focus:ring-cyan-400 sm:text-sm"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="company" className="block text-sm font-medium bg-gradient-to-l from-teal-200 to-cyan-400 bg-clip-text text-transparent">
                    Message
                  </label>
                  <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                    How can we help you?
                  </label>
                  <span id="how-can-we-help-description" className="text-sm text-gray-500">
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="how-can-we-help"
                    name="how-can-we-help"
                    aria-describedby="how-can-we-help-description"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-200 focus:ring-cyan-400 sm:text-sm"
                    defaultValue={''}
                  />
                </div>
              </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium bg-gradient-to-l from-teal-200 to-cyan-400 bg-clip-text text-transparent">
                      Phone
                    </label>
                    <span id="phone-description" className="text-sm bg-gradient-to-l from-teal-200 to-cyan-400 bg-clip-text text-transparent">
                      Optional
                    </span>
                  </div>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      autoComplete="tel"
                      aria-describedby="phone-description"
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-200 focus:ring-cyan-400 sm:text-sm"
                    />
                  </div>
                </div>
                
                <div className="text-right sm:col-span-2">
                    <Link href="mailto:shenitarose28@gmail.com">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-gradient-to-r from-teal-500 to-cyan-600  py-2 px-4 text-sm font-medium text-white shadow-sm hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    Submit
                  </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      </div>
    )
  }
  