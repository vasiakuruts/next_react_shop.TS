import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'orange' | 'white'
}

const Button: FC<PropsWithChildren<IButton>> = ({
  children,
  className,
  variant,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(
        'rounded-xl font-medium shadow px-6 py-2',
        {
          'text-white bg-primary': variant === 'orange',
          'text-primary bg-white': variant === 'white'
        },
        className
      )}
    >
      {children}
    </button>
  )
}

export default Button
