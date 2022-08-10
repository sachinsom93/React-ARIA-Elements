import React, { forwardRef } from 'react';
import { useButton, FocusRing } from 'react-aria';
import './button.css';

const Button = forwardRef((props, ref) => {
  const { children, onClick, style, ...rest } = props;
  const { buttonProps, isPressed } = useButton(
    {
      ...rest,
      onPress: onClick,
    },
    ref
  );
  return (
    <FocusRing focusRingClass="ring">
      <button
        ref={ref}
        {...buttonProps}
        style={{
          userSelect: 'none',
          backgroundColor: isPressed && '#aaa',
          ...style,
        }}
      >
        {children}
      </button>
    </FocusRing>
  );
});

export default Button;
