export type Blog = {
    id: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    revisedAt: string
    title: string
    body: string
    date: Date
    thumbnail: ThumbnailType
}

type ThumbnailType = {
    url: string
    height: number
    width: number
}