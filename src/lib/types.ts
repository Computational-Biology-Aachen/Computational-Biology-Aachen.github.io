export type Categories = 'sveltekit' | 'svelte'

export type Post = {
    title: string
    slug: string
    description: string
    date: string
    categories: Categories[]
    published: boolean
}
export type Member = {
    name: string
    order: number
    slug: string
    mail?: string
    github?: string
    gitlab?: string
    website?: string
    orcid?: string
}


export type Publication = {
    title: string
    date: string
    doi: string
    authors: string[]
}

export type SoftwareProject = {
    title: string
    description: string
    github?: string
    gitlab?: string
    doi?: string
}
