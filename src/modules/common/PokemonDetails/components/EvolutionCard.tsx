import {colors} from '@/src/ui/theme'
import {Ionicons} from '@expo/vector-icons'
import {FC, memo} from 'react'
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native'

interface Props {
  index?: number
  name?: string
  image?: ImageSourcePropType
  condition?: string
}

export const EvolutionCard: FC<Props> = memo(
  ({index = 0, name, image, condition}) => {
    const {width} = useWindowDimensions()
    const cardWidth = width / 3.5

    return (
      <View style={styles.evolutionItem}>
        {index > 0 ? (
          <Ionicons
            name="caret-forward-outline"
            size={20}
            style={styles.evolutionArrow}
            color={colors.blue_900}
          />
        ) : (
          <View style={styles.evolutionArrow} />
        )}
        <View style={[styles.evolutionCard, {maxWidth: cardWidth}]}>
          <Image source={image} style={styles.evolutionImage} />
          <Text style={styles.evolutionName} numberOfLines={1}>
            {name}
          </Text>
          <Text style={styles.evolutionCondition} numberOfLines={2}>
            {condition}
          </Text>
        </View>
      </View>
    )
  },
)

EvolutionCard.displayName = 'EvolutionCard_details'

const styles = StyleSheet.create({
  evolutionItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  evolutionArrow: {
    marginHorizontal: 8,
  },
  evolutionCard: {
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: colors.primary_white,
    paddingHorizontal: 10,
    paddingVertical: 16,
    borderRadius: 16,
  },
  evolutionImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  evolutionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.grey_800,
    marginTop: 4,
  },
  evolutionCondition: {
    fontSize: 12,
    color: colors.grey_600,
    textAlign: 'center',
  },
})
