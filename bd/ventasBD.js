const { ventasBD } = require("./conexion");
const Venta = require("../clases/Venta");

function validar(venta) {
    var valida=false;
    if(venta.idUsuario1 !== undefined && venta.idProducto1 !== undefined && venta.fecha !== undefined && venta.estado !== undefined){
        valida=true;
    }
    return valida;
}

async function mostrarV() {
    const ventas = await ventasBD.get();
    ventasValidas = [];

    ventas.forEach(venta => {
        const venta1 = new Venta({ idVenta: venta.idVenta, ...venta.data() });
        if (validar(venta1.datos)) {
            ventasValidas.push(venta1.datos);
        }
    });
    return ventasValidas;
}

async function buscarV(id) {
    var ventaValida;
    const venta = await ventasBD.doc(id).get();
    const venta1 = new Venta({idVenta:venta.idVenta,...venta.data()});

    if(validar(venta1.datos)){
        ventaValida=venta1.datos;
    }
    return ventaValida;
}

async function agregarV(data) {
    const fechaActual = new Date();
    data.fecha = fechaActual.toISOString();
    data.estado="Vendido";
    const venta1 = new Venta(data);
    var ventaValida={};
    var ventaGuardada = false;

    if (validar(venta1.datos)) {
        ventaValida=venta1.datos;
        await ventasBD.doc().set(ventaValida);
        ventaGuardada = true;
    }
    return ventaGuardada;
}

async function modificarV(id) {
    var ventaCancelada = false;
    const venta = await buscarV(id);  // Verificar si la venta existe

    if (venta != undefined) {
        await ventasBD.doc(id).update({ estado: "cancelado" });
        ventaCancelada = true;
    }
    return ventaCancelada;
}

module.exports = {
    mostrarV,
    agregarV,
    modificarV,
    buscarV
};