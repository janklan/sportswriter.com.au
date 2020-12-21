import Link from 'next/link'
import { TagContent } from '../lib/tags'

type Props = {
  tag: TagContent;
};
export default function TagButton ({ tag }: Props) {
  return (
    <Link href={'/archive/tags/[[...slug]]'} as={`/archive/tags/${tag.slug}`}>
      <a className="inline-block rounded-full font-medium leading-none py-2 px-3 focus:outline-none bg-green-50 text-green-700">{tag.name}</a>
    </Link>
  )
}
