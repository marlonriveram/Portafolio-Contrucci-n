import { Box, Button, Flex, Group } from '@chakra-ui/react'
import { useCarousel } from '../../hooks/useCarousel'
import './carouselStyle.css'

interface Images {
    images:string[] | undefined
}
export const Carousel = ({images}:Images) => {
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
                    {
                        images?.map(img => (
                            <img key={img} className='embla__slide' style={{objectFit:"cover"}} src={ `${img}` }alt="" />
                        ))
                    }
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


