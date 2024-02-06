import React from 'react'
import { Feather } from '@expo/vector-icons'
import { Container, ImageLogo, ContainerTitle, TitleText, ContainerIcon, IconText, ButtonShopping } from './styles'

type HeaderProps = {
    title: string,
    cartItens?: number
}

export function Header({ title, cartItens = 0 }: HeaderProps) {
    return (
        <Container>
            <ContainerTitle>
                <ImageLogo source={require('../../assets/logo.png')} />
                <TitleText>{title}</TitleText>
            </ContainerTitle>
            {cartItens > 0 &&
                <ButtonShopping>
                    <ContainerIcon>
                        <IconText>{cartItens}</IconText>
                    </ContainerIcon>
                    <Feather name="shopping-bag" size={30} color="#FFff" />
                </ButtonShopping>
            }
        </Container>
    )
}