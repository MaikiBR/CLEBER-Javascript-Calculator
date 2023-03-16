const express=require('express');
const app=express();
require('dotenv').config();

const BASE_URL = process.env.REACT_APP_BASE_URL;

const PORT= BASE_URL || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}` )
})