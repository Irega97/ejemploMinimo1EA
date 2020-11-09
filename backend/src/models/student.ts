import mongoose, { Schema, Document} from 'mongoose';

//Modelo de objeto que se guarda en la BBDD de MongoDB
const studentSchema = new Schema({
    _id: {
        type: String
    },
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
    _id: string;
    name: string;
    address: string;
    phones: Array<Object>;
}

//Exportamos modelo para poder usarlo
export default mongoose.model<IStudent>('Student', studentSchema);