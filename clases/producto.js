class Producto {
    constructor(data) {
        this.idProd = data.idProd;
        this.nomProd = data.nomProd;
        this.existencias = data.existencias;
        this.precio = data.precio;
    }

    set idProd(idProd) {
        this._idProd = idProd;
    }

    set nomProd(nomProd) {
        if (nomProd.length>0){
            this._nomProd = nomProd;
        }
    }

    set existencias(existencias) {
        if (existencias >= 0) {
            this._existencias = existencias;
        }
    }

    set precio(precio) {
        if (precio > 0) {
            this._precio = precio;
        }
    }

    get idProd() {
        return this._idProd;
    }

    get nomProd() {
        return this._nomProd;
    }

    get existencias() {
        return this._existencias;
    }

    get precio() {
        return this._precio;
    }

    get datos() {
        if(this.idProd!=undefined){
            return {
                idProd: this.idProd,
                nomProd: this.nomProd,
                existencias: this.existencias,
                precio: this.precio
            }
        }
        else{
            return {
                nomProd: this.nomProd,
                existencias: this.existencias,
                precio: this.precio
            }
        }
        
    }
}

module.exports = Producto;