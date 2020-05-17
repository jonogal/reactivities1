import React from "react";
import { Menu, Container, MenuItem, Button } from "semantic-ui-react";

interface IProps {
  openCreateForm: () => void;
}

export const NavBar: React.FC<IProps> = ({openCreateForm}) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}} />
            Reactivities
        </Menu.Item>
        <Menu.Item name='Activities' />
        <MenuItem>
            <Button onClick={openCreateForm} positive content='Create Activity' />
        </MenuItem>
      </Container>
    </Menu>
  );
};
