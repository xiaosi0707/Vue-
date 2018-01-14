<template>
  <div>
    <app-select main-btn-val="查询" :list="list1"></app-select>
    <app-select main-btn-val="搜索" :list="list2"></app-select>
  </div>
</template>

<script>
import appSelect from './select'
let data1 = [
  {
    'name': '八戒',
    'like': '泡妞'
  },
  {
    'name': '悟空',
    'like': '打架'
  },
  {
    'name': '沙和尚',
    'like': '叫师傅'
  }
]
let data2 = [
  {
    'name': '熊大',
    'like': '靠谱'
  },
  {
    'name': '熊二',
    'like': '懒惰'
  },
  {
    'name': '光头强',
    'like': '孝顺'
  }
]
export default {
  components: {
    appSelect
  },
  data () {
    return {
      list1: data1,
      list2: data2
    }
  }
}
</script>

<style scoped>

</style>
