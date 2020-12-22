import Link from 'next/link'
import React from 'react'
import { PostContent } from '../lib/posts'
import FeaturedPostItem from './FeaturedPostItem'

type Props = {
    posts: PostContent[];
};
export default function FeaturedPostList ({ posts }: Props) {
  return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3"></div>
            </div>
            <div className="container relative max-w-7xl mx-auto pt-6 px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                    Featured Articles
                    </h2>
                </div>
                <div className="mt-12 max-w-full mx-auto grid gap-5 lg:grid-cols-3">
                    {posts.map((it, i) => (
                        <FeaturedPostItem post={it} key={i} />
                    ))}
                    <div className="flex justify-center items-center">
                      <a href="/archive/featured" className="flex items-center justify-center text-green-600 font-bold border-4 border-gray-100 bg-gray-50 rounded-full p-5 shadow-lg hover:shadow-xl hover:bg-gray-100 hover:border-green-500">
                        More this way &rsaquo;
                      </a>
                    </div>
                </div>
            </div>
        </div>
  )
}
