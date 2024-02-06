import styled from 'styled-components/native'

interface TitleProps {
    font: string; // Aqui você pode ajustar o tipo conforme necessário
}

export const Container = styled.View`
    flex: 1;
    background-color: #8A2BE2;
`
export const Title = styled.Text<TitleProps>`
    color: aliceblue;
    font-family: ${({ font }) => font};
`
export const ContainerCategory = styled.View`
    flex-direction: row;
    gap: 4px;
`
export const ContainerFlatList = styled.FlatList`
    
`