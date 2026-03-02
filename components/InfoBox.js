import {TouchableOpacity, View, Text } from 'react-native'

export const InfoBox = ({text, value, onPress}) => {

    const Container = onPress ? TouchableOpacity : View
    return (
      <Container onPress={onPress}>
        <Text>{text}</Text>
        <Text>{value}</Text>
      </Container>
    );
}