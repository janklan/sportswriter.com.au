import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../../components/Layout'
import BasicMeta from '../../../components/meta/BasicMeta'
import OpenGraphMeta from '../../../components/meta/OpenGraphMeta'
import PostList from '../../../components/PostList'
import Pagination from '../../../components/Pagination'
import config from '../../../lib/config'
import { countPosts, listPostContent, PostContent } from '../../../lib/posts'
import { listTags, TagContent } from '../../../lib/tags'
import TagLink from '../../../components/TagLink'
import Navigation from '../../../components/Navigation'

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  page: number;
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Page ({ posts, tags, pagination, page }: Props) {
  const url = `/archive/page/${page}`
  const title = 'All posts'
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <Navigation />
      <div className="container max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl">
          <a href="/archive">Archive page {page}</a>
        </h1>
        <PostList posts={posts} />
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
      { tags &&
        <ul className={'categories'}>
          {tags.map((it, i) => (
            <li key={i}>
              <TagLink tag={it} />
            </li>
          ))}
        </ul>
      }
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const page = parseInt(params.page as string)
  const posts = listPostContent(page, config.posts_per_page)
  const tags = listTags()
  const pagination = {
    current: page,
    pages: Math.ceil(countPosts() / config.posts_per_page)
  }
  return {
    props: {
      page,
      posts,
      tags,
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
