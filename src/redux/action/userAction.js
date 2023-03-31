import axios from "axios";
import React, { useState, useEffect } from 'react';


export const searchUser = query=> async dispatch =>{

    dispatch({type:IS_LOADING});
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      
      dispatch({type:IS_SUCCESS,payload:res.data});
    } catch (err) {
      console.log("error: ",err.message);
      dispatch({type:IS_ERROR,payload:err.message});
    }  
}

