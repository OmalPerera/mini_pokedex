import {images} from '@/assets/images'
import {RootStackScreenProps} from '@/src/navigation'
import {GradientBackground} from '@/src/ui/components'
import {colors} from '@/src/ui/theme'
import {Ionicons} from '@expo/vector-icons'
import * as Haptics from 'expo-haptics'
import React, {FC} from 'react'
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {EvolutionSection, OverviewSection} from './components'

export const PokemonDetailScreen: FC<
  RootStackScreenProps<'PokemonDetailScreen'>
> = ({navigation}) => {
  const {bottom} = useSafeAreaInsets()

  const handleClose = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    navigation.goBack()
  }

  return (
    <GradientBackground style={{paddingBottom: bottom}}>
      <TouchableOpacity
        style={styles.closeButton}
        hitSlop={24}
        onPress={handleClose}>
        <Ionicons name="close-circle" size={40} color={colors.blue_900} />
      </TouchableOpacity>
      <ScrollView contentContainerStyle={styles.content}>
        <OverviewSection
          name="Pikachu"
          type="Electric"
          isFavorite={true}
          about="Pikachu is friendly, yellow Pokémon that can stores electricity in its red cheek pouches!"
        />
        <EvolutionSection
          title="Evolution Chain"
          evolutionChain={[
            {
              name: 'Pichu',
              image: images.pikachu,
              condition: 'High Friendship',
            },
            {
              name: 'Pikachu',
              image: images.pikachu,
              condition: 'Use Thunder Stone',
            },
            {name: 'Raichu', image: images.pikachu, condition: ''},
            {name: 'Raichu', image: images.pikachu, condition: ''},
          ]}
        />
      </ScrollView>
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
})
