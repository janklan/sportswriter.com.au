import { PostContent } from '../lib/posts'
import { getAuthor } from '../lib/authors'
import Date from './Date'
import { parseISO } from 'date-fns'

type Props = {
  post: PostContent;
};
export default function FeaturedPostItem ({ post }: Props) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="flex-shrink-0">
        <a href={'/article/' + post.slug}>
          <img className="h-48 w-full object-cover" src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80" alt="" />
        </a>
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
            <a href={'/article/' + post.slug} className="block mt-2" title={'Read article: ' + post.title}>
              <p className="text-xl font-semibold text-green-600">
                  {post.title}
              </p>
              <p className="mt-3 text-base text-gray-500">
                {post.articleSummary}
              </p>
            </a>
        </div>
        <div className="mt-6 flex items-center">
            <div className="flex-shrink-0">
                <span className="sr-only">{getAuthor(post.author).name}</span>
                <img className="h-10 w-10 rounded-full" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </div>
            <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">
                {getAuthor(post.author).name}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
                <Date date={parseISO(post.date)} />
                <span aria-hidden="true">
                  &middot;
                </span>
                <span>
                4 min read
                </span>
            </div>
            </div>
        </div>
      </div>
  </div>

  )
}
