import {Router} from "express"; 
import studentController from '../controllers/student.controller'

//Router nos permite gestionar rutas de la API
const router = Router();

/*
- listado de asignaturas (CU_1)
- añadir alumno en una asignatura (CU_2)
- ver detalle de una asignatura (CU_3)
- ver detalle de un alumno dentro de una asignatura (CU_4)*/

router.get('/all', studentController.getStudents);
router.get('/:id', studentController.getStudent);
router.post('/new',studentController.newStudent);

//Exportamos router para usar rutas en app.ts
export default router;