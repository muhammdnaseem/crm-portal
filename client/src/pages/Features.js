
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

function Features() {
    const [showForm, setShowForm] = useState(false);
    const { projectData, featuresTableData, updateFeaturesData } = useDataContext();

     const handleAddFeatureClick = () => {
        setShowForm(!showForm); // Toggle the visibility of the form
    };
    const inputs = [
        {
            title: "Order",
            type: "text",
            rows: 0,
            placeholder: "Type Order"
        },

        {
            title: "Name",
            type: "text",
            rows: 0,
            placeholder: "Type Feature name"
        },

        {
            title: "Slug",
            type: "text",
            rows: 0,
            placeholder: "Type Slug"
        },
         {
            title: "Submit",
            type: "button",
            rows: 0,
            placeholder: "Type project name",
            icon: <MdAddBusiness />
        },
       
    ];

    const handleSaveFeatureClick = async (formData) => {
    // Your existing code to save the block
    const newCategory = {
        order: formData.order,
        name: formData.name,
        slug: formData.slug,
    };

    console.log(newCategory);

    try {
      const response = await fetch('http://localhost:4000/features', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCategory),
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
    col1: "Feature ID",
    col2: "Name",
    col3: "Slug",
  },
  // Add more header columns if needed
];




    return (
        <div className="row">
        <div className="button-container">
        <div className="add-button">
            <Button buttonClass="colored-button" title="Add Feature" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddFeatureClick}/>
          </div>  
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete Feature" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddFeatureClick}/>
            </div>
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs} onSave={handleSaveFeatureClick}/>
                </Fade>
            }
      
         <div className="table-container">
          <div className="button-container mt-3">
        <div className="add-button">
            <Button style={styles.circlebutton} buttonColor="blue" title="Copy" clickfunction={handleAddFeatureClick}/>
          </div>  
        <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="#800080" title="CSV" clickfunction={handleAddFeatureClick}/>
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="green" title="Excel" clickfunction={handleAddFeatureClick}/>
            </div>
        
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="red" title="PDF" clickfunction={handleAddFeatureClick}/>
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="#01b8f6" title="Print" clickfunction={handleAddFeatureClick}/>
            </div>
         </div>
            <Table tablerow={featuresTableData} tablehead={tableheadrow}/>
        </div>
        </div>
      
    );
}

export default Features;
