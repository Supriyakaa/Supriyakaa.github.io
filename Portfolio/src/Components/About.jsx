import {
  Box,
  Container,
  Flex,
  Heading,
  Table,
  Td,
  Th,
  Tr,
} from "@chakra-ui/react";
import "aos/dist/aos.css";


export function About() {
    
  return (
    <>
      <Heading textAlign={"center"}mb={"25px"}  >
        ABOUT ME
      </Heading>
      <Flex
        justifyContent={["center", "center", "space-evenly"]}
        alignItems="center"
        direction={["column", "column", "row"]}
        gap="50px"
        // border={"1px solid green"}
      >
        <Box>
        <Table
          variant="simple"
          size={"md"}
          width={["12rem", "32rem", "32rem"]}
          className="aboutTable"
          margin="auto"
          data-aos="zoom-in-right"
        >
          <Tr>
            <Th>Name</Th>
            <Td>Supriya Pathak</Td>
          </Tr>
          <Tr>
            <Th>Date of birth</Th>
            <Td>1 Aug, 1999</Td>
          </Tr>
          <Tr>
            <Th>Higher Education</Th>
            <Td>B.Tech (Electronic and Communication)</Td>
          </Tr>
          <Tr>
            <Th>Address</Th>
            <Td>
              Amli, Silvassa<br /> DNH & DD
              India.
            </Td>
          </Tr>
          <Tr>
            <Th>Pincode</Th>
            <Td>396230</Td>
          </Tr>
          <Tr>
            <Th>Contact NO.</Th>
            <Td>8780304972</Td>
          </Tr>
          <Tr>
            <Th>Email ID</Th>
            <Td>pathaksupriya981@gmail.com</Td>
          </Tr>
        </Table>
        </Box>
        <Box>
          <Container
            textAlign={"justify"}
            maxHeight={["20rem", "20rem", "33rem"]}
            overflowY={["scroll", "scroll", "hidden"]}
            p={"0px 20px 0px 20px"}
            data-aos="zoom-in-left"
          >
                      Hello, I am Supriya Pathak from Gujarat... An Energetic and passion-driven

                      MERN Stack Developer having 1200 hours of intensive Coding experience and

          able to write clean, reusable, and optimized code. Also,

          have a deeper knowledge of Data Structure Algorithms.
          
          Looking for an opportunity to work in a challenging

          work environment to develop skills and deeper
          

          understanding of Web development.



          </Container>
        </Box>
      </Flex>
    </>
  );
}
