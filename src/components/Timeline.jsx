import React from 'react'
import { styled } from 'styled-components'

const TimelineContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(${props => props.$divisions}, 1fr);
    grid-template-columns: auto 1fr;
    margin-bottom: 2rem;

    @media screen and (min-width: 768px) {
        grid-template-rows: unset;
        grid-template-columns: repeat(${props => props.$divisions}, 1fr);
    }
`

const TimelineBar = styled.div`
    background-color: crimson;
    width: 2px;
    height: 100%;
    grid-row: 1 / span ${props => props.$divisions};
    grid-column: unset;

    @media screen and (min-width: 768px) {
        width: 100%;
        height: 2px;
        grid-row: unset;
        grid-column: 1 / span ${props => props.$divisions};
    }
`

const TimelineEntry = styled.div`
    position: relative;
    right: 3rem;
    display: grid;
    place-items: center;
    grid-template-columns: auto auto;

    & p {
        position: relative;
        right: 8px;
    }

    @media screen and (min-width: 768px) {
        position: static;
        grid-template-columns: unset;

        & p {
            position: static;
            margin: 0;
        }
    }
`

const TimelinePin = styled.div`
    position: relative;
    width: 1rem;
    height: 1rem;
    background-color: ${props => props.$isActive ? 'crimson' : 'white'};
    border: 0.1rem solid crimson;
    transform: rotate(45deg);

    @media screen and (min-width: 768px) {
        top: 0.5rem;
    }
`

const Timeline = ({ items }) => {
    return (
        <TimelineContainer $divisions={items.length}>
            {items.map((element, index) => {
                return (
                    <TimelineEntry key={index}>
                        <p>{element.title}</p>
                        <TimelinePin $isActive={element.active} />
                    </TimelineEntry>
                )
            })}
            <TimelineBar $divisions={items.length} />
        </TimelineContainer>
    )
}

export default Timeline