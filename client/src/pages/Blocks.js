import React, { useState, useEffect } from 'react';
import '../assets/css/projects.css';
import Button from '../components/Button';
import { CiCirclePlus } from "react-icons/ci";
import { MdAddBusiness } from "react-icons/md";
import Form from '../components/Form';
import Table from '../components/Table';
import Fade from 'react-reveal/Fade';
import { MdDelete } from "react-icons/md";
import { styles } from '../constants/styles';
import { useDataContext } from './DataContext';

function Blocks() {
  const [showForm, setShowForm] = useState(false);
const { projectData, blocksTableData, updateBlockData } = useDataContext();

  const handleAddBlockClick = () => {
    setShowForm(!showForm);
  };

  const handleSaveBlockClick = async (formData) => {
    // Your existing code to save the block
    const newBlock = {
        blockname: formData.blockname,
        project: formData.projectname,
        totamarla: formData.totalmarla,
        description: formData.description,
    };

    console.log(newBlock);

    try {
      const response = await fetch('http://localhost:4000/blocks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBlock),
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
      title: "Block Name",
      type: "text",
      rows: 0,
      placeholder: "Type Block Name",
    },
    {
      title: "Project Name",
      type: "select",
      options: projectData.map(project => project.projectname),
      values: projectData.map(project => project.ID),
      rows: 0,
      placeholder: "Select Project",
    },
    {
      title: "Total Marla",
      type: "text",
      rows: 0,
      placeholder: "Type Marla",
    },
    {
      title: "Description",
      type: "text",
      rows: 3,
      cols: 40,
      placeholder: "Type Description",
    },
    {
      title: "Submit",
      type: "button",
      rows: 0,
      placeholder: "Type project name",
      icon: <MdAddBusiness />,
    },
  ];

  const tableheadrow = [
    {
      col1: "ID",
      col2: "Block Name",
      col3: "Project Name",
      col4: "Total Marla",
      col5: "Description",
    },
  ];

 

  

    return (
        <div className="row">
        <div className="button-container">
        <div className="add-button">
            <Button buttonClass="colored-button" title="Add Block" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddBlockClick}/>
          </div>  
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete Block" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddBlockClick}/>
            </div>
         </div>
            {showForm && 
                 <Fade top>
                <Form  inputs={inputs} 
                onSave={handleSaveBlockClick}
                onRepeatForm={null}
                />
                </Fade>
            }
      
         <div className="table-container">
          <div className="button-container mt-3">
        <div className="add-button">
            <Button style={styles.circlebutton} buttonColor="blue" title="Copy" clickfunction={handleAddBlockClick}/>
          </div>  
        <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="skyblue" title="CSV" clickfunction={handleAddBlockClick}/>
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="green" title="Excel" clickfunction={handleAddBlockClick}/>
            </div>
        
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="red" buttonColor="blue" title="PDF" clickfunction={handleAddBlockClick}/>
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="pink" title="Print" clickfunction={handleAddBlockClick}/>
            </div>
         </div>
            <Table tablerow={blocksTableData} tablehead={tableheadrow}/>
        </div>
        </div>
      
    );
}

export default Blocks;
