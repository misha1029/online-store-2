import { FC } from 'react'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'

const HotInformation: FC = () => {
	return (
		<Row isBorder={false}>
			<Column
				size={3}
				className='flex-col border-t-2 border-black py-12 font-serif'
			>
				<div className='font-normal text-4xl text-white'>100k</div>
				<div className='text-white/60 text-sm'>Customers</div>
			</Column>
			<Column
				size={9}
				className='flex-col border-t-2 border-black'
				isBorder={false}
			>
				<div className='p-10'>
					<div className='font-normal text-white mb-2'>New collectyon</div>
					<div className='text-white/60 text-sm'>
						The red dress was inspired by a love of fashion and a fear of
						complacency. Our challenge was to create a dress.
					</div>
				</div>
			</Column>
		</Row>
	)
}

export default HotInformation
