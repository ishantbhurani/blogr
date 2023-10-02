import Link from 'next/link'
import RegisterForm from './form'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function RegistePage() {
  const session = await getServerSession()
  if (session) return redirect('/')

  return (
    <div className='min-h-screen bg-slate-100 flex items-center justify-center'>
      <div className='sm:bg-white sm:shadow-xl rounded-xl px-8 pb-8 pt-12 space-y-12'>
        <h1 className='font-semibold capitalize text-2xl'>
          Create your account
        </h1>
        <RegisterForm />
        <p className='text-center'>
          Have an account?{' '}
          <Link
            href='/login'
            className='text-indigo-500 hover:underline focus:underline outline-none'
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
