import axios from "axios";
//import React from 'react'

const api = axios.create({
  baseURL: "http://192.168.182.102:3000",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 50000,
});

export default api;
