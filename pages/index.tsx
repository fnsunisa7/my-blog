import type { NextPage } from 'next';
import Head from 'next/head';
import { Container, Box, Badge } from '@chakra-ui/react'
import { BiStar } from "react-icons/bi";

const Home: NextPage = () => {
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
    <div>
      <Head>
        <title>Blog -&gt; fnsunisa7</title>
        <meta name="description" content="my blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container maxW='2xl' centerContent>
        <Box padding='4' maxW='md'>
          There are many benefits to a joint design and development system. Not only
          does it bring benefits to the design team, but it also brings benefits to
          engineering teams. It makes sure that our experiences have a consistent look
          and feel, not just in our design specs, but in production.
        </Box>




        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
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
        </Box>
      </Container>

    </div>
  );
}

export default Home;
