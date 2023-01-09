import { CarritoLinea } from "./carrito-linea";
import { Cliente } from "./cliente";
import { Usuario } from "./usuario";

export interface Carrito {
    cliente: Cliente;
    compraproductos: CarritoLinea[];
    fecha: string;
    idcompra?: number;
    total: number;
    usuario: Usuario;
}
