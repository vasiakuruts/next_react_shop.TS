import { useProfile } from '@/hooks/useProfile'
import { userService } from '@/services/user/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
    const { profile } = useProfile()
    if (!profile) return null

    const { invalidateQueries } = useQueryClient()

    const { mutate } = useMutation({
        mutationKey: ['toggle favorite'],
        mutationFn: () => userService.toggleFavorite(productId),
        onSuccess: () => invalidateQueries({ queryKey: ['get profile'] })
    })

    if (!profile) return null

    const isExists = profile.favorites.some(
        favorite => favorite.id === productId
    )
    return (
        <div>
            <button onClick={() => mutate()}>
                {isExists ? <AiFillHeart /> : <AiOutlineHeart />}
            </button>
        </div>
    )
}

export default FavoriteButton
