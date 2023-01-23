import { defineStore } from "../../lib/pinia";

const useHelloStore = defineStore('hello', {
    state: () =>　({
      name: 'hello',
    }),
    actions: {
      setName() {
        this.state.name = '名字变了'
      },
    }
});

export default useHelloStore;