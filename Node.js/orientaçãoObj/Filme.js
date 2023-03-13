class Filme {
    constructor(titulo, ano, genero, diretor, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero;
        this.diretor= diretor;
        this.duracao = duracao;
        this.atores =[];
    }

    Reproduzir() {
        console.log('Reproduzindo...')
    }
    Pausar() {
        console.log('Pausado ||')
    }
    Avançar() {
        console.log('Avançar >>')
    }
    Fechar() {
        console.log('Fechar x')
    }

    Ficha() {
        console.log('Titulo: ' + this.titulo)
        console.log("ano de lançamento: " + this.ano)
        console.log('Gênero: ' + this.genero)
    }
}

var vingadores = new Filme("Vingadores 2", 2014 ,"AÇÃO","Alguém", "3h");
vingadores.Ficha()

