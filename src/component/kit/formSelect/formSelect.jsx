import './formSelect.css';
import React from 'react';
import Form from 'react-bootstrap/Form';

const formSelect = (props) => {
    const handleSelectChange = (e) => {
        // This function can be used to handle the change event and store the selected value in your parent component's state.
        const selectedValue = e.target.value;
        // Call a function from your parent component to handle the selected value.
        props.onSelectChange(selectedValue);
    };

    return (
        <div>
            <Form.Label htmlFor="inputPassword5" className="fw-600">{props.label}</Form.Label>
            <Form.Select aria-label="Default select example"
                         className="colorGray bgLightGray border-0"
                         onChange={handleSelectChange}>
               <option>{props.placeholder}</option>
               {props.op1 &&  <option value="1">{props.op1}</option>}
               {props.op2 &&  <option value="2" >{props.op2}</option>}
               {props.op3 &&  <option value="3">{props.op3}</option>}
               {props.op4 &&  <option value="4">{props.op4}</option>}

            </Form.Select>
        </div>
    );
}
export default formSelect;