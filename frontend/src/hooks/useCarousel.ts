import useEmblaCarousel from "embla-carousel-react"
import { useCallback } from "react";

export const useCarousel = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align:"start",watchDrag:false});

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi])

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi])

    // as const ayuda a mantener el tipo de la tupla intacto si usas destructuring más adelante.
    return {emblaRef, emblaApi,scrollPrev,scrollNext}
}