import React from 'react';
import './style.css';
import Button from './elements/button/Button';
import ToggleButton from './elements/toggle-button/ToggleButton';

export default function App() {
  const [isSeletedBtn, setSelectedBtn] = React.useState(false);
  return (
    <div>
      <h1 id="main-title">Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <Button onPress={(e) => console.log(e)}>Press Me</Button>
      <ToggleButton
        isSelected={isSeletedBtn}
        onChange={setSelectedBtn}
        aria-describedby="main-title"
        aria-labelledby="main-title"
        aria-label="toggle-button"
      >
        Press Me
      </ToggleButton>
    </div>
  );
}
