<!--
 * @Description: 树形数据转化练习
 * @Version: 0.1
 * @Autor: hwx
-->
<template>
  <h2>树形数据转化练习</h2>

</template>

<script setup>
import { reactive,ref } from "vue"

let areaTreeData = [
  {
    "id": "35060000",
    "areaName": "漳州市",
    "children": [
      {
        "id": "35062400",
        "areaName": "诏安县",
        "children": [
          {
            "id": "35062401",
            "areaName": "太平镇",
          },
          {
            "id": "35062402",
            "areaName": "金星乡",
          },
          {
            "id": "35062403",
            "areaName": "南诏镇",
          },
          {
            "id": "35062404",
            "areaName": "霞葛镇",
          }
        ],
        "leaf": false
      },
      {
        "id": "35062300",
        "areaName": "云霄县",
        "children": [
          {
            "id": "35062301",
            "areaName": "列屿镇",
          },
          {
            "id": "35062302",
            "areaName": "陈岱镇",
          },
          {
            "id": "35062303",
            "areaName": "云陵镇",
          },
          {
            "id": "35062304",
            "areaName": "火田镇",
          }
        ],
      }
    ],
  }
]
let areaArrData = [
  {
    "id": "35060000",
    "parentId": "0",
    "areaName": "漳州市"
  },
  {
    "id": "35062400",
    "parentId": "35060000",
    "areaName": "诏安县"
  },
  {
    "id": "35062401",
    "parentId": "35062400",
    "areaName": "太平镇"
  },
  {
    "id": "35062402",
    "parentId": "35062400",
    "areaName": "金星乡"
  },
  {
    "id": "35062403",
    "parentId": "35062400",
    "areaName": "南诏镇"
  },
  {
    "id": "35062404",
    "parentId": "35062400",
    "areaName": "霞葛镇"
  },
  {
    "id": "35062300",
    "parentId": "35060000",
    "areaName": "云霄县"
  },
  {
    "id": "35062301",
    "parentId": "35062300",
    "areaName": "列屿镇"
  },
  {
    "id": "35062302",
    "parentId": "35062300",
    "areaName": "陈岱镇"
  },
  {
    "id": "35062303",
    "parentId": "35062300",
    "areaName": "云陵镇"
  },
  {
    "id": "35062304",
    "parentId": "35062300",
    "areaName": "火田镇"
  }
]

// 使用递归函数的调用来实现具体的效果
const listToTree = (data,parentId) => {
  let tree = []
  let temp = null
  for(let i=0; i<data.length; i++) {
    if(data[i].parentId === parentId) {
      const obj = data[i]
      temp = listToTree(data, obj.id)
      if (temp.length > 0) {
        obj.children = temp
      }
      tree.push(obj);
    }
  }
  return tree;
}

console.log(areaArrData,'areaArrData');
const newData = listToTree(areaArrData,'35060000')
console.log(newData,'newData')



</script>

<style lang="scss" scoped>

</style>
