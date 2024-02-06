import React from 'react'
import { View, Text, ListRenderItem } from 'react-native'
import { Container, ContainerCategory, Title, ContainerFlatList} from './styles' 
import { useFonts, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold} from '@expo-google-fonts/inter'
import { Loading } from '../components/Loading/loading' 
import { Header } from '../components/Header' 
import { ButtonCategory } from '../components/ButtonCategory' 
import { CATEGORIES } from '../utils/data/products'

export default function Home() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_500Medium, 
    Inter_600SemiBold, 
    Inter_700Bold
  })

  if(!fontsLoaded) {
    return <Loading />
  }

  const renderItem: ListRenderItem<string> = ({ item }) => (
    <ButtonCategory title={item} isSelected={false} />
  )


  return (
    <Container>
        <Header title= "Faça seu pedido" cartItens={4}/>
        
        <ContainerFlatList 
          data={CATEGORIES} 
          keyExtractor={(item) => item}
          renderItem={renderItem}   
        />
    </Container>
  )
}