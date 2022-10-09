export class Auto {

    private motor: string='V8';
    public velocidad: number= 12;
    protected marca: string='Honda';

    constructor(marca:string, motor='V8'){
        this.motor= motor;
        this.marca = marca;
    }


    getMotor(): string{
        return this.motor;
    }

    public setMotor(motor: string): void{
        this.motor= motor;
    }



}


