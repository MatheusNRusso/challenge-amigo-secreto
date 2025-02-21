# **Amigo Secreto - Desafio Alura ONE**

![Badge](https://img.shields.io/badge/Alura%20ONE-Challenge-brightgreen) ![Badge](https://img.shields.io/badge/Status-Concluído-blue)

Este projeto faz parte do **primeiro challenger do programa Alura ONE**, onde desenvolvemos um jogo simples de **Amigo Secreto** utilizando **HTML, CSS e JavaScript**. Embora o desafio fosse focado em lógica de programação básica, decidi implementar o projeto utilizando **Programação Orientada a Objetos (POO)** para demonstrar boas práticas de organização e modularidade.

---

## **Sobre o Projeto**

O **Jogo do Amigo Secreto** permite que os usuários adicionem nomes de amigos, sorteiem um único nome ou grupos de amigos secretos e reiniciem o jogo. A escolha por utilizar POO foi motivada pelo desejo de:

- **Organizar o código de forma clara e modular:** Separando responsabilidades em classes e métodos.
- **Facilitar a manutenção e extensão futura:** Tornando o código mais reutilizável e escalável.
- **Demonstrar boas práticas de desenvolvimento:** Aplicando conceitos como encapsulamento e herança.

Embora o desafio inicial fosse mais voltado para lógica de programação, a utilização de POO permitiu criar uma estrutura robusta e fácil de entender.

---

## **Funcionalidades**

- **Adicionar amigos:** Insira nomes de participantes na lista.
- **Sortear um único nome:** Sorteie um amigo secreto individual.
- **Sortear grupos:** Realize o sorteio completo para todos os participantes.
- **Reiniciar o jogo:** Limpe a lista de amigos e os resultados anteriores.

---

## **Tecnologias Utilizadas**

- **HTML5:** Estrutura da página.
- **CSS3:** Estilização e layout responsivo.
- **JavaScript (ES6+):** Lógica do jogo e interação com o DOM.
- **Git/GitHub:** Controle de versão e publicação do projeto.

---

## **Por Que Utilizei POO?**

Embora o desafio não exigisse o uso de **Programação Orientada a Objetos**, optei por implementar o projeto dessa forma porque acredito que ela oferece várias vantagens:

1. **Modularidade:**
   - O código foi dividido em classes (`Jogo` e `AmigoSecreto`), cada uma com responsabilidades bem definidas.
   - Isso facilita a leitura, manutenção e reutilização do código.

2. **Encapsulamento:**
   - As propriedades e métodos relacionados ao jogo estão encapsulados dentro da classe `AmigoSecreto`.
   - Isso evita poluição no escopo global e torna o código mais seguro.

3. **Escalabilidade:**
   - Caso seja necessário adicionar novas funcionalidades (ex.: salvar resultados em um banco de dados), a estrutura já está preparada para receber essas mudanças sem comprometer o código existente.

4. **Boas Práticas:**
   - A utilização de POO demonstra uma abordagem profissional e organizada, alinhada com padrões de desenvolvimento modernos.

---

## **Estrutura do Código**

Aqui está uma visão geral da estrutura do código:

### **Classe `Jogo`**
- Classe abstrata que define a base para qualquer tipo de jogo.
- Contém o método `jogar()`, que deve ser implementado pelas subclasses.

### **Classe `AmigoSecreto`**
- Subclasse de `Jogo` que implementa as regras específicas do Amigo Secreto.
- Métodos principais:
  - `adicionarAmigo(nome)`: Adiciona um novo participante à lista.
  - `sortearUmNome()`: Sorteia um único nome.
  - `jogar()`: Realiza o sorteio completo para todos os participantes.
  - `resetar()`: Reinicia o jogo.

---

## **Desafios Enfrentados**

Durante o desenvolvimento, enfrentei alguns desafios interessantes:

1. **Validação de Entrada:**
   - Garantir que os nomes inseridos fossem únicos e válidos (não vazios ou numéricos).
   - Implementar mensagens de erro claras para melhorar a experiência do usuário.

2. **Sorteio Aleatório:**
   - Garantir que ninguém fosse sorteado como seu próprio amigo secreto.
   - Validar o resultado do sorteio antes de exibi-lo.

3. **Manipulação do DOM:**
   - Aprender a adicionar e remover elementos dinamicamente na página.

4. **Design Responsivo:**
   - Adaptar a interface para funcionar bem em diferentes tamanhos de tela.

---

## **Aprendizados**

Com este projeto, pude consolidar meus conhecimentos em:

- **Lógica de Programação:** Trabalhar com arrays, loops (`for`, `forEach`) e condições (`if/else`).
- **Manipulação do DOM:** Adicionar, remover e atualizar elementos HTML dinamicamente.
- **Programação Orientada a Objetos:** Organizar o código em classes e métodos reutilizáveis.
- **Tratamento de Erros:** Implementar validações robustas para evitar falhas.
- **Versionamento com Git:** Gerenciar alterações no código e publicá-las no GitHub.

---

## **Melhorias Futuras**

Embora o projeto esteja funcional, há espaço para melhorias:

- **Testes Automatizados:** Adicionar testes unitários para garantir a integridade do código.
- **Interface Moderna:** Melhorar o design com animações e transições.
- **Persistência de Dados:** Salvar os resultados do sorteio localmente (ex.: localStorage).
- **Compatibilidade com Mobile:** Ajustar ainda mais o layout para dispositivos móveis.

---

## **Como Usar**

### **1. Clone o Repositório**
```bash
git clone https://github.com/MatheusNRusso/challenge-amigo-secreto.git
```

### **2. Execute Localmente**
Abra o arquivo `index.html` no seu navegador preferido. Não é necessário nenhum servidor para executar o projeto.

---

## **Contribuições**

Contribuições são bem-vindas! Se você quiser melhorar o projeto, siga estas etapas:

1. Faça um fork deste repositório.
2. Crie uma branch para suas alterações:
   ```bash
   git checkout -b feature/nova-funcionalidade
   ```
3. Envie suas alterações:
   ```bash
   git push origin feature/nova-funcionalidade
   ```
4. Abra um pull request explicando suas mudanças.

---

## **Licença**

Este projeto está sob a licença [MIT](LICENSE). Isso significa que você pode usá-lo, modificá-lo e distribuí-lo livremente.

---

## **Contato**

Se tiver dúvidas ou sugestões, fique à vontade para entrar em contato:

- **GitHub:** https://github.com/MatheusNRusso
- **Email:**  matheusnrs@id.uff.br

---

## **Agradecimentos**

- **Alura ONE:** Pelo desafio e pela oportunidade de aprender.
- **Comunidade:** Por compartilhar conhecimento e inspiração.

---

