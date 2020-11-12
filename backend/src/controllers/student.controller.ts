import { Request, Response} from "express";
import Student from "../models/student"

/* function getCourses(req:Request, res:Response):void {
    Course.find({}).then((data)=>{
        let status: number = 200;
        if(data==null) status = 404;
        return res.status(status).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}

function postCourse (req: Request, res: Response): void {
    const course = new Course({
        "nombre": req.body.nombre
    });
    console.log(req.body);
    course.save().then((data) => {
        return res.status(201).json(data);
    }).catch((err) => {
        return res.status(500).json(err);
    })
}*/

const getStudents = async (req: Request, res: Response) => {
    //El await hace que la siguiente linea no se ejecute
    //hasta que el resultado no se haya obtenido
    try{
        const results = await Student.find({});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const getStudent = async (req: Request, res: Response) => {
    try{
        const results = await Student.find({"_id": req.params.id});
        return res.status(200).json(results);
    } catch (err) {
        return res.status(404).json(err);
    }
}

const newStudent = async (req: Request, res: Response) => {
    try{
    let student = new Student({
        "name" : req.body.name,
        "address" : req.body.address,
        "phones" : req.body.phones
    });
    student.save().then((data) => {
        return res.status(201).json(data);
    });
    } catch(err) {
        return res.status(500).json(err);
    }
}

//export default { getCourses, postCourse };
export default { getStudents, getStudent, newStudent };