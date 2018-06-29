class interfaz{
    constructor(){
        //incializa la app al instanciar
        this.init();
        //leer el resultado
        this.listado= document.getElementById('resultado-eventos');

    }
    //Metodo para cuando inicialice la app 
    init(){
        this.imprimirCategorias();    
        
    }
    
        //imprimir las categorias
    imprimirCategorias(){
        const listaCategorias = eventBride.obtenerCategorias()
            .then(categorias => {
                const cats= categorias.categorias.categories;
                //seleccionar el select que va a ser llenado con las categorias
                const selectCategoria = document.getElementById('listado-categorias');
               // recorrer el arreglo 
               cats.forEach(cat => {
                   const option = document.createElement('option');
                   option.value = cat.id;
                   option.appendChild(document.createTextNode(cat.name_localized));
                   selectCategoria.appendChild(option);
                   
               })


            })
    }
    //metodo para imprimir mensajes 
    mostrarMensaje(mensaje, clases){
        const div = document.createElement('div');
        div.classList = clases;
        //agregar texto
        div.appendChild(document.createTextNode(mensaje));
        //buscar un padre 
        const buscadorDiv= document.querySelector('#buscador');
        buscadorDiv.appendChild(div);
        setTimeout(() => {
            this.limpiaMensaje();
        }, 2000);

    }
    //limpiar o desaparecer div 
    limpiaMensaje(){
        const alert = document.querySelector('.alert');
        if (alert){
            alert.remove();
        }
    }
}