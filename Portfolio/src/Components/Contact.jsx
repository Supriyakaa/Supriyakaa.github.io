import {
  Box,
  FormLabel,
  VStack,
  Input,
  Text,
  Textarea,
  Button,
  HStack,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { Link } from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

export function Contact() {
  const { colorMode } = useColorMode();
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    console.log("click");
    emailjs
      .sendForm(
        "service_974s8fd",
        "template_suec14w",
        form.current,
        "7RWCxDB7C6hPkTXIh"
      )
      .then(
        (result) => {
          console.log(result);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <Box pb={"30px"}>
        <Flex
          direction={["column", "column", "row"]}
          margin="auto"
          justifyContent="space-evenly"
          pr="50px"
          pl="50px"
          mt={"50px"}
        >
          <VStack mt="50px" data-aos="fade-right">
            <Box>
              <Text fontSize={"2xl"}>Chat With Me</Text>
            </Box>
            <form ref={form} onSubmit={sendEmail}>
              <Box>
                <FormLabel fontSize={"12px"}>Your Name</FormLabel>
                <Input type="text" width="20rem" name="from_name" />
              </Box>
              <Box>
                <FormLabel fontSize={"12px"}>Email</FormLabel>
                <Input type="text" width="20rem" name="from_email" />
              </Box>
              <Box>
                <FormLabel fontSize={"12px"}>Subject</FormLabel>
                <Input type="text" width="20rem" name="from_subject" />
              </Box>
              <Box>
                <FormLabel fontSize={"12px"}>Message</FormLabel>
                <Textarea
                  size={"sm"}
                  width="20rem"
                  placeholder="Message"
                  name="from_message"
                />
              </Box>
              <Box>
                <Button mt={"20px"} bgColor={"green"} type="submit">
                  Send Message
                </Button>
              </Box>
            </form>
          </VStack>

          <VStack
            alignItems={"flex-start"}
            gap="20px"
            marginTop={"60px"}
            data-aos="fade-left"
          >
            <Box>
              <Text fontSize={"2xl"}>Contact Me</Text>
            </Box>
            <HStack gap={"10px"}>
              <HiLocationMarker />
              <Text textAlign={"left"}>
                Amli, Silvassa
                <br /> DNH & DD
              </Text>
            </HStack>
            <HStack gap={"10px"}>
              <BsFillTelephoneFill />
              <Text>+91 8780304792</Text>
            </HStack>
            <HStack gap={"10px"}>
              <MdEmail />
              <Text>pathaksupriya981@gmail.com</Text>
            </HStack>
            <HStack>
              <Box _hover={{ color: "#0A66C2", cursor: "pointer" }}>
                <Link
                  href="https://www.linkedin.com/in/supriya-pathak-74868b23a/"
                  target={"_blank"}
                >
                  <AiFillLinkedin size="25px" />
                </Link>
              </Box>
              <Box _hover={{ color: "#6e5494", cursor: "pointer" }}>
                <Link href="https://github.com/Supriyakaa" target={"_blank"}>
                  <AiFillGithub size="25px" />
                </Link>
              </Box>
              <Box _hover={{ color: "#F56040", cursor: "pointer" }}>
                <Link
                  href="https://www.instagram.com/"
                  target={"_blank"}
                >
                  <AiFillInstagram size="25px" />
                </Link>
              </Box>
              <Box _hover={{ color: "#4267B2", cursor: "pointer" }}>
                <Link
                  href="https://www.facebook.com/"
                  target={"_blank"}
                >
                  <AiFillFacebook size="25px" />
                </Link>
              </Box>
            </HStack>
          </VStack>
        </Flex>

        <Box>
          {colorMode === "dark" ? (
            <hr
              style={{
                width: "90vw",
                margin: "auto",
                marginBottom: "30px",
                marginTop: "40px",
              }}
            />
          ) : (
            <hr
              style={{
                borderColor: "RGBA(0, 0, 0, 0.15)",
                width: "90vw",
                margin: "auto",
                marginBottom: "20px",
                marginTop: "20px",
              }}
            />
          )}
        </Box>
        <Box data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-offset="0">
          <Text>
            Copyright ©2022 All rights reserved | This template is made with ♥
            by{" "}
            <Link href="https://github.com/Supriyakaa" target={"_blank"}>
              Supriya_Pathak
            </Link>
          </Text>
        </Box>
      </Box>
    </>
  );
}
