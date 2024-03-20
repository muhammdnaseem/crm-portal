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

function Tokens() {
    const [showForm, setShowForm] = useState(false);
    const { tokenTableData, updateTokenData } = useDataContext();
    const [tableData, setTableData] = useState([]);

     const handleAddTokenClick = () => {
        setShowForm(!showForm); // Toggle the visibility of the form
    };

     const handleSaveTokenClick = async (formData) => {
    const newToken = {
        office: formData.officename,
        customer: formData.customername,
        totalamount: formData.totalamount, // replace with your actual values
        dealamount: formData.dealamount,
        discount: formData.discount,
        downpaymentamount: formData.downpaymentamount, // replace with your actual values
        tokenamount: formData.tokenamount,
        deduction: formData.deduction,
        description: formData.description,
        date: formData.date,
    };

    console.log(newToken);

    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newToken),
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
            title: "Office Name",
            type: "select",
            options: ["Office1", "Office2", "Office3"],
            rows: 0,
            placeholder: "Type Token Name"
        },
        {
            title: "Customer Name",
            type: "select",
            options: ["Customer 1", "Customer 2", "Customer 3"],
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Total Amount",
            type: "text",
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Deal Amount",
            type: "text",
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Discount",
            type: "text",
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Downpayment Amount",
            type: "text",
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Token Amount",
            type: "text",
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Deduction",
            type: "text",
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Description",
            type: "text",
            rows: 2,
            col: 10,
            placeholder: "Type display Name"
        },
        {
            title: "Date",
            type: "date",
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
    col2: "Office",
    col3: "Customer",
    col4: "Office Amount",
    col5: "Deal Amount",
    col6: "Discount Amount",
    col7: "Downpayment Amount",
    col8: "Token Amount",
    col9: "Deduction Amount",
    col10: "Description",
    col11: "Dated",
  },
  // Add more header columns if needed
];




    return (
        <div className="row">
        <div className="button-container">
        <div className="add-button">
            <Button buttonClass="colored-button" title="Add Token" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddTokenClick}/>
          </div> 
          {/* 
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete Token" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddTokenClick}/>
            </div>
            */}
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs} 
                onSave={handleSaveTokenClick}/>
                </Fade>
            }
      
         <div className="table-container">
          
         <div className="table-responsive">
            <Table 
            tablerow={tokenTableData} 
            tablehead={tableheadrow}
            datasource="tokensdata"/>
          </div>
        </div>
        </div>
      
    );
}

export default Tokens;
