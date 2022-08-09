import React, { useRef } from 'react';
import { useOption, mergeProps, useFocusRing } from 'react-aria';

function Option({ item, state }) {
  const optionRef = useRef();
  const { optionProps, isSelected, isDisabled } = useOption(
    { key: item.key },
    state,
    optionRef
  );

  // Determine whether we should show a keyboard
  // focus ring for accessibility
  const { isFocusVisible, focusProps } = useFocusRing();
  return (
    <li
      ref={optionRef}
      {...mergeProps(focusProps, optionProps)}
      style={{
        background: isSelected ? 'blueviolet' : 'transparent',
        color: isDisabled ? '#aaa' : isSelected ? 'white' : null,
        padding: '2px 5px',
        outline: isFocusVisible ? '2px solid orange' : 'none',
      }}
    >
      {item.rendered}
    </li>
  );
}

export default Option;
