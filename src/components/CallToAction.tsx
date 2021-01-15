
type Props = {
  text: string
};

export default function CallToAction ({ text }: Props) {
  return (
    <div className="bg-white bg-gradient-to-b from-sportswriter-100 to-white dark:from-gray-800 dark:to-black">
      <div className="max-w-7xl mx-auto py-12 my-12 px-4 sm:px-6 lg:my-32 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div>
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-400 sm:text-4xl">
              The Sports Writer
            </h2>
            <p className="mt-3 max-w-3xl text-lg text-gray-500 dark:text-gray-300">
              {text}
            </p>
            <div className="mt-8 sm:flex">
              <div className="rounded-md shadow">
                <a href="/archive" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sportswriter hover:bg-sportswriter-700">
                  Browse archives
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="/contact" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-sportswriter-700 bg-sportswriter-100 hover:bg-sportswriter-200">
                  Get in touch
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-gray-800">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Workcation" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-gray-800">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-gray-800">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-gray-800">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/laravel-logo-gray-400.svg" alt="Laravel" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-gray-800">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit" />
            </div>
            <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50 dark:bg-gray-800">
              <img className="max-h-12" src="https://tailwindui.com/img/logos/statamic-logo-gray-400.svg" alt="Statamic" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
