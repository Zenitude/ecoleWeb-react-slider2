import styled from "styled-components";

export const SliderContainer = styled.div`
    max-width: 500px;
    width: 100%;
    padding-inline: 10px;
    position: relative;

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        font-weight: bold;
        padding: 10px 15px;
        border-radius: 50%;
        position: absolute;
        top: 35%;
        transform: translateY(-50%);
        width: 50px;
        height: 50px;

        img{
            width: 100%;
            height: 100%;
            filter: invert(100%);
        }
    }
`;

export const Previous = styled.button`
    left: 15px;
`;

export const Next = styled.button`
    right: 15px;
`;

export const ContainerSlides = styled.div`
    max-width: 350px;
    min-width: 200px;
    height: 300px;
    margin: auto;
    position: relative;

    div {
        position: absolute;
        right: 0;
        background-color: #f1f1f1;
        border: 1px solid #000;
        width: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Arial, Helvetica, sans-serif;
    }

`;

export const CountSlides = styled.div`
    width: 100%;
    text-align: center;
    color: #f1f1f1;
    margin-top: -100px;
    margin-bottom: 20px;
    font-size: 1.5rem;
`;

export const Slide = styled.img`
    width: 100%;
    height: 100%;
`;

export const Zone = styled.div``;