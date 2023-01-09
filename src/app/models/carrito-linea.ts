import { Product } from "./product";

export interface CarritoLinea {
    producto:Product;
    cantidad: number;
    costo: number;
    idcompraproducto?: number;

}
