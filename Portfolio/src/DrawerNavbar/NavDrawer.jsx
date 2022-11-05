import { HamburgerIcon } from "@chakra-ui/icons"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, VStack } from "@chakra-ui/react"
import React from "react"
import { Link } from "react-scroll"

const links = [
  {
    to: "home",
    page: "Home",
  },
  {
    to: "about",
    page: "About",
  },
  {
    to: "skill",
    page: "Skill",
  },
  {
    to: "project",
    page: "Project",
  },
  {
    to: "github",
    page:"Github"
  },
  {
    to: "contact",
    page: "Contact",
  },
];

export function NavDrawer({isOpen,onOpen,onClose}) {
    
    const btnRef = React.useRef()
  
    return (
      <>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        <HamburgerIcon />
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xs"
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Select Your Tabs</DrawerHeader>
  
            <DrawerBody>
             <VStack>
             {links.map((el, i) => (
                <Link
                activeClass="active"
                 key={i}
                 to={el.to}
                 spy={true}
                 smooth={true}
                 offset={-70}
                 duration={500}
               >
                 {el.page}
               </Link>
              ))}
             </VStack>
            </DrawerBody>
  
          </DrawerContent>
        </Drawer>
      </>
    )
  }