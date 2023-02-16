import { FC } from 'react'

import spinerImage from './Spinner.svg'

const Loader: FC = () => {
	return <img src={spinerImage.src} alt='loader' width={200} height={200} />
}

export default Loader
