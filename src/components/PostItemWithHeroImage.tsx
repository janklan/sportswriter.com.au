import { PostContent } from '../lib/posts'
import { getAuthor } from '../lib/authors'
import Date from './Date'
import { parseISO } from 'date-fns'

type Props = {
  post: PostContent;
};
export default function PostItemWithHeroImage ({ post }: Props) {
  return (
    <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      { post.heroImage
        ? <div className="flex-shrink-0">
            <a href={'/article/' + post.slug}>
              <img className="h-48 w-full object-cover" src={post.heroImage} alt="" />
            </a>
          </div>
        : null
      }
      <div className="flex-1 bg-white dark:bg-gray-900 p-6 flex flex-col justify-between">
        <div className="flex-1">
            <a href={'/article/' + post.slug} className="block mt-2" title={'Read article: ' + post.title}>
              <p className="text-xl font-semibold text-sportswriter">
                  {post.title}
              </p>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-300">
                {post.articleSummary}
              </p>
            </a>
        </div>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
              <span className="sr-only">{getAuthor(post.author).name}</span>
              <img className="h-10 w-10 rounded-full" src={getAuthor(post.author).portrait} alt="" />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-300">
                {getAuthor(post.author).name}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
                <Date date={parseISO(post.date)} />
            </div>
          </div>
        </div>
      </div>
  </div>

  )
}
