import { FC } from 'react'
import { FiBell, FiSearch } from 'react-icons/fi'

import Column from '@/ui/grid/Column'
import SquereButton from '@/ui/squere-button/SquereButton'

import Cart from './cart/Cart'

const HeaderButtons: FC = () => {
	return (
		<Column size={2} className='gap-5'>
			<SquereButton Icon={FiSearch} onClick={() => {}} />
			<SquereButton Icon={FiBell} onClick={() => {}} />
			<Cart />
		</Column>
	)
}

export default HeaderButtons
