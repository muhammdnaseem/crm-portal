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

function InstallmentPlans() {
    const [showForm, setShowForm] = useState(false);
    const { installmentTableData, updateInstallmentData, bookingData } = useDataContext();

     const handleAddInstallmentClick = () => {
        setShowForm(!showForm); // Toggle the visibility of the form
    };

    const handleSaveInstallmentClick = async (formData) => {
    // Your existing code to save the block
    const newInstallment = {
        booking: formData.booking,
        officeamount: formData.officeamount,
        dealamount: formData.dealamount,
        discountamount: formData.discountamount,
        token: formData.token,
        tokendate: formData.tokendate,
        downpaymentamount: formData.downpaymentamount,
        remainingamount: formData.remainingamount,
        installmentperiod: formData.installmentperiod,
        installmenttype: formData.installmenttype,
        permonth: formData.permonth,
        dated: formData.dated,
    };

    console.log(newInstallment);

    try {
      const response = await fetch('http://localhost:4000/installment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newInstallment),
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
            title: "Booking",
            type: "select",
            options: bookingData.map(project => project.file_id),
            values: bookingData.map(project => project.id),
            rows: 0,
            placeholder: "Type Installment Name"
        },
        {
            title: "Office Amount",
            type: "text",
            rows: 0,
            placeholder: "Type Office Amount"
        },
        {
            title: "Deal Amount",
            type: "text",
            rows: 0,
            placeholder: "Type Deal Amount"
        },

        {
            title: "Discount Amount",
            type: "text",
            rows: 0,
            placeholder: "Type Discount Amount"
        },
        {
            title: "Token",
            type: "text",
            rows: 0,
            placeholder: "Type Token"
        },

        {
            title: "Token Date",
            type: "date",
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Downpayment Amount",
            type: "text",
            rows: 0,
            placeholder: "Type Downpayment Amount"
        },
        {
            title: "Remaining Amount",
            type: "text",
            rows: 0,
            placeholder: "Type Remaining Amount"
        },
        {
            title: "Installment Period",
            type: "select",
            options: ["1 year", "2 year"],
            rows: 0,
            placeholder: "Type display Name"
        },
        {
            title: "Installment Type",
            type: "select",
            options: ["1 month", "2 months", "6 months"],
            rows: 0,
            placeholder: "Type display Name"
        },

        {
            title: "Per Month",
            type: "text",
            rows: 0,
            placeholder: "Type Per Month"
        },
        {
            title: "Dated",
            type: "date",
            rows: 0,
            placeholder: "Type Date"
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
    col2: "Booking",
    col3: "Office Amount",
    col4: "Deal Amount",
    col5: "Discount Amount",
    col6: "Token",
    col7: "Token Date",
    col8: "Downpayment Amount",
    col9: "Remaining Amount",
    col10: "Installment Period",
    col11: "installment Type",
    col12: "Per Month",
    col13: "Dated",
  },
  // Add more header columns if needed
];




    return (
        <div className="row">
        <div className="button-container">
        <div className="add-button">
            <Button buttonClass="colored-button" title="Add Installment" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddInstallmentClick}/>
          </div>  
          {/*
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete Installment" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddInstallmentClick}/>
            </div>
            */}
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs} 
                onSave={handleSaveInstallmentClick}/>
                </Fade>
            }
      
         <div className="table-container">
          
            <Table 
            tablerow={installmentTableData} 
            tablehead={tableheadrow} 
            datasource="installmentsdata"/>
        </div>
        </div>
      
    );
}

export default InstallmentPlans;
