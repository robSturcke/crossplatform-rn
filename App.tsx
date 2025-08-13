/**
 * Cross Platform React Native App
 * Runs on iOS, Android, and Web
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={[styles.container, isDarkMode ? styles.darkContainer : styles.lightContainer]}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.title, isDarkMode ? styles.darkText : styles.lightText]}>
            🚀 React Native
          </Text>
          <Text style={[styles.subtitle, isDarkMode ? styles.darkSubtext : styles.lightSubtext]}>
            Cross Platform App
          </Text>
        </View>

        {/* Feature Cards */}
        <View style={styles.cardsContainer}>
          <FeatureCard
            title="📱 Mobile Native"
            description="Runs natively on iOS and Android with full platform capabilities"
            isDarkMode={isDarkMode}
          />
          
          <FeatureCard
            title="🌐 Web Compatible"
            description="Same codebase runs in web browsers using react-native-web"
            isDarkMode={isDarkMode}
          />
          
          <FeatureCard
            title="🎨 StyleSheet Styling"
            description="Uses React Native StyleSheet for consistent styling across platforms"
            isDarkMode={isDarkMode}
          />
          
          <FeatureCard
            title="⚡ Metro Bundler"
            description="Fast development with Metro bundler and hot reloading"
            isDarkMode={isDarkMode}
          />
        </View>

        {/* Instructions */}
        <View style={styles.instructions}>
          <Text style={[styles.instructionsTitle, isDarkMode ? styles.darkText : styles.lightText]}>
            Get Started
          </Text>
          <View style={styles.instructionsList}>
            <Text style={[styles.instruction, isDarkMode ? styles.darkSubtext : styles.lightSubtext]}>
              • Edit App.tsx to modify this screen
            </Text>
            <Text style={[styles.instruction, isDarkMode ? styles.darkSubtext : styles.lightSubtext]}>
              • Use React Native StyleSheet for styling
            </Text>
            <Text style={[styles.instruction, isDarkMode ? styles.darkSubtext : styles.lightSubtext]}>
              • Run 'npm run web' for web development
            </Text>
            <Text style={[styles.instruction, isDarkMode ? styles.darkSubtext : styles.lightSubtext]}>
              • Run 'npm run ios' or 'npm run android' for mobile
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function FeatureCard({
  title,
  description,
  isDarkMode,
}: {
  title: string;
  description: string;
  isDarkMode: boolean;
}) {
  return (
    <View style={[styles.card, isDarkMode ? styles.darkCard : styles.lightCard]}>
      <Text style={[styles.cardTitle, isDarkMode ? styles.darkText : styles.lightText]}>
        {title}
      </Text>
      <Text style={[styles.cardDescription, isDarkMode ? styles.darkSubtext : styles.lightSubtext]}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lightContainer: {
    backgroundColor: '#f3f4f6',
  },
  darkContainer: {
    backgroundColor: '#111827',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
  },
  cardsContainer: {
    paddingHorizontal: 24,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  lightCard: {
    backgroundColor: '#ffffff',
  },
  darkCard: {
    backgroundColor: '#1f2937',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
  },
  instructions: {
    paddingHorizontal: 24,
    marginTop: 32,
    marginBottom: 24,
  },
  instructionsTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  instructionsList: {
    gap: 8,
  },
  instruction: {
    fontSize: 14,
    marginBottom: 4,
  },
  darkText: {
    color: '#ffffff',
  },
  lightText: {
    color: '#111827',
  },
  darkSubtext: {
    color: '#d1d5db',
  },
  lightSubtext: {
    color: '#6b7280',
  },
});

export default App;
