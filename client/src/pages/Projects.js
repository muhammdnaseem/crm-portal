import React, { useState } from 'react';
import '../assets/css/projects.css';
import Button from '../components/Button';
import { CiCirclePlus } from 'react-icons/ci';
import { MdAddBusiness, MdDelete } from 'react-icons/md';
import Form from '../components/Form';
import Table from '../components/Table';
import Fade from 'react-reveal/Fade';
import { styles } from '../constants/styles';

import { useDataContext } from './DataContext';

function Projects() {
  const [showForm, setShowForm] = useState(false);
  const { projectData, projectsTableData, updateProjectData, blockData, agentsData } = useDataContext();
  const [checkedRows, setCheckedRows] = useState([]);


const [inputs, setInputs] = useState([
        {
            title: "Project Name",
            type: "text",
            rows: 0,
            placeholder: "Type project name",
            
        },
        {
            title: "Description",
            type: "text",
            rows: 3,
            cols: 40,
            placeholder: "Type Description"
        },
        {
            title: "Total Marla",
            type: "text",
            rows: 0,
            placeholder: "Type total Marla"
        },

        {
            title: "Blocks",
            type: "select",
            options: blockData.map(block => block.blockname),
            values: blockData.map(block => block.id),
            rows: 0,
            placeholder: "Type blocks"
        },

        {
            title: "Agent",
            type: "select",
            options: agentsData.map(agent => agent.name),
            values: agentsData.map(agent => agent.id),
            rows: 0,
            placeholder: "Type Agent name"
        },
       
        {
            title: "Submit",  // Set the title to 'Submit'
            type: "button",
            rows: 0,
            placeholder: "Submit",
            icon: <MdAddBusiness />,
            class: "",
        },
    ]);




  const handleAddProjectClick = () => {
    setShowForm(!showForm);
  };


  
  const handleSaveProjectClick = async (formData) => {
    const newProject = {
        projectname: formData.projectname,
        description: formData.description,
        totamarla: formData.totalmarla, // replace with your actual values
        block: formData.blocks,
        agent: formData.agent,
    };

    console.log(newProject);

    try {
        const response = await fetch('http://localhost:4000/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newProject),
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
    const updatedProjectData = projectData.filter((project) => project.Id !== Id);
  updateProjectData(updatedProjectData);
  };
  


  
 

 const tableheadrow = [
  {
    col1: "Project ID",
    col2: "Project Name",
    col3: "Description",
    col4: "Total Marla",
    col5: "Created at:",
    col6: "Blocks",
    col7: "Agents",
  },
  // Add more header columns if needed
];




 return (
   
    <div className="row">
    
      <div className="button-container">
        <div className="add-button">
          <Button
            buttonClass="colored-button"
            title="Add Project"
            icon={<CiCirclePlus iconclass="colored-icon" />}
            clickfunction={handleAddProjectClick}
          />
        </div>
        {/*
        <div className="delete-button">
          <Button
            buttonClass="transparent-button"
            title="Delete Project"
            icon={<MdDelete iconclass="transparent-icon" />}
            clickfunction={handleDeleteProjectClick}
          />
        </div>
        */}
      </div>
     {showForm && 
                 <Fade top>
                <Form inputs={inputs} 
                onSave={handleSaveProjectClick}
                onRepeatForm={null}
                />
                </Fade>
            }

      <div className="table-container">
     

        <div className="button-container mt-3">
         
        </div>
       <Table
  tablerow={projectsTableData || []}  // Provide a default empty array if tableData is undefined
  datasource="projectsdata"
  tablehead={tableheadrow}
  checkedRows={checkedRows}
  onCheckboxChange={handleCheckboxChange}
  onDeleteRow={handleDeleteRow}
/>
      </div>
    </div>
  );
}

export default Projects;