import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/layout/Layout'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

import { formatToCurrency } from '@/utils/format-to-currency'

import { IProductsPage } from '@/../pages'

const Shop: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout title='Shop' description='Catalog clousing'>
			<Row
				className='bg-dark-primary'
				style={{
					backgroundBlendMode: 'multiply',
					backgroundImage: 'url(/images/texture.jpg)'
				}}
			>
				{products.map((product, index) => (
					<Column size={index === 0 ? 3 : index === 4 ? 3 : 2} key={product.id}>
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
				))}
			</Row>
		</Layout>
	)
}

export default Shop
