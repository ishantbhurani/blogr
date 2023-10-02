import PostCard from '@/components/post-card'
import prisma from '@/lib/prisma'

export default async function Home() {
  const posts = await prisma.post.findMany()

  return (
    <div className='max-w-4xl mx-auto mt-12 px-4'>
      <h1 className='font-semibold text-2xl text-center sm:text-left'>
        Latest
      </h1>
      <ul className='flex flex-col items-center justify-center mt-6 space-y-4'>
        {posts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
      </ul>
    </div>
  )
}
