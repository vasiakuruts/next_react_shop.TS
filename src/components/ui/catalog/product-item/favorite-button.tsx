// import { useProfile } from '@/hooks/useProfile'
// import { FC } from 'react'
// import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

// const FavoriteButton: FC<{ productId: number }> = ({ productId }) => {
//   const { profile } = useProfile()

//   const isExists = profile.find(
//     cartItem => cartItem.product.id === product.id
//   )
//   return (
//     <div>
//       <button
//         onClick={() =>
//           isExists
//             ? removeFromCart({ id: isExists.id })
//             : addToCart({
//                 product,
//                 quantity: 1,
//                 price: product.price
//               })
//         }
//       >
//         {isExists ? <AiFillHeart /> : <AiOutlineHeart />}
//       </button>
//     </div>
//   )
// }

// export default FavoriteButton
