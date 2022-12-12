
import {Router} from 'express'
import {
    getTask,
    getTasks,
    updateTask,
    createTask,
    deleteTask
} from '../controller/tasksfunctions.js'


export const router = Router();


router.get('/tasks',getTasks);

router.get('/tasks/:id',getTask);

router.put('/tasks/:id',updateTask);

router.delete('/tasks/:id',deleteTask);

router.post('/tasks',createTask);