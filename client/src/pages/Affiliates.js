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

function Affiliates() {
    const [showForm, setShowForm] = useState(false);
    const {projectData, agentsTableData} = useDataContext();

     const handleAddAffiliateClick = () => {
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
            title: "City",
            type: "text",
            rows: 0,
            placeholder: "Type Your City"
        },
        

        {
            title: "commission",
            type: "text",
            rows: 0,
            placeholder: "Type commission in %"
        },

        {
            title: "Address",
            type: "text",
            rows: 0,
            placeholder: "Add address"
        },
        {
            title: "DOB",
            type: "date",
            rows: 0,
            placeholder: "Type data of birth"
        },
        {
            title: "Image",
            type: "file",
            rows: 0,
            placeholder: "Upload Image"
        },
        {
            title: "Person Type",
            type: "select",
            options: ["Parnter", "Owner", "Company"],
            rows: 0,
            placeholder: "Select Person Type"
        },
        {
            title: "Father Name",
            type: "text",
            rows: 0,
            placeholder: "Type father name"
        },
        {
            title: "CNIC",
            type: "text",
            rows: 0,
            placeholder: "Type Your cnic #"
        },
        {
            title: "Mobile",
            type: "text",
            rows: 0,
            placeholder: "Type mobile number"
        },
        {
            title: "Project",
            type: "select",
            options: projectData.map(project => project.projectname),
            values: projectData.map(project => project.id),
            rows: 0,
            placeholder: "Type father name"
        },
        {
            title: "Description",
            type: "text",
            rows: 0,
            placeholder: "Type description"
        },
         {
            title: "Submit",
            type: "button",
            rows: 0,
            placeholder: "Type project name",
            icon: <MdAddBusiness />
        },
       
    ];

const handleSaveAgentClick = async (formData) => {
    // Your existing code to save the block
    const newAgent = {
        name: formData.name,
        email: formData.email,
        city: formData.city,
        commission: formData.commission,
        address: formData.address,
        dob: formData.dob,
        image: formData.image,
        persontype: formData.persontype,
        fathername: formData.fathername,
        cnic: formData.cnic,
        mobile: formData.mobile,
        project: formData.project,
        description: formData.description,
    };

    console.log(newAgent);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/agents`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAgent),
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
    col3: "Commision",
    col4: "Email",
    col5: "Created At",
    col6: "Email verified At",
    col7: "Avatar",
    col8: "Role",
    col9: "Roles",
    col10: "Customers",
  },
  // Add more header columns if needed
];




    return (
        <div className="row">
        <div className="button-container">
        <div className="add-button">
            <Button buttonClass="colored-button" title="Add Affiliate" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddAffiliateClick}/>
          </div>  
       {/* <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete Affiliate" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddAffiliateClick}/>
            </div>
            */}
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs} onSave={handleSaveAgentClick} />
                </Fade>
            }
      
         <div className="table-container">
          
            <Table 
            tablerow={agentsTableData} 
            tablehead={tableheadrow}
            datasource="agentsdata"/>
        </div>
        </div>
      
    );
}

export default Affiliates;
