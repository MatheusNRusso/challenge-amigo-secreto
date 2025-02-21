// Classe principal "Jogo"
class Jogo {
    // Método responsável pela inicialização da classe Jogo
    constructor() {
        if (new.target === Jogo) {
            throw new Error("A classe 'Jogo' é abstrata e não pode ser instanciada diretamente.");
        }
    }

    // Método que será implementado pelas classes filhas
    jogar() {
        throw new Error("Este método deve ser implementado pelas subclasses.");
    }
}

// Classe filha da classe Jogo
class AmigoSecreto extends Jogo {
    // Construtor da classe AmigoSecreto
    constructor() {
        super();           // Chama o construtor da classe pai (Jogo)
        this.amigos = [];  // Lista para armazenar os nomes dos amigos digitados
    }

    // Método responsável por adicionar um nome à lista de amigos
    adicionarAmigo(nome) {
        nome = nome.trim(); // Remove espaços em branco no início e no fim do nome

        // Verifica se o nome digitado pelo usuário é válido
        if (!nome) {
            throw new Error("O nome não pode ficar vazio!!");
        }
        if (!isNaN(nome)) { // Verifica se o nome é um número
            throw new Error("Digite um nome válido (você digitou um número)!!");
        }
        if (this.amigos.includes(nome)) { // Verifica se o nome já está na lista de amigos
            throw new Error("Digite um nome diferente (este amigo já foi confirmado)!!");
        }

        // Adiciona o nome do amigo na lista de amigos
        this.amigos.push(nome);
    }

    // Método para sortear um único nome da lista de amigos
    sortearUmNome() {
        if (this.amigos.length < 2) {
            throw new Error("Adicione pelo menos dois nomes de amigos!!");
        }
        const indiceSorteado = Math.floor(Math.random() * this.amigos.length); // Gera um índice aleatório
        return this.amigos[indiceSorteado]; // Retorna o nome correspondente ao índice sorteado
    }

    // Método para sortear amigos secretos em grupo
    jogar() {
        if (this.amigos.length < 2) {
            throw new Error("Adicione pelo menos dois nomes de amigos!!");
        }

        let sorteados;
        do {
            // Cria uma cópia do array de amigos e embaralha os elementos
            sorteados = this.amigos.slice().sort(() => Math.random() - 0.5);
        } while (!this.validarSorteio(sorteados)); // Valida o sorteio para garantir que ninguém seja seu próprio amigo secreto

        return this.mostrarResultado(sorteados); // Retorna o resultado formatado
    }

    // Método para validar o sorteio
    validarSorteio(sorteados) {
        // Verifica se nenhum amigo foi sorteado como seu próprio amigo secreto
        return sorteados.every((amigo, i) => amigo !== this.amigos[i]);
    }

    // Método para formatar o resultado do sorteio
    mostrarResultado(sorteados) {
        // Retorna um array de strings formatadas com o resultado do sorteio
        return this.amigos.map((amigo, i) => `${amigo} seu amigo secreto é -> ${sorteados[i]}`);
    }

    // Método para reiniciar o jogo
    resetar() {
        this.amigos = []; // Limpa a lista de amigos
    }
}

// Instância da classe AmigoSecreto
const jogo = new AmigoSecreto();

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    try {
        const nome = document.getElementById("amigo").value; // Obtém o nome digitado pelo usuário
        jogo.adicionarAmigo(nome); // Adiciona o nome à lista de amigos

        const lista = document.getElementById("listaAmigos"); // Obtém a lista de amigos no HTML
        const li = document.createElement("li"); // Cria um novo elemento <li>
        li.textContent = nome; // Define o texto do elemento <li> como o nome do amigo
        lista.appendChild(li); // Adiciona o elemento <li> à lista de amigos
    } catch (erro) {
        alert(erro.message); // Exibe uma mensagem de erro caso ocorra algum problema
    } finally {
        document.getElementById("amigo").value = ""; // Limpa o campo de entrada independentemente do resultado
    }
}

// Função para sortear um único nome
function sortearUmNome() {
    try {
        const nomeSorteado = jogo.sortearUmNome(); // Sorteia um único nome
        const listaResultado = document.getElementById("resultado"); // Obtém a lista de resultados no HTML
        listaResultado.innerHTML = ""; // Limpa a lista de resultados

        const li = document.createElement("li"); // Cria um novo elemento <li>
        li.textContent = `Seu amigo secreto é: ${nomeSorteado}`; // Define o texto do elemento <li> como o nome sorteado
        listaResultado.appendChild(li); // Adiciona o elemento <li> à lista de resultados
    } catch (erro) {
        alert(erro.message); // Exibe uma mensagem de erro caso ocorra algum problema
    }
}

// Função para sortear amigos secretos em grupo
function sortearAmigo() {
    try {
        const resultado = jogo.jogar(); // Realiza o sorteio em grupo
        const listaResultado = document.getElementById("resultado"); // Obtém a lista de resultados no HTML
        listaResultado.innerHTML = ""; // Limpa a lista de resultados

        // Itera sobre o resultado do sorteio e adiciona cada item à lista de resultados
        resultado.forEach(item => {
            const li = document.createElement("li"); // Cria um novo elemento <li>
            li.textContent = item; // Define o texto do elemento <li> como o resultado do sorteio
            listaResultado.appendChild(li); // Adiciona o elemento <li> à lista de resultados
        });
    } catch (erro) {
        alert(erro.message); // Exibe uma mensagem de erro caso ocorra algum problema
    }
}

// Função para reiniciar o jogo
function resetarJogo() {
    jogo.resetar(); // Limpa a lista de amigos no objeto jogo

    // Limpa a lista de amigos e os resultados no HTML
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";

    // Limpa o campo de entrada
    document.getElementById("amigo").value = "";
}