import {
    Box,
    Flex,
    Button,
    Stack,
    Avatar,
    HStack,
    useDisclosure,
    IconButton,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from "@chakra-ui/react";
  import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
  import "../../Css/Navbar.css";
  import { Link } from "react-router-dom";
  import { useNavigate } from "react-router-dom";
  // Assuming you have a logo image imported as LogoImage
  import LogoImage from "../../Images/logo.png";
//   import Page1 from './Page1';
//   import Page2 from './Page2';
//   import Footer from './Footer'
//   import Card from "./Card";
import ADashboard from "./ADashboard";
 
  export default function ANavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
   
    
  
    // Function to get the starting letter of the user's name
    const getInitials = (name) => {
      return name ? name.charAt(0).toUpperCase() : "";
    };
    const navigate = useNavigate();
    const navi = () => {
      navigate("/login");
      onClose();
    };
    const Propage = () => {
      navigate("/profile");
    };
    const handleLogout = () => {
      dispatch(logout()); // Dispatch the logout action
      navi(); // Navigate to the login page after logout
    };
  
    return (
      <div id="navFix">
        <Box
          // bg={useColorModeValue("gray.100", "gray.900")}
          bg="#A8DFEA"
          px={10}
          width={["100%"]}
          height={["15%"]}
        //   position="fixed"
          top={0}
          zIndex={10}
          opacity={0.8}
          transition="opacity 0.3s ease"
        >
          <Flex h={20} alignItems={"center"} justifyContent={"space-between"}>
            {/* Logo */}
            <Flex alignItems="center">
              <img src={LogoImage} alt="Logo" width="11%" style={{marginRight:'700px'}}/>
            </Flex>
  
            {/* Navbar Links */}
            <Flex
              h={16}
              alignItems={"center"}
              justifyContent={"space-between"}
              flex="1"
            >
              <Flex>
                {/* Your Navbar Links */}
                <HStack spacing={8} alignItems={"center"}>
                  <HStack
                    as={"nav"}
                    spacing={4}
                    display={{ base: "none", md: "flex" }}
                    id="myDIV"
                  >
                    <Button
                      className="btnRes"
                      onClick={isOpen ? onClose : onOpen}
                      _hover={{
                        textShadow: "#FC0 1px 0 10px",
                        transform: "scale(1.2)",
                      }}
                      variant="unstyled"
                    >
                      <a href="/home">
                        {" "}
                        <b>Home</b>
                      </a>
                    </Button>
                    <Link to="/about">
                      <Button
                        className="btnRes"
                        onClick={isOpen ? onClose : onOpen}
                        _hover={{
                          textShadow: "#FC0 1px 0 10px",
                          transform: "scale(1.2)",
                        }}
                        variant="unstyled"
                      >
                        <a href="#about">
                          {" "}
                          <b>Courses</b>
                        </a>
                      </Button>
                    </Link>
  
                    
  
                    <Button
                      className="btnRes"
                      onClick={isOpen ? onClose : onOpen}
                      _hover={{
                        textShadow: "#FC0 1px 0 10px",
                        transform: "scale(1.2)",
                      }}
                      variant="unstyled"
                    >
                      <a href="#Vision">
                        <b>About Us</b>
                      </a>
                    </Button>
  
                    <Menu>
                     
                        
                    
                        <MenuButton
                          as={Avatar}
                          src="https://bit.ly/broken-link"
                          // src={`https://ui-avatars.com/api/?name=`}
                        //   onClick={navi}
                          width="40px"
                          height="40px"
                          bg="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
                        />
                    
                    
                        <MenuList>
                          <MenuItem onClick={Propage}>Profile</MenuItem>
                          <MenuItem
                            onClick={() => console.log("Settings clicked")}
                          >
                            Settings
                          </MenuItem>
                          <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </MenuList>
                    
                    </Menu>
                  </HStack>
                </HStack>
              </Flex>
  
              {/* Hamburger Icon */}
              <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
              />
            </Flex>
          </Flex>
  
          {/* Responsive Navbar Menu */}
          {isOpen && (
            <Box pb={4} display={{ md: "none" }}>
              <Stack as={"nav"} spacing={4}>
                {/* Responsive Navbar Links */}
  
                <Button
                  className="btnRes"
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                  variant="unstyled"
                >
                  <a href="#Skills">
                    {" "}
                    <b>Home</b>
                  </a>
                </Button>
  
                <Button
                  className="btnRes"
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                  variant="unstyled"
                >
                  <a href="/view-courses">
                    {" "}
                    <b>Courses</b>
                  </a>
                </Button>
  
                
  
                
  
                
                <Button
                  className="btnRes"
                  onClick={isOpen ? onClose : onOpen}
                  _hover={{
                    textShadow: "#FC0 1px 0 10px",
                    transform: "scale(1.2)",
                  }}
                  variant="unstyled"
                >
                  <a href="/profile">
                    <b>Profile</b>
                  </a>
                </Button>
              </Stack>
            </Box>
          )}
        </Box>
        <ADashboard/>
        {/* <Page1/>
        <Page2/>
        <Card/> */}
        {/* <Footer/> */}
      </div>
    );
  }
  