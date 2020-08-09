let myPenguin = {
    character : "Whiteblack",
    origin : "Whiteblack the Penguin Sees the World",
    author : "H. A. Rey and Margret Rey",
    notes : "Children's book about a travelling penguin",
}
console.log(`Hola, son un pingüino y mi nombre es ${myPenguin.character}`)

myPenguin.puedeVolar = false

myPenguin.graznar = function(){
        return `Kaww Kaww!!`
}
console.log(myPenguin.graznar())

myPenguin.saludar = function(){
    return `Hola, son un pingüino y mi nombre es ${this.character}`
}
console.log(myPenguin.saludar())

myPenguin.character = `Señor Pengu`

console.log(myPenguin.saludar())

myPenguin.puedeVolar = true

myPenguin.volar = function (){
    if (this.puedeVolar == true){
    return "Puedo Volar!"
    }
    else{ 
        return "No puedo volar" 
     }
}
console.log(myPenguin.volar())

let receta = {
    ingredientes : ["canela", "comino", "cocoa"],
    porciones : 2,
}
console.log(`Receta para Mole
Porciones ${receta.porciones}
Ingredientes:
${receta.ingredientes[0]}
${receta.ingredientes[1]}
${receta.ingredientes[2]}
`)

let libros = [
    
    {
        titulo: "titulo1",
        autor: "autor1",
        leido: true,
        
    },
    
    {
        titulo: "titulo2",
        autor: "autor2",
        leido: false,
        
    },
    
    {
        titulo: "titulo3",
        autor: "autor3",
        leido: true,
        
    },
    ]
for (i=0; i <= libros.length-1; i++){
 console.log(libros[i].titulo) 
 console.log(libros[i].autor)
 console.log(libros[i].leido)
}
    
    









