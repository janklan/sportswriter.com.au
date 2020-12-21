import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import BasicMeta from '../components/meta/BasicMeta'
import OpenGraphMeta from '../components/meta/OpenGraphMeta'
import PostList from '../components/PostList'
import FeaturedPostList from '../components/FeaturedPostList'
import { listPostContent, PostContent } from '../lib/posts'
import Navigation from '../components/Navigation'
import CallToAction from '../components/CallToAction'
import Link from 'next/link'

type Props = {
  featuredPost: PostContent,
  posts: PostContent[];
  featuredPosts: PostContent[];
};
export default function Index ({ featuredPost, posts, featuredPosts }: Props) {
  return (
    <Layout>
      <BasicMeta url={'/'} />
      <OpenGraphMeta url={'/'} />
      <Navigation heroImage="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80">
        <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block text-green-600 xl:inline">{featuredPost.title}</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              {featuredPost.articleSummary}
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link href={'/article/' + featuredPost.slug}>
                  <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:px-10">
                    Read Article
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </Navigation>

      <FeaturedPostList posts={featuredPosts} />

      <div className="container mx-auto py-32 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
              <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
              From the blog
              </h2>
              <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
              </p>
          </div>
          <PostList posts={posts} />
      </div>
      <CallToAction />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const featuredPosts = listPostContent(1, 3, null, 'featured')
  return {
    props: {
      featuredPost: featuredPosts.pop(),
      featuredPosts,
      posts: listPostContent(1, 6, null, 'regular')
    }
  }
}
