import { FC } from 'react'
import { FiBell, FiSearch, FiShoppingCart } from 'react-icons/fi'

import Column from '@/ui/grid/Column'
import SquereButton from '@/ui/squere-button/SquereButton'

const HeaderButtons: FC = () => {
	return (
		<Column size={2} className='gap-5'>
			<SquereButton Icon={FiSearch} onClick={() => {}} />
			<SquereButton Icon={FiBell} onClick={() => {}} />
			<SquereButton Icon={FiShoppingCart} onClick={() => {}} number={3} />
		</Column>
	)
}

export default HeaderButtons
