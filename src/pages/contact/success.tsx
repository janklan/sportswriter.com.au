// import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import BasicMeta from '../../components/meta/BasicMeta'
import OpenGraphMeta from '../../components/meta/OpenGraphMeta'
import Navigation from '../../components/Navigation'

export default function Success () {
  const url = '/contact/success'
  const title = 'Success'
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <Navigation />
      <div className="relative py-16 max-w-xl mx-auto">
        <div className="bg-white dark:bg-gray-900 shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-gray-300">
              Success
            </h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                The message has been sent. Thank you!
              </p>
            </div>
            <div className="mt-5">
              <a href="/" className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-sportswriter-700 dark:text-sportswriter-300 bg-sportswriter-100 dark:bg-sportswriter-800 hover:bg-sportswriter-200 dark:hover:bg-sportswriter-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm">
                Continue
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
