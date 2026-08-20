"use strict";
// ==========================================
// EJERCICIOS JAVASCRIPT - TYPESCRIPT
// ==========================================
Object.defineProperty(exports, "__esModule", { value: true });
// ==========================================
// 1. Crear un array con 5 nombres de
// estudiantes y mostrar cada nombre
// usando un ciclo.
// ==========================================
const estudiantes = [
    "Carlos",
    "Maria",
    "Juan",
    "Laura",
    "Pedro"
];
console.log("========== PUNTO 1 ==========");
for (const estudiante of estudiantes) {
    console.log(estudiante);
}
// ==========================================
// 2. Imprimir cuantos estudiantes hay
// en el arreglo.
// ==========================================
console.log("========== PUNTO 2 ==========");
console.log("Cantidad de estudiantes:", estudiantes.length);
// ==========================================
// 3. Crear un array de números y
// calcular la suma total.
// ==========================================
const numeros = [
    10,
    25,
    40,
    55,
    70
];
let suma = 0;
for (const numero of numeros) {
    suma = suma + numero;
}
console.log("========== PUNTO 3 ==========");
console.log("Suma total:", suma);
// ==========================================
// 4. Crear un array de números mínimo 15
// y calcular la suma total.
// ==========================================
const numeros15 = [
    5,
    10,
    15,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    60,
    65,
    70,
    75
];
let suma15 = 0;
for (const numero of numeros15) {
    suma15 = suma15 + numero;
}
console.log("========== PUNTO 4 ==========");
console.log("Suma de los 15 números:", suma15);
// ==========================================
// 5. Calcular el promedio de los números
// del punto 3.
// ==========================================
const promedio = suma / numeros.length;
console.log("========== PUNTO 5 ==========");
console.log("Promedio:", promedio);
// ==========================================
// 6. Imprimir los números mayores a 50
// del punto 3.
// ==========================================
console.log("========== PUNTO 6 ==========");
console.log("Números mayores a 50:");
for (const numero of numeros) {
    if (numero > 50) {
        console.log(numero);
    }
}
// ==========================================
// 7. Crear un objeto de persona con
// nombre, edad y ciudad e imprimir
// sus valores.
// ==========================================
const persona = {
    nombre: "Fernando",
    edad: 20,
    ciudad: "Medellin"
};
console.log("========== PUNTO 7 ==========");
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);
const productos = [
    {
        nombre: "Laptop",
        precio: 2500000
    },
    {
        nombre: "Mouse",
        precio: 80000
    },
    {
        nombre: "Teclado",
        precio: 150000
    },
    {
        nombre: "Monitor",
        precio: 900000
    }
];
console.log("========== PUNTO 8 ==========");
for (const producto of productos) {
    console.log("Producto:", producto.nombre, "- Precio:", producto.precio);
}
// ==========================================
// 9. Encontrar el producto con mayor
// precio del array e imprimirlo.
// ==========================================
console.log("========== PUNTO 9 ==========");
// Variable para guardar el producto
// con el precio más alto.
let productoMayorPrecio = null;
for (const producto of productos) {
    // Si todavía no tenemos un producto,
    // guardamos el primero.
    if (productoMayorPrecio === null) {
        productoMayorPrecio = producto;
    }
    // Si ya tenemos un producto,
    // comparamos los precios.
    else if (producto.precio > productoMayorPrecio.precio) {
        productoMayorPrecio = producto;
    }
}
// Comprobamos que exista un producto
// antes de mostrarlo.
if (productoMayorPrecio !== null) {
    console.log("Producto con mayor precio:");
    console.log("Nombre:", productoMayorPrecio.nombre);
    console.log("Precio:", productoMayorPrecio.precio);
}
else {
    console.log("No hay productos disponibles.");
}
const inventario = [
    {
        nombre: "Laptop",
        precio: 2500000,
        cantidad: 3
    },
    {
        nombre: "Mouse",
        precio: 80000,
        cantidad: 10
    },
    {
        nombre: "Teclado",
        precio: 150000,
        cantidad: 5
    },
    {
        nombre: "Monitor",
        precio: 900000,
        cantidad: 4
    }
];
let valorTotalInventario = 0;
console.log("========== PUNTO 10 ==========");
for (const producto of inventario) {
    const valorProducto = producto.precio * producto.cantidad;
    console.log("Producto:", producto.nombre);
    console.log("Unidades disponibles:", producto.cantidad);
    console.log("Valor total del producto:", valorProducto);
    valorTotalInventario =
        valorTotalInventario + valorProducto;
}
console.log("Valor total del inventario:", valorTotalInventario);
const estudiantesUniversidad = [
    {
        nombre: "Carlos",
        semestre: 3,
        materias: [
            {
                nombre: "Programacion",
                nota: 4.5
            },
            {
                nombre: "Bases de Datos",
                nota: 4.0
            },
            {
                nombre: "Matematicas",
                nota: 3.5
            }
        ]
    },
    {
        nombre: "Laura",
        semestre: 4,
        materias: [
            {
                nombre: "Programacion",
                nota: 4.8
            },
            {
                nombre: "Bases de Datos",
                nota: 4.5
            },
            {
                nombre: "Ingles",
                nota: 4.2
            }
        ]
    },
    {
        nombre: "Juan",
        semestre: 2,
        materias: [
            {
                nombre: "Programacion",
                nota: 3.0
            },
            {
                nombre: "Matematicas",
                nota: 3.2
            },
            {
                nombre: "Ingles",
                nota: 3.8
            }
        ]
    }
];
let sumaPromedios = 0;
console.log("========== PUNTO 11 ==========");
for (const estudiante of estudiantesUniversidad) {
    let sumaNotas = 0;
    for (const materia of estudiante.materias) {
        sumaNotas =
            sumaNotas + materia.nota;
    }
    const promedioEstudiante = sumaNotas / estudiante.materias.length;
    sumaPromedios =
        sumaPromedios + promedioEstudiante;
    console.log("Estudiante:", estudiante.nombre);
    console.log("Semestre:", estudiante.semestre);
    console.log("Promedio:", promedioEstudiante.toFixed(2));
    console.log("--------------------");
}
// Calcular promedio de todos los estudiantes
const promedioTodos = sumaPromedios / estudiantesUniversidad.length;
console.log("Promedio de todos los estudiantes:", promedioTodos.toFixed(2));
// ==========================================
// 12. Imprimir el nombre de los estudiantes
// que tienen promedio mayor a 3.5.
// ==========================================
console.log("========== PUNTO 12 ==========");
console.log("Estudiantes con promedio mayor a 3.5:");
for (const estudiante of estudiantesUniversidad) {
    let sumaNotas = 0;
    for (const materia of estudiante.materias) {
        sumaNotas =
            sumaNotas + materia.nota;
    }
    const promedioEstudiante = sumaNotas / estudiante.materias.length;
    if (promedioEstudiante > 3.5) {
        console.log(estudiante.nombre, "- Promedio:", promedioEstudiante.toFixed(2));
    }
}
//# sourceMappingURL=ejercicios.js.map