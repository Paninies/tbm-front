<template>
  <div class="q-pa-md">


    <q-page-container>
      <q-page>
        <p> Selected service: {{ selectedOption }}</p>
        <p> Selected service: {{ selectedService }}</p>
        <div class="q-gutter-md">
          <div
            class="entry q-card q-mb-md cursor-pointer"
            v-for="entry in sortedEntries"
            :key="entry.id"

          >
            <q-card-section>
              <h4>{{ entry.service }} - {{ entry.callType }}</h4>
              <pre>{{ entry.request }}</pre>
              <pre>{{ entry.response }}</pre>
            </q-card-section>
          </div>
        </div>
        <div class="details q-card" v-if="selectedEntry">
          <q-card-section>
            <h3>Details</h3>
            <pre>{{ selectedEntry.request }}</pre>
            <pre>{{ selectedEntry.response }}</pre>
          </q-card-section>
        </div>
      </q-page>
    </q-page-container>
  </div>
</template>

<script lang="ts">
import {computed, ref} from "vue";
import {useSelectedOption, useSelectedServiceOption} from "stores/example-store";

export default {
  data() {
    return {
      selectedEntry: null,
      requestResponseList: [
        {
          id: 1,
          service: 'Service A',
          callType: 'Kafka',
          request: 'Request A for Kafka',
          response: 'Response A for Kafka'
        },
        {
          id: 2,
          service: 'Service B',
          callType: 'Rest',
          request: 'Request B for Rest',
          response: 'Response B for Rest'
        },
        // Add more entries...
      ]
    };
  },

  setup() {
    const selectedOptionStore = useSelectedOption();
    const selectedServiceOptionStore = useSelectedServiceOption();

    const selectedService = ref(selectedServiceOptionStore.getSelectedServiceOption);
    const selectedOption = computed(() => selectedOptionStore.getSelectedOption);


    const serviceOptions = ref( ['Service A', 'Service B', 'Service C'] );

    return {
      options: ["Rest", "Kafka"],
      selectedOption,
      serviceServiceOptions: serviceOptions,
      selectedService,

    };
  },

  computed: {
    sortedEntries() {
      return this.requestResponseList.slice().sort((a, b) => {
        if (a.service !== b.service) {
          return a.service.localeCompare(b.service);
        }
        return a.callType.localeCompare(b.callType);
      });
    },
  },

  methods: {
    getSelectedOption() {
      return this.selectedOption;
    },
  }
};
</script>

<style scoped>

.cursor-pointer {
  cursor: pointer;
}
</style>
