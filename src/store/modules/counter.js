import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 1,
  }),
  actions: {
    accumulate() {
      this.count++;
    },
  },
});

export const useCar=defineStore("test",{ 
	state: () =>{
		return  ({
			msg:"nba历史级别",
			name:"詹姆斯",
			age:38
			}) //为了避免出错，返回的值用()包起来
	} 
});
