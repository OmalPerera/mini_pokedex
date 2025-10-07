import {images} from '@/assets/images'
import {GradientBackground} from '@/src/ui/components'
import {colors} from '@/src/ui/theme'
import {Image, StyleSheet, useWindowDimensions, View} from 'react-native'

export const CreatureCardBackface = () => {
  const {width: windowWidth} = useWindowDimensions()
  const imageSize = windowWidth * 0.4
  return (
    <View style={styles.container}>
      <GradientBackground colors={[colors.blue_100, colors.green_100]}>
        <View style={styles.content}>
          <Image
            source={images.pokemon_ball_card_back}
            style={{width: imageSize, height: imageSize}}
          />
        </View>
      </GradientBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
    borderWidth: 20,
    borderColor: colors.primary_white,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    flex: 1,
  },
})
