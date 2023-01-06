import type { NextPage } from "next";
import { Button, Col, Container, Row, Stack } from "react-bootstrap";
import { useTheme } from "../components/BootstrapThemeProvider";

const Home: NextPage = () => {
  const { setTheme } = useTheme();
  return (
    <Container>
      <Row>
        <Col>
          <h1>React Bootstrap NextJS Tutorial</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            aliquid quia optio odit nihil voluptatibus soluta labore earum
            nostrum doloremque. Sequi laboriosam dicta praesentium, sit
            aspernatur non molestiae voluptates beatae.
          </p>
          <Stack direction="vertical" gap={2}>
            <Button onClick={() => setTheme("main")}>Switch Main Theme</Button>
            <Button onClick={() => setTheme("custom")}>
              Switch Custom Theme
            </Button>
            <Button onClick={() => setTheme("cerulean")}>
              Switch Cerulean Theme
            </Button>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
