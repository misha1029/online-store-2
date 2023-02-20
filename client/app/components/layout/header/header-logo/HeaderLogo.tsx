import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Column from '@/ui/grid/Column'

const HeaderLogo: FC = () => {
	return (
		<Column size={3}>
			<Link href='/' className='flex items-center -pl-4'>
				<Image
					src='/images/logo.svg'
					width={100}
					height={100}
					alt='shop'
					className='-mr-2'
				/>
				<span>
					<span className='text-white block font-light tracking-[0.14em]'>
						ONLINE
					</span>
					<span className='text-dark-gray tracking-[0.35em] block font-extralight text-sm'>
						STORE
					</span>
				</span>
			</Link>
		</Column>
	)
}

export default HeaderLogo
