import cn from 'clsx'
import { forwardRef, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { IField } from './field.interface'

const FieldPassword = forwardRef<HTMLInputElement, IField>(
  (
    { placeholder, error, className, type = 'password', style, Icon, ...rest },
    ref
  ) => {
    const [isHidden, setIsHidden] = useState(false)

    return (
      <div className={cn('mb-4 ', className)} style={style}>
        <label>
          <span className='mb-1 block'>
            {Icon && <Icon className='mr-3' />}
            {placeholder}
          </span>
          <div className=' relative w-full'>
            <input
              ref={ref}
              type={isHidden ? 'text' : 'password'}
              placeholder={placeholder}
              {...rest}
              className={cn(
                'px-4 py-2 w-full outline-none border border-gray border-solid focus:border-primary transition-all rounded-lg shadow-sm ',
                {
                  'border-red': !!error
                }
              )}
            />
            <image
              className=' cursor-pointer absolute w-5 right-3 top-3 '
              onClick={() => setIsHidden(!isHidden)}
            >
              {isHidden ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </image>
          </div>
        </label>
        {error && <div className='text-red mt-1 text-sm'>{error}</div>}
      </div>
    )
  }
)
FieldPassword.displayName = 'FieldPasswort'
export default FieldPassword
