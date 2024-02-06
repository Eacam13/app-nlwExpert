import styled from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    border-bottom-width: 2px;
    border-bottom-color: aliceblue;
    padding-bottom: 15px;
    margin: 10px;
`
export const ContainerTitle = styled.View`
    flex: 1;
`
export const ImageLogo = styled.Image`
    width: 150px;
    height: 20px;
`
export const TitleText = styled.Text`
    font-size: 24px;
    color: aliceblue;
`
export const ContainerIcon = styled.View`
    background-color: #ADFF2F;
    width: 18px;
    height: 18px;
    border-radius: 150px;
    align-items: center;
    justify-content: center;
    margin: -12px 14px;
    position: absolute;
`
export const IconText = styled.Text`
    font-weight: bold;
    color: #000000;
    font-size: 16px;
`
export const ButtonShopping = styled.TouchableOpacity`
    position: relative;
    opacity: 0.8;
`