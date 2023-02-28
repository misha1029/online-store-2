import { FC } from 'react'
import { FiArrowRight } from 'react-icons/fi'

import Column from '@/ui/grid/Column'
import Row from '@/ui/grid/Row'
import SquereButton from '@/ui/squere-button/SquereButton'

const NewCatalog: FC = () => {
	{
		/* <Row isBorder={true} className='py-10 px-24'>
			<div className='text-white pl-16 pr-28'>
				<div className='text-sm'>NEW ARRIVAL</div>
				<h1 className='text-2xl font-normal mt-5 mb-8 font-serif'>
					OUR NEW DRESS COLLECTION
				</h1>
				<div className='text-white/60 text-sm  pr-10'>
					Conquer city tops in comfort wiht lorian dress cllection
				</div>
			</div>
			<div className=''>
				<SquereButton Icon={FiArrowRight} onClick={() => {}} />
			</div>
		</Row>
	)
} */
	}
	return (
		<Row isBorder={false} className='py-10 px-24'>
			<Column size={10} isBorder={false} className='pr-32'>
				<div className='text-white'>
					<div className='text-sm'>NEW ARRIVAL</div>
					<h1 className='text-2xl font-normal mt-5 mb-8 font-serif'>
						OUR NEW DRESS COLLECTION
					</h1>
					<div className='text-white/60 text-sm  pr-10'>
						Conquer city tops in comfort wiht lorian dress cllection
					</div>
				</div>
			</Column>
			<SquereButton Icon={FiArrowRight} onClick={() => {}} />
		</Row>
	)
}

export default NewCatalog
