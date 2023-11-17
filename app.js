// const express = require('express')
import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from './assignments/routes.js';
import cors from "cors";

const app = express()
app.use(express.json());
app.use(cors());

CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);

Lab5(app);

Hello(app)

// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(4000)