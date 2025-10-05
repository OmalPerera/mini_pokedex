import {RootStackScreenProps} from '@/src/navigation'
import {GradientBackground} from '@/src/ui/components'
import {colors} from '@/src/ui/theme'
import {Ionicons} from '@expo/vector-icons'
import * as Haptics from 'expo-haptics'
import React, {FC, useMemo} from 'react'
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import {useSafeAreaInsets} from 'react-native-safe-area-context'
import {EvolutionSection, OverviewSection} from './components'
import {formatPokemonForUI} from './helper'

export const PokemonDetailScreen: FC<
  RootStackScreenProps<'PokemonDetailScreen'>
> = ({navigation, route}) => {
  const {bottom} = useSafeAreaInsets()
  const {id, details} = route.params

  const handleClose = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    navigation.goBack()
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _details = useMemo(() => formatPokemonForUI(details), [id])

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
          name={_details.name}
          image={_details.image}
          type={_details.type}
          isFavorite={true}
          about={_details.about}
        />
        <EvolutionSection
          title="Evolution Chain"
          evolutionChain={_details.evolutionChain}
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
