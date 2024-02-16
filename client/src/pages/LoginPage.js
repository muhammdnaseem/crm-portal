import React, {useState} from 'react';
import Button from '../components/Button';
import { CiCirclePlus } from "react-icons/ci";
import { MdAddBusiness } from "react-icons/md";
import LoginForm from '../components/LoginForm';
import Table from '../components/Table';
import Fade from 'react-reveal/Fade';
import { MdDelete } from "react-icons/md";
import {styles} from '../constants/styles';

function LoginPage({onLogin}) {
   
    return (
        <React.Fragment>
      <LoginForm onLogin={onLogin}/>
        
        </React.Fragment>
      
    );
}

export default LoginPage;
