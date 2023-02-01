import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [nome, setNome] = useState("React Native");

  return (
    <View>
      <Text>{nome}</Text>
      <TouchableOpacity><Text>CLIQUE AQUI</Text></TouchableOpacity>
    </View>
      
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent='center',
    alignItems: 'center' 
}
)





