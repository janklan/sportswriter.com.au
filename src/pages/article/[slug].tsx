import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../components/Layout'

import DefaultErrorPage from 'next/error'

import Date from '../../components/Date'
import Author from '../../components/Author'
import TagButton from '../../components/TagButton'
import { getAuthor } from '../../lib/authors'
import { getTag } from '../../lib/tags'

import BasicMeta from '../../components/meta/BasicMeta'
import OpenGraphMeta from '../../components/meta/OpenGraphMeta'

import { listAllPostSlugs, findPostBySlug, PostContent } from '../../lib/posts'

import renderToString from 'next-mdx-remote/render-to-string'
import hydrate from 'next-mdx-remote/hydrate'
import Navigation from '../../components/Navigation'

type Props = {
  post: PostContent,
  content: string
};
export default function Index ({ post, content }: Props) {
  if (!post) {
    return <DefaultErrorPage statusCode={404} />
  }

  const url = `/article/${post.slug}`
  const title = post.title

  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <Navigation></Navigation>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">{post.title}</span>
            </h1>
            <p className="mt-8 text-xl text-gray-500 leading-8">{post.articleSummary}</p>
          </div>
          <div className="mt-6 prose prose-green prose-lg text-gray-500 mx-auto">
            {hydrate(content)}
          </div>
        </div>
        <ul className="text-lg max-w-prose mx-auto flex space-x-2 py-8">
          {post.tags && post.tags.map((it, i) => (
            <li key={i}>
              <TagButton tag={getTag(it)} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }: {params: {slug?: string}}) => {
  const post: PostContent = findPostBySlug(params.slug)

  return {
    props: {
      post: post || null,
      content: await renderToString(post.content)
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = listAllPostSlugs().flatMap(slug => `/article/${slug}`)
  return {
    paths: paths,
    fallback: true
  }
}
