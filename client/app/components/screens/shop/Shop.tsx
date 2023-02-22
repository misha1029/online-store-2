import { FC } from 'react'

import Layout from '@/layout/Layout'

import Row from '@/ui/grid/Row'

import ProductItem from './ProductItem'
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
					<ProductItem key={product.id} product={product} index={index} />
				))}
			</Row>
		</Layout>
	)
}

export default Shop
