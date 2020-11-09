import mongoose, { Schema, Document} from 'mongoose';
import { Identifier, ObjectDestructuringAssignment } from 'typescript';

//Modelo de objeto que se guarda en la BBDD de MongoDB
const studentSchema = new Schema({
    name: {
        type: String
    },
    address: {
        type: String
    },
    phones: [{
        name: String,
        number: String
    }]
});

//Interfaz para tratar respuesta como documento
export interface IStudent extends Document {
    name: string;
    address: string;
    phones: Array<Object>;
}

//Exportamos modelo para poder usarlo
export default mongoose.model<IStudent>('Student', studentSchema);