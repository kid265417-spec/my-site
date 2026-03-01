import { client } from "@/lib/sanity";
import HomeClient from "./home-client";

async function getPhotos() {
  const query = `*[_type == "photography"] | order(publishedAt desc) {
    _id,
    title,
    image,
    category,
    description,
    publishedAt
  }`;
  try {
    return await client.fetch(query);
  } catch {
    return [];
  }
}

export default async function HomePage() {
  const photos = await getPhotos();
  return <HomeClient photos={photos} />;
}
