import {FavoriteIcon, Pokeball} from '@/assets/svg'
import {colors} from '@/src/ui/theme'
import {setOpacity} from '@/src/utils'
import {FC, memo} from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

interface Props {
  name?: string
  image?: string
  type?: string
  isFavorite?: boolean
  about?: string
}
export const OverviewSection: FC<Props> = memo(
  ({name, image, type, isFavorite, about}) => {
    return (
      <>
        <Image source={{uri: image}} style={styles.pokemonImage} />
        <Text style={styles.pokemonName}>{name}</Text>
        <Text style={styles.pokemonType}>{type}</Text>
        <View style={styles.badgeContainer}>
          <View style={[styles.badge, styles.electricBadge]}>
            {isFavorite && <FavoriteIcon size={20} />}
          </View>
          <View style={[styles.badge, styles.starBadge]}>
            <Pokeball size={20} />
          </View>
        </View>
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
    marginTop: 10,
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
    borderRadius: 15,
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
