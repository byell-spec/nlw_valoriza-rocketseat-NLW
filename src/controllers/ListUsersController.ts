import { Request, Response } from 'express';
import { ListUsersService } from '../service/ListUsersService'

class ListUsersController {
  async handle(request: Request, response: Response){
    const listUsersService = new ListUsersService();
    
    const users = await listUsersService.execute();
    
    return response.json(users);
  }
}

export { ListUsersController };