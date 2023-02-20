import { FC } from 'react'
import { FiUser } from 'react-icons/fi'

import Column from '@/ui/grid/Column'
import SquereButton from '@/ui/squere-button/SquereButton'

const HeaderProfile: FC = () => {
	return (
		<Column size={3} className='flex items-center'>
			<SquereButton Icon={FiUser} />
			<div className='ml-3'>
				<div className='text-gray text-sm'>Test Testovich</div>
			</div>
		</Column>
	)
}

export default HeaderProfile
