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
    const { projectData, blockData } = useDataContext();
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
    const newRole = {
        customer: formData.customername,
        referencenum: formData.referencenum,
        serialnum: formData.serialnum,
        transferfee: formData.transferfee,
        agent: formData.agent,
        plot1: formData.plot1,
        plot2: formData.plot2,
        cniccopy: formData.cniccopy,
    };

    console.log(newRole);

    try {
      const response = await fetch('http://localhost:4000/mergerequest', {
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
            title: "Project",
            type: "select",
            options: projectData.map(project => project.projectname),
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Block",
            type: "select",
            options: blockData.map(block => block.blockname),
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "File No",
            type: "text",
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Size",
            type: "select",
            options: ["agent-1", "agent-2", "agent-3"],
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Status",
            type: "select",
            options: ["plot-1", "plot-2", "plot-3"],
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "File Feature",
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
    col2: "Project",
    col3: "Block",
    col4: "File No",
    col5: "Plot Second",
    col6: "Size",
    col7: "Price",
    col8: "Type",
    col9: "Status",
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
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete Role" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddAllotmentClick}/>
            </div>
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs} 
                onSave={handleSaveAllotmentClick}/>
                </Fade>
            }
      
         <div className="table-container">
          <div className="button-container mt-3">
        <div className="add-button">
            <Button style={styles.circlebutton} buttonColor="blue" title="Copy" clickfunction={handleAddAllotmentClick}/>
          </div>  
        <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="skyblue" title="CSV" clickfunction={handleAddAllotmentClick}/>
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="green" title="Excel" clickfunction={handleAddAllotmentClick}/>
            </div>
        
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="red" buttonColor="blue" title="PDF" clickfunction={handleAddAllotmentClick}/>
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="pink" title="Print" clickfunction={handleAddAllotmentClick}/>
            </div>
         </div>
            <Table tablerow={tableData} tablehead={tableheadrow}/>
        </div>
        </div>
      
    );
}

export default Allotment;
