import React from 'react';
import './style.css';
import Button from './elements/button/Button';
import ToggleButton from './elements/toggle-button/ToggleButton';
import ListBox from './elements/list-box/ListBox';
import ListItem from './elements/list-box/ListItem';
import PopOver from './elements/pop-over/PopOver';

export default function App() {
  const [isSeletedBtn, setSelectedBtn] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(new Set(['']));
  return (
    <div>
      <h1 id="main-title">Hello StackBlitz!</h1>
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

      <PopOver />
    </div>
  );
}
