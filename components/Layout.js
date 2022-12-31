import { Flex } from "@chakra-ui/react";
import SideBar from "./SideBar";

const Layout = ({ children }) => {
  return (
    <Flex background="gray.300">
      <SideBar />
      <Flex w="full">{children}</Flex>
    </Flex>
  );
};
export default Layout;
