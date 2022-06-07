/* eslint-disable @typescript-eslint/no-unused-vars */
import { Router } from 'express';

import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password,
  });

  const newUser = {
    email,
  };

  return response.json({ newUser, token });
});

export default sessionsRouter;
