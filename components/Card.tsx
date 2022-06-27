import { Box, BoxProps } from '@chakra-ui/react';
import React from 'react';

interface Props {
  onClick?: React.MouseEventHandler<HTMLDivElement>,
  className?: BoxProps['className'];
  children: React.ReactNode;
  mt?: BoxProps['mt'];
}

export const Card = ({ children, ...rest }: Props) => {
  return (
    <Box maxW='sm' borderWidth='1px' borderRadius="sm" overflow="hidden" shadow="sm" {...rest}>
      {children}
    </Box>
  );
};
