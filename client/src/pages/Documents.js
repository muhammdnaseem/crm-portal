import React, { useState } from 'react';
import '../assets/css/projects.css';
import Button from '../components/Button';
import { CiCirclePlus } from 'react-icons/ci';
import { MdAddBusiness, MdDelete } from 'react-icons/md';
import Form from '../components/Form';
import Table from '../components/Table';
import Fade from 'react-reveal/Fade';
import { styles } from '../constants/styles';

function Documents() {
  const [showForm, setShowForm] = useState(false);
  const [checkedRows, setCheckedRows] = useState([]);

    const [tableData, setTableData] = useState([]);
    const [Inputs, setInputs] = useState([
    {
      title: "Select Form",
      type: "select",
      options: ["Registration", "Transfer", "Merger"],
      rows: 0,
      placeholder: "Type Document name",
    },
    {
      title: "Document Title",
      type: "text",
      rows: 0,
      placeholder: "Type Document name",
    },
    {
      title: "System Value",
      type: "text",
      rows: 0,
      placeholder: "Type System value",
    },
    {
            title: "Add More",
            type: "button",
            rows: 0,
            icon: <MdAddBusiness />,
            class: "colored",
        },
        {
            title: "Submit",
            type: "button",
            rows: 0,
            icon: <MdAddBusiness />,
            class: "",
        },
  ]);

  const handleAddProjectClick = () => {
    setShowForm(!showForm);
  };


  const handleSaveProjectClick = (formData) => {
    // Create a new project object using the form data
   
    const newProject = {
      Id: tableData.length + 1, // Assign a new unique ID
      ProjectName: formData.projectname,
      Description: formData.description,
      TotalMarla: formData.totalmarla,
      CreatedAt: new Date().toLocaleDateString(), // Use the current date
      Blocks: formData.blocks,
      Agents: formData.agent,
    };
    

    // Update the tableData array with the new project
    setTableData((prevTableData) => [...prevTableData, newProject]);

    // Hide the form after saving
    setShowForm(false);
  };

  const handleCheckboxChange = (Id) => {
    setCheckedRows((prevCheckedRows) =>
      prevCheckedRows.includes(Id)
        ? prevCheckedRows.filter((id) => id !== Id)
        : [...prevCheckedRows, Id]
    );
  };

  const handleDeleteProjectClick = () => {
    console.log('Checked Rows:', checkedRows);
   
  };
  const handleDeleteRow = (Id) => {
    // Implement the logic to delete the row with the specified Id
    const updatedTableData = tableData.filter((row) => row.Id !== Id);
    setTableData(updatedTableData);
  };



 const handleRepeatFormClick = () => {
  const newInputSet = [
    {
      title: "Document Title",
      type: "text",
      rows: 0,
      placeholder: "Type Document name",
    },
    {
      title: "System Value",
      type: "text",
      rows: 0,
      placeholder: "Type System value",
    },
    {
      title: "Add More",
      type: "button",
      rows: 0,
      icon: <MdAddBusiness />,
      class: "colored",
    },
    {
      title: "Submit",
      type: "button",
      rows: 1, // Set rows to 1 to avoid the "Submit" text being added to the next input
      icon: <MdAddBusiness />,
      class: "",
    },
  ];

  // Update the Inputs state by removing the last element (Submit button) and adding the new input set
  setInputs((prevInputs) => [...prevInputs.slice(0, -1), ...newInputSet]);
};


  
   
 



 return (
    <div className="row">
      
   
        <Fade top>
            <Form inputs={Inputs} onSave={handleSaveProjectClick} onRepeatForm={handleRepeatFormClick} />
        </Fade>

        
        

     
    </div>
  );
}

export default Documents;