import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/users/user.module';
import { RouterModule } from '@nestjs/core';
//Dùng để sử lý
@Module({
  imports: [
    UserModule,
    RouterModule.register([
      {
        path: 'user',
        module: UserModule,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService], //Dependency Ịnjection
})
export class AppModule {}
