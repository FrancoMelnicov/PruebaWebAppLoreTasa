import { from } from "rxjs";
import { FormularioComponentes } from './formularioComponentes';
import { ComponentesFaltantes } from './componentesFaltantes';
import { Neumaticos } from './neumaticos';

export class Formulario{

    //total de presupuesto de componentes
   


    //METODO CONSTRUCTOR
    constructor(

    //datos del titular
    public fecha: Date,
    public nombre_apellido:string,
    public domicilio:string,
    public localidad:string,
    public telefono:string,
    public codigoPostal:number,

    //datos automotor
    public marca:string,
    public grupo:string,
    public modelo:string,
    public year: number,
    public dominio:string,
    public color:string,

    //revision tecnica
    public nombreTecnico: string,

    //verificacion numeros automotor
    public numeroMotor:string,
    public numeroChasis:string,
    
    //inspeccion tecnica
    //public inspeccionTecnica: Array<Boolean>
    
    public motorCilindros: any,
    public combustible: any,
    public combustibleGnc:any,
    public turbo: any,
    public cajaVelocidades: any,
    public cajaAutomatica: any,
    public cuatroXcuatro: any,
    public frenoPotencia: any,
    public ABS: any,
    public direccionAsistida: any,
    public levantaVidriosElec: any,
    public calefaccion: any,
    public aireAcondicionado: any,
    public AirBag: any,
    public cinturonesSeguridad: any,
    public cinturionesInerciales: any,
    public radio: any,
    public pasaCassette: any,
    public cd: any,
    public cierreCentralizado: any,
    public vidriosTontalizados: any,
    public km: number,

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
    public faltantes: ComponentesFaltantes,

    //total presupuesto de componentes
    public totalComponentes: number,

    //NEUMATICOS
    public delanteraI: Neumaticos,
    public delanteraD: Neumaticos,
    public traseraI: Neumaticos,
    public traseraD: Neumaticos,
    public auxiliar: Neumaticos,
    //vehiculos con balancin o dual. Esto puede ser completado o no
    public balan_Dual_TraseraI: Neumaticos,
    public balan_Dual_TraseraD: Neumaticos,

    /*
    //contiene img de ilustracion del vehiculo
    public ilustracion;

    //chapa y pintura debe contener todo el listado de los daños visibles del vehiculo, se deben estar concatenados.
    public $dañosChapa_Pintura: string;

    //contiene un array de fotos del vehiculo
    public imgVehiculo;
    */
    public precioInfoAuto: number,
    public descuento: number,
    public gastos: number,
    public precioFinal: number
    ){

    }
}