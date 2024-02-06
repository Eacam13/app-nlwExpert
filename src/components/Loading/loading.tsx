import { View, ActivityIndicator } from "react-native"
import { Container, LoadingIndicator } from "./loadind"

export function Loading(){
    return(
        <Container>
            <LoadingIndicator />
        </Container>
    )
}