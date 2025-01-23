import { Suspense } from "react"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import BlogDetail from "@/components/Blog/BlogDetail"
import { fetchBlogDetail } from "@/services/api"

interface BlogPostPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { id } = await params
  const post = await fetchBlogDetail(id)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.title,
    openGraph: {
      title: post.title,
      images: [post.imageUrl],
      type: "article",
      authors: [post.author],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params
  const post = await fetchBlogDetail(id)

  if (!post) {
    notFound()
  }

  return (
    <Suspense>
      <BlogDetail blog={post} />
    </Suspense>
  )
}
