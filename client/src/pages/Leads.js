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
import {useDataContext} from './DataContext';

function Leads() {
    const [showForm, setShowForm] = useState(false);
    const { leadTableData, updateLeadData, projectData, agentsData } = useDataContext();
    const [tableData, setTableData] = useState([]);

     const handleAddLeadClick = () => {
        setShowForm(!showForm); // Toggle the visibility of the form
    };

 const handleSaveLeadClick = async (formData) => {
    // Your existing code to save the block
    const newLead = {
        project: formData.projectname,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        status: formData.status,
        agent: formData.allocatedto,
        temperature: formData.temperature,
        source: formData.source,
        description: formData.description,
        
    };

    console.log(newLead);

    try {
      const response = await fetch('http://localhost:4000/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newLead),
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
            title: "Project Name",
            type: "select",
            options: projectData.map(project => project.projectname),
            values: projectData.map(project => project.id),
            rows: 0,
            placeholder: "Type Lead Name"
        },
        {
            title: "Name",
            type: "text",
            rows: 0,
            placeholder: "Type Lead Name"
        },
        {
            title: "Email",
            type: "text",
            rows: 0,
            placeholder: "Type Email"
        },
        {
            title: "Phone",
            type: "text",
            rows: 0,
            placeholder: "Type Phone Number"
        },
        {
            title: "City",
            type: "text",
            rows: 0,
            placeholder: "Type City Name"
        },
        {
            title: "Status",
            type: "select",
            options: ["Sold Out", "Sale"],
            rows: 0,
            placeholder: "Type Lead Name"
        },
        {
            title: "Allocated To",
            type: "select",
            options: agentsData.map(project => project.name),
            values: agentsData.map(project => project.id),
            rows: 0,
            placeholder: "Type Name"
        },
        {
            title: "Temperature",
            type: "select",
            options: ["Hot", "Cold"],
            rows: 0,
            placeholder: "Type Lead Name"
        },
        {
            title: "Source",
            type: "select",
            options: ["Facebook", "Twiter", "Instagram"],
            rows: 0,
            placeholder: "Type Lead Name"
        },
        {
            title: "Description",
            type: "text",
            rows: 3,
            placeholder: "Type Lead Description"
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
    col3: "Name",
    col4: "Email",
    col5: "Phone",
    col6: "City",
    col7: "Status",
    col8: "Agent",
    col9: "Temperature",
    col10: "Source",
    col11: "Description",
  },
  // Add more header columns if needed
];




    return (
        <div className="row">
        <div className="button-container">
        <div className="add-button">
            <Button buttonClass="colored-button" title="Add Lead" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddLeadClick}/>
          </div>  
          {/*
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete Lead" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddLeadClick}/>
            </div>
            */}
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs}
                onSave={handleSaveLeadClick} />
                </Fade>
            }
      
         <div className="table-container">
          
            <Table 
            tablerow={leadTableData} 
            tablehead={tableheadrow}
            datasource="leadsdata"/>
        </div>
        </div>
      
    );
}

export default Leads;
