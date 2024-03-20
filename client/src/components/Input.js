import React from 'react';
import '../assets/css/input.css';
import Button from './Button'; // Import the Button component
import Fade from 'react-reveal/Fade';

function Input({
  inputtitle,
  inputtype,
  inputplaceholder,
  icon,
  inputrows,
  inputcols,
  buttonClass,
  buttonTitle,
  selectoptions,
  selectvalues,
  defaultvalue,
  handleChange,
  handleSubmit,
  handleAddMore,
  submitclass,
  Inputclassname,
}) {
  

  return (
    <React.Fragment>

    
<div className={Inputclassname === 'd-flex' ? 'd-flex' : ''}>
      {(inputtype === 'text' || inputtype === 'select' || inputtype === 'password' || inputtype === 'file' || inputtype === 'date') && (
     
          <Fade top cascade>
            <label className="input-label">{inputtitle}</label>
          </Fade>
      
      )}
      <br />
      <Fade top cascade>
        {inputrows >= 2 || inputrows === null ? (
          <textarea
            rows={inputrows}
            cols={inputcols}
            type={inputtype}
            placeholder={inputplaceholder}
            className={inputtype === 'text' ? 'textareaclass' : 'submit-button'}
            value={inputtype === 'button' ? `${inputtitle}` : null}
            onChange={handleChange}
          ></textarea>
        ) : inputtype === 'select' ? (
              <select
  className={inputtype === 'select' ? 'selectclass' : 'submit-button'}
  onChange={handleChange}
>
  <option key="default" selected disabled>--- Choose ---</option>
  {selectoptions && selectoptions.map((option, index) => (
    <option key={index} value={selectvalues && selectvalues[index]}>{option}</option>
  ))}
</select>



        ) : inputtype === 'text' ? (
       
            <input
              type={inputtype}
              placeholder={inputplaceholder}
              className={inputtype === 'text' ? 'inputclass' : 'submit-button'}
              value={defaultvalue}
              onChange={handleChange}
              
            />
     
        ) : inputtype === 'password' ? (
         
            <input
              type={inputtype}
              placeholder={inputplaceholder}
              className={inputtype === 'password' ? 'inputclass' : 'submit-button'}
              value={inputtype === 'button' ? `${inputtitle}` : null}
              onChange={handleChange}
            />
         
        ) : inputtype === 'file' ? (
        
            <input
              type={inputtype}
              placeholder={inputplaceholder}
              className={inputtype === 'file' ? 'inputclass' : 'submit-button'}
              value={inputtype === 'button' ? `${inputtitle}` : null}
              onChange={handleChange}
            />
      
        ) : inputtype === 'date' ? (
      
            <input
              type={inputtype}
              placeholder={inputplaceholder}
              className={inputtype === 'date' ? 'inputclass' : 'submit-button'}
              value={inputtype === 'button' ? `${inputtitle}` : null}
              onChange={handleChange}
            />
      
        ) : (
          
      
            <input
              type={inputtype}
              placeholder={inputplaceholder}
              className={inputtype === 'text' ? 'inputclass' : `submit-button ${submitclass}`}
              value={inputtype === 'button' ? inputtitle : ''}
              // onClick={handleSubmit}
              onClick={inputtitle === 'Submit' ? handleSubmit: handleAddMore}
            />

        
        )}
      </Fade>
      </div>
    </React.Fragment>
  );
}

export default Input;