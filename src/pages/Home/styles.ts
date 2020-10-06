import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export const Content = styled.div`
    height: calc(100% - 62px);
    background: white;
    padding: min(60px, 10%);

    h1{
        padding: 16px;
    }
`
export const Cards = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    gap: 5%
`
export const Card = styled.div`
    padding: 16px 8px;
    box-shadow: 0 0 3px -2px black;
    border-radius: 4px;
    background: #eee;
`