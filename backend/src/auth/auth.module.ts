import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { SessionSerializer } from './session.serializer';
import 'dotenv/config'

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'SECRET000',
    signOptions: { expiresIn: '1000s' }
  })],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
