

let array =[]
array [5] = "Calle"
array ["Nombre"] = "Rafael"
array ["Apellido"] = "Angarita"
array ["Edad"] = "47"

console.log(array)
console.log(Object.entries(array))

const lista = [1,2,3,4,5,6,7,8,9,10]

lista.forEach(e=>{
    console.log(e);})



const lista1 = ["Miguel", "Rafael", "Sergio", "Sandra"]

 lista1.forEach((valor, indice, array)=>{console.log(valor);})

 const informacion = ["Rafael", "Angarita", "Rodriguez", "47 años"]
 
 let data = informacion.map(valor => {
     return valor + "a"; 
 });
 console.log(data)

 let datos = [ 5,6,7,8,9,10 ];
 const respuesta = datos.includes("7")
 console.log(respuesta)
 console.log(datos)

 let data1 = datos.map(valor => {
    return valor * 5; 
});
console.log(data1)