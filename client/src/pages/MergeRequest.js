import React, { useState } from 'react';
import '../assets/css/projects.css';
import Button from '../components/Button';
import { CiCirclePlus } from 'react-icons/ci';
import { MdAddBusiness, MdDelete } from 'react-icons/md';
import Form from '../components/Form';
import Table from '../components/Table';
import Fade from 'react-reveal/Fade';
import { styles } from '../constants/styles';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { useDataContext } from './DataContext';


function MergeRequest() {
  const [showRecord, setShowRecord] = useState(true);
  const [checkedRows, setCheckedRows] = useState([]);

  const { userData, MergerequestTableData } = useDataContext();
  // const userNames = userData.map(user => user.name);
  //  console.log(userData);
    const [tableData, setTableData] = useState([
  { 
    Id: 1, 
    ProjectName: "First Project",
    Block: "Block-A",
    FileNo: 9,
    Size: "7 Marla",
    Price: 30000,
    Type: "Open",
    Status: "Open",
  },

  { Id: 2,
    ProjectName: "Second Project",
    Block: "Block-B",
    FileNo: 5,
    Size: "10 Marla",
    Price: 90000,
    Type: "Sold Out",
    Status: "Sold Out",
  },

  { Id: 3,
    ProjectName: "Third Project",
    Block: "Apartment-2",
    FileNo: 17,
    Size: "5 Marla",
    Price: 70000,
    Type: "Open",
    Status: "Open",
  },
  
  
]);


    const [Inputs, setInputs] = useState([
        {
            title: "UserName",
            type: "select",
            options: userData.map(user => user.name),
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Reference Num",
            type: "text",
  
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Serial No",
            type: "text",
            rows: 0,
            placeholder: "Type file no",
        },
        {
            title: "Transfer Fee",
            type: "text",
            rows: 0,
            placeholder: "Type Price"
        },
        {
            title: "Agent",
            type: "select",
            options: ["3 Marla", "5 Marla", "7 Marla", "8 Marla", "9 Marla", "10 Marla", "Commercial", "Residence"],
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Image",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Email",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Phone",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "CNIC",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Plot 1",
            type: "select",
            options: ["Open", "Sold out", "Token"],
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Project",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Block",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Size",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Price",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Feature",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },

        {
            title: "Plot 2",
            type: "select",
            options: ["Open", "Sold out", "Token"],
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Project",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Block",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Size",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Price",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },
        {
            title: "Feature",
            type: "text",
            rows: 0,
            placeholder: "---Choose---"
        },

        {
            title: "CNIC Copy",
            type: "file",
            rows: 0,
            placeholder: "Upload your CNIC Copy"
        },
       
        {
            title: "Submit",
            type: "button",
            rows: 0,
            icon: <MdAddBusiness />,
            class: "",
        },
  ]);

  const handleShowRecordClick = () => {
  setShowRecord(!showRecord);
  console.log(showRecord);
};

//   const handleAddFormClick = () => {
//     setShowForm(!showForm);
//   };


  const handleSaveMergerequestClick = async (formData) => {
    // Your existing code to save the block
    const newMergerequest = {
        project: formData.project,
        block: formData.block,
        fileno: formData.fileno,
        price: formData.price,
        size: formData.size,
        type: formData.type,
        status: formData.status,
    };

    console.log(newMergerequest);

    try {
      const response = await fetch('http://localhost:4000/mergerequest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newMergerequest),
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

  const handleCheckboxChange = (Id) => {
    setCheckedRows((prevCheckedRows) =>
      prevCheckedRows.includes(Id)
        ? prevCheckedRows.filter((id) => id !== Id)
        : [...prevCheckedRows, Id]
    );
  };

  const handleDeleteProjectClick = () => {
    console.log('Checked Rows:', checkedRows);
   
  };
  const handleDeleteRow = (Id) => {
    // Implement the logic to delete the row with the specified Id
    const updatedTableData = tableData.filter((row) => row.Id !== Id);
    setTableData(updatedTableData);
  };




  
  
 

 

 const tableheadrow = [
  {
    col1: "ID ",
    col2: "Project",
    col3: "Block",
    col4: "File #",
    col5: "Size",
    col6: "Price",
    col7: "Type",
    col8: "Status",
  },

];





 return (
    <div className="row">
    <div className="button-container">
        <div className="add-button">
          <Button
            buttonClass="colored-button"
            title={showRecord ? ("Show Records") : ("Add Record")}
            icon={<CiCirclePlus iconclass="colored-icon" />}
            clickfunction={handleShowRecordClick}
          />
        </div> 
      </div>


      <Fade top>
  {showRecord ? (
       <Form inputs={Inputs} onSave={handleSaveMergerequestClick} />
      
  ) : (
      <div className="table-container">
      <div className="button-container mt-3">
        <div className="add-button">
            <Button style={styles.circlebutton} buttonColor="blue" title="Copy"  />
          </div>  
        <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="skyblue" title="CSV"  />
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="green" title="Excel"  />
            </div>
        
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="red" buttonColor="blue" title="PDF"  />
            </div>
         
          <div className="delete-button">
            <Button style={styles.circlebutton} buttonColor="pink" title="Print"  />
            </div>
         </div>
      <Table
      tablerow={MergerequestTableData}
      tablehead={tableheadrow}
      checkedRows={checkedRows}
      onCheckboxChange={handleCheckboxChange}
      onDeleteRow={handleDeleteRow}
    />
    </div>
  )}
</Fade>


      
    </div>
  );
}

export default MergeRequest;