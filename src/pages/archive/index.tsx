import { GetStaticProps } from 'next'
import Layout from '../../components/Layout'
import BasicMeta from '../../components/meta/BasicMeta'
import OpenGraphMeta from '../../components/meta/OpenGraphMeta'
import PostList from '../../components/PostList'
import config from '../../lib/config'
import { countPosts, listPostContent, PostContent } from '../../lib/posts'
import { listTags, TagContent } from '../../lib/tags'
import Navigation from '../../components/Navigation'
import Pagination from '../../components/Pagination'
import TagLink from '../../components/TagLink'
import Breadcrumb from '../../components/Breadcrumb'

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index ({ posts, tags, pagination }: Props) {
  const url = '/archive'
  const title = 'All posts'
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <Navigation />
      <div className="container max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl text-gray-300">
          <Breadcrumb href="/archive">Archive</Breadcrumb>
        </h1>
        <div className="mb-16">
          <PostList posts={posts} />
        </div>
        { pagination &&
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: (page) => (page === 1 ? '/archive' : '/archive/page/[page]'),
            as: (page) => (page === 1 ? null : '/archive/page/' + page)
          }}
        />
      }
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page)
  const tags = listTags()
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page)
  }
  return {
    props: {
      posts,
      tags,
      pagination
    }
  }
}
