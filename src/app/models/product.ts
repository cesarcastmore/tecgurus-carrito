import { Entity } from "../services/database.service";
import { Categoria } from "./categoria";

export interface Product extends Entity {

    nombre: string;
    descripcion: string;
    precio: number;
    stock: number;
    sku: string;
    idproducto: number;
    categoria: Categoria;
}
