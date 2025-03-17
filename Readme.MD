#  Sistema de Cadastro de Clientes - John Doe 

## 📋 Descrição do Projeto

Este projeto é um sistema de cadastro de clientes desenvolvido para John Doe. O sistema permite coletar e armazenar informações dos clientes como nome completo, CPF, e-mail, cor preferida e observações em um banco de dados PostgreSQL.

## 🛠️ Tecnologias Utilizadas

### Backend
- ☕ Java 17
- 🍃 Spring Boot 3.4.3
- 🗃️ PostgreSQL (banco de dados)
- 🐳 Docker (para implantação)

### Frontend
- ⚛️ React com Vite
- 📝 React Hook Form
- 🔍 Zod (validação de formulários)
- 🔄 Axios (requisições HTTP)
- 🎨 React Toastify (notificações elegantes)

## 🚀 Status do Projeto

🚧 **Em desenvolvimento** 🚧

O projeto ja se encontra funcional mas sem Dockerizacao e testes unitarios.

## 📁 Estrutura do Projeto

```
📦 client-registration/
 ┣ 📂 backend/                      # Projeto Spring Boot
 ┃ ┣ 📂 src/main/java/com/johndoe/clientregistration/
 ┃ ┃ ┣ 📂 config/                  
 ┃ ┃ ┣ 📂 controller/              
 ┃ ┃ ┣ 📂 dto/                    
 ┃ ┃ ┣ 📂 exception/              
 ┃ ┃ ┣ 📂 model/                  
 ┃ ┃ ┣ 📂 repository/              
 ┃ ┃ ┣ 📂 service/                
 ┃ ┃ ┗ 📂 util/                    
 ┃ ┗ 📂 src/main/resources/
 ┃   ┗ 📜 application.properties
 ┗ 📂 frontend/                     # Projeto React (Vite)
   ┣ 📂 public/
   ┗ 📂 src/
     ┣ 📂 api/
     ┣ 📂 components/
     ┣ 📂 types/
     ┣ 📂 utils/
     ┣ 📜 App.tsx
     ┗ 📜 main.tsx
```

## 📝 Requisitos do Projeto

- [x] Formulário para cadastro de clientes com os campos:
  - Nome completo
  - CPF
  - E-mail
  - Cor preferida (cores do arco-íris)
  - Observações
- [x] Armazenamento em banco de dados PostgreSQL
- [x] Validação dos dados no frontend e backend
- [x] Feedback de sucesso após o cadastro
- [ ] Preparação para implantação com Docker

## ⏭️ Próximos Passos

4. 🐳 **Configurar Docker**:
   - Criar Dockerfile para o backend
   - Configurar Docker Compose para facilitar o desenvolvimento
   - Preparar arquivos para implantação

5. 📚 **Documentação**:
   - Atualizar o README conforme o desenvolvimento
   - Criar guia de usuário

## 🚀 Como Executar (em breve)

_Instruções detalhadas serão adicionadas após a implementação das funcionalidades principais._

## 👨‍💻 Autor

Desenvolvido por Pedro Lucas Ferreira.

---

⭐️ 