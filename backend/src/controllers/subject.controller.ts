import { Request, Response} from "express";
import Subject from "../models/subject";
import Student from "../models/student";

const getSubjects = async (req: Request, res: Response) => {
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
    let subjectName = req.params.subjectName;
    let studentName = req.body.name; 
    let studentAddress = req.body.address; 
    let studentID; 
    let student = new Student({ "name": studentName, "address": studentAddress });
    let s = await Student.findOne({name: studentName}); 
    console.log("S: ", s); 
    if(!s) { 
        student.save().then((data) => { 
        studentID = data.id; 
        console.log("Sid: ", studentID); 
        });
    } else studentID = s._id; 
    console.log("Student ID",studentID );
    await Subject.updateOne({"name": subjectName}, {$addToSet: {students: studentID}}).then(data => { 
        if (data.nModified == 1) { 
            console.log("Student added successfully"); 
            res.status(201).send({message: 'Student added successfully'}); 
        } else { 
            res.status(409).json('Student already exists!!!') 
    } }).catch((err) => { 
        console.log("error ", err); 
        res.status(500).json(err); 
    }); 
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