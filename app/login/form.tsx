'use client'

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { toast } from '@/components/ui/use-toast'

export default function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
        callbackUrl,
      })

      if (!res?.error) router.push(callbackUrl)
      else throw new Error('Invalid email or password')
    } catch (error) {
      console.error(error)
      toast({
        variant: 'destructive',
        title: 'Uh oh! Something went wrong.',
        description: (error as Error).message,
      })
    }
  }

  return (
    <form onSubmit={onSubmit} className='space-y-12 max-w-[25rem] sm:w-[25rem]'>
      <div className='grid items-center gap-1.5'>
        <Label htmlFor='email'>Email</Label>
        <Input
          type='email'
          id='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className='bg-transparent'
        />
      </div>
      <div className='grid items-center gap-1.5'>
        <Label htmlFor='password'>Password</Label>
        <Input
          type='password'
          id='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className='bg-transparent'
        />
      </div>
      <div className='w-full'>
        <Button type='submit' size='lg' className='w-full'>
          Login
        </Button>
      </div>
    </form>
  )
}
