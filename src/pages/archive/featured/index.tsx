import { GetStaticProps } from 'next'
import Layout from '../../../components/Layout'
import BasicMeta from '../../../components/meta/BasicMeta'
import OpenGraphMeta from '../../../components/meta/OpenGraphMeta'
import FeaturedPostItem from '../../../components/FeaturedPostItem'
import config from '../../../lib/config'
import { countPosts, listPostContent, PostContent } from '../../../lib/posts'
import Navigation from '../../../components/Navigation'
import Pagination from '../../../components/Pagination'
import Breadcrumb from '../../../components/Breadcrumb'

type Props = {
  posts: PostContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index ({ posts, pagination }: Props) {
  const url = '/archive/featured'
  const title = 'Featured articles'
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <Navigation />
      <div className="container max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-gray-300">
          <Breadcrumb href="/archive">Archive</Breadcrumb> / <Breadcrumb>Featured</Breadcrumb>
        </h1>
        <div className="mt-12 max-w-full mx-auto grid gap-12 gap-y-16 lg:grid-cols-3 mb-16">
            {posts.map((it, i) => (
                <FeaturedPostItem post={it} key={i} />
            ))}
        </div>
        { pagination &&
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? '/archive/featured' : '/archive/featured/page/[page]'),
            as: (page) => (page === 1 ? null : '/archive/featured/page/' + page)
          }}
        />
      }
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page, null, 'featured')
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page)
  }
  return {
    props: {
      posts,
      pagination
    }
  }
}
