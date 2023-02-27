import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/layout/Layout'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

import HotInformation from './hot-information/HotInformation'
import HotSale from './hot-sale/HotSale'
import NewCatalog from './new-catalog/NewCatalog'
import NewProduct from './new-product/NewProduct'
import { IProductsPage } from '@/../pages'

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			<Row
				className='bg-dark-primary'
				style={{
					backgroundBlendMode: 'multiply',
					backgroundImage: 'url(/images/texture.jpg)'
				}}
			>
				<Column size={7} isPading={false}>
					<Image
						src='/images/main-4x.png'
						alt='main'
						width={819}
						height={727}
					/>
				</Column>
				<Column size={5} isPading={false} isCenter={false} className='flex-col'>
					<HotSale />
					<HotInformation />
				</Column>
			</Row>
			<Row
				className='bg-[#131313]'
				style={{
					backgroundBlendMode: 'multiply',
					backgroundImage: 'url(/images/texture.jpg)'
				}}
			>
				<Column size={7} isPading={false}>
					<NewProduct />
				</Column>
				<Column size={5} isPading={false}>
					<NewCatalog />
				</Column>
			</Row>
		</Layout>
	)
}

export default Home
