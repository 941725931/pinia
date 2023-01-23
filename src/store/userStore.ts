import { defineStore } from "../../lib/pinia";

const useUserStore = defineStore('user', {
    state: () =>　({
      name: 'chenfaduo',
      age: 20,
      info: {
        work: 'play code'
      }
    }),
    getters: {
        getAge: (state) => {
            return (beishu: number) => state.age * beishu
        },
        getUserNow(state) {
            return this.getName + 'zai' + state.info.work;
        },
        getName: (state) => state.name,
    },
    actions: {
      async setwork(work: number) {
        this.state.info.work = work
      },
      setage() {
        this.state.age *= 2
      }
    }
});

export default useUserStore;