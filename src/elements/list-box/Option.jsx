import React, { useRef } from 'react';
import { useOption } from 'react-aria';
import { CheckIcon } from '@heroicons/react/solid';
import './style.css';

function Option({ item, state }) {
  const optionRef = useRef();
  const { optionProps, isSelected, isDisabled } = useOption(
    {
      key: item.key,
      shouldSelectOnPressUp: !state.selectionManager?.isSelected(item.key),
    },
    state,
    optionRef
  );

  return (
    <li
      ref={optionRef}
      {...optionProps}
      style={{ color: isDisabled && '#a0a0a0' }}
    >
      {isSelected && <CheckIcon aria-hidden="true" />}
      <span>{item.rendered}</span>
    </li>
  );
}

export default Option;
