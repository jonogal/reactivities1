import React, { useContext } from "react";
import { Menu, Container, MenuItem, Button } from "semantic-ui-react";
import ActivityStore from "../../app/stores/activityStore";

const NavBar: React.FC = () => {
  const activityStore = useContext(ActivityStore);
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>
            <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}} />
            Reactivities
        </Menu.Item>
        <Menu.Item name='Activities' />
        <MenuItem>
            <Button onClick={activityStore.openCreateForm} positive content='Create Activity' />
        </MenuItem>
      </Container>
    </Menu>
  );
};

export default NavBar;