import { Post } from '@prisma/client'
import Link from 'next/link'
import { Skeleton } from './ui/skeleton'

export default function PostCard({ id, title, content, createdAt }: Post) {
  return (
    <li className='max-w-sm rounded opacity-80 shadow-sm transition hover:opacity-100 focus-within:opacity-100 sm:max-w-none sm:border-t sm:shadow-none'>
      <Link href={`/post/${id}`}>
        <div className='grid grid-cols-1 sm:grid-cols-3 sm:gap-2'>
          <Skeleton className='h-48 sm:h-36 sm:rounded-t-none' />
          <div className='col-span-2 p-4 flex flex-col justify-between gap-2 sm:gap-0'>
            <h2 className='font-semibold text-lg'>{title}</h2>
            <p className='text-slate-700 truncate'>{content}</p>
            <p className='text-sm text-slate-500'>
              {createdAt.toLocaleString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}
            </p>
          </div>
        </div>
      </Link>
    </li>
  )
}
