import { FormularioComponentes } from './formularioComponentes';
import { Neumaticos } from './neumaticos';
import { ChaperiaPintura } from './chaperiaPintura';

export class Formulario{

    //METODO CONSTRUCTOR
    constructor(

    //datos del titular
    public fecha: Date,
    public nombre_apellido:string,
    public telefono:string,

    //datos automotor
    public marca:string,
    public grupo:string,
    public modelo:string,
    public year: string,
    public dominio:string,
    public color:string,
    public km:string,
    //contiene el numero de motor y chasis
    public fotoCedula:string,
    //revision tecnica
    public nombreTecnico: string,
    
    
    //CARACTERISTICAS VEHICULO
    //datos traidos segun la informacion completada en datos automotor, los datos traidos seran de info auto y depende de la cantidad de peticiones que se puedan hacer se guardaran en la base de datos o no.   


    //FORMULARIO DE LOS COMPONENTES LOS CUALES CONTENDRAN OBJETOS
    public motor: FormularioComponentes,
    public sitemaEscape: FormularioComponentes,
    public cajaCambios: FormularioComponentes,
    public sistemaSuspension: FormularioComponentes,
    public diferencial: FormularioComponentes,
    public embrague: FormularioComponentes,
    public direccion: FormularioComponentes,
    public trenDelantero: FormularioComponentes,
    public amortiguador: FormularioComponentes,
    public frenos: FormularioComponentes,
    public radiador: FormularioComponentes,
    public chasis: FormularioComponentes,
    public chapaCarroceria: FormularioComponentes,
    public vidrios: FormularioComponentes,
    public levantaCristales: FormularioComponentes,
    public colizas: FormularioComponentes,
    public pintura: FormularioComponentes,
    public tapizados_alfombras: FormularioComponentes,
    public instalacionElectrica: FormularioComponentes,
    public instrumentoTablero: FormularioComponentes,
    public acumulador: FormularioComponentes,
    public faros: FormularioComponentes,
    public limpiaParabrisas: FormularioComponentes,
    public limpiaLavaLuneta: FormularioComponentes,
    //total presupuesto de componentes
    public totalComponentes: string,

    //NEUMATICOS
    public delanteraI: Neumaticos,
    public delanteraD: Neumaticos,
    public traseraI: Neumaticos,
    public traseraD: Neumaticos,
    public auxiliar: Neumaticos,
    public gato: string,
    public llave: string,
    //balancin neumaticos
    public balancinTraseraI: Neumaticos,
    public balancinTraseraD: Neumaticos,


    //CHAPERIA Y PINTURA
    //hacer objeto de este
    public chaperiaPintura: ChaperiaPintura,
    

    //IMAGENES VEHICULO
    public fotoFrente: string,
    public fotoLateralIzq: string,
    public fotoLateralDer: string,
    public fotoPosterior: string,
    public fotoInterior: string,
    

    //PRECIO DE TOMA
    public precioInfoAuto: string,
    public descuento: string,
    public gastos: string,
    public precioFinal: string
    
    ){

    }
}