import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Placeholder entry. Milestone 1 (see CLAUDE.md) replaces this with expo-router under app/ and code under src/.
export default function App() {
  return (
    <View style={styles.container}>
      <Text>oyjon</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
