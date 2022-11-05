import { Box, useColorMode, useColorModeValue } from "@chakra-ui/react";
import "./App.css";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { GitHub } from "./Components/Github";
import { Home } from "./Components/Home";
import { Navbar } from "./Components/Navbar";
import { Project } from "./Components/Project";
import { Skill } from "./Components/Skill";

function App() {

  const BodyBgColor = useColorModeValue("whiteAlpha.900", "gray.800");

  const footerBgColor = useColorModeValue("gray.100", "gray.900");

  const { colorMode } = useColorMode();


  return (
    
    <div className="App">
      <Box bgColor={BodyBgColor}>
        <Navbar />
        <Box id="home">
          <Home />
        </Box>
        {colorMode === "dark" ? (
          <hr style={{ marginTop: "50px", marginBottom: "50px" }} />
        ) : (
          <hr
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              borderColor: "RGBA(0, 0, 0, 0.15)",
            }}
          />
        )}
        <Box id="about">
          <About />
        </Box>
        {colorMode === "dark" ? (
          <hr style={{ marginTop: "50px", marginBottom: "50px" }} />
        ) : (
          <hr
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              borderColor: "RGBA(0, 0, 0, 0.15)",
            }}
          />
        )}
        <Box id="skill">
          <Skill />
        </Box>
        {colorMode === "dark" ? (
          <hr style={{ marginTop: "50px", marginBottom: "50px" }} />
        ) : (
          <hr
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              borderColor: "RGBA(0, 0, 0, 0.15)",
            }}
          />
        )}
        
        <Box id="project">
          <Project />
        </Box>

        {colorMode === "dark" ? (
          <hr style={{ marginTop: "50px", marginBottom: "50px" }} />
        ) : (
          <hr
            style={{
              marginTop: "50px",
              marginBottom: "50px",
              borderColor: "RGBA(0, 0, 0, 0.15)",
            }}
          />
        )}
        
        <Box id="github">
          <GitHub />
        </Box>

        <Box id="contact" bgColor={footerBgColor}>
          <Contact />
        </Box>
      </Box>
    </div>
  );
}

export default App;
