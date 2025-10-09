import {StatsFragment} from '@/src/api/queries/pokemon.generated'
import {ProgressBar} from '@/src/ui/components'
import {borderRadii, colors, spacing} from '@/src/ui/theme'
import {setOpacity} from '@/src/utils'
import {StyleSheet, Text, View} from 'react-native'

interface Props {
  title?: string
  stats: StatsFragment[]
}
export const StatsSection = ({stats, title = ''}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {stats.map(stat => (
        <View key={stat.stat?.statnames[0].name} style={styles.section}>
          <View style={styles.statName}>
            <Text style={styles.value} numberOfLines={1}>
              {stat.stat?.statnames[0].name}
            </Text>
          </View>
          <View style={styles.progressBar}>
            <ProgressBar
              progress={stat.base_stat / 255}
              height={8}
              color={colors.blue_900}
              trackColor={colors.grey_200}
            />
          </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    backgroundColor: setOpacity(colors.primary_white)(0.35),
    borderRadius: borderRadii.r16,
    paddingVertical: spacing.s12,
    marginTop: spacing.s20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.blue_900,
    marginBottom: spacing.s16,
    marginHorizontal: spacing.s16,
  },
  section: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.s16,
    paddingVertical: spacing.s4,
  },
  progressBar: {
    flex: 0.6,
  },
  statName: {
    flex: 0.4,
    marginEnd: spacing.s16,
  },
  value: {
    textAlign: 'right',
    fontSize: 16,
    color: colors.blue_900,
  },
})
