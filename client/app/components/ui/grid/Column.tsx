import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'

interface IColumn {
	size: number
	isCenter?: boolean
	className?: string
	isPading?: boolean
	isBorder?: boolean
}

const Column: FC<PropsWithChildren<IColumn>> = ({
	size,
	children,
	isCenter = true,
	className,
	isPading = true,
	isBorder = true
}) => {
	return (
		<div
			style={{
				gridColumn: `span ${size} / span ${size}`
			}}
			className={cn(
				'h-full flex ',
				{
					'justify-center items-center': isCenter,
					'px-3': isPading,
					'border-r-2 border-black border-solid': isBorder
				},
				className
			)}
		>
			{children}
		</div>
	)
}

export default Column
