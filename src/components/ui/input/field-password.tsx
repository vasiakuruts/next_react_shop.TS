import {
    FormControl,
    IconButton,
    Input,
    InputAdornment,
    InputLabel
} from '@mui/material'
import { forwardRef, useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { IField } from './field.interface'

const FieldPassword = forwardRef<HTMLInputElement, IField>(
    ({ placeholder, error, Icon, passwordProps }, ref) => {
        const [showPassword, setShowPassword] = useState(false)

        const handleClickShowPassword = () => setShowPassword(show => !show)

        const handleMouseDownPassword = (
            event: React.MouseEvent<HTMLButtonElement>
        ) => {
            event.preventDefault()
        }

        return (
            <>
                <FormControl sx={{ m: 1, width: '25ch' }} variant='standard'>
                    <InputLabel htmlFor='standard-adornment-password'>
                        <span className='mb-1 flex'>
                            {Icon && <Icon />} {placeholder}
                        </span>
                    </InputLabel>
                    <Input
                        {...passwordProps}
                        {...ref}
                        id='standard-adornment-password'
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? (
                                        <AiOutlineEyeInvisible />
                                    ) : (
                                        <AiOutlineEye />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
            </>
        )
    }
)
FieldPassword.displayName = 'FieldPassword'
export default FieldPassword
