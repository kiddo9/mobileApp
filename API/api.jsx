import axios from "axios";
//import React from 'react'

 const api = axios.create({
     baseURL: 'http://192.168.1.129:3000',
     headers: {
       'Content-Type': 'application/json',
     },
     timeout: 10000,
 })

export default api
