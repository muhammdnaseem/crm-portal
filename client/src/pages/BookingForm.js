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
    
    const {agentsData, agentsTableData} = useDataContext();
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
            options: ["BookingForm-A", "BookingForm-B", "BookingForm 1", "BookingForm 2"],
            rows: 0,
            placeholder: "Type Description"
        },
        {
            title: "Agent",
            type: "select",
            options: agentsData.map(agent=>agent.name),
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
      title: `Name Of Nominee ${nomineeNumber}`,
      type: "text",
      rows: 0,
      placeholder: "Type Commission Amount",
      NextLineclass: "start-small-form",
      Inputclass: "small-form"
    },
    {
      title: `Name of Father Or Husband ${nomineeNumber}`,
      type: "text",
      rows: 0,
      placeholder: "Type Commission Amount",
      Inputclass: "small-form"
    },
    {
      title: `Relationship ${nomineeNumber}`,
      type: "text",
      rows: 0,
      placeholder: "Type Commission Amount",
      Inputclass: "small-form"
    },
    {
      title: `CNIC ${nomineeNumber}`,
      type: "text",
      rows: 0,
      placeholder: "Type Commission Amount"
    },
    {
      title: `Phone ${nomineeNumber}`,
      type: "text",
      rows: 0,
      placeholder: "Type Commission Amount"
    },
        {
            title: "Add More",
            type: "button",
            rows: 0,
            placeholder: "Add More",
            icon: <MdAddBusiness />
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
            placeholder: "Type Commission Amount"
        },
        {
            title: "Payment Type",
            type: "select",
            options: ["Online", "Cash", "Cheque", ],
            rows: 0,
            placeholder: "Type Commission Amount"
        },
        {
            title: "Downpayment",
            type: "text",
            rows: 0,
            placeholder: "Type Commission Amount"
        },
        {
            title: "Token Payment",
            type: "text",
            rows: 0,
            placeholder: "Type Commission Amount"
        },
        {
            title: "DD or Pay Order",
            type: "text",
            rows: 0,
            placeholder: "Type Commission Amount"
        },
        {
            title: "Cheque",
            type: "text",
            rows: 0,
            placeholder: "Type Commission Amount"
        },
        {
            title: "Cash Reciept",
            type: "text",
            rows: 0,
            placeholder: "Type Commission Amount"
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
            placeholder: "Type Commission Amount"
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
        nominee: formData.nameofnominee + nomineeNumber,
        financialmonth: formData.financialmonth,
        financialyear: formData.financialyear,
        dated: formData.dated,
        paymenttype: formData.paymenttype,
        downpayment: formData.downpayment,
        tokenpayment: formData.tokenpayment,
        ddorpayorder: formData.ddorpayorder,
        cheque: formData.cheque,
        cashreciept: formData.cashreciept,
        bank: formData.bank,
        tenure: formData.tenure,
        discount: formData.discount,
    };
    const newNominee = {
        name: formData.nameofnominee + nomineeNumber,
        husbandfathername: formData.nameoffatherorhusband + nomineeNumber,
        relationship: formData.relationship + nomineeNumber,
        cnic: formData.cnic + nomineeNumber,
        phone: formData.phone + nomineeNumber,
        
    };
     for (const key in newNominee) {
    if (typeof newNominee[key] !== 'string' || isNaN(newNominee[key])) {
      newNominee[key] = ' h '; // Set to empty string if NaN or not a string
    }
  }
    setNomineeData((prevNomineeData) => [...prevNomineeData, newNominee]);

    console.log(newBooking);
    console.log(newNominee);

    try {
      const response = await fetch('http://localhost:4000/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBooking),
      });
      const responsenominee = await fetch('http://localhost:4000/nominee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newNominee),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      else if(!responsenominee.ok){
          throw new Error(`HTTP error! Status: ${responsenominee.status}`);
      }

      const result = await response.json();
      console.log(result);
      const resultnominee = await responsenominee.json();
      console.log(resultnominee);
    } catch (error) {
      console.error('Error adding project:', error.message);
    }
  };

 


    const handleRepeatFormClick = () => {
  setNomineeNumber(++nomineeNumber);
  const newInputSet = [
    {
      title: `Name Of Nominee ${nomineeNumber}`,
      type: "text",
      rows: 0,
      placeholder: "Type Commission Amount",
      NextLineclass: "start-small-form",
      Inputclass: "small-form"
    },
    {
      title: `Name of Father Or Husband ${nomineeNumber}`,
      type: "text",
      rows: 0,
      placeholder: "Type Commission Amount",
      Inputclass: "small-form"
    },
    {
      title: `Relationship ${nomineeNumber}`,
      type: "text",
      rows: 0,
      placeholder: "Type Commission Amount",
      Inputclass: "small-form"
    },
    {
      title: `CNIC ${nomineeNumber}`,
      type: "text",
      rows: 0,
      placeholder: "Type Commission Amount"
    },
    {
      title: `Phone ${nomineeNumber}`,
      type: "text",
      rows: 0,
      placeholder: "Type Commission Amount"
    },
  ];

  // Find the index of the element after which you want to insert the new elements
  const insertIndex = inputs.findIndex((input) => input.title === "Add More");

  // Update the Inputs state by inserting the new elements at the appropriate position
  setInputs((prevInputs) => [
    ...prevInputs.slice(0, insertIndex),
    ...newInputSet,
    ...prevInputs.slice(insertIndex),
  ]);
};


 const tableheadrow = [
  {
    col1: "ID",
    col2: "BookingForm Name",
    col3: "BookingForm Name",
    col4: "Total Marla",
    col5: "Description",
  },
  // Add more header columns if needed
];




    return (
        <div className="row">
        <div className="button-container">
        <div className="add-button">
            <Button buttonClass="colored-button" title="Add BookingForm" icon={<CiCirclePlus iconclass="colored-icon" />} clickfunction={handleAddBookingFormClick}/>
          </div>  
        <div className="delete-button">
            <Button buttonClass="transparent-button" title="Delete BookingForm" icon={<MdDelete iconclass="transparent-icon" />} clickfunction={handleAddBookingFormClick}/>
            </div>
         </div>
            {showForm && 
                 <Fade top>
                <Form inputs={inputs}
                onSave={handleSaveBookingFormClick}
                onRepeatForm={handleRepeatFormClick}  />
                </Fade>
            }
      
         <div className="table-container">
          <div className="button-container mt-3">
        <div className="add-button">
            <Button style={styles.circlebutton} buttonColor="blue" title="Copy" clickfunction={handleAddBookingFormClick}/>
          </div>  
        <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="skyblue" title="CSV" clickfunction={handleAddBookingFormClick}/>
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="green" title="Excel" clickfunction={handleAddBookingFormClick}/>
            </div>
        
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="red" buttonColor="blue" title="PDF" clickfunction={handleAddBookingFormClick}/>
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="pink" title="Print" clickfunction={handleAddBookingFormClick}/>
            </div>
         </div>
            <Table tablerow={tableData} tablehead={tableheadrow}/>
        </div>
        </div>
      
    );
}

export default BookingForm;
