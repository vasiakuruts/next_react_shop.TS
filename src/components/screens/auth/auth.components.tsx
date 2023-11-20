import Button from '@/components/ui/button/button'
import Heading from '@/components/ui/heading/heading'
import Meta from '@/components/ui/meta/meta'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { FC, useState } from 'react'
import { useForm } from 'react-hook-form'

const AuthComponents: FC = () => {
  const { isLoading } = useAuth()
  const { login, register } = useActions()

  const [type, setType] = useState<'login' | 'register'>('login')
  const {} = useForm()
  return (
    <Meta title='Auth'>
      <Heading>Auth</Heading>
      <Button variant='orange'>Auth</Button>
    </Meta>
  )
}

export default AuthComponents
