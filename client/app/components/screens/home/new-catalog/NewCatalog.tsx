import { FC } from 'react'
import { FiArrowRight } from 'react-icons/fi'

import SquereButton from '@/ui/squere-button/SquereButton'

const NewCatalog: FC = () => {
	return (
		<div className='flex px-16'>
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
		</div>
	)
}

export default NewCatalog
