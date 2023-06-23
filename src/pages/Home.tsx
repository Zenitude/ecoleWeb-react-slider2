import React from 'react';
import { HomeContainer } from "./Home.style";
import { GlobalStyle } from "./Home.style";
import Slider from '../components/Slider/Slider';

export default function Home (): React.JSX.Element {
    return(
        <>
            <GlobalStyle />
            <HomeContainer>
                <Slider progress={true}/>
            </HomeContainer>
        </>
    )
}