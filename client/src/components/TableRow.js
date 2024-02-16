import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { MdDelete } from 'react-icons/md';
import { FaEye, FaRegEdit } from 'react-icons/fa';
import Popup from 'reactjs-popup';
import '../assets/css/tablerow.css';

function TableRow({ input, source, isHeader, onCheckboxChange, onDeleteRow }) {
  const [showViewPopup, setShowViewPopup] = useState(false);
  const [showEditPopup, setShowEditPopup] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);
  const [formData, setFormData] = useState(null);

  

  const handleViewClick = () => {
    setSelectedRow(input);
    setShowViewPopup(true);
  };

  const handleEditClick = () => {
    setSelectedRow(input);
    setShowEditPopup(true);
    setFormData(input);
    
  };

  
const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value || "" // Set empty string if value is undefined or null
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const lowercaseFormData = {};
    Object.keys(formData).forEach((key) => {
      lowercaseFormData[key.toLowerCase()] = formData[key];
    });

      const response = await fetch(`http://localhost:4000/update/${source}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(lowercaseFormData), // Use formData instead of selectedRow
      });
      console.log(lowercaseFormData);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error updating data:', error.message);
    }
  };

  useEffect(() => {
    if (showEditPopup) {
      setFormData(selectedRow); // Update formData when selectedRow changes
    }
  }, [selectedRow, showEditPopup]);


const handleDeleteClick = async () => {
    const firstKey = Object.keys(input)[1]; // Get the first key of the input object
    const confirmDelete = window.confirm(`Are you sure you want to delete the row with ${firstKey}: ${input[firstKey]}?`);
    if (confirmDelete) {
        try {
            const response = await fetch(`http://localhost:4000/delete/${source}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: input.Id }), // Send the ID of the item to be deleted
            });
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            onDeleteRow(input.Id);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error('Error deleting data:', error.message);
        }
    }
};




  if (typeof input !== 'object' || input == null) {
    console.error('Input must be an object');
    return null;
  }

  const cells = Object.entries(input).map(([key, value], index) => {
    if (isHeader) {
      if (index === 0) {
        return (
          <Fade key={index} top cascade>
            <th style={{ width: '30px' }}></th>
            <th>{value}</th>
          </Fade>
        );
      }

      return (
        <Fade key={index} top cascade>
          <th>{value}</th>
        </Fade>
      );
    }

    if (index === 0) {
      return (
        <Fade key={index} top cascade>
          <td style={{ width: '30px' }}>
            <input type="checkbox" />
          </td>
          <td>{value}</td>
        </Fade>
      );
    }

    return (
      <Fade key={index} top cascade>
        <td>{value}</td>
      </Fade>
    );
  });

  const lastCell = isHeader ? (
    <Fade top cascade>
      <th>Actions</th>
    </Fade>
  ) : (
    <Fade top cascade>
      <td>
        <FaEye className="view" onClick={handleViewClick} />
        <FaRegEdit className="update" onClick={handleEditClick}/>
        <MdDelete className="delete" onClick={handleDeleteClick}/>
      </td>
    </Fade>
  );

  return (
    <React.Fragment>
    {showViewPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <table>
              {selectedRow && Object.entries(selectedRow).map(([key, value]) => (
                <tr key={key}>
                  <td>{key}: </td>
                  <td>{value || "Null"}</td>
                </tr>
              ))}
            </table>
            <button onClick={() => setShowViewPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {showEditPopup && (
  <div className="popup-overlay">
    <div className="popup">
      <form className="editform" onSubmit={handleFormSubmit}>
        {selectedRow && Object.entries(selectedRow).map(([key, value]) => (
          <div key={key}>
            <label>{key}: </label>
            <input 
            name={key} 
            value={formData && formData[key] !== undefined ? formData[key] : value !== undefined ? value : " "}

            onChange={handleInputChange}
                    />
          </div>
        ))}
        <button type="submit">Update</button>
      </form>
      <button onClick={() => setShowEditPopup(false)}>Close</button>
    </div>
  </div>
)}

      <tr>{[...cells, lastCell]}</tr>
       


      
    </React.Fragment>
  );
}

export default TableRow;
