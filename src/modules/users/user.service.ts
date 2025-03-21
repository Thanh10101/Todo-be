import { Injectable } from '@nestjs/common';
//Xử lý logic
@Injectable()
export class UserService {
  findAll(): string {
    return 'get User service';
  }
}
