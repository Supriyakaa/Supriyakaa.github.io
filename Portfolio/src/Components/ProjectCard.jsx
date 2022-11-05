import { Box, HStack, Image, Text, Button, Flex } from "@chakra-ui/react";
import "aos/dist/aos.css";
export function ProjectCard({ data }) {
  return (
    <>
      <Flex
        justifyContent={["center", "center", "space-evenly"]}
        alignItems="center"
        direction={["column", "column", "row"]}
        mb="100px"
      >
        <Box>
          <Image
            src={require(`../files/${data.img}`)}
            height={["150px", "150px", "300px"]}
            width={["250px", "250px", "500px"]}
            borderRadius={"20px"}
            boxShadow="rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"
            mb={"30px"}
            data-aos="fade-right"
          />
        </Box>
        <Box width={["250px", "250px", "500px"]} data-aos="fade-left">
          <Text textAlign={"left"} mb="10px" fontSize={"xl"}>
            {" "}
            <b>Title : </b>
            {data.title}{" "}
          </Text>
          <Text textAlign={"left"} mb="10px">
            {" "}
            <b>Description : </b>
            {data.desc}{" "}
          </Text>
          <Text textAlign={"left"} mb="10px">
            <b>Tech stack : </b>
            {data.techStack}{" "}
          </Text>
          <Text textAlign={"left"} mb="30px">
            <b>Feature : </b>
            {data.feature}{" "}
          </Text>
          <HStack gap={"30px"}>
            <Button onClick={() => window.open(data.clone, "_blank")}>
              Github Clone
            </Button>
            <Button onClick={() => window.open(data.deploy, "_blank")}>
              Visit Site
            </Button>
          </HStack>
        </Box>
      </Flex>
    </>
  );
}
