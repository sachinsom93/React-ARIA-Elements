import React, { useRef, forwardRef } from 'react';
import { useListBox } from 'react-aria';
import { useListState } from 'react-stately';
import Option from './Option';

const ListBox = forwardRef((props, ref) => {
  const listBoxRef = ref ? ref : useRef();
  const state = props?.state ? props?.state : useListState(props);
  const { listBoxProps, labelProps } = useListBox(props, state, listBoxRef);
  return (
    <>
      <div {...labelProps} style={{ marginBlock: '.5em 0' }}>
        {props.label}
      </div>
      <ul
        ref={listBoxRef}
        {...listBoxProps}
        style={{
          padding: '0',
          margin: '.5em 0',
          border: '0.5px solid black',
          listStyle: 'none',
          maxHeight: '150px',
          overflow: 'auto',
          width: '100%',
        }}
      >
        {[...state.collection].map((item) =>
          item.type === 'section' ? null : (
            <Option item={item} key={item.key} state={state} />
          )
        )}
      </ul>
    </>
  );
});

export default ListBox;
