import { useToggleState } from 'react-stately';
import { useToggleButton } from 'react-aria';
import React, { useRef } from 'react';

function ToggleButton(props) {
  const btnRef = useRef();
  const state = useToggleState(props);
  const { buttonProps, isPressed } = useToggleButton(props, state, btnRef);

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
      {props.children}
    </button>
  );
}

export default ToggleButton;
