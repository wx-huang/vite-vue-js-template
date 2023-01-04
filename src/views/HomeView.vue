<template>
  <t-button size="large" theme="danger" block>强警告按钮</t-button>

  <t-radio-group :default-value="radio" class="radio-group-demo">
    <t-radio name="radio" value="1" label="单选"></t-radio>
    <t-radio name="radio" value="2" label="单选"></t-radio>
    <t-radio name="radio" value="3" label="单选单选单选单选单选单选单选单选单选单选单选单选单选单选单选单选单选单选"></t-radio>
  </t-radio-group>
</template>

<script setup>
import { ref } from 'vue'

import User from '@/api/modules/user';

const radio = ref('3');


const login = async () => {
  const res = await User.login('username', 'password');
  console.log(res,'res');
}

login()



</script>

<style lang="scss" scoped>

</style>
