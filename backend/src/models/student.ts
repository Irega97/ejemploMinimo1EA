import mongoose, { Schema, Document} from 'mongoose';

//Modelo de objeto que se guarda en la BBDD de MongoDB
const studentSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    phones: [{
        key: String,
        value: String
    }]
});

//Interfaz para tratar respuesta como documento
export interface IStudent extends Document {
    nombre: string;
    address: string;
    phones: Array<object>;
}

//Exportamos modelo para poder usarlo
export default mongoose.model<IStudent>('Student', studentSchema);