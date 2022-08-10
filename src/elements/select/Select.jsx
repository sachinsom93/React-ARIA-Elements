import React, { forwardRef, useRef } from 'react';
import {
  HiddenSelect,
  useSelect,
  useOverlayPosition,
  useOverlayTrigger,
} from 'react-aria';
import { useSelectState } from 'react-stately';

import Button from '../button/Button';
import { Overley } from '../pop-over/PopOver';
import ListBox from '../list-box/ListBox';
import './style.css';

const Select = forwardRef((props, ref) => {
  const { label, defaultOption, name, style, buttonStyle } = props;
  const state = useSelectState(props);

  ref = ref ? ref : useRef(null);
  const overlayRef = useRef(null);
  const listBoxRef = useRef(null);

  // useSelect Props
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    overlayRef
  );

  // handles the exposing of overlay and trigger
  // to assistive technology and hides the overlay when a
  // parent element scrolls
  const { triggerProps: overlayTriggerProps, overlayProps } = useOverlayTrigger(
    { type: 'listbox' },
    state,
    ref
  );
  //   Get popover positioning props relative to the trigger
  let { overlayProps: positionProps } = useOverlayPosition({
    targetRef: ref,
    overlayRef,
    placement: 'top',
    offset: 5,
    isOpen: state.isOpen,
  });

  console.log(menuProps);
  return (
    <div ref={overlayRef} style={style}>
      <div {...labelProps}>{label}</div>
      <HiddenSelect state={state} triggerRef={ref} label={label} name={name} />
      <div className="container">
        <Button
          onClick={overlayTriggerProps?.onPress}
          {...overlayTriggerProps}
          ref={ref}
          style={{ ...buttonStyle }}
        >
          <span {...valueProps}>
            {state.selectedItem
              ? state.selectedItem?.rendered
              : defaultOption
              ? defaultOption
              : 'Select an Option'}
          </span>
          <span aria-hidden="true" style={{ paddingLeft: 5 }}>
            ▼
          </span>
        </Button>
      </div>
      {state.isOpen && (
        <Overley
          isOpen={state.isOpen}
          onClose={state.close}
          ref={overlayRef}
          {...positionProps}
          {...overlayProps}
        >
          <ListBox {...menuProps} state={state} ref={listBoxRef} />
        </Overley>
      )}
    </div>
  );
});

export default Select;
