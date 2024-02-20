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

//get all
app.get('/tasks', async(req,res)=>{
    try {
        const tasks = await pool.query("SELECT * FROM tasklist");
        res.json(tasks.rows);
    } catch (error) {
        console.log(error.message);
    }
})

//get task
app.get('/tasks/:id', async(req,res)=>{
    try {
        const { id } = req.params;
        const task = await pool.query("SELECT * FROM tasklist where id=$1",[id]);
        res.json(task.rows);
        
    } catch (error) {
        console.log(error.message);
    }
})

app.put('/tasks/:id', async(req, res)=>{
    try {
        const {id} = req.params;
        const task = req.body;
        const query = "UPDATE tasklist SET title=$1,description=$2,start_date=$3,due_date=$4,status=$5 where id=$6 RETURNING *";
        const values = [task.title,task.description,task.start_date,task.due_date,task.status,id];
        const updated = await pool.query(query,values);
        res.json(updated.rows);
    } catch (error) {
        console.log(error.message);
    }
})



app.listen(5000, ()=>{
    console.log("server up");
})