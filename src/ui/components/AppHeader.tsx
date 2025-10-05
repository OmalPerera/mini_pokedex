import { images } from '@/assets/images'
import React, { FC } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface AppHeaderProps {
  onBackPress?: () => void;
}

export const AppHeader: FC<AppHeaderProps> = ({ onBackPress }) => {
  const { top } = useSafeAreaInsets()

  return (
    <View style={[styles.container, { marginTop: top }]}>
      <View style={styles.startContent}>
        {onBackPress && (
          <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
            <Text style={styles.backButtonText}>{'<'}</Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.centerContent}>
        <Image source={images.pokemon_logo} style={styles.logo} />
      </View>
      <View style={styles.endContent} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  startContent: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerContent: {
    flex: 1,
    alignItems: 'center',
  },
  endContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  logo: {
    height: 48,
    resizeMode: 'contain',
  },
})
