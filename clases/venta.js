class Venta{
    constructor(data) {
        this.idVenta = data.idVenta;
        this.idUsuario1 = data.idUsuario1;
        this.idProducto1 = data.idProducto1;
        this.fecha = data.fecha;
        this.estado = data.estado;
    }

    set idVenta(idVenta) {
        this._idVenta = idVenta;
    }

    set idUsuario1(idUsuario1) {
        this._idUsuario1 = idUsuario1;
    }

    set idProducto1(idProducto1) {
        this._idProducto1 = idProducto1;
    }

    set fecha(fecha) {
        this._fecha = fecha;
    }

    set estado(estado) {
        this._estado = estado;
    }

    get idVenta() {
        return this._idVenta;
    }

    get idUsuario1() {
        return this._idUsuario1;
    }

    get idProducto1() {
        return this._idProducto1;
    }

    get fecha(){
        return this._fecha;
    }

    get estado() {
        return this._estado;
    }

    get datos() {
        if(this.idVenta!=undefined){
            return {
                idVenta: this.idVenta,
                idUsuario1: this.idUsuario1,
                idProducto1: this.idProducto1,
                fecha: this.fecha,
                estado:this.estado
            }
        }
        else{
            return {
                idUsuario1: this.idUsuario1,
                idProducto1: this.idProducto1,
                fecha: this.fecha,
                estado:this.estado
            }
        }
        
    }
}

module.exports=Venta;