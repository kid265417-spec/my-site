import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: '2z756ojn',  // ← 改成这个！
  dataset: 'production',
  apiVersion: '2024-03-01',
  useCdn: true,
  // token 保持注释
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}