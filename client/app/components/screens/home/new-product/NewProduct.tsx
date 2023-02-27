import Image from 'next/image'
import { FC } from 'react'
import { FiHome } from 'react-icons/fi'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'
import SquereButton from '@/ui/squere-button/SquereButton'

const NewProduct: FC = () => {
	return (
		<Row isBorder={true} className='py-10 px-24'>
			<Column size={7} isBorder={false} className='px-14'>
				<div className='text-white'>
					<div className='text-sm'>NEW ARRIVAL</div>
					<h1 className='text-2xl font-normal mt-5 mb-8 font-serif'>
						NEW LORIAN EVENING DRESS DESING
					</h1>
					<div className='text-white/60 text-sm'>
						We are discovering a new fashion style, buy from the Lorian and
						become one of us.
					</div>
				</div>
			</Column>
			<Column size={4} className='pl-10' isBorder={false}>
				<div>
					<Image
						src='/images/arrival.jpg'
						height={230}
						width={230}
						alt='image'
					/>
				</div>
			</Column>
			<div className='ml-12'>
				<SquereButton Icon={FiHome} onClick={() => {}} />
			</div>
		</Row>
	)
}

export default NewProduct
