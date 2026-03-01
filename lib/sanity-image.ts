import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder({
  projectId: '2z756ojn',
  dataset: 'production',
})

export function urlFor(source: any) {
  return builder.image(source)
}
