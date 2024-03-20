
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

function Categories() {
    const [showForm, setShowForm] = useState(false);
  const [checkedRows, setCheckedRows] = useState([]);
const [tableData, setTableData] = useState([]);
const { projectData, categoriesTableData, updateCategoriesData } = useDataContext();


  const handleAddCategoryClick = () => {
    setShowForm(!showForm);
  };


  const handleSaveCategoryClick = async (formData) => {
    // Your existing code to save the block
    const newCategory = {
        name: formData.categoryname,
        slug: formData.slug,
    };

    console.log(newCategory);

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/categories`, {
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

  const handleCheckboxChange = (Id) => {
    setCheckedRows((prevCheckedRows) =>
      prevCheckedRows.includes(Id)
        ? prevCheckedRows.filter((id) => id !== Id)
        : [...prevCheckedRows, Id]
    );
  };

  const handleDeleteCategoryClick = () => {
    console.log('Checked Rows:', checkedRows);
   
  };
  const handleDeleteRow = (Id) => {
    // Implement the logic to delete the row with the specified Id
    const updatedTableData = tableData.filter((row) => row.Id !== Id);
    setTableData(updatedTableData);
  };
    const inputs = [
        {
            title: "Category Name",
            type: "text",
            rows: 0,
            placeholder: "Type Category name"
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
            placeholder: "Type Category name",
            icon: <MdAddBusiness />
        },
       
    ];

 const tableheadrow = [
  {
    col1: "Category ID",
    col2: "Category Name",
    col3: "Slug",
  },
  // Add more header columns if needed
];



     return (
    <div className="row">
      <div className="button-container">
        <div className="add-button">
          <Button
            buttonClass="colored-button"
            title="Add Category"
            icon={<CiCirclePlus iconclass="colored-icon" />}
            clickfunction={handleAddCategoryClick}
          />
        </div>
        {/*
        <div className="delete-button">
          <Button
            buttonClass="transparent-button"
            title="Delete Category"
            icon={<MdDelete iconclass="transparent-icon" />}
            clickfunction={handleDeleteCategoryClick}
          />
        </div>
        */}
      </div>
     {showForm && 
                 <Fade top>
                <Form inputs={inputs} 
                onSave={handleSaveCategoryClick}
                />
                </Fade>
            }

      <div className="table-container">
        <div className="button-container mt-3">
          {/* ... Your other buttons */}
        </div>
        <Table
          tablerow={categoriesTableData}
          tablehead={tableheadrow}
          datasource="categoriesdata"
          checkedRows={checkedRows}
          onCheckboxChange={handleCheckboxChange}
          onDeleteRow={handleDeleteRow}
        />
      </div>
    </div>
  );
}

export default Categories;
