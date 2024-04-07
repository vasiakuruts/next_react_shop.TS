import { InputHTMLAttributes } from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { IconType } from 'react-icons'

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    Icon?: IconType
    error?: string
    passwordProps?: UseFormRegisterReturn<'email' | 'password'>
}
