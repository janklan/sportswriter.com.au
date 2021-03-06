import React from 'react'
import { PostContent } from '../lib/posts'
import PostItemWithHeroImage from './PostItemWithHeroImage'
import PostItem from './PostItem'

type Props = {
  posts: PostContent[];

};
export default function PostList ({ posts }: Props) {
  return (
    <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-3 lg:gap-x-16 lg:gap-y-16">
      {posts.map((it, i) => (
          <PostItemWithHeroImage post={it} key={i} />
      ))}
    </div>
  )
}
