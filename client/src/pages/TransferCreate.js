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

function TransferCreate() {
    const [showForm, setShowForm] = useState(false);
    const { projectData, transferTableData, updateCategoriesData, customerData, agentsData } = useDataContext();

    const [inputs, setInputs] = useState([
      {
            title: "File Name",
            type: "select",
            options: ["Transfer-A", "Transfer-B", "Transfer 1", "Transfer 2"],
            rows: 0,
            placeholder: "Type Transfer Name"
        },

        {
            title: "Reference ",
            type: "text",
            
            rows: 0,
            placeholder: "Select Transfer"
        },

        {
            title: "Serial ",
            type: "text",
            rows: 0,
            placeholder: "Type Marla"
        },
        {
            title: "Transfer Fee",
            type: "text",
            rows: 0,
            placeholder: "Type Marla"
        },
        {
            title: "Balance",
            type: "text",
            rows: 0,
            placeholder: "Type Marla"
        },
        {
            title: "Agent",
            type: "select",
            options: agentsData.map(customer => customer.name),
            values: agentsData.map(customer => customer.id),
            rows: 0,
            placeholder: "Type Marla"
        },
        {
            title: "Transferer",
            type: "select",
            options: customerData.map(customer => customer.customer_name),
            values: customerData.map(customer => customer.id),
            rows: 0,
            placeholder: "Type Description"
        },
        {
            title: "Transfaree",
            type: "select",
            options: customerData.map(customer => customer.customer_name),
            values: customerData.map(customer => customer.id),
            rows: 0,
            placeholder: "Type Description"
        },
        
        

        // {
        //     title: "Name Of Nominee",
        //     type: "text",
        //     rows: 0,
        //     placeholder: "Type Commission Amount",
        //     NextLineclass: "start-small-form",
        //     Inputclass: "small-form"
        // },

        // {
        //     title: "Name of Father/Husband",
        //     type: "text",
        //     rows: 0,
        //     placeholder: "Type Commission Amount",
        //     Inputclass: "small-form"
        // },
        // {
        //     title: "Relationship",
        //     type: "text",
        //     rows: 0,
        //     placeholder: "Type Commission Amount",
        //     Inputclass: "small-form"
        // },
        // {
        //     title: "CNIC ",
        //     type: "text",
        //     rows: 0,
        //     placeholder: "Type Commission Amount"
        // },
        // {
        //     title: "Phone",
        //     type: "text",
        //     rows: 0,
        //     placeholder: "Type Commission Amount"
        // },
        // {
        //     title: "Add More",
        //     type: "button",
        //     rows: 0,
        //     placeholder: "Add More",
        //     icon: <MdAddBusiness />
        // },
        
        {
            title: "Application Form",
            Inputclass: "d-flex",
            type: "file",
            rows: 0,
            placeholder: ""
        },
       {
            title: "Booking Form",
            Inputclass: "d-flex",
            type: "file",
            rows: 0,
            placeholder: ""
        }, 
        
        {
            title: "Authority Holder Photo",
            Inputclass: "d-flex",
            type: "file",
            rows: 0,
            placeholder: ""
        },
        {
            title: "Tranfer Fee Copy",
            Inputclass: "d-flex",
            type: "file",
            rows: 0,
            placeholder: ""
        },
        {
            title: "Valid NDC",
            Inputclass: "d-flex",
            type: "file",
            rows: 0,
            placeholder: ""
        },
        {
            title: "Valid Payment plan",
            Inputclass: "d-flex",
            type: "file",
            rows: 0,
            placeholder: ""
        },
        {
            title: "Surcharge Report",
            desc: "Ensure Surcharge Report Matches With Installment",
            Inputclass: "d-flex",
            type: "file",
            rows: 0,
            placeholder: ""
        },
        {
            title: "Correct Surcharge Report",
            desc: "Ensure There Are No Wrong Entries In Surcharge Report",
            Inputclass: "d-flex",
            type: "file",
            rows: 0,
            placeholder: ""
        },
        {
            title: "Seller Data",
            desc: "Ensure Seller Data Is Same In Affidavit As In Booking Form And System",
            Inputclass: "d-flex",
            type: "file",
            rows: 0,
            placeholder: ""
        },
        {
            title: "Thumb Impression",
            Inputclass: "d-flex",
            type: "file",
            rows: 0,
            placeholder: ""
        },
         {
            title: "Submit",
            type: "button",
            rows: 0,
            placeholder: "Type Transfer name",
            icon: <MdAddBusiness />
        },
        
    ]);

    const [tableData, setTableData] = useState([]);

     const handleAddTransferClick = () => {
        setShowForm(!showForm); // Toggle the visibility of the form
    };

      const handleSaveTransferClick = async (formData) => {
    // Your existing code to save the block
    const newTransfer = {
        filename: formData.filename,
    reference: formData.reference,
    serial: formData.serial,
    transferfee: formData.transferfee,
    balance: formData.balance,
    agent: formData.agent,
    transferer: formData.transferer,
    transfaree: formData.transfaree,
    applicationform: formData.applicationform,
    bookingform: formData.bookingform,
    authorityholderphoto: formData.authorityholderphoto || " null ",
    transferfeecopy: formData.transferfeecopy || " null ", // Fixed typo here
    validndc: formData.validndc,
    validpaymentplan: formData.validpaymentplan || " null ",
    surchargereport: formData.surchargereport,
    correctsurchargereport: formData.correctsurchargereport || " null ",
    sellerdata: formData.sellerdata,
    thumbimpression: formData.thumbimpression,
    };

    console.log(newTransfer);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/transfer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransfer),
      });

      

      const result = await response.json();
      console.log(result);
      
    } catch (error) {
      console.error('Error adding project:', error.message);
    }
  };

 


 

 const tableheadrow = [
  {
    col1: "ID",
    col2: "Transfer Name",
    col3: "Transfaree Name",
    col4: "File No",
    col5: "Application Form",
    col6: "Seller Data",
  },
  // Add more header columns if needed
];




    return (
        <div className="row">
        <div className="button-container">
        <div className="add-button">
            <Button buttonClass="colored-button" title="Add Transfer" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddTransferClick}/>
          </div>  
          {/*
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete Transfer" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddTransferClick}/>
            </div>
            */}
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs}
                onSave={handleSaveTransferClick}
                  />
                </Fade>
            }
      
         <div className="table-container">
         
            <Table tablerow={transferTableData} tablehead={tableheadrow}/>
        </div>
        </div>
      
    );
}

export default TransferCreate;
