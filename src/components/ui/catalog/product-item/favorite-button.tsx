import { useProfile } from '@/hooks/useProfile'
import { userService } from '@/services/user/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const FavoriteButton: FC<{ productId: number; size?: number }> = ({
    productId,
    size
}) => {
    const { profile } = useProfile()

    const queryClient = useQueryClient()

    const { mutate } = useMutation({
        mutationKey: ['toggle favorite'],
        mutationFn: () => userService.toggleFavorite(productId),
        onSuccess: () =>
            queryClient.invalidateQueries({ queryKey: ['get profile'] })
    })

    if (!profile) return null

    const isExists = profile.favorites.some(
        favorite => favorite.id === productId
    )

    return (
        <div>
            <button className=' text-primary z-20' onClick={() => mutate()}>
                {isExists ? (
                    <AiFillHeart size={size} />
                ) : (
                    <AiOutlineHeart size={size} />
                )}
            </button>
        </div>
    )
}

export default FavoriteButton
