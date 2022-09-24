**RF** => Requisitos funcionais
**RNF** => Requisitos não funcionais
**RN** => Regra de negócio

# Cadastro de carro

**RF**
Deve ser possível cadastrar um novo carro

**RN**
Não deve ser possível cadastrar um carro com uma placa já existente.
Por padrão o carro deve ser cadastrado com disponibilidade.
O usuário responsável pelo cadastro deve ser um administrador.

# Listagem de carros

**RF**
Deve ser possível listar os carros disponíveis.
Deve ser possível listar os carros disponíveis pelo nome da categoria.
Deve ser possível listar os carros disponíveis pelo nome da marca.
Deve ser possível listar os carros disponíveis pelo nome da carro.

**RN**
O usuário não precisa estar logado no sistema.

# Cadastro de especificação no carro

**RF**
Deve ser possível cadastrar uma especifição para um carro.

**RN**
Não deve ser possível cadastrar uma especificação para um carro não cadastrado.
Não deve ser possível cadastrar uma especificação já existente para o mesmo carro.
O usuário responsável pelo cadastro deve ser um administrador.

# Cadastro de imagens do carro

**RF**
Deve ser possível cadastrar a image do carro 

**RNF**
Utilizar o multer para upload dos arquivos

**RN**
O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
O usuário responsável pelo cadastro deve ser um administrador.

# Aluguel de carro

**RF**
Deve ser possível cadastrar um aluguel

**RNF**

**RN**
O aluguel deve ter duração mínima de 24h.
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário 
Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro 


### Final

