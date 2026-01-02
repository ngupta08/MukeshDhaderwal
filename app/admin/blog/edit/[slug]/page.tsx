import BlogForm from '@/components/admin/BlogForm'
import { getBlogPostBySlugAdmin } from '@/lib/blog'
import { notFound } from 'next/navigation'

interface EditBlogPostPageProps {
  params: {
    slug: string
  }
}

export default async function EditBlogPostPage({ params }: EditBlogPostPageProps) {
  const post = await getBlogPostBySlugAdmin(params.slug)
  
  if (!post) {
    notFound()
  }

  return <BlogForm mode="edit" post={post} />
}

