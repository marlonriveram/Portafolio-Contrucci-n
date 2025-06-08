import { Box, Button, Flex, Group } from '@chakra-ui/react'
import { useCarousel } from '../../hooks/useCarousel'
import './carousel.css'

export const Carousel = () => {
    const { emblaRef, scrollPrev, scrollNext } = useCarousel()
    return (
        <Box
            className='embla'
            width={"3/5"}
            minW="340px"
            flex={2}
        >
            <Box className='embla__viewport' paddingBottom={2.5} ref={emblaRef} >

                <Box className='embla__container'>
                    <img className='embla__slide' src="https://media.gq.com.mx/photos/66b3e2ab1eb4176c241add84/16:9/w_1920,c_limit/Mejores_series_de_anime.jpg" alt="" />

                    <img className='embla__slide' src="https://media.gq.com.mx/photos/66b3e2ab1eb4176c241add84/16:9/w_1920,c_limit/Mejores_series_de_anime.jpg" alt="" />

                    <img className='embla__slide' src="https://media.gq.com.mx/photos/66b3e2ab1eb4176c241add84/16:9/w_1920,c_limit/Mejores_series_de_anime.jpg" alt="" />

                    <img className='embla__slide' src="https://media.gq.com.mx/photos/66b3e2ab1eb4176c241add84/16:9/w_1920,c_limit/Mejores_series_de_anime.jpg" alt="" />

                </Box>
            </Box>

            <Flex justifyContent="space-between">
                <Button className="embla__prev"
                    onClick={scrollPrev} >
                    Prev
                </Button>
                <Button className="embla__next" onClick={scrollNext} >Next</Button>
            </Flex>


        </Box>
    )
}


