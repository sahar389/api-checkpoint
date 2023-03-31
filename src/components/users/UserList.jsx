import React from 'react';
import { useSelector } from 'react-redux';

onst user = () => {
    const {response, loading, error} = useSelector(state=>state.userReducer)
    if (loading) {
      return <div>Loading...</div>
    }