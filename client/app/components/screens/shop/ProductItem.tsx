import Image from 'next/image'
import { FC } from 'react'

import Column from '@/ui/grid/Column'

import { IProduct } from '@/types/product.interface'

import { formatToCurrency } from '@/utils/format-to-currency'

interface IProductItem {
	product: IProduct
	index: number
}
const ProductItem: FC<IProductItem> = ({ product, index }) => {
	return (
		<Column size={index === 0 ? 3 : index === 4 ? 3 : 2}>
			<div className='text-white text-center mb-3'>
				<div
					className='flex items-center justify-center mb-5'
					style={{
						height: 283
					}}
				>
					<Image
						src={product.images[0]}
						alt={product.name}
						width={220}
						height={220}
					/>
				</div>
				<h2 className='font-serif'>{product.name}</h2>
				<div className='font-serif mb-2 text-lg'>
					{formatToCurrency(product.price)}
				</div>
				<button className='btn-style'>Add to cart</button>
			</div>
		</Column>
	)
}

export default ProductItem
