function Producto(nombre, precio, stock){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
}

const productos = [];

function crearProducto(){
    let nombre = prompt("Ingrese el nombre del producto: ").trim();    
    let precio = parseFloat(prompt("Ingrese el precio del producto: "));
    let stock = parseInt(prompt("Ingrese el stock del producto: "));

    while(nombre === ""){
        alert("El nombre no puede estar en blanco")
        nombre = prompt("Ingrese el nombre del producto: ").trim();
        console.log("nombre -->",nombre);
    }

    while(precio < 0 || isNaN(precio)){
        alert("El precio debe ser un valor numerico mayor a cero");
        precio = parseFloat(prompt("Ingrese el precio del producto: "))
    }

    while(stock < 0 || isNaN(stock)){
        alert("El Stock debe ser un valor numerico mayor a cero")
        stock = parseInt(prompt("Ingrese el stock del producto: "));
    }

    const nuevoProducto = new Producto(nombre, precio, stock);
    console.log(nuevoProducto);
    
    productos.push(nuevoProducto);
    alert("Producto creado exitosamente!");
}
// crearProducto();
// crearProducto();


function listarProductos() {
    if (productos.length === 0) {
        alert("No hay productos disponibles");
    }else{
        let lista = "Productos disponibles: \n";
        productos.forEach((producto, index)=>{
            lista += `${index + 1} - ${producto.nombre} - $${producto.precio} - Stock: ${producto.stock}\n`;
        });
        alert(lista)
    }
    
}

function editarProducto(){
    listarProductos();
    const index = parseInt(prompt("Ingrese el numero del producto a editar: "));

    if(productos[index -1]){
    
    let nuevoNombre = prompt("Ingrese el nombre del producto: ").trim();    
    let nuevoPrecio = parseFloat(prompt("Ingrese el precio del producto: "));
    let nuevoStock = parseInt(prompt("Ingrese el stock del producto: "));

    while(nuevoNombre === ""){
        alert("El nombre no puede estar en blanco")
        nuevoNombre = prompt("Ingrese el nombre del producto: ").trim();
    }

    while(nuevoPrecio < 0 || isNaN(nuevoPrecio)){
        alert("El precio debe ser un valor numerico mayor a cero");
        nuevoPrecio = parseFloat(prompt("Ingrese el precio del producto: "))
    }

    while(nuevoStock < 0 || isNaN(nuevoStock)){
        alert("El Stock debe ser un valor numerico mayor a cero")
        nuevoStock = parseInt(prompt("Ingrese el stock del producto: "));
    }

    productos[index -1] = new Producto(nuevoNombre, nuevoPrecio, nuevoStock);
    alert("Producto modificado exitosamente");
    }else{
        alert("Producto no encontrado");
    }
}

// listarProductos();

function comprarProductos(){
    let total = 0;
    const carrito = [];
    let continuar = true;

    while(continuar){
        listarProductos();
        const opcion = parseInt(prompt("Ingrese el numero del producto que desea comprar - 0 PARA FINALIZAR -"));
        if (opcion === 0) {
            continuar = false;
        }else if(opcion > 0 && opcion <= productos.length){
            const producto = productos[opcion - 1];
            if (producto.stock > 0) {
                carrito.push(producto);
                producto.stock--;
                total += producto.precio;
                alert(`Añadiste al carrito: ${producto.nombre} - $${producto.precio}`);
            }else{
                alert("stock insuficiente");
            }
        }else{
            alert("OPCION INVALIDA");
        }
    }

    if(carrito.length > 0){
        const nombresCarrito = carrito.map(prod => prod.nombre).join(", ");
        alert(`Compra finalizada. \nProductos en el carrito: ${nombresCarrito}\nMonto total a pagar: $${total}`);
    }else{
        alert("El carrito de compras está vacio");
    }
}


function menu(){
    let opcion;
    do{
        opcion = parseInt(prompt("Seleccione una opcion: \n" + 
        "1- Crear Producto\n" + 
        "2- Listar Productos\n" +
        "3- Editar Producto\n" +
        "4- Comprar Productos\n" +
        "5- Salir"
    ));
    switch (opcion) {
        case 1:
            crearProducto();
            break;
        case 2:
            listarProductos();
            break;
        case 3:
            editarProducto();
            break;
        case 4:
            comprarProductos();
            break;
        case 5:
            alert("Gracias por usar el simulador. ¡Hasta la proxima!");
            break;
        default:
            alert("opcion invalida, intente de nuevo");
    }
    }while(opcion !== 5);
}

menu();


