import React, { FC, memo } from 'react'
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import Animated from 'react-native-reanimated'

interface Props {
  pokemonImage?: ImageSourcePropType;
  name?: string;
  type?: string;
}

export const CreatureBasicInfo: FC<Props> = memo(
  ({ pokemonImage, name, type }) => {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            animationName: {
              '50%': { transform: [{ rotate: '10deg' }] },
            },
            animationIterationCount: 2,
            animationDuration: '300ms',
            animationDelay: '1000ms',
          }}
        >
          <Image source={pokemonImage} style={styles.imagePlaceholder} />
        </Animated.View>
        <Text style={styles.pokemonName}>{name}</Text>
        <Text style={styles.pokemonType}>{type}</Text>
      </View>
    )
  }
)

CreatureBasicInfo.displayName = 'CreatureBasicInfo'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  imagePlaceholder: {
    height: 220,
    resizeMode: 'contain',
  },
  pokemonName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 8,
  },
  pokemonType: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30,
  },
})

export default CreatureBasicInfo
