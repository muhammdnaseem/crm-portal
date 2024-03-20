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

function CancellationCreate() {
    const [showForm, setShowForm] = useState(false);
    const {agentsData, agentsTableData, cancellationTableData, customerData} = useDataContext();

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
        downpaymentreceipt: formData.downpaymentreceipt || " ",
        allotmentcertificate: formData.allotmentcertificate,
        cancellationrequestletter: formData.cancellationrequestletter || " ",
    };

    console.log(newCancellation);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/cancellation`, {
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
            options: customerData.map(customer => customer.customer_name),
            values: customerData.map(customer => customer.id),
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
    col2: "Serial Num",
    col3: "Customer Name",
    col4: "Booking Ref",
    col5: "Reason",
    col6: "Cancellation Fee",
    col7: "CNIC Copy",
    col8: "Downpayment Receipt",
    col9: "Allotment Cert",
    col10: "Cancel Req Letter",
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
          {/*
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete Cancellation" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddCancellationClick}/>
            </div>
            */}
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs} 
                onSave={handleSaveCancellationClick}/>
                </Fade>
            }
      
         <div className="table-container">
          
            <Table tablerow={cancellationTableData} tablehead={tableheadrow}
            datasource="cancellationdata"
            />
        </div>
        </div>
      
    );
}

export default CancellationCreate;
