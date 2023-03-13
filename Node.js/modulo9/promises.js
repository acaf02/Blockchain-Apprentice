async function pegarId() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(5)
        })
    },1500)
}

async function bruscarEmailNoBanco(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("ana@gmail.com")
        },2000)
    })
}

function enviarEmail(corpo, para){
    return new Promise((resolve,reject) => {
        setTimeout(() => {

            var deuErro = true;
            if(!deuErro){
                resolve({ time:6, to:'ana@udemy.com'})
            } else{
                reject("Fila cheia")
            }
        },4000)
    })
    
}

function pegarUsuarios(){
    return new Promise ((resolve,reject) => {
       setTimeout(() => {
        resolve([
            {name: "Ana", lang:"Java"},
            {name: "Ismael", lang: "JS"},
            {name: "Nina", lang:"C#"}
        ])
       },3000)
    })
}

async function principal () {
    var id = await pegarId()
    var email = await bruscarEmailNoBanco(id)
    
    try{
       enviarEmail("Olá, como vai?", email) 
       console.log("email enviado com sucesso")
    }catch(erro) {
        console.log(erro)
    }
}

principal();
