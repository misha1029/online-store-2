import cn from 'clsx'
import { FC } from 'react'
import { FiShoppingCart } from 'react-icons/fi'

import SquereButton from '@/ui/squere-button/SquereButton'

import { useCart } from '@/hooks/useCart'
import { useOutside } from '@/hooks/useOutside'

import { formatToCurrency } from '@/utils/format-to-currency'

import styles from './Cart.module.scss'
import CartItem from './cart-item/CartItem'

const Cart: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)

	const { cart, total } = useCart()

	/* 	const { push } = useRouter() */

	/* 	const { mutate } = useMutation(
		['create payment'],
		() => PaymentService.createPayment(total),
		{
			onSuccess(data) {
				push(data.confirmation.confirmation_url)
			}
		}
	) */

	return (
		<div className='relative' ref={ref}>
			<SquereButton
				Icon={FiShoppingCart}
				onClick={() => setIsShow(!isShow)}
				number={3}
			/>
			<div
				className={cn(
					'absolute top-[4.6rem] w-[18rem] -left-[11.7rem] bg-[#131313] px-5 py-3 text-sm menu',
					isShow ? 'open-menu' : 'close-menu'
				)}
			>
				<div className='font-normal mb-5 text-lg'>My cart</div>
				<div className={styles.cart}>
					{cart.length ? (
						cart.map(item => <CartItem item={item} key={item.id} />)
					) : (
						<div className='font-light'>Basket is empty!</div>
					)}
				</div>
				<div className={styles.footer}>
					<div>Total:</div>
					<div>{formatToCurrency(total)}</div>
				</div>
				<div className='text-center mb-2  mt-5'>
					<button className='btn-style' onClick={() => /* mutate() */ {}}>
						Payment
					</button>
				</div>
			</div>
		</div>
	)
}

export default Cart
