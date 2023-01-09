import { Categoria } from "./categoria";

export interface Product {

    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    sku: string;
    idproducto: number;
    categoria: Categoria;
}
