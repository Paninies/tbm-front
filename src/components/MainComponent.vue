<template>
  <div>
    <q-page-container>
      <q-page >
        <div class="q-gutter-md row items-start">
          <div class="col">
            <q-select v-model="selectedOption" :options="options" label="Choose an option"  />
          </div>
          <div class="col">
            <q-select
              v-model="selectedService"
              :options="filteredServiceOptions"
              label="Select a service"
              filter
              clearable

            />
          </div>
          <div class="col">
            <q-input v-model="startDateTime" label="Start Date and Time" type="datetime-local" />
          </div>
          <div class="col">
            <q-input v-model="endDateTime" label="End Date and Time" type="datetime-local"  />
          </div>
          <div class="col-auto">
            <q-btn label="Search" color="black" @click="performSearch" />
          </div>
        </div>
      </q-page>
    </q-page-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedOption: '',
      options: ['Rest', 'Kafka'],
      selectedService: '',
      serviceOptions: ['Service A', 'Service B', 'Service C'],
      findValue: '',
      startDateTime: '',
      endDateTime: ''
    };
  },
  computed: {
    filteredServiceOptions() {
      return this.serviceOptions.filter(option => option.toLowerCase().includes(this.selectedService.toLowerCase()));
    }
  },
  methods: {
    performSearch() {
      // Implement your search logic here
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
