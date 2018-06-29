const eventBride = new EventBride();
const ui = new interfaz();

// Events Listeners 
document.getElementById('buscarBtn').addEventListener('click',(e)=>{
    e.preventDefault();


    //leer el texto del input buscar
    const textoBuscador = document.getElementById('evento').value;

    //leer el select 
    const categorias = document.getElementById('listado-categorias');
    const categoriaSeleccionada = categorias.options [categorias.selectedIndex].value;

    // revisar que haya algo en el input de buscar 
    if (textoBuscador!==''){
        eventBride.obtenerEventos (textoBuscador, categoriaSeleccionada)
            .then(eventos => {
                console.log(eventos);
            })
     
    }else{
       //mostrar mensaje para que avise que no hay nada 
       ui.mostrarMensaje('Es necesario que escribas algo en el buscador', 'alert alert-danger mt-4');
    }

}) 