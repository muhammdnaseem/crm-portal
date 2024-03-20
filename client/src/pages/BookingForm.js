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

function BookingForm() {
    const [showForm, setShowForm] = useState(false);
    const [nomineeData, setNomineeData] = useState([]);
    var [nomineeNumber, setNomineeNumber] = useState(0);
    
    const {agentsData, agentsTableData, bookingTableData, customerData} = useDataContext();
    const [inputs, setInputs] = useState([
      {
            title: "File Name",
            type: "select",
            options: ["BookingForm-A", "BookingForm-B", "BookingForm 1", "BookingForm 2"],
            rows: 0,
            placeholder: "Type BookingForm Name"
        },

        {
            title: "Reference",
            type: "text",
            
            rows: 0,
            placeholder: "Select BookingForm"
        },

        {
            title: "Serial",
            type: "text",
            rows: 0,
            placeholder: "Type Marla"
        },
        {
            title: "Customer",
            type: "select",
            options: customerData.map(customer => customer.customer_name),
            values: customerData.map(customer => customer.id),
            rows: 0,
            placeholder: "Type Description"
        },
        {
            title: "Agent",
            type: "select",
            options: agentsData.map(agent => agent.name),
            values: agentsData.map(agent => agent.id),
            rows: 0,
            placeholder: "Type Description"
        },
        {
            title: "Commission",
            type: "text",
            rows: 0,
            placeholder: "Type Commission %"
        },
        {
            title: "Plot Price",
            type: "text",
            rows: 0,
            placeholder: "Type Plot Price"
        },
        {
            title: "Commission Amount",
            type: "text",
            rows: 0,
            placeholder: "Type Commission Amount",
        },

  
        
        {
            title: "Financial Month",
            type: "select",
            options: ["jan", "feb", "mar", "apr", "may"],
            rows: 0,
            placeholder: "Type Commission Amount"
        },
        {
            title: "Financial Year",
            type: "select",
            options: ["2020", "2021", "2022", "2023", "2024"],
            rows: 0,
            placeholder: "Type Commission Amount"
        },
        {
            title: "Dated",
            type: "date",
            rows: 0,
            placeholder: " Date"
        },
        {
            title: "Payment Type",
            type: "select",
            options: ["Online", "Cash", "Cheque", ],
            rows: 0,
            placeholder: "Type Payment type"
        },
        {
            title: "Downpayment",
            type: "text",
            rows: 0,
            placeholder: "Type Downpayment Amount"
        },
        {
            title: "Token Payment",
            type: "text",
            rows: 0,
            placeholder: "Type Token Amount"
        },
        {
            title: "DD or Pay Order",
            type: "text",
            rows: 0,
            placeholder: "Pay Order"
        },
        {
            title: "Cheque",
            type: "text",
            rows: 0,
            placeholder: "Cheque"
        },
        {
            title: "Cash Reciept",
            type: "text",
            rows: 0,
            placeholder: "Type Cash Reciept"
        },
        {
            title: "Bank",
            type: "select",
            options: ["UBL"],
            rows: 0,
            placeholder: "Type Commission Amount"
        },
        {
            title: "Tenure",
            type: "select",
            options: ["1 year", "2 year"],
            rows: 0,
            placeholder: "Type Commission Amount"
        },
        {
            title: "Discount",
            type: "text",
            rows: 0,
            placeholder: "Type Discount"
        },
         {
            title: "Submit",
            type: "button",
            rows: 0,
            placeholder: "Type BookingForm name",
            icon: <MdAddBusiness />
        },
        
    ]);

    const [tableData, setTableData] = useState([]);

     const handleAddBookingFormClick = () => {
        setShowForm(!showForm); // Toggle the visibility of the form
    };

const handleSaveBookingFormClick = async (formData) => {
    // Your existing code to save the block
    const newBooking = {
        file: formData.filename,
        reference: formData.reference,
        serial: formData.serial,
        customer: formData.customer,
        agent: formData.agent,
        commission: formData.commission,
        plotprice: formData.plotprice,
        commissionamount: formData.commissionamount,
        financialmonth: formData.financialmonth,
        financialyear: formData.financialyear,
        dated: formData.dated,
        paymenttype: formData.paymenttype,
        downpayment: formData.downpayment,
        tokenpayment: formData.tokenpayment,
        ddorpayorder: formData.ddorpayorder || " ",
        cheque: formData.cheque,
        cashreciept: formData.cashreciept,
        bank: formData.bank,
        tenure: formData.tenure,
        discount: formData.discount,
    };
   

    console.log(newBooking);


    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/booking`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        
        body: JSON.stringify(newBooking),
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
    col2: "File",
    col3: "Reference",
    col4: "Serial",
    col5: "Customer",
    col6: "Agent",
    col7: "Commission",
    col8: "Price",
    col9: "Commission",
    col10: "Fin Month",
    col11: "Fin Year",
    col12: "Dated",
    col13: "Payment Type",
    col14: "Downpayment",
    col15: "Token Payment",
    col16: "Pay Order",
    col17: "Cheque",
    col18: "Cash Reciept",
    col19: "Bank",
    col20: "Tenure",
    col21: "Discount",
    

  },
 
];




    return (
        <div className="row">
        <div className="button-container">
        <div className="add-button">
            <Button buttonClass="colored-button" title="Add BookingForm" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddBookingFormClick}/>
          </div>  
          {/*
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete BookingForm" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddBookingFormClick}/>
            </div>
            */}
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs}
                onSave={handleSaveBookingFormClick}
            
                  />
                </Fade>
            }
      
         <div className="table-container">
         
            <Table tablerow={bookingTableData} tablehead={tableheadrow}/>
        </div>
        </div>
      
    );
}

export default BookingForm;
