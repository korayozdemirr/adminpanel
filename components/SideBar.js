import {
  Button,
  Flex,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { AiFillDashboard, AiFillFileAdd } from "react-icons/ai";
import { ImGithub, ImBlogger } from "react-icons/im";
import Link from "next/link";
const SideBar = () => {
  return (
      <Flex background="gray.800" height="100vh" w={{ base: 75, lg: 250 }}>
        <Flex direction="column" width="100%" px={4}>
          <Heading
            color="blue.300"
            textAlign="center"
            width="100%"
            my={6}
            display={{ base: "none", lg: "block" }}
          >
            Dashboard
          </Heading>
          <Heading
            color="blue.300"
            textAlign="center"
            width="100%"
            my={6}
            overflow="hidden"
            display={{ base: "flex", lg: "none" }}
            fontSize={30}
          >
            DB
          </Heading>
          <Link href="/">
            <Button
              leftIcon={<AiFillDashboard style={{ height: 25, width: 25 }} />}
              width="100%"
              justifyContent="left"
              display={{ base: "none", lg: "flex" }}
              mb={4}
            >
              Dashboard
            </Button>
            <IconButton
              aria-label="Call Segun"
              size="lg"
              icon={<AiFillDashboard style={{ width: 25, height: 25 }} />}
              display={{ base: "flex", lg: "none" }}
              mb={4}
            />
          </Link>
          <Menu>
            <MenuButton
              display={{ base: "flex", lg: "none" }}
              as={IconButton}
              aria-label="options"
              icon={<AiFillFileAdd style={{ width: 25, height: 25 }} />}
              size="lg"
            />
            <MenuButton
              display={{ base: "none", lg: "flex" }}
              leftIcon={<AiFillFileAdd style={{ width: 25, height: 25 }} />}
              as={Button}
              textAlign="left"
            >
              Add Project
            </MenuButton>
            <MenuList>
              <Link href="/addProject">
              <MenuItem icon={<ImGithub style={{ width: 20, height: 20 }} />}>
                Project
              </MenuItem></Link>
              <MenuItem icon={<ImBlogger style={{ width: 20, height: 20 }} />}>
                BLogger
              </MenuItem>
            </MenuList>
          </Menu>
        </Flex>
        
      </Flex>
  );
};

export default SideBar;
