import React from 'react'
import { PressableProps } from 'react-native'
import { ContainerButton, TitleCategory } from './styles'



  type CategoryProps = PressableProps & {
    title: string;
    isSelected?: boolean;
  }

export function ButtonCategory({title, isSelected=false, ...rest}: CategoryProps) {
    return (
        <ContainerButton isSelected={isSelected} {...rest}>
            <TitleCategory>{title}</TitleCategory>
        </ContainerButton>
    )
}