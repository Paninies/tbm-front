<template>
  <div>
    <q-page-container>
      <q-page>
        <div class="q-gutter-md row items-start">
          <div class="col">
            <q-select v-model="selectedOption" :options="options" label="Choose an option" @update:modelValue="updateSelectedOption" />
          </div>
          <div class="col">
            <q-select
              v-model="selectedService"
              :options="filteredServiceOptions()"
              label="Select a service"
              filter

            />
          </div>
          <div class="col">
            <q-input v-model="startDateTime" label="Start Date and Time" type="datetime-local" />
          </div>
          <div class="col">
            <q-input v-model="endDateTime" label="End Date and Time" type="datetime-local" />
          </div>
          <div class="col-auto">
            <q-btn label="Search" color="black" @click="performSearch" />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </div>
</template>

<script lang="ts">
import { useSelectedOption } from "stores/example-store";
import {ref} from "vue";

export default {
  data() {
    return {
      findValue: '',
      startDateTime: '',
      endDateTime: ''
    };
  },

  setup() {
    const selectedOptionStore = useSelectedOption();
    const selectedOption = ref( selectedOptionStore.getSelectedOption);
    const selectedService = ref("" );
    const serviceOptions = ref( ['Service A', 'Service B', 'Service C'] );


    return {
      options: ["Rest", "Kafka"],
      selectedOption,
      serviceServiceOptions: serviceOptions,
      selectedService,
      selectedOptionStore
    };
  },

  computed: {

  },
  methods: {
    updateSelectedOption(value: string) {
      this.selectedOptionStore.setSelectedOption(value);
    },

    filteredServiceOptions() {
      return this.serviceServiceOptions.filter((option: string) => {
        return option.toLowerCase().indexOf(this.selectedService.toLowerCase()) !== -1
      })
    },

    performSearch() {
      console.log("performSearch: " + this.selectedOption.getSelectedOption)
      console.log("performSearch: " + this.selectedService)
      console.log("performSearch: " + this.startDateTime)
      console.log("performSearch: " + this.endDateTime)
    }
  }
};
</script>

<style scoped>
.q-page {
  color: white;
  min-height: 100vh;
}
</style>
