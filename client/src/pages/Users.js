import React, {useState} from 'react';
import '../assets/css/projects.css';
import Button from '../components/Button';
import { CiCirclePlus } from "react-icons/ci";
import { MdAddBusiness } from "react-icons/md";
import Form from '../components/Form';
import Table from '../components/Table';
import Fade from 'react-reveal/Fade';
import { MdDelete } from "react-icons/md";
import {styles} from '../constants/styles';
import { useDataContext } from './DataContext';

function Users() {
  
    const [showForm, setShowForm] = useState(false);
    const { usersData, usersTableData, updateUsersData } = useDataContext();

     const handleAddUserClick = () => {
        setShowForm(!showForm); // Toggle the visibility of the form
    };

    const inputs = [
        {
            title: "Name",
            type: "text",
            rows: 0,
            placeholder: "Type Your Name"
        },
        {
            title: "Email",
            type: "text",
            rows: 0,
            placeholder: "Type Your email"
        },
        {
            title: "Password",
            type: "password",
            rows: 0,
            placeholder: "Type Your Password"
        },
        

        {
            title: "Default Role",
            type: "select",
            options: ["Administrater", "Normal User", "CCR", "GM Sales", "Agent"],
            rows: 0,
            placeholder: "Select Role"
        },

        {
            title: "Additional Role",
            type: "text",
            rows: 0,
            placeholder: "Add additional role"
        },
        {
            title: "Locale",
            type: "select",
            options: ["en", "cs", "dl", "el"],
            rows: 0,
            placeholder: "Select locale"
        },
        {
            title: "Image",
            type: "file",
            rows: 0,
            placeholder: "Upload Image"
        },
         {
            title: "Submit",
            type: "button",
            rows: 0,
            placeholder: "Type project name",
            icon: <MdAddBusiness />
        },
       
    ];


    const handleSaveUserClick = async (formData) => {
    // Your existing code to save the block
    const newUser = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        defaultrole: formData.defaultrole,
        additionalrole: formData.additionalrole,
        locale: formData.locale,
        image: formData.image,
    };

    console.log(newUser);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error adding project:', error.message);
    }
  };


   

 const tableheadrow = [
  {
    col1: "ID",
    col2: "Name",
    col3: "Email",
    col4: "Default Role",
    col5: "Additional Role",
    col6: "Locale",
    col7: "Image",
  },
  // Add more header columns if needed
];




    return (
        <div className="row">
        <div className="button-container">
        <div className="add-button">
            <Button buttonClass="colored-button" title="Add User" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddUserClick}/>
          </div>  
          {/*
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete User" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddUserClick}/>
            </div>
            */}
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs} onSave={handleSaveUserClick}/>
                </Fade>
            }
      
         <div className="table-container">
          
            <Table 
            tablerow={usersTableData} 
            tablehead={tableheadrow}
            datasource="usersdata"/>
        </div>
        </div>
      
    );
}

export default Users;






