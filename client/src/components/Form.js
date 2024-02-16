import React, { useState } from 'react';
import Input from './Input';
import '../assets/css/form.css';
import Fade from 'react-reveal/Fade';
import { useDataContext } from '../pages/DataContext';

function Form({ inputs, onSave, onRepeatForm }) {
  const [formData, setFormData] = useState({});
  const { userData } = useDataContext();
  
  

  const [autofilvalue, setAutofilValue] = useState(""); // State to store autofill value
  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserImage] = useState("");

  const handleChange = (e, input) => {
  const { value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [input.title.toLowerCase().replace(' ', '')]: value,
  }));
  
 // Find default values based on the selected project name
  const title = input.title;
  const defaultValues = userData.find((user) => user.name === value);
  if (defaultValues) {
    // If the project is found, set the autofill value only for the input with title "Email"
    // if (title === "Email") {
      setAutofilValue(defaultValues.email);
      setUserEmail(defaultValues.email);
      setUserImage(defaultValues.image);
      
    // } else {
      // Reset autofill value for other inputs
      // setAutofilValue("");
    // }
  }
};




  const handleSubmit = () => {
    const savedFormData = { ...formData };
    onSave(savedFormData);
  };

  const handleAddMore = () => {
    if (onRepeatForm) {
      onRepeatForm();
    }
  };

  return (
    <React.Fragment>
      <div className="row form-container">
        {inputs.map((input, index) => (
          <div className={input.NextLineclass === "start-small-form" ? "row" : "col-sm-3 input-col"} key={index}>
            {input.Inputclass === "small-form" ? (
              <div className="">
                <Input
                  key={index}
                  inputtitle={input.title}
                  inputtype={input.type}
                  inputref={null}
                  inputplaceholder={input.placeholder}
                  icon={input.icon}
                  inputrows={input.rows}
                  inputcols={input.cols}
                  submitclass={input.class}
                  selectoptions={input.options}
                  selectvalues={input.values}
                  defaultvalue={
                        input.title === "Email" && userEmail ||
                        input.title === "Image" && userImage ||
                        input.title === "ThirdCondition" && autofilvalue || ""
                      }
                  Inputclassname={input.Inputclass}
                  handleChange={(e) => handleChange(e, input)}
                  handleSubmit={(e) => handleSubmit(e, input)}
                  handleAddMore={handleAddMore}
                />
              </div>
            ) : (
              <div className="col-sm-3 input-col" key={index}>
                <Input
                  key={index}
                  inputtitle={input.title}
                  inputtype={input.type}
                  inputref={null}
                  inputplaceholder={input.placeholder}
                  icon={input.icon}
                  inputrows={input.rows}
                  inputcols={input.cols}
                  submitclass={input.class}
                  selectoptions={input.options}
                  defaultvalue={
                        input.title === "Email" && userEmail ||
                        input.title === "Image" && userImage ||
                        input.title === "ThirdCondition" && autofilvalue || ""
                      }

                  handleChange={(e) => handleChange(e, input)}
                  handleSubmit={(e) => handleSubmit(e, input)}
                  handleAddMore={handleAddMore}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Form;
