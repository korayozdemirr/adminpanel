import { Button, Flex, Heading, Input } from "@chakra-ui/react";
import Layout from "../components/Layout";

const AddProject = () => {
  return (
    <Layout>
     <Flex direction="column"  alignItems="center" w="full">
     <Heading margin={50}>Add Project</Heading>
      <Flex direction="column"  gap={4} width={{base:400, md:500, lg:600}}>
        <Input placeholder="Title" type="text" required />
        <Input placeholder="Image" type="file" required />
        <Input placeholder="Git Url" type="text" required />
        <Input placeholder="Project Url" type="text" required />
        <Input placeholder="Description" type="text" required />
        <Button colorScheme="teal">Submit</Button>
      </Flex>
     </Flex>
    </Layout>
  );
};

export default AddProject;
