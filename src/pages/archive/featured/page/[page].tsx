import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../../../components/Layout'
import BasicMeta from '../../../../components/meta/BasicMeta'
import OpenGraphMeta from '../../../../components/meta/OpenGraphMeta'
import PostItemWithHeroImage from '../../../../components/PostItemWithHeroImage'
import Pagination from '../../../../components/Pagination'
import config from '../../../../lib/config'
import { countPosts, listPostContent, PostContent } from '../../../../lib/posts'
import Navigation from '../../../../components/Navigation'
import Breadcrumb from '../../../../components/Breadcrumb'

type Props = {
  posts: PostContent[];
  page: number;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Page ({ posts, pagination, page }: Props) {
  const url = `/archive/featured/page/${page}`
  const title = 'Featured archives, page ' + page
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <Navigation />
      <div className="container max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-gray-300">
          <Breadcrumb href="/archive">Archive</Breadcrumb>
          {' / '}
          <Breadcrumb href="/archive/featured">Featured</Breadcrumb>
          {' / '}
          <Breadcrumb>Page {page}</Breadcrumb>
        </h1>
        <div className="mt-12 max-w-full mx-auto grid gap-12 gap-y-16 lg:grid-cols-3 mb-16">
            {posts.map((it, i) => (
                <PostItemWithHeroImage post={it} key={i} />
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
        />}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params.page as string)
  const posts = listPostContent(page, config.posts_per_page, null, 'featured')
  const pagination = {
    current: page,
    pages: Math.ceil(countPosts() / config.posts_per_page)
  }
  return {
    props: {
      page,
      posts,
      pagination
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages = Math.ceil(countPosts() / config.posts_per_page)
  const paths = Array.from(Array(pages - 1).keys()).map((it) => ({
    params: { page: (it + 2).toString() }
  }))
  return {
    paths: paths,
    fallback: false
  }
}
