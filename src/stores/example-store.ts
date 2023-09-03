import { defineStore } from 'pinia';


export const useSelectedOption = defineStore('useSelectedOption', {
  state: () => ({
    useSelectedOption: '',
  }),

  getters: {
    getSelectedOption(): string {
      return this.useSelectedOption;
    }
  },

  actions: {
    setSelectedOption(option: string)  {
        this.useSelectedOption = option;
    }
  }
});

export const useSelectedServiceOption = defineStore('useSelectedServiceOption', {
  state: () => ({
    useSelectedServiceOption: '',
  }),

  getters: {
    getSelectedServiceOption(): string {
      console.log(this.useSelectedServiceOption)
      return this.useSelectedServiceOption;
    }
  },

  actions: {
    setSelectedServiceOption(option: string)  {
      this.useSelectedServiceOption = option;
    }
  }
});
