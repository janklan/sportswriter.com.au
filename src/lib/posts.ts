import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import yaml from 'js-yaml'

const postsDirectory = path.join(process.cwd(), 'src/posts')

export type PostContent = {
  readonly date: string;
  readonly type: string;
  readonly title: string;
  readonly slug: string;
  readonly tags?: string[];
  readonly articleSummary: string
  readonly author: string;
  readonly content: string;
  readonly heroImage: string;
};

let postCache: PostContent[]

function fetchPostContent (): PostContent[] {
  if (postCache) {
    return postCache
  }
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((it) => it.endsWith('.mdx'))
    .map((fileName) => {
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents, {
        engines: {
          yaml: (s) => yaml.safeLoad(s, { schema: yaml.JSON_SCHEMA }) as object
        }
      })

      const matterData = Object.assign(
        matterResult.data,
        {
          content: matterResult.content
        }) as PostContent

      return matterData
    })
  // Sort posts by date
  postCache = allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
  return postCache
}

export function countPosts (tag?: string, type?: string): number {
  return fetchPostContent()
    .filter(it => !tag || (it.tags && it.tags.includes(tag))) // if a tag is set, get rid of all that doesn't match
    .filter(it => !type || (it.type && it.type === type)) // if a post type is set, get rid of all that doesn't match
    .length
}

export function listPostContent (
  page: number,
  limit: number,
  tag?: string,
  type?: string
): PostContent[] {
  return fetchPostContent()
    .filter(it => !tag || (it.tags && it.tags.includes(tag))) // if a tag is set, get rid of all that doesn't match
    .filter(it => !type || (it.type && it.type === type)) // if a post type is set, get rid of all that doesn't match
    .slice((page - 1) * limit, page * limit)
}

export function listAllPostSlugs (): string[] {
  return fetchPostContent().map(p => p.slug)
}

export function findPostBySlug (slug: string): PostContent {
  return fetchPostContent()
    .find(it => it.slug === slug)
}
