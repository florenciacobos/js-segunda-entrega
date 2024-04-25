// Objeto Producto para representar un producto del supermercado
class Producto {
    constructor(id, nombre, precio, categoria) {
      this.id = id;
      this.nombre = nombre;
      this.precio = precio;
      this.categoria = categoria;
    }
  
    // Método para mostrar información del producto
    mostrarInfo() {
      return `${this.nombre} - ${this.precio}€`;
    }
  }
  
  // Array de productos disponibles en el supermercado
  const productosDisponibles = [
    new Producto(1, "Leche", 2.5, "Lácteos"),
    new Producto(2, "Pan", 1.0, "Panadería"),
    new Producto(3, "Manzanas", 3.0, "Frutas"),
    new Producto(4, "Cereal", 4.0, "Desayuno"),
    new Producto(5, "Yogur", 1.5, "Lácteos"),
  ];
  
  // Función para buscar productos por nombre o categoría
  function buscarProductos(termino) {
    return productosDisponibles.filter(producto =>
      producto.nombre.toLowerCase().includes(termino.toLowerCase()) ||
      producto.categoria.toLowerCase().includes(termino.toLowerCase())
    );
  }
  
  // Función para mostrar los productos y permitir al usuario elegir
  function mostrarProductosYAgregarAlCarrito() {
    const terminoBusqueda = prompt("Ingrese el nombre del producto que desea buscar (leche, pan, manzanas,cereal,yogur):");
    const productosEncontrados = buscarProductos(terminoBusqueda);
  
    if (productosEncontrados.length > 0) {
      let mensaje = "Seleccione un producto para agregar al carrito:\n";
      productosEncontrados.forEach(producto => {
        mensaje += `${producto.mostrarInfo()}\n`;
      });
  
      const opcionSeleccionada = prompt(mensaje);
      const productoSeleccionado = productosEncontrados.find(producto =>
        producto.nombre.toLowerCase() === opcionSeleccionada.toLowerCase()
      );
  
      if (productoSeleccionado) {
        carrito.agregarProducto(productoSeleccionado);
        alert(`Producto '${productoSeleccionado.nombre}' agregado al carrito.`);
      } else {
        alert("La opción seleccionada no es válida.");
      }
    } else {
      alert("No se encontraron productos con ese nombre o categoría.");
    }
  }
  
  // Objeto Carrito de compras
  const carrito = {
    productos: [],
    agregarProducto(producto) {
      this.productos.push(producto);
    },
  };
  
  // Ejemplo de uso llamando a la función principal
  mostrarProductosYAgregarAlCarrito();