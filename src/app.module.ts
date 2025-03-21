import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//Dùng để sử lý
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService], //Dependency Ịnjection
})
export class AppModule {}
