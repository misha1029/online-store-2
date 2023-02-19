import { FC } from 'react'
import { IconType } from 'react-icons'

interface ISquereButton {
	Icon: IconType
	onClick: () => void
	number?: number
}

const SquereButton: FC<ISquereButton> = ({ Icon, onClick, number }) => {
	return (
		<button
			onClick={onClick}
			className='h-12 w-12 bg-black flex items-center justify-center hover:bg-[#111] transition-colors duration-200 relative'
		>
			{!!number && (
				<span className=' flex h-4 w-4 items-center justify-center rounded-full bg-primary p-0.5 text-[0.6rem] text-white absolute -top-1 -right-1'>
					{number}
				</span>
			)}

			<Icon color='#7D7D7D' size={20} />
		</button>
	)
}

export default SquereButton
