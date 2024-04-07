import { useAuth } from '@/hooks/useAuth'
import { useProfile } from '@/hooks/useProfile'
import { Avatar, Typography } from '@mui/material'
import { FC } from 'react'

const AvatarUser: FC = () => {
    const { user } = useAuth()
    const { profile } = useProfile()

    return (
        <>
            {!!user ? (
                <Avatar
                    src={!!profile ? profile.avatarPath : ''}
                    alt='name'
                    variant='rounded'
                />
            ) : (
                <Typography
                    variant='h5'
                    sx={{ flexGrow: 1, textTransform: 'uppercase' }}
                >
                    Login
                </Typography>
            )}
        </>
    )
}

export default AvatarUser
