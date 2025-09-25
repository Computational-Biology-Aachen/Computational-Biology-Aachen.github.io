import type { Post } from '$lib/types'
import { error } from '@sveltejs/kit'

export async function load() {
    try {
        let posts: Post[] = []

        const paths = import.meta.glob('/src/news/*.md', { eager: true })

        for (const path in paths) {
            const file = paths[path]
            const slug = path.split('/').at(-1)?.replace('.md', '')

            if (file && typeof file === 'object' && 'metadata' in file && slug) {
                const metadata = file.metadata as Omit<Post, 'slug'>
                const post = { ...metadata, slug } satisfies Post
                post.published && posts.push(post)
            }
        }

        posts = posts.sort((first, second) =>
            new Date(second.date).getTime() - new Date(first.date).getTime()
        )

        return { posts }
    } catch (e) {
        console.error('Failed to load news:', e)
        error(500, 'Failed to load news')
    }
}
