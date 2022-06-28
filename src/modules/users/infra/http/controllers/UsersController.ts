import { Request, Response } from 'express';

import { container } from 'tsyringe';

import CreateUserService from '@modules/users/services/CreateUserService';


export default class UsersController {
 public async create (request: Request, response: Response): Promise<Response> {
  try {
    const { name, email, password } = request.body;

    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
    });

    const newUser = {
      name,
      email,
    };

    return response.json(newUser);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    return response.status(400).json({ error: err.message });
  }
 }
}
