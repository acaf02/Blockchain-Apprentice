function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
      

        var deuErro=false;

        if(deuErro){
            callback(12,"O envio do email falhou");
        }else{
            callback(12);
        }
        
    },5000)
}
console.log('inicio')
enviarEmail('Seja bem vindo', 'ana@htomail.com', (time,erro) => {
    if(erro == undefined){
        console.log('tudo ok')
        console.log(`Tempo: ${time}s`)
    }else{
        console.log("ocorreu um erro" + erro)

}

})
