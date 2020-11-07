import { Request, Response} from "express";
import Subject from "../models/subject";
import Student from "../models/student";

const getSubjects = async (req: Request, res: Response) => {
    //El await hace que la siguiente linea no se ejecute
    //hasta que el resultado no se haya obtenido
    try{
        const results = await Subject.find({}).populate('students');
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
    let subjectName = req.body.subjectName;
    let student = await Student.find({"_id": studentID});
    if(!student) return res.status(404).send({message: 'Student not found'});
    else {
        let subject = await Subject.find({"name": subjectName});
        if(!subject) 
            return res.status(404).send({message: 'Subject not found'});
        else 
            await Subject.updateOne({"name":req.body.subjectName}, {$addToSet: {students: studentID}});
    }
    return res.status(201).send({message: 'Student added successfully'});
}

const addSubject = async (req: Request, res: Response) => {
    const subject = new Subject({
        "name": req.body.name,
        "students": []
    });
    console.log(req.body);
    subject.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

export default { getSubjects, getSubject, addStudentToSubject, addSubject };