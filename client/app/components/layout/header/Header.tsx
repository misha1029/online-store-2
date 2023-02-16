import { FC } from 'react'

import styles from './Header.module.scss'
import HeaderButtons from './header-buttons/HeaderActions'
import HeaderLogo from './header-logo/HeaderLogo'
import HeaderProfile from './header-profile/HeaderProfile'
import HeaderMenu from './menu/HeaderMenu'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<HeaderLogo />
			<HeaderMenu />
			<HeaderButtons />
			<HeaderProfile />
		</header>
	)
}

export default Header
