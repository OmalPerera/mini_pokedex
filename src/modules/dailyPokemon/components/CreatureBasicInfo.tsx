import {colors, spacing} from '@/src/ui/theme'
import React, {FC, memo} from 'react'
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native'
import Animated, {ZoomIn} from 'react-native-reanimated'

interface Props {
  pokemonImage?: string
  name?: string
  type?: string
  onPress?: () => void
}

export const CreatureBasicInfo: FC<Props> = memo(
  ({pokemonImage, name, type, onPress}) => {
    const {height} = useWindowDimensions()
    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={onPress}>
        <Animated.View entering={ZoomIn.duration(500)}>
          <Image
            source={{uri: pokemonImage}}
            style={[styles.imagePlaceholder, {height: height * 0.275}]}
          />
        </Animated.View>
        <Text style={styles.pokemonName}>{name}</Text>
        <Text style={styles.pokemonType}>{type}</Text>
      </TouchableOpacity>
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
    marginTop: spacing.s12,
    marginBottom: spacing.s8,
    color: colors.blue_900,
  },
  pokemonType: {
    fontSize: 16,
    color: colors.grey_800,
    marginBottom: spacing.s20,
  },
})
