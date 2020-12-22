import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../components/Layout'

import DefaultErrorPage from 'next/error'

import Date from '../../components/Date'
import TagButton from '../../components/TagButton'
import { getTag } from '../../lib/tags'
import { getAuthor } from '../../lib/authors'
import { parseISO } from 'date-fns'

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
      <Navigation />
      <div className="relative py-16 bg-white dark:bg-gray-900 overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <h1>
              <span className="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-gray-300 sm:text-4xl">{post.title}</span>
            </h1>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                  <span className="sr-only">{getAuthor(post.author).name}</span>
                  <img className="h-10 w-10 rounded-full" src={getAuthor(post.author).portrait} alt="" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-400">
                    {getAuthor(post.author).name}
                </p>
                <div className="flex space-x-1 text-sm text-gray-500">
                    <Date date={parseISO(post.date)} />
                    <span aria-hidden="true">&middot;</span>
                    <span>{post.minutesToRead} min read</span>
                </div>
              </div>
            </div>
            <p className="mt-8 text-xl text-gray-500 dark:text-gray-300 leading-8">{post.articleSummary}</p>
          </div>
          <div className="mt-6 prose prose-green prose-lg text-gray-500 dark:text-gray-400 mx-auto">
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
    fallback: false
  }
}
