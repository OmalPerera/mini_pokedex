import {colors} from '@/src/ui/theme'
import React, {FC, memo} from 'react'
import {Image, StyleSheet, Text, useWindowDimensions, View} from 'react-native'
import Animated, {ZoomIn} from 'react-native-reanimated'

interface Props {
  pokemonImage?: string
  name?: string
  type?: string
}

export const CreatureBasicInfo: FC<Props> = memo(
  ({pokemonImage, name, type}) => {
    const {height} = useWindowDimensions()
    return (
      <View style={styles.container}>
        <Animated.View entering={ZoomIn.duration(500)}>
          <Image
            source={{uri: pokemonImage}}
            style={[styles.imagePlaceholder, {height: height * 0.275}]}
          />
        </Animated.View>
        <Text style={styles.pokemonName}>{name}</Text>
        <Text style={styles.pokemonType}>{type}</Text>
      </View>
    )
  },
)

CreatureBasicInfo.displayName = 'CreatureBasicInfo'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imagePlaceholder: {
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  pokemonName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 8,
    color: colors.blue_900,
  },
  pokemonType: {
    fontSize: 16,
    color: colors.grey_800,
    marginBottom: 20,
  },
})

export default CreatureBasicInfo
