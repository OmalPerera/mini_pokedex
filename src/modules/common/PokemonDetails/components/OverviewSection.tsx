import {AnimatedFavoriteIcon} from '@/src/ui/components'
import {borderRadii, colors, spacing} from '@/src/ui/theme'
import {setOpacity} from '@/src/utils'
import {FC, memo} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

const FAVORITE_ICON_SIZE = 40
interface Props {
  name?: string
  image?: string
  type?: string
  isFavorite?: boolean
  about?: string
  onPressFavorite?: () => void
}
export const OverviewSection: FC<Props> = memo(
  ({name, image, type, isFavorite, about, onPressFavorite}) => {
    return (
      <>
        <Image source={{uri: image}} style={styles.pokemonImage} />
        <View style={styles.pokemonNameContainer}>
          <Text style={styles.pokemonName}>{name}</Text>
          <AnimatedFavoriteIcon
            isFavorite={isFavorite}
            onPressFavorite={onPressFavorite}
            size={FAVORITE_ICON_SIZE}
          />
        </View>
        <Text style={styles.pokemonType}>{type}</Text>
        {about && (
          <View style={styles.aboutSection}>
            <Text style={styles.sectionTitle}>About</Text>
            <Text style={styles.aboutText}>{about}</Text>
          </View>
        )}
      </>
    )
  },
)

OverviewSection.displayName = 'OverviewSection_details'

const styles = StyleSheet.create({
  pokemonImage: {
    height: 200,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginTop: spacing.s32,
  },
  pokemonName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.blue_900,
  },
  pokemonNameContainer: {
    flexDirection: 'row',
    gap: spacing.s8,
    alignItems: 'center',
    marginTop: spacing.s8,
    marginEnd: -FAVORITE_ICON_SIZE,
  },
  pokemonType: {
    fontSize: 18,
    color: colors.grey_800,
    marginTop: spacing.s4,
  },
  aboutSection: {
    alignSelf: 'stretch',
    backgroundColor: setOpacity(colors.primary_white)(0.35),
    borderRadius: borderRadii.r16,
    padding: spacing.s16,
    marginTop: spacing.s20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.blue_900,
    marginBottom: spacing.s8,
  },
  aboutText: {
    fontSize: 16,
    color: colors.blue_900,
    lineHeight: 24,
  },
})
