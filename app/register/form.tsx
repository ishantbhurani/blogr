'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'

export default function RegisterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { toast } = useToast()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      })
      if (res.ok) {
        signIn()
      } else {
        throw new Error((await res.json()).error)
      }
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
        <Label htmlFor='name'>Full Name</Label>
        <Input
          type='type'
          id='name'
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className='bg-transparent'
        />
      </div>
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
          Register
        </Button>
      </div>
    </form>
  )
}
