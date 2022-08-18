import { inject, injectable } from "tsyringe";
import { deleteFile } from "../../../../utils/file";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  avatar_file: string;
}

/* Adicionar coluna na tabela de users
Refatorar usuário com coluna avatar
Configuração de upload multer
Criar regra de negócio do upload
Criar controller */

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepositor: IUsersRepository
  ) { }

  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.usersRepositor.findById(user_id)

    if (user.avatar) await deleteFile(`./tmp/avatar/${user.avatar}`);

    user.avatar = avatar_file;

    await this.usersRepositor.create(user)
  }

}
export { UpdateUserAvatarUseCase }
