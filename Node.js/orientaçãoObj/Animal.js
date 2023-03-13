//herança

class Animal {

    constructor(nome, idade, preco) {
        this.nome = nome;
        this.idade = idade;
        this.preco = preco;
    }

    ChecarEstoque() {
        return 10;
    }

    MetodoQualquer(){
        console.log("Esse metodo faz parte da classe mãe!")
    }
}

class Cachorro extends Animal{

        constructor(nome,idade, preco, raca, peso) {
            super(nome, idade, preco)
            this.raca = raca;
            this.peso = peso;
        }

        Latir() {
            console.log("ROLF! ROLF!")
        }

        ChecarEstoque() { 
            console.log("Na loja temos 20 dogões")
        }

        MetodoQualquer() {
            console.log("Aqui é uma classe de dogs!")
            super.MetodoQualquer();
            console.log("Aqui vem funcionalidade!")
        }
}

var dog = new Cachorro('Nina', 2, 300,"Shih-tzu", 5);
dog.ChecarEstoque();
dog.Latir();
dog.MetodoQualquer();
console.log(dog.idade)


