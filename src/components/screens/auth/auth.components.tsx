import Button from '@/components/ui/button/button'
import Heading from '@/components/ui/heading/heading'
import Field from '@/components/ui/input/field'
import FieldPassword from '@/components/ui/input/field-password'
import Loader from '@/components/ui/loader/loader'
import Meta from '@/components/ui/meta/meta'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useAuthRedirect } from '@/hooks/useAuthRedirect'
import { IEmailPassword } from '@/store/user/user.interface'
import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { AiOutlineLock, AiOutlineMail } from 'react-icons/ai'
import { validEmail } from './valid-email'

const AuthComponents: FC = () => {
    useAuthRedirect()
    const { isLoading } = useAuth()
    const { login, register } = useActions()

    const [type, setType] = useState<'login' | 'register'>('login')
    const {
        register: formRegister,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<IEmailPassword>({
        mode: 'onChange'
    })
    const onSubmit: SubmitHandler<IEmailPassword> = data => {
        if (type === 'login') {


            login(data)
        } else register(data)
        reset()
    }
    return (
        <Meta title='Auth'>
            <section className='flex h-screen '>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='rounded-lg bg-white shadow-sm border p-8 m-auto  max-w-md'
                >
                    <Heading className='capitalize text-center mb-4'>
                        {type}
                    </Heading>
                    {isLoading ? (
                        <Loader />
                    ) : (
                        <>
                            <Field
                                {...formRegister('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: validEmail,
                                        message:
                                            'Please enter a valid email address'
                                    }
                                })}
                                placeholder='Email'
                                error={errors.email?.message}
                                Icon={AiOutlineMail}
                            />
                            <FieldPassword
                                {...formRegister('password', {
                                    required: 'Password is required',
                                    minLength: {
                                        value: 6,
                                        message:
                                            'Min length should more 6 symbols'
                                    }
                                })}
                                placeholder='Password'
                                error={errors.password?.message}
                                Icon={AiOutlineLock}
                            />
                            <Button type='submit' variant='orange'>
                                Let's go!
                            </Button>
                            <button
                                type='button'
                                className='inline-block opacity-50 mb-3 ml-5 capitalize'
                                onClick={() =>
                                    setType(
                                        type === 'login' ? 'register' : 'login'
                                    )
                                }
                            >
                                {type === 'login' ? 'register' : 'login'}
                            </button>
                        </>
                    )}
                </form>
            </section>
        </Meta>
    )
}

export default AuthComponents
