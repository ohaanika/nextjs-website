import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

export const POSTS_PATH = path.join(process.cwd(), 'data', 'posts_mdx')

export const getSlugSource = (slug) => {
  return fs.readFileSync(path.join(POSTS_PATH, slug, 'index.mdx'), 'utf-8').trim()
}

export const getAllPosts = () => {
  const getDirectories = (path) =>
    fs
      .readdirSync(path, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name)

  return getDirectories(POSTS_PATH).map((slug) => {
    const source = getSlugSource(slug)
    const { data } = matter(source)

    return {
      frontmatter: data,
      slug: slug,
    }
  })
}

export const getSinglePost = async (slug) => {
  const source = getSlugSource(slug)

  const { code, frontmatter } = await bundleMDX({
    source: source,
    cwd: path.join(POSTS_PATH, slug),
  })

  return {
    frontmatter,
    code,
  }
}
