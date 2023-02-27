import Link from 'next/link'
import { FC, useEffect } from 'react'
import { FiUser } from 'react-icons/fi'

import Column from '@/ui/grid/Column'
import SquereButton from '@/ui/squere-button/SquereButton'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

const HeaderProfile: FC = () => {
	const { isLoggedIn } = useAuth()
	const { logout } = useActions()
	return (
		<Column size={3} className='flex items-center'>
			{isLoggedIn ? (
				<>
					<SquereButton Icon={FiUser} />
					<div className='ml-3'>
						<div className='text-gray text-sm'>Test Testovich</div>
						<div className='btn-style'>
							<button onClick={() => logout()}>Logout</button>
						</div>
					</div>
				</>
			) : (
				<Link className='btn-style' href='/auth'>
					Go to Auth
				</Link>
			)}
		</Column>
	)
}

export default HeaderProfile
