import React from 'react';
import './DropdownMenu.scss';
import {Button, Label, ListBox, ListBoxItem, Popover, Select, SelectValue} from 'react-aria-components';

const DropdownMenu = () => {

    return (  

 <Select>
  <Label>Wine Type</Label>
  <Button>
    <SelectValue />
    <span aria-hidden="true">▼</span>
  </Button>
  <Popover>
    <ListBox>
      <ListBoxItem>Red</ListBoxItem>
      <ListBoxItem>White</ListBoxItem>
      <ListBoxItem>Rosé</ListBoxItem>
      <ListBoxItem>Sparkling</ListBoxItem>
      <ListBoxItem>Fortified</ListBoxItem>
      <ListBoxItem>Desert</ListBoxItem>
    </ListBox>
  </Popover>
</Select>
);
};


export default DropdownMenu;