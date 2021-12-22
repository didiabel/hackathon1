// colocá las declaraciones acá
let listaDeTareas = []
let inputTarea  = document.querySelector("#task")
let inputPrioridad  = document.querySelector("#prioridad")
let ul = document.querySelector("#lista-de-tareas")

//declaramos el class Tarea
class Tarea {
    constructor(nombre,prioridad){
    this.nombre= nombre
    this.prioridad= prioridad
    }
    agregarTarea(array){
        array.push(this)
    }
    //forma que me parecio mas simple (Didi):
    // agregarTarea(array,tarea){
    //     array.push(tarea)
    // }
}
function mostrarLista(){
    ul.innerHTML = ""
    listaDeTareas.forEach((tareaa,index) => {
        ul.innerHTML+=(`<li class= "list-group-item d-flex justify-content-between align-items-center"
        id="${index}">${tareaa.nombre}-Prioridad:${tareaa.prioridad} <i class="far fa-times-circle" onclick="eliminar(event)"></i></li>`)
    });
}
function toDoList(){
    const obj= new Tarea(inputTarea.value,inputPrioridad.value)
    obj.agregarTarea(listaDeTareas)

    //forma que me parecio mas simple (Didi):
    // obj.agregarTarea(listaDeTareas,obj)

    mostrarLista()

    console.log(listaDeTareas);

}
function eliminar(evento){
    listaDeTareas.splice(evento.target.parentElement.id,1);
    mostrarLista()
}