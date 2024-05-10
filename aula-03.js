//  const nomes =["joao","jose","maria"]

// //  console.log(nomes[2]);

// for (const nome of nomes) {
//     console.log(nome);

// }

//  console.log (nomes.length);

// const nomes =["joao","jose","maria"]
// nomes.push("juscelino")
// nomes.shift()
// nomes.shift()
// nomes.pop ()
// nomes.push("manel")
// nomes.pop()
// nomes.unshift("manel")
// console.log(nomes)

// const nomes = ["joao", "jose", "maria"]
// const resultado = nomes.find((nome) => {
//     return nome === "jose"
// })

// console.log(resultado)


const usuarios = [
    {nome:"joao",idade: 23},
    { nome:"maria",idade: 27},
    {  nome: "jose", idade: 30}

]

 const resultado = usuarios.find((usuario)=>{
    return usuario.nome === "maria"

})

const retorno= usuarios.find((retorno)=>{
    
    return retorno.nome === "jose"

})



console.log(retorno)


console.log(resultado)