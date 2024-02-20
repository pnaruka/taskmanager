import express from "express";
import cors from 'cors';
import pool from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());


//create task
app.post('/tasks', async(req,res)=>{
    try {
        const task = req.body;
        const query = 'INSERT INTO tasklist (title,description,start_date,due_date,status) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [task.title,task.description,task.start_date,task.due_date,task.status];
        const created = await pool.query(query,values);
        res.json(created.rows);
    } catch (error) {
        console.log(error.message);
        res.json(error.message);
    }
})






app.listen(5000, ()=>{
    console.log("server up");
})