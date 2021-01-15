import Link from 'next/link'
import { TagContent } from '../lib/tags'

type Props = {
  tag: TagContent;
};
export default function TagButton ({ tag }: Props) {
  return (
    <Link href={'/archive/tags/[[...slug]]'} as={`/archive/tags/${tag.slug}`}>
      <a className="inline-block rounded-full font-medium leading-none py-2 px-3 focus:outline-none bg-sportswriter-50 dark:bg-sportswriter-800 text-sportswriter-700 dark:text-gray-300">{tag.name}</a>
    </Link>
  )
}
