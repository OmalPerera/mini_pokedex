import {RootStackScreenProps} from '@/src/navigation'
import {GradientBackground} from '@/src/ui/components'
import {colors} from '@/src/ui/theme'
import {Ionicons} from '@expo/vector-icons'
import * as Haptics from 'expo-haptics'
import React, {FC, useMemo} from 'react'
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native'
import {
  CharacteristicsSection,
  EvolutionSection,
  OverviewSection,
  StatsSection,
} from './components'
import {formatPokemonForUI} from './helper'

export const PokemonDetailScreen: FC<
  RootStackScreenProps<'PokemonDetailScreen'>
> = ({navigation, route}) => {
  const {id, details} = route.params

  const handleClose = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
    navigation.goBack()
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _details = useMemo(() => formatPokemonForUI(details), [id])

  return (
    <GradientBackground>
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
        <CharacteristicsSection
          height={_details.height}
          weight={_details.weight}
        />
        <EvolutionSection
          title="Evolution Chain"
          evolutionChain={_details.evolutionChain}
        />
        <StatsSection title="Stats" stats={_details.stats} />
      </ScrollView>
    </GradientBackground>
  )
}

const styles = StyleSheet.create({
  content: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 64,
  },
  closeButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    zIndex: 1,
  },
})
