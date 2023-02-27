import { useRouter } from 'next/router'
import { FC, useEffect, useState } from 'react'

import Layout from '@/layout/Layout'

import { IEmailPassword } from '@/store/auth/auth.types'

import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'

import styles from './Auth.module.scss'

const Auth: FC = () => {
	const { isLoggedIn } = useAuth()

	const { push } = useRouter()

	const { login, register } = useActions()

	useEffect(() => {
		if (isLoggedIn) push('/')
	}, [isLoggedIn])

	const [inputData, setInputData] = useState<IEmailPassword>({
		email: '',
		password: ''
	})
	return (
		<Layout title='Auth'>
			<div className={styles.container}>
				<h1 className={styles.title}>Auth</h1>
				<div className={styles.input}>
					<input
						onChange={e =>
							setInputData({ ...inputData, email: e.target.value })
						}
						value={inputData.email}
						placeholder='Email...'
					/>
				</div>
				<div className={styles.input}>
					<input
						type='password'
						onChange={e =>
							setInputData({ ...inputData, password: e.target.value })
						}
						value={inputData.password}
						placeholder='Password...'
					/>
				</div>
				<div className={styles.btn}>
					<button className='btn-style mr-4' onClick={() => login(inputData)}>
						Login
					</button>
					<button className='btn-style' onClick={() => register(inputData)}>
						Register
					</button>
				</div>
			</div>
		</Layout>
	)
}

export default Auth
