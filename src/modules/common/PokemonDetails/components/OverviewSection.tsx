import {FavoriteIcon, Pokeball} from '@/assets/svg'
import {AnimatedFavoriteIcon} from '@/src/ui/components'
import {colors} from '@/src/ui/theme'
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
    marginTop: 32,
  },
  pokemonName: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.blue_900,
  },
  pokemonNameContainer: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    marginTop: 10,
    marginEnd: -FAVORITE_ICON_SIZE,
  },
  pokemonType: {
    fontSize: 18,
    color: colors.grey_800,
    marginTop: 5,
  },
  badgeContainer: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 20,
  },
  badge: {
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  electricBadge: {
    backgroundColor: '#F7D02C',
  },
  starBadge: {
    backgroundColor: '#B6A136',
  },
  aboutSection: {
    alignSelf: 'stretch',
    backgroundColor: setOpacity(colors.primary_white)(0.35),
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.blue_900,
    marginBottom: 10,
  },
  aboutText: {
    fontSize: 16,
    color: colors.blue_900,
    lineHeight: 24,
  },
})
