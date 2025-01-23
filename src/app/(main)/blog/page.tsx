import { Suspense } from "react"
import { BlogList } from "@/components/Blog/BlogList"
import { PageHeader } from "@/components/Header"
import { fetchBlogs } from "@/services/api"

export const metadata = {
  title: "Blog",
  description: "Read our latest articles about baking and recipes",
}

export default async function BlogPage() {
  const posts = await fetchBlogs()

  return (
    <>
      <PageHeader
        title="Baking Blog"
        subtitle="Tips, techniques, and stories from our kitchen"
      />
      <Suspense>
        <BlogList posts={posts} />
      </Suspense>
    </>
  )
}
