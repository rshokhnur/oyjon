import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { colors, spacing } from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oyjon</Text>
      <Text style={styles.subtitle}>Har bir onaga yordamchi.</Text>
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.primary,
  },
  subtitle: {
    marginTop: spacing.sm,
    fontSize: 16,
    color: colors.textMuted,
  },
});
