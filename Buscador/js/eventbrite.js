class EventBride {
    constructor(){
        this.token_auth = 'CGADKJPNGSF42TTX7MML';
        this.ordenar = 'date';
        
        }
        // obtener las categorias en init()
        async obtenerCategorias(){
            const respuestaCategorias = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`);

            const categorias = await respuestaCategorias.json();

            return {
                categorias
            }

        }

}
