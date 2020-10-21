import { Request, Response} from "express";
import Subject from "../models/subject";
import Student from "../models/student";

const getSubjects = async (req: Request, res: Response) => {
    //El await hace que la siguiente linea no se ejecute
    //hasta que el resultado no se haya obtenido
    try{
        const results = await Subject.find({});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const getSubject = async (req: Request, res: Response) => {
    try{
        const results = await Subject.find({"_id": req.params.id}).populate('students');
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const addStudentToSubject = async (req: Request, res: Response) => {
    let studentID = req.body.studentID;
    let subjectID = req.body.subjectID;
    let student = await Student.find({"_id": studentID});
    if(!student) return res.status(404).send({message: 'Student not found'});
    else {
        let subject = await Subject.find({"_id": subjectID});
        if(!subject) 
            return res.status(404).send({message: 'Subject not found'});
        else 
            await Subject.updateOne({"_id":req.body.subjectID}, {$addToSet: {students: studentID}});
    }
    return res.status(201).send({message: 'Student added successfully'});
}

export default { getSubjects, getSubject, addStudentToSubject };