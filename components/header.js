import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";

const Header = () => {
    return (
        <Navbar isBordered>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            Heyday Fran. Portal
          </Text>
        </Navbar.Brand>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              Log Out
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
    )
}

export default Header