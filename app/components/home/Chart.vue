<script setup lang="ts" >
type RevenueDataItem = {
  month: string
  All: number
  Completed: number
}

const RevenueData: RevenueDataItem[] = [
  { month: 'January', All: 186, Completed: 80 },
  { month: 'February', All: 305, Completed: 200 },
  { month: 'March', All: 237, Completed: 120 },
  { month: 'April', All: 73, Completed: 190 },
  { month: 'May', All: 209, Completed: 130 },
  { month: 'June', All: 214, Completed: 140 },
]
const RevenueCategoriesMultple = {
  Completed: { name: 'Completed', color: '#22c55e' },
  All: { name: 'All', color: '#E5E7EB' },
  
}
const xFormatter = (i: number): string => `${RevenueData[i]?.month}`
const yFormatter = (tick: number, _i?: number, _ticks?: number[]) =>
  tick.toString()
</script>

<template>
  <BarChart
    :data="RevenueData"
    :stacked="true"
    :height="300"
    :categories="RevenueCategoriesMultple"
    :y-axis="['All', 'Completed']"
    :group-padding="0"
    :bar-padding="0.2"
    :x-num-ticks="6"
    :radius="4"
    :x-formatter="xFormatter"
    :legend-position="LegendPosition.TopRight"
    :y-formatter="yFormatter"
    :hide-legend="false"
    :y-grid-line="true"
  />
</template>
