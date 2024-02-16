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

function Leads() {
    const [showForm, setShowForm] = useState(false);
    const [tableData, setTableData] = useState([{ 
    Id: 1, 
    LeadName: "First Lead",
    Responce: "",
    Phone: "0300-00000000",
    Agent: "Agent1",
    Project: "XML",
    City: "Lahore",
    Date: "Date",
    Comments: "Comments",
    Reminders: "Follow Up",
    Status: "Cold",
  },

   { 
    Id: 2, 
    LeadName: "second Lead",
    Responce: "",
    Phone: "0300-00000000",
    Agent: "Agent2",
    Project: "XML",
    City: "Isl",
    Date: "Date",
    Comments: "Comments",
    Reminders: "Follow Up",
    Status: "Cold",
  }]);

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
            options: ["First Project", "Second Project", "Third Project"],
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
            options: ["First Project", "Second Project", "Third Project"],
            rows: 0,
            placeholder: "Type Lead Name"
        },
        {
            title: "Allocated To",
            type: "select",
            options: ["First Project", "Second Project", "Third Project"],
            rows: 0,
            placeholder: "Type Name"
        },
        {
            title: "Temperature",
            type: "select",
            options: ["First Project", "Second Project", "Third Project"],
            rows: 0,
            placeholder: "Type Lead Name"
        },
        {
            title: "Source",
            type: "select",
            options: ["First Project", "Second Project", "Third Project"],
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
    col1: "Sr",
    col2: "Name",
    col3: "Responce",
    col4: "Phone #",
    col5: "Agent",
    col6: "Project",
    col7: "City",
    col8: "Date",
    col9: "Comments",
    col10: "Reminders",
    col11: "Status",
  },
  // Add more header columns if needed
];

const initialtableData = [
  { 
    Id: 1, 
    LeadName: "First Lead",
    Responce: "",
    Phone: "0300-00000000",
    Agent: "Agent1",
    Project: "XML",
    City: "Lahore",
    Date: "Date",
    Comments: "Comments",
    Reminders: "Follow Up",
    Status: "Cold",
  },

   { 
    Id: 2, 
    LeadName: "second Lead",
    Responce: "",
    Phone: "0300-00000000",
    Agent: "Agent2",
    Project: "XML",
    City: "Isl",
    Date: "Date",
    Comments: "Comments",
    Reminders: "Follow Up",
    Status: "Cold",
  },
  
  
];


    return (
        <div className="row">
        <div className="button-container">
        <div className="add-button">
            <Button buttonClass="colored-button" title="Add Lead" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddLeadClick}/>
          </div>  
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete Lead" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddLeadClick}/>
            </div>
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs}
                onSave={handleSaveLeadClick} />
                </Fade>
            }
      
         <div className="table-container">
          <div className="button-container mt-3">
        <div className="add-button">
            <Button style={styles.circlebutton} buttonColor="blue" title="Copy" clickfunction={handleAddLeadClick}/>
          </div>  
        <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="skyblue" title="CSV" clickfunction={handleAddLeadClick}/>
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="green" title="Excel" clickfunction={handleAddLeadClick}/>
            </div>
        
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="red" buttonColor="blue" title="PDF" clickfunction={handleAddLeadClick}/>
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="pink" title="Print" clickfunction={handleAddLeadClick}/>
            </div>
         </div>
            <Table tablerow={tableData} tablehead={tableheadrow}/>
        </div>
        </div>
      
    );
}

export default Leads;
