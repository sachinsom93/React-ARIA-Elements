import React, { useRef } from 'react';
import { useButton, FocusRing } from 'react-aria';
import './button.css';

function Button({ children, onClick, ...rest }) {
  // const { children } = props;
  const btnRef = useRef();
  const { buttonProps, isPressed } = useButton(
    {
      ...rest,
      onPress: onClick,
    },
    btnRef
  );
  return (
    <FocusRing focusRingClass="ring">
      <button
        ref={btnRef}
        {...buttonProps}
        style={{
          userSelect: 'none',
          backgroundColor: isPressed && '#aaa',
        }}
      >
        {children}
      </button>
    </FocusRing>
  );
}

export default Button;
