import React, { useRef, forwardRef } from 'react';
import { useTextField } from 'react-aria';
import './style.css';

const InputTextField = forwardRef((props, ref) => {
  // Check is ref is available for not
  ref = ref ? ref : useRef(null);

  const { labelProps, inputProps, descriptionProps, errorMessageProps } =
    useTextField(props, ref);

  return (
    <div className="container__input">
      <label {...labelProps}>{props.label}</label>
      <input ref={ref} {...inputProps} />
      {props.description && (
        <div {...descriptionProps} className="descriptionMsg">
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div {...errorMessageProps} className="errorMsg">
          {props.errorMessage}
        </div>
      )}
    </div>
  );
});

export default InputTextField;
