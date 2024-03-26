import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function Question() {
  const [view, setView] = React.useState('');

  const handleChange = (event, newValue) => {
    setView(newValue); // Update the state with the new value of the toggle button
  };

  return (
    <ToggleButtonGroup
      orientation="vertical"
      value={view}
      exclusive
      onChange={handleChange}
    >
        <ToggleButton value="a" aria-label="a">
            <h4>A. ANSWER 1</h4>
        </ToggleButton>
        <ToggleButton value="b" aria-label="b">
            <h4>B. ANSWER 2</h4>        
        </ToggleButton>
        <ToggleButton value="c" aria-label="c">
            <h4>C. ANSWER 3</h4>
        </ToggleButton>
        <ToggleButton value="d" aria-label="d">
            <h4>D. ANSWER 4</h4>
        </ToggleButton>
    </ToggleButtonGroup>
  );
}