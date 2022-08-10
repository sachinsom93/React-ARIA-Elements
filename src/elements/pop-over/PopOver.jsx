import React from 'react';
import {
  DismissButton,
  FocusScope,
  mergeProps,
  OverlayContainer,
  OverlayProvider,
  useDialog,
  useModal,
  useOverlay,
  useOverlayPosition,
  useOverlayTrigger,
} from 'react-aria';

import { useOverlayTriggerState } from 'react-stately';

// Reuse the Button from your component library. See below for details.
import Button from '../button/Button';

export const Overley = React.forwardRef(
  ({ title, children, isOpen, onClose, style, ...otherProps }, ref) => {
    // Handle interacting outside the dialog and pressing
    // the Escape key to close the modal.
    let { overlayProps } = useOverlay(
      {
        onClose,
        isOpen,
        isDismissable: true,
        shouldCloseOnBlur: true,
      },
      ref
    );
    // Hide content outside the modal from screen readers.
    let { modalProps } = useModal();

    // Get props for the dialog and its title
    let { dialogProps, titleProps } = useDialog({}, ref);

    return (
      <FocusScope restoreFocus>
        <div
          {...mergeProps(overlayProps, dialogProps, otherProps, modalProps)}
          ref={ref}
          style={{
            background: 'white',
            color: 'black',
            ...style,
          }}
        >
          <h3 {...titleProps} style={{ marginTop: 0 }}>
            {title}
          </h3>
          {children}
          <DismissButton onDismiss={onClose} />
        </div>
      </FocusScope>
    );
  }
);

function PopOver() {
  let state = useOverlayTriggerState({});

  let triggerRef = React.useRef();
  let overlayRef = React.useRef();

  // Get props for the trigger and overlay. This also handles
  // hiding the overlay when a parent element of the trigger scrolls
  // (which invalidates the popover positioning).
  let { triggerProps, overlayProps } = useOverlayTrigger(
    { type: 'dialog' },
    state,
    triggerRef
  );

  // Get popover positioning props relative to the trigger
  let { overlayProps: positionProps } = useOverlayPosition({
    targetRef: triggerRef,
    overlayRef,
    placement: 'top',
    offset: 5,
    isOpen: state.isOpen,
  });

  return (
    <>
      <Button
        onClick={triggerProps?.onPress}
        {...triggerProps}
        ref={triggerRef}
      >
        Open Popover
      </Button>
      {state.isOpen && (
        <OverlayContainer>
          <Overley
            {...overlayProps}
            {...positionProps}
            ref={overlayRef}
            title="Popover title"
            isOpen={state.isOpen}
            onClose={state.close}
          >
            This is the content of the popover.
          </Overley>
        </OverlayContainer>
      )}
    </>
  );
}

export default PopOver;
