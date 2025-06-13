# 🚀 Minicurso Git & React Native

👋 Fala pessoal! Tudo certo?

Este repositório é referente ao **Minicurso de Git & React Native** realizado no dia **09 de junho de 2025**. Durante o encontro, exploramos conceitos fundamentais e práticos envolvendo:

🧠 **Git & GitHub**  
📱 **React Native com Expo Router**  
🧩 **Criação de componentes reutilizáveis**  
🛠️ **Boas práticas de desenvolvimento mobile**

---

## 🧪 Tecnologias e Ferramentas Utilizadas

No projeto final, trabalhamos com as seguintes ferramentas e bibliotecas:

- 🔐 [`expo-secure-store`](https://docs.expo.dev/versions/latest/sdk/securestore/)
- 🌐 Context API & Providers
- 🔽 [`react-native-picker`](https://github.com/react-native-picker/picker)
- 🧾 Formulários com **Formik**
- ✅ Validação com **Yup**
- 🧭 Navegação com **Expo Router**
- 🔁 Hooks (`useContext`, `useState`, `useEffect`, etc.)

---

## 💡 Desafios Propostos

### 🏁 Desafio 1 — Autenticação e Biblioteca Pessoal

> 🔁 Faça um **fork** deste repositório e implemente um **contexto de autenticação**, com cadastro de múltiplos usuários.  
Cada usuário deve ter acesso à sua **lista de livros personalizada**.

📌 Não se esqueça de:
- Criar **issues**
- Fazer **commits significativos**
- Criar **pull requests** para organizar seu desenvolvimento

---

### 🌍 Desafio 2 — Integração com API Externa

> Realize a integração com uma **API externa de livros**, como a [Google Books API](https://developers.google.com/books).

A ideia é permitir que o usuário busque novos livros para adicionar à sua estante.

---

## 📚 Materiais de Apoio

📄 [Git e GitHub - PDF](https://github.com/user-attachments/files/20696329/Git-and-GitHub.pdf)  
📄 [React Native - Um Guia para Iniciantes (PDF)](https://github.com/user-attachments/files/20696344/React-Native-Um-Guia-para-Iniciante.pdf)

---

## 🎨 Protótipos no Figma

🎨 [Acesse os Protótipos no Figma](https://www.figma.com/design/mQK5bOWek8ncvE6ySbqtgY/Estante-Pessoal?node-id=40-94&t=RaiHAyWECreW8U0Z-1)

---

## ▶️ Gravação do Minicurso

📺 [Assista no YouTube](https://www.youtube.com/live/s8hChIkaBdU)

---

## Explicação final - RN

📺 [Assista no YouTube - Parte 1](https://youtu.be/FP2FBX0sti4)

- Rotas
- Context (Context + Provider + Secure Store)
- Components Input & Button
  

📺 [Assista no YouTube - Parte 2](https://youtu.be/eu9KGkZNrqU)
- Component Card
- Screen Add Book (Formik + Yup + Picker)
- Screen Home (SectionList)

---

## 📦 Comandos Git Essenciais

```bash
# Iniciar um repositório Git
git init

# Clonar um repositório existente
git clone <url-do-repositório>

# Adicionar arquivos para staging
git add .

# Verificar status do repositório
git status

# Realizar um commit com mensagem
git commit -m "mensagem do commit"

# Corrigir o último commit (sem alterar o histórico remoto)
git commit --amend

# Criar ou mudar de branch
git checkout -b nome-da-branch   # criar nova
git checkout nome-da-branch      # mudar para uma existente

# Enviar alterações para o repositório remoto
git push origin nome-da-branch

# Puxar alterações do repositório remoto
git pull origin nome-da-branch

```

---

## 🧾 Padrões de Commit (Conventional Commits)

Utilizamos o padrão Conventional Commits, que ajuda na legibilidade e automação de changelogs.
Formato: [tipo] : [descrição]
Exemplos:

    feat: adiciona tela de cadastro

    fix: corrige erro na navegação

    docs: atualiza instruções no README


| Tipo       | Descrição                                     |
| ---------- | --------------------------------------------- |
| `feat`     | Nova funcionalidade                           |
| `fix`      | Correção de bugs                              |
| `chore`    | Tarefas de manutenção (ex: configs, build)    |
| `docs`     | Alterações na documentação                    |
| `style`    | Mudanças de estilo (espaços, identação, etc.) |
| `refactor` | Refatoração de código (sem mudança de lógica) |
| `test`     | Adição ou modificação de testes               |
| `perf`     | Melhorias de performance                      |

---

🚧 Bons estudos e mãos à obra!
