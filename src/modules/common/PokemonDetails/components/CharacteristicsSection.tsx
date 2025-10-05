import {colors} from '@/src/ui/theme'
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
    borderRadius: 16,
    paddingVertical: 16,
    marginTop: 20,
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
    marginBottom: 12,
    marginHorizontal: 16,
  },
  value: {
    fontSize: 16,
    color: colors.blue_900,
  },
})
