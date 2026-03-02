import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Tuile } from './components/Tuile';
import { Algorithm19 } from './utils/Algorithm19';

export default function App() {

const mesTuiles = Algorithm19()
  
  return (
    <View style={styles.container}>
     
        <Tuile />
    
    

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
