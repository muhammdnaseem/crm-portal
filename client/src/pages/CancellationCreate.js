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

function CancellationCreate() {
    const [showForm, setShowForm] = useState(false);
    const [tableData, setTableData] = useState([{ 
    Id: 1, 
    CancellationName: "First Cancellation",
    DisplayName: "Cancellation1",
  },

   { 
    Id: 2, 
    CancellationName: "Second Cancellation",
    DisplayName: "Cancellation2",
  }]);

     const handleAddCancellationClick = () => {
        setShowForm(!showForm); // Toggle the visibility of the form
    };

    const handleSaveCancellationClick = async (formData) => {
    // Your existing code to save the block
    const newCancellation = {
        serialnum: formData.serialnum,
        customername: formData.customername,
        bookingref: formData.bookingreference,
        reason: formData.reason,
        cancellationfee: formData.cancellationfee,
        cniccopy: formData.cniccopy,
        downpaymentreceipt: formData.downpaymentreceipt,
        allotmentcertificate: formData.allotmentcertificate,
        cancellationrequestletter: formData.cancellationrequestletter,
    };

    console.log(newCancellation);

    try {
      const response = await fetch('http://localhost:4000/cancellation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCancellation),
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
            title: "Serial Num",
            type: "text",
            rows: 0,
            placeholder: "Type role Name"
        },
        {
            title: "Customer Name",
            type: "select",
            options: ["customer 1", "customer 2"],
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Booking Reference",
            type: "select",
            options: ["booking 1", "booking 2"],
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Reason",
            type: "select",
            options: ["Reason 1", "Reason 2", "Reason 3"],
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Cancellation Fee",
            type: "text",
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "CNIC Copy",
            type: "file",
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Down Payment Receipt",
            type: "file",
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Allotment Certificate",
            type: "file",
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Cancellation Request Letter",
            type: "file",
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
    col2: "Customer Name",
    col3: "Agent",
    col4: "Plot First",
    col5: "Plot Second",
    col6: "Fee",
    col7: "Date",
    col8: "Created by",
    col9: "Status",
  },
  // Add more header columns if needed
];

const initialtableData = [
  { 
    Id: 1, 
    CancellationName: "First Cancellation",
    DisplayName: "Cancellation1",
  },

   { 
    Id: 2, 
    CancellationName: "Second Cancellation",
    DisplayName: "Cancellation2",
  },
  
  
];


    return (
        <div className="row">
        <div className="button-container">
        <div className="add-button">
            <Button buttonClass="colored-button" title="New Cancellation" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddCancellationClick}/>
          </div>  
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete Cancellation" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddCancellationClick}/>
            </div>
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs} 
                onSave={handleSaveCancellationClick}/>
                </Fade>
            }
      
         <div className="table-container">
          <div className="button-container mt-3">
        <div className="add-button">
            <Button style={styles.circlebutton} buttonColor="blue" title="Copy" clickfunction={handleAddCancellationClick}/>
          </div>  
        <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="skyblue" title="CSV" clickfunction={handleAddCancellationClick}/>
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="green" title="Excel" clickfunction={handleAddCancellationClick}/>
            </div>
        
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="red" buttonColor="blue" title="PDF" clickfunction={handleAddCancellationClick}/>
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="pink" title="Print" clickfunction={handleAddCancellationClick}/>
            </div>
         </div>
            <Table tablerow={tableData} tablehead={tableheadrow}/>
        </div>
        </div>
      
    );
}

export default CancellationCreate;
