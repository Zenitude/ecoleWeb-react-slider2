import { useState } from 'react';
import { SliderContainer, Previous, Next, ContainerSlides, CountSlides, Slide, Zone } from "./Slider.style";
import previous from '../../assets/left-arrow.svg';
import next from '../../assets/right-arrow.svg';

type SliderProps = {
    progress: boolean
}

export default function Slider({progress} : SliderProps) {
    const [ index, setIndex ] = useState(1);
    const [ limit ] = useState(5);
    const [ zones ] = useState([
        "Leaving room",
        "Kitchen",
        "Bedroom",
        "Bathroom",
        "Balcony",
    ])

    function switchSlide(e: React.MouseEvent<HTMLButtonElement>) {               
        if(e.currentTarget.classList.contains('previous')) {
            index === 1 ? setIndex(limit) : setIndex(index - 1);
        } else if(e.currentTarget.classList.contains('next')) {
            index === 5 ? setIndex(1) : setIndex(index + 1);
        }
    }
    
    return (
        <SliderContainer>

            { 
                progress 
                && (<CountSlides> {index} / {limit} </CountSlides>)
            }
            
            <Previous className="previous" onClick={switchSlide}>
                <img src={previous} alt="Passer à l'image précédente" />
            </Previous>
            <Next className="next" onClick={switchSlide}>
            <img src={next} alt="Passer à l'image suivante" />
            </Next>
            
            <ContainerSlides>
                <Zone>{zones[index-1]}</Zone>
                <Slide src={`images/img-${index}.jpg`} />
            </ContainerSlides>
        
        </SliderContainer>
    )
}
