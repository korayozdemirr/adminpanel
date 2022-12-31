import { Flex } from "@chakra-ui/react";
import SideBar from "./SideBar";

const layout = ({ children }) => {
  return(
    <Flex>
    <SideBar />
    {children}
    </Flex>
  )
};
export default layout;
