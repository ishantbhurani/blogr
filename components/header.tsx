import Link from 'next/link'

export default function Header() {
  return (
    <header className='shadow-sm'>
      <div className='max-w-6xl mx-auto py-4'>
        <div className='text-center'>
          <Link
            href='/'
            className='font-semibold text-3xl outline-none transition hover:text-slate-700 focus-visible:text-slate-700'
          >
            Blogr
          </Link>
        </div>
      </div>
    </header>
  )
}
