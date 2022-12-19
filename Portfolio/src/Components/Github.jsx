import React, { useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import AOS from "aos";
import "aos/dist/aos.css";

import { Box, Button, Grid, Heading, Image } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
 export const GitHub = (props) => {
  const { checkTheme, GithubScroll } = props;

  const [theme, setTheme] = useState({});
  const [theme1, setTheme1] = useState({});

  // --------------- (Animation)--------------
  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);

  useEffect(() => {
    if (checkTheme) {
      setTheme1({
        color: "white",
        backgroundColor: "#0f1624",
      });
    } else {
      setTheme1({
        color: "black",
        backgroundColor: "#edf2f8",
      });
    }
  }, [checkTheme]);

  // =================== Theme 2 =====================>
  useEffect(() => {
    if (checkTheme) {
      setTheme({
        color: "white",
        backgroundColor: "#1a202c",
      });
    } else {
      setTheme({
        color: "black",
        backgroundColor: "#ffffff",
      });
    }
  }, [checkTheme]);

  return (
    <Grid ref={GithubScroll}>
      <Heading mb="4%">
        GitHub{" "}
        <span style={{ color: "#fe9119" }}>
          Overview{" "}
          <a
            href="https://github.com/Supriyakaa"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              fontSize={["30px", "30px", "35px", "35px"]}
              p={0}
              borderRadius="50%"
              transition="all .3s ease-in-out"
              ml="-1"
              mb="1"
              _hover={{
                transform: "scale(1.1)",
                border: "1px solid #3f3d55",
                bg: "#ffff",
                color: "#3f3d55",
              }}
            >
              <BsGithub />
            </Button>
          </a>
        </span>
      </Heading>

      {/* -------- ( Graph Chart ) ---------- */}
      <Image
        data-aos="zoom-in"
        style={theme1}
        w={["80%", "80%", "80%", "70%"]}
        m="auto"
        border="2px solid #fe9119"
        p="5px"
        borderRadius="10px"
        bg="transparent"
        transition="all .5s ease-in-out"
        _hover={{
          transform: "scale(1.1)",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
        }}
        src={
          "https://activity-graph.herokuapp.com/graph?username=Supriyakaa&theme=github"
        }
      />

      <Box data-aos="zoom-in" w={["80%", "80%", "80%", "70%"]} m="auto" mt="5">
        <Box
          data-aos="zoom-in"
          display={["grid", "grid", "grid", "flex"]}
          w="100%"
          gap={5}
        >
          {/* -------- ( Stats ) ---------- */}
          <Image
            style={theme1}
            w={["100%"]}
            m="auto"
            border="2px solid #fe9119"
            padding={"5px"}
            borderRadius="10px"
            className="github_Calender"
            transition="all .5s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            src={
              "https://github-readme-stats.vercel.app/api?username=Supriyakaa&show_icons=true&locale=en&theme=tokyonight"
            }
            alt="Supriyakaa"
          />

          {/* -------- (Current Streak) ---------- */}
          <Image
            style={theme1}
            w={["100%"]}
            m="auto"
            border="2px solid #fe9119"
            padding={"5px"}
            borderRadius="10px"
            className="github_Calender"
            transition="all .5s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            src={
              "https://github-readme-streak-stats.herokuapp.com/?user=atrivedi8988&show_icons=true&locale=en&theme=tokyonight"
            }
            alt="supriya9898"
          />
        </Box>
        <Box
          display={["grid", "grid", "grid", "flex"]}
          w={"100%"}
          gap={5}
          mt="5"
        >
          {/* -------- (Calender) ---------- */}
          <Box
            overflow={"hidden"}
            color={checkTheme ? "white" : "black"}
            bg={checkTheme ? "#1a202c" : "#ffffff"}
            w={["100%"]}
            m="auto"
            border="2px solid #fe9119"
            p={"20px"}
            pt={["45px", "45px", "52px", "52px"]}
            pb={["45px", "45px", "52px", "52px"]}
            borderRadius="10px"
            className="github_Calender"
            transition="all .5s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
          >
            <GitHubCalendar
              style={{
                margin: "auto",
              }}
              username="Supriyakaa"
              year={new Date().getFullYear()}
            />
          </Box>

          {/* -------- (Most use language) ---------- */}
          <Image
            style={theme1}
            w={["100%", "100%", "103%", "103%"]}
            m="auto"
            border="2px solid #fe9119"
            padding={"5px"}
            borderRadius="10px"
            className="github_Calender"
            transition="all .5s ease-in-out"
            _hover={{
              transform: "scale(1.1)",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
            }}
            src={
              "https://github-readme-stats.vercel.app/api/top-langs?username=Supriyakaa&show_icons=true&locale=en&layout=compact&theme=tokyonight"
            }
            alt="dsz8988"
          />
        </Box>
      </Box>
    </Grid>
  );
};

