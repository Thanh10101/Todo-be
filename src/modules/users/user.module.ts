import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { RouterModule } from '@nestjs/core';

//Dùng để sử lý
@Module({
  imports: [
    UserModule,
    RouterModule.register([
      {
        path: 'user',
        module: UserModule,
        //children user/children
      },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService], //Dependency Ịnjection
})
export class UserModule {}
