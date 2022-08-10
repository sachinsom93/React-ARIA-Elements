import { useToggleState } from 'react-stately';
import { useToggleButton } from 'react-aria';
import React, { useRef } from 'react';

function ToggleButton({ children, onClick, ...rest }) {
  const btnRef = useRef();
  const state = useToggleState({
    ...rest,
    onPress: onClick,
  });
  const { buttonProps, isPressed } = useToggleButton(
    {
      onPress: onClick,
      ...rest,
    },
    state,
    btnRef
  );

  return (
    <button
      {...buttonProps}
      style={{
        background: isPressed
          ? state.isSelected
            ? 'darkgreen'
            : 'gray'
          : state.isSelected
          ? 'green'
          : 'lightgray',
        color: state.isSelected ? 'white' : 'black',
        userSelect: 'none',
        WebkitUserSelect: 'none',
      }}
      ref={btnRef}
    >
      {children}
    </button>
  );
}

export default ToggleButton;
