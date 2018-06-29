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
                if (eventos.eventos.events.length >0){
                    //si encuentra eventos imprimirlos
                    ui.limpiaResultados();
                    ui.mostrarEventos(eventos.eventos)
                }else{
                    // si no hay eventos manda una alerta
                    ui.mostrarMensaje('No se han encontrado resultados','alert alert-danger mt-4');
                }
            })
     
    }else{
       //mostrar mensaje para que avise que no hay nada 
       ui.mostrarMensaje('Es necesario que escribas algo en el buscador', 'alert alert-danger mt-4');
    }

}) 