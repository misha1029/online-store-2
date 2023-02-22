import { FC } from 'react'
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi'

import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'

import { ICartItem } from '@/types/cart.interface'

const CartActions: FC<{ item: ICartItem }> = ({ item }) => {
	const { removeFromCart, changeQuantity } = useActions()

	const { cart } = useCart()

	const quantity = cart.find(cartItem => cartItem.id === item.id)?.quantity

	return (
		<div className='mt-3'>
			<div className='flex items-flex gap-3'>
				<button
					onClick={() => changeQuantity({ id: item.id, type: 'minus' })}
					disabled={quantity === 1}
				>
					<FiMinus fontSize={13} />
				</button>
				<input
					disabled
					readOnly
					value={quantity}
					className='w-10 bg-transparent text-center text-sm'
				/>

				<button onClick={() => changeQuantity({ id: item.id, type: 'plus' })}>
					<FiPlus fontSize={13} />
				</button>
				<button
					className='ml-3 text-dark-primary'
					onClick={() => removeFromCart({ id: item.id })}
				>
					<FiTrash />
				</button>
			</div>
		</div>
	)
}

export default CartActions
