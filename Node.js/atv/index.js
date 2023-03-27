//Produto para loja 
 
class Produto{
    constructor(){
        this.nome = 'nome',
        this.preco = 23,
        this.quantidade = 10,
        this.emEstoque = true,
        this.garantia = 30
        this.descricao = 'blabla'
    }
 
    Vender(){
        if(this.quantidade > 0){
            console.log("Vendeu...")
            --this.quantidade
        }
    }
 
    Trocar(garantia){
        if(garantia > 0){
            console.log("Trocar..")
        }
    }
}
 
