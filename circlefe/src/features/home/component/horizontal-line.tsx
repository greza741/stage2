import { Box } from '@chakra-ui/react';

const HorizontalLine = () => {
  return (
    <Box 
      as="hr"
      borderColor="gray.300"
      borderWidth="1px"
      my={4} // Margin vertikal
    />
  );
};

export default HorizontalLine;