import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { JwtModule } from '@nestjs/jwt'

import { AuthController } from './auth.controller'

import { AuthService } from './auth.service'
import { JwtStrategy } from './strategies/auth.strategy'

import { PrismaService } from 'src/prisma.service'
import { getJWTConfig } from './config/jwt.config'

@Module({
	controllers: [AuthController],
	imports: [
		ConfigModule,
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJWTConfig
		})
	],
	providers: [AuthService, JwtStrategy, PrismaService]
})
export class AuthModule {}
