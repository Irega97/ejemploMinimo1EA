import {Router} from "express"; 
import subjectController from '../controllers/subject.controller'
import subject from "../models/subject";

//Router nos permite gestionar rutas de la API
const router = Router();

/*
- listado de asignaturas (CU_1)
- añadir alumno en una asignatura (CU_2)
- ver detalle de una asignatura (CU_3)
- ver detalle de un alumno dentro de una asignatura (CU_4)*/

router.get('/all', subjectController.getSubjects);
router.get('/:id', subjectController.getSubject);
router.post('/addStudent', subjectController.addStudentToSubject);

//Exportamos router para usar rutas en app.ts
export default router;