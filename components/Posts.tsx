import { Flex, Box, Badge, Button } from '@chakra-ui/react';
import { BiStar } from "react-icons/bi";
import { Card } from '../components/Card';

export default function Posts() {
    console.log('call Posts');

    const handleTest = () => {
        fetch('http://192.168.56.227:3000/api/hello')
            .then(response => response.json())
            .then(data => console.log(data));
    }

    const property = {
        imageUrl: 'https://bit.ly/2Z4KKcF',
        imageAlt: 'Rear view of modern home with pool',
        beds: 3,
        baths: 2,
        title: 'Modern home in city center in the heart of historic Los Angeles',
        formattedPrice: '$1,900.00',
        reviewCount: 34,
        rating: 4,
    }

    return (
        <Flex flexGrow='1' flexDirection='column' alignItems='center' gap='2'>
            <Card>
                <img src={property.imageUrl} alt={property.imageAlt} />

                <Box p='6'>

                    <Box display='flex' alignItems='baseline'>
                        <Badge borderRadius='full' px='2' colorScheme='teal'>
                            New
                        </Badge>
                        <Box
                            color='gray.500'
                            fontWeight='semibold'
                            letterSpacing='wide'
                            fontSize='xs'
                            textTransform='uppercase'
                            ml='2'
                        >
                            {property.beds} beds &bull; {property.baths} baths
                        </Box>
                    </Box>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                    >
                        {property.title}
                    </Box>

                    <Box>
                        {property.formattedPrice}
                        <Box as='span' color='gray.600' fontSize='sm'>
                            / wk
                        </Box>
                    </Box>

                    <Box display='flex' mt='2' alignItems='center'>
                        {Array(5)
                            .fill('')
                            .map((_, i) => (
                                <BiStar
                                    key={i}
                                    color={i < property.rating ? 'teal.500' : 'gray.300'}
                                />
                            ))}
                        <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                            {property.reviewCount} reviews
                        </Box>
                    </Box>

                </Box>
                <Button onClick={handleTest}>Test</Button>

            </Card>


        </Flex>
    );
}