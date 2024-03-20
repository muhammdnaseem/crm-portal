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

function Allotment() {
    const [showForm, setShowForm] = useState(false);
    const { projectData, blockData, allotmentTableData } = useDataContext();
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

     const handleAddAllotmentClick = () => {
        setShowForm(!showForm); // Toggle the visibility of the form
    };

    const handleSaveAllotmentClick = async (formData) => {
    // Your existing code to save the block
    const newAllotment = {
        project: formData.project,
        block: formData.block,
        fileno: formData.fileno,
        size: formData.size,
        status: formData.status,
        filefeature: formData.filefeature,

    };

    console.log(newAllotment);

    try {
      const response = await fetch('http://localhost:4000/allotment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAllotment),
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
            title: "Project",
            type: "select",
            options: projectData.map(project => project.projectname),
            values: projectData.map(project => project.id),
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Block",
            type: "select",
            options: blockData.map(block => block.blockname),
            values: blockData.map(block => block.id),
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "File No",
            type: "text",
            rows: 0,
            placeholder: "Type File No"
        },
        {
            title: "Size",
            type: "select",
            options: ["7 marlas", "10 marlas", "20 marlas"],
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Status",
            type: "select",
            options: ["sold out", "for sale"],
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "File Feature",
            type: "text",
            rows: 0,
            placeholder: "Type File Feature"
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
    col2: "Project",
    col3: "Block",
    col4: "File No",
    col5: "Size",
    col6: "Status",
    col7: "File Feature"
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
            <Button buttonClass="colored-button" title="Add Allotment Request" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddAllotmentClick}/>
          </div>  
          {/*
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete Role" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddAllotmentClick}/>
            </div>
            */}
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs} 
                onSave={handleSaveAllotmentClick}/>
                </Fade>
            }
      
         <div className="table-container">
         
            <Table 
            tablerow={allotmentTableData} 
            tablehead={tableheadrow}
            datasource="allotmentsdata"
            />
        </div>
        </div>
      
    );
}

export default Allotment;
