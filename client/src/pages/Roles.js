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

function Roles() {
    const [showForm, setShowForm] = useState(false);
    const { projectData, roleTableData, updateRoleData } = useDataContext();
    const [tableData, setTableData] = useState([{ 
    Id: 1, 
    RoleName: "First Role",
    DisplayName: "Role1",
  },

   { 
    Id: 2, 
    RoleName: "Second Role",
    DisplayName: "Role2",
  }]);

     const handleAddRoleClick = () => {
        setShowForm(!showForm); // Toggle the visibility of the form
    };

    const handleSaveRoleClick = async (formData) => {
    // Your existing code to save the block
    const newRole = {
        name: formData.name,
        displayname: formData.displayname,
    };

    console.log(newRole);

    try {
      const response = await fetch('http://localhost:4000/role', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newRole),
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

    const inputs = [
        {
            title: "Name",
            type: "text",
            rows: 0,
            placeholder: "Type role Name"
        },
        {
            title: "Display Name",
            type: "text",
            rows: 0,
            placeholder: "Type display Name"
        },
        

         {
            title: "Submit",
            type: "button",
            rows: 0,
            placeholder: "Type project name",
            icon: <MdAddBusiness />
        },
       
    ];


   

 const tableheadrow = [
  {
    col1: "ID",
    col2: "Name",
    col3: "Display Name",
  },
  // Add more header columns if needed
];

const initialtableData = [
  { 
    Id: 1, 
    RoleName: "First Role",
    DisplayName: "Role1",
  },

   { 
    Id: 2, 
    RoleName: "Second Role",
    DisplayName: "Role2",
  },
  
  
];


    return (
        <div className="row">
        <div className="button-container">
        <div className="add-button">
            <Button buttonClass="colored-button" title="Add Role" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddRoleClick}/>
          </div>  
          {/*
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete Role" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddRoleClick}/>
            </div>
            */}
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs} 
                onSave={handleSaveRoleClick}/>
                </Fade>
            }
      
         <div className="table-container">
         
            <Table 
            tablerow={roleTableData} 
            tablehead={tableheadrow}
            datasource="rolesdata"
            />
        </div>
        </div>
      
    );
}

export default Roles;
