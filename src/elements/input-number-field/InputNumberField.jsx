import React, { useRef, forwardRef } from 'react';
import { useLocale, useNumberField } from 'react-aria';
import { useNumberFieldState } from 'react-stately';
import Button from '../button/Button';

const InputNumberField = forwardRef((props, ref) => {
  const inputRef = ref ? ref : useRef(null);
  const { locale } = useLocale();
  const state = useNumberFieldState({ ...props, locale });
  const {
    labelProps,
    inputProps,
    groupProps,
    errorMessageProps,
    descriptionProps,
    incrementButtonProps,
    decrementButtonProps,
  } = useNumberField(props, state, inputRef);
  return (
    <div style={props.style}>
      <label {...labelProps}>{props.label}</label>
      <div {...groupProps}>
        <Button {...decrementButtonProps}>-</Button>
        <input {...inputProps} ref={inputRef} />
        <Button {...incrementButtonProps}>+</Button>
      </div>
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

export default InputNumberField;
