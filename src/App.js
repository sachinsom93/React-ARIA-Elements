import React, { useRef } from 'react';
import './style.css';
import Button from './elements/button/Button';
import ToggleButton from './elements/toggle-button/ToggleButton';
import ListBox from './elements/list-box/ListBox';
import ListItem from './elements/list-box/ListItem';
import PopOver from './elements/pop-over/PopOver';
import Select from './elements/select/Select';
import InputTextField from './elements/input-text-field/InputTextField';
import InputTextAreaField from './elements/input-textarea-field/InputTextAreaField';
import InputNumberField from './elements/input-number-field/InputNumberField';

export default function App() {
  const selectRef = useRef();
  const [numberInput, setNumberInput] = React.useState(10000);
  const [isSeletedBtn, setSelectedBtn] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(new Set(['']));
  const [inputText, setInputText] = React.useState('');
  return (
    <div>
      <h1 id="main-title">React ARIA Elements - Demo</h1>
      <h2>Buttons</h2>
      <Button onClick={(e) => console.log(e)}>Press Me</Button>
      <ToggleButton
        isSelected={isSeletedBtn}
        onChange={setSelectedBtn}
        aria-describedby="main-title"
        aria-labelledby="main-title"
        aria-label="toggle-button"
      >
        Press Me
      </ToggleButton>
      <h2>ListBox</h2>
      <ListBox
        label="Choose sandwich contents"
        selectionMode="single"
        selectedKeys={selectedItem}
        onSelectionChange={setSelectedItem}
      >
        <ListItem key="lettuce">Lettuce</ListItem>
        <ListItem key="tomato">Tomato</ListItem>
        <ListItem key="cheese">Cheese</ListItem>
        <ListItem key="tuna">Tuna Salad</ListItem>
        <ListItem key="egg">Egg Salad</ListItem>
        <ListItem key="ham">Ham</ListItem>
      </ListBox>
      <h2>PopOver</h2>
      <PopOver />
      <h2>Select</h2>
      <Select label="Favorite Color" disabledKeys={['egg']}>
        <ListItem key="lettuce">Lettuce</ListItem>
        <ListItem key="tomato">Tomato</ListItem>
        <ListItem key="cheese">Cheese</ListItem>
        <ListItem key="tuna">Tuna Salad</ListItem>
        <ListItem isDisabled="true" key="egg">
          Egg Salad
        </ListItem>
        <ListItem key="ham">Ham</ListItem>
      </Select>
      <h2>Input Field</h2>
      <h3>Simple Input Text Field</h3>
      <InputTextField
        label="Enter Your Email"
        value={inputText}
        onChange={setInputText}
        type="email"
      />
      <div>Input Value: {inputText}</div>
      <h3>Text Area Input</h3>
      <InputTextAreaField label="Description Box" />
      <h3>Input with Error Message</h3>
      <InputTextField
        label="Create New Password"
        errorMessage="Password should have special charactors and numbers included."
      />
      <h3>Input with Description Message</h3>
      <InputTextField
        label="Create New Password"
        description="Password must have atleast 8 charactors with special charactors and numbers. For Example - #23FakePassword"
      />
      <h3>Number Input</h3>
      <InputNumberField
        label="Enter Amount"
        value={numberInput}
        onChange={setNumberInput}
        formatOptions={{
          style: 'currency',
          currency: 'USD',
        }}
      />
    </div>
  );
}
