//Sistema do cassino
// varios tipos de dadoos
//rolar dados
//criar classe, obj com numero de faces, metodo rolar

class Dado {

    constructor (minface,maxface) {
        this.minface = minface
        this.maxface = maxface
    }

    Rolar() {
        return Math.floor(Math.random()* (this.maxface - this.minface + 1)) + this.minface
    }
}

var dado = new Dado(1,60)
console.log(dado.Rolar());