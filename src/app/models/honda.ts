import { Auto } from "./auto";

export class Honda extends Auto {

    constructor(motor='V8') { 
        super('Honda', motor);
    }


    public getCosto(): number{
        return 12000;
        
    }

    //FUnction estandar
    public promedio(total: number, sumatoria: number): number{
        //Escribir al algoritmo 

        return sumatoria/total;
    }

    //FUnction flecha
    public promedio2 = (total: number, sumatoria: number): number=> 
    { 
        //Escribir al algoritmo 
        return sumatoria/total;
    }

    //FUnction estandar

    public getTotal(): number{
        return 12;
    }

    //FUnction flecha
    public getTotal2= ():number=> 12;


}
