import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Transition } from '@headlessui/react'

type Props = {
  children?: React.ReactNode;
  heroImage?: string
};

export default function Navigation ({ children, heroImage }: Props) {
  const router = useRouter()
  const [active, setActive] = useState(false)
  return (
    <div className="relative bg-white  dark:bg-black border border-r-0 border-l-0 border-t-0 border-b-1 border-gray-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto">
        <div className={'relative z-10 pb-8 bg-white dark:bg-black lg:max-w-2xl lg:w-full ' + (heroImage ? ' sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32' : null)}>
          <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white dark:text-black transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                    <span className="sr-only">The Sports Writer</span>
                    <img className="h-8 w-auto sm:h-10" src="/images/tennis-ball.svg" />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button onClick={() => setActive(!active)} type="button" className="bg-white dark:bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500" id="main-menu" aria-haspopup="true">
                      <span className="sr-only">Open main menu</span>

                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <a href="/" className={'font-medium ' + (router.pathname === '/' ? 'text-green-900 border-b-2 border-green-900 dark:text-green-600' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300') }>Home</a>
                <a href="/archive" className={'font-medium ' + (router.pathname.startsWith('/archive') ? 'text-green-900 border-b-2 border-green-900 dark:text-green-600' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300') }>Archive</a>
                <a href="/contact" className={'font-medium ' + (router.pathname === '/contact' ? 'text-green-900 border-b-2 border-green-900 dark:text-green-600' : 'text-gray-500 hover:text-gray-900 dark:hover:text-gray-300') }>Contact</a>
              </div>
            </nav>
          </div>

          <Transition
            show={active}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            {(ref) => (
              <div ref={ref} className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-md bg-white dark:bg-black ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <div>
                      <a href="/">
                        <img className="h-8 w-auto" src="/images/tennis-ball.svg" alt="" />
                      </a>
                    </div>
                    <div className="-mr-2">
                      <button onClick={() => setActive(!active)} type="button" className="bg-white dark:bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                        <span className="sr-only">Close main menu</span>

                        <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1" role="none">
                      <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-500" role="menuitem">Home</a>
                      <a href="/archive" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-500" role="menuitem">Archive</a>
                      <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-500" role="menuitem">Contact</a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Transition>
          {children}
        </div>
      </div>
      { heroImage
        ? <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={heroImage} alt="" />
          </div>
        : null
      }
    </div>
  )
}
