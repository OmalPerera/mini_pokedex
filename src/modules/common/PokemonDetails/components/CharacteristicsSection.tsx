import {borderRadii, colors, spacing} from '@/src/ui/theme'
import {setOpacity} from '@/src/utils'
import {StyleSheet, Text, View} from 'react-native'

interface Props {
  height: number
  weight: number
}
export const CharacteristicsSection = ({height, weight}: Props) => {
  return (
    <View style={styles.container}>
      <SingleSection title="Height" value={height * 10} unit="cm" />
      <View style={styles.divider} />
      <SingleSection title="Weight" value={weight / 10} unit="kg" />
    </View>
  )
}

const SingleSection = ({
  title,
  value,
  unit = '',
}: {
  title: string
  value: number
  unit?: string
}) => {
  return (
    <View style={styles.section}>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.value} numberOfLines={1}>
        {`${value} ${unit}`}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor: setOpacity(colors.primary_white)(0.35),
    borderRadius: borderRadii.r16,
    paddingVertical: spacing.s16,
    marginTop: spacing.s20,
  },
  section: {
    alignItems: 'center',
  },
  divider: {
    height: '100%',
    width: 1,
    backgroundColor: colors.grey_500,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.blue_900,
    marginBottom: spacing.s12,
    marginHorizontal: spacing.s16,
  },
  value: {
    fontSize: 16,
    color: colors.blue_900,
  },
})
