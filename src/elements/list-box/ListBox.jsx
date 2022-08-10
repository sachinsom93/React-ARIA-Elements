import React, { useRef } from 'react';
import { useListBox } from 'react-aria';
import { useListState } from 'react-stately';
import Option from './Option';

function ListBox(props) {
  const listBoxRef = useRef();
  const state = useListState(props);
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
          overflow: 'auto',
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
}

export default ListBox;
