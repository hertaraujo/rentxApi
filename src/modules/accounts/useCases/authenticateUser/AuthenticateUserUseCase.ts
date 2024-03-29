import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    // userExists?
    const user = await this.usersRepository.findByEmail(email);

    if (!user) throw new AppError('Email or password incorrect!', 400);

    // isPasswordRight
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) throw new AppError('Email or password incorrect!', 400);

    // Gerar jwt
    const token = sign({}, '1d8h69sdfcakdsvfswd3521453vafdsçofjivpaw', {
      subject: user.id,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      token,
      user: { name: user.name, email: user.email },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
