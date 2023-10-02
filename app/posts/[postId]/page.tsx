import Image from 'next/image'
import prisma from '@/lib/prisma'

type PostPageProps = {
  params: {
    postId: string
  }
}

export async function generateStaticParams() {
  const posts = await prisma.post.findMany()

  if (!posts) return []

  return posts.map(post => ({ postId: post.id }))
}

export default async function PostPage({ params }: PostPageProps) {
  const post = await prisma.post.findUnique({
    where: {
      id: params.postId,
    },
  })

  if (post) {
    return (
      <div className='max-w-4xl mx-auto p-4 mt-8'>
        <span className='text-sm text-slate-500'>
          {post.createdAt.toLocaleString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
          })}
        </span>
        <h1 className='font-semibold text-3xl text-slate-800 mb-6'>
          {post.title}
        </h1>
        {post.bannerUrl && <Image src={post.bannerUrl} alt={post.title} />}
        <div>
          {post.content.split('\n').map((para, i) => (
            <p key={i} className='my-4'>
              {para}
            </p>
          ))}
        </div>
      </div>
    )
  } else return null
}
