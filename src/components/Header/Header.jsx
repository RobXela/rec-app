import { Button, ButtonGroup, Dropdown, DropdownButton, FormControl, InputGroup } from "react-bootstrap";
import styles from "./Header.module.css";
import searchIcon from "../../icons/search.svg"
import DropdownItem from "react-bootstrap/esm/DropdownItem";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div>
        <InputGroup>
            <InputGroup.Text><img src={searchIcon} alt=''></img></InputGroup.Text>
            <FormControl></FormControl>
        </InputGroup>
      </div>
      <div>
          <ButtonGroup>
              <Button variant="dark">Dark</Button>
              <Button variant="light">Light</Button>
          </ButtonGroup>
      </div>
      <div>
          <DropdownButton title="Language" variant="secondary">
              <Dropdown.Item>Русский</Dropdown.Item>
              <Dropdown.Item>English</Dropdown.Item>
          </DropdownButton>
      </div>
      <div>
        <Button> Log In </Button>
      </div>
    </div>
  );
};