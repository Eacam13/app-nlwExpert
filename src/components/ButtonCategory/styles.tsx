import styled from "styled-components/native"

interface BorderProps {
    isSelected: boolean
}

export const ContainerButton = styled.Pressable<BorderProps>`
    background-color: aliceblue;
    padding-left: 10px;
    margin: 0 10px 0 10px;
    justify-content: center;
    border-radius: 10px;
    height: 40px;
    border-color: ${({ isSelected }) => isSelected ? '#e23e3e' : '#fff'};
    border-width: 2px;
`
export const TitleCategory = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #0e1111;
`