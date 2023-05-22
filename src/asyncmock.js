//Mi lista de productos...

export const productos = [
    { nombre: "AMPOLLETA", precio: 2000, id: "1" , marca: "Yokito Fokito", img: "../ampolleta.jpeg", idCat: "luces" },
    { nombre: "BATERIA DE AUTO", precio: 66500, id: "2", marca: "Auto Style", img: "../bateriaAuto.jpeg", idCat: "baterias" },
    { nombre: "CAMARA DE SEGURIDAD", precio: 18000, id: "3", marca: "Te pillé", img: "../camaraSeguridad.jpeg", idCat: "camaras" },
    { nombre: "CAMARA DE VIDEO", precio: 199000, id: "4", marca: "Sorny", img: "../camaraVideo.jpeg", idCat: "camaras" },
    { nombre: "CARGADOR DE BATERIA", precio: 21000, id: "5", marca: "K-rgador", img: "../cargadorBateria.jpeg", idCat: "baterias" },
    { nombre: "PILAS CR2032", precio: 3500, id: "6", marca: "Diaruplus", img: "../cr2032.jpeg", idCat: "baterias" },
    { nombre: "FOCO LED SOBREPUESTO", precio: 10000, id: "7", marca: "D++", img: "../focoSobrepuesto.jpeg", idCat: "luces" },
    { nombre: "GO PRO HERO 11", precio: 215000, id: "8", marca: "GoProo", img: "../goProHero11.jpeg", idCat: "camaras" },
    { nombre: "LAMPARA COLGANTE", precio: 23000, id: "9", marca: "L'aquecuel", img: "../lamparaColgante.jpeg", idCat: "luces" },
    { nombre: "MINI CAMARA", precio: 35000, id: "10", marca: "Ortocam", img: "../miniCamara.jpeg", idCat: "camaras" },
    { nombre: "PILAS AA", precio: 16000, id: "11", marca: "Diaru", img: "../pilas.jpeg", idCat: "baterias" },
    { nombre: "SENSOR DE HUMO", precio: 14000, id: "12", marca: "Fume", img: "../sensorHumo.jpeg", idCat: "sensores" },
    { nombre: "SENSOR PARA PUERTA", precio: 7000, id: "13", marca: "LockDoor", img: "../sensorPuerta.jpeg", idCat: "sensores" },
    { nombre: "RAYO SENSOR MOVIMIENTO", precio: 54000, id: "14", marca: "Pasaa", img: "../sensorRayo.jpeg", idCat: "sensores" },
    { nombre: "SENSOR TEMPERATURA", precio: 85000, id: "15", marca: "Sensonyte", img: "../sensorTemperatura.jpeg", idCat: "sensores" },
    { nombre: "TIRA LED", precio: 8000, id: "16", marca: "Groove", img: "../tiraLed.jpeg", idCat: "luces" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1)
    })
}

//Funcion para retornar solo un producto

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 1)
    })
}

//Funcion para retornar toda una categoria 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 1)
    })
}