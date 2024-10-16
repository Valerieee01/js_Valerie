const gato = {
    nombre : "Misifus",
    comer(){
        console.log(`${this.nombre} esta comiendo`);
    }
}

const gato2 = {
    nombre : "Milu",
    comer(){
        console.log(`${this.nombre} esta comiendo`);
    }
}

console.log(gato);
console.log(gato.nombre);
gato.comer();

//creando una clase
class Animal{
    constructor(nombre,genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    comer(){
        console.log(`${this.nombre} esta comiendo`);
    }

    pedirComida(){
        console.log(`${this.nombre} esta pidiendo comida`);
        
    }
} 

 class Gato extends Animal{
    constructor(nombre,genero,tamaño){
        super(nombre,genero)
        this.tamaño = tamaño;
    }

    comer(){
        console.log(`Soy gato que mas come es y me llamo : ${this.nombre}`);
        
    }
 }

 const Milka = new Animal("Milka", "Hembra");
 const Maya = new Gato ("Maya","Hembra","pequeña");
 console.log(Milka);
 console.log(Maya);
 
 Milka.comer();
 Milka.pedirComida();



 
 Maya.comer();
 Maya.pedirComida();
 