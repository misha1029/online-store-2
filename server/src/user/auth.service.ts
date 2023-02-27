import {
	BadRequestException,
	Injectable,
	UnauthorizedException
} from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import { hash, verify } from 'argon2'

import { PrismaService } from 'src/prisma.service'
import { AuthDto } from './dto/auth.dto'

@Injectable()
export class AuthService {
	constructor(private prisma: PrismaService, private jwtService: JwtService) {}

	async login(dto: AuthDto) {
		const user = await this.validateUser(dto)

		return {
			user: this.returnUserFields(user),
			accessToken: await this.issueAccessToken(String(user.id))
		}
	}

	async register(dto: AuthDto) {
		const oldUser = await this.prisma.user.findUnique({
			where: { email: dto.email }
		})

		if (oldUser)
			throw new BadRequestException(
				'User with this email is already in the system'
			)

		const user = await this.prisma.user.create({
			data: {
				email: dto.email,
				password: await hash(dto.password)
			}
		})

		return {
			user: this.returnUserFields(user),
			accessToken: await this.issueAccessToken(String(user.id))
		}
	}

	async validateUser(dto: AuthDto): Promise<User> {
		const user = await this.prisma.user.findUnique({
			where: {
				email: dto.email
			}
		})

		if (!user) throw new UnauthorizedException('User not found')

		const isValidPassword = await verify(user.password, dto.password)
		if (!isValidPassword) throw new UnauthorizedException('Invalid password')

		return user
	}

	async issueAccessToken(userId: string) {
		const data = { id: userId }

		const accessToken = await this.jwtService.signAsync(data, {
			expiresIn: '31d'
		})

		return { accessToken }
	}

	returnUserFields(user: User) {
		return {
			id: user.id,
			email: user.email
		}
	}
}
