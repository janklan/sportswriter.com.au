import { generateAuthorMap, getAuthor } from '../../lib/authors'

test('author map works', () => {
  const authorMap = generateAuthorMap()
  expect(pagination).toStrictEqual([
    { page: 1, current: false, excerpt: false },
    { page: null, current: false, excerpt: true },
    { page: 4, current: false, excerpt: false },
    { page: 5, current: true, excerpt: false },
    { page: 6, current: false, excerpt: false },
    { page: null, current: false, excerpt: true },
    { page: 8, current: false, excerpt: false }
  ])
})
