<template>
  <div class="q-pa-md">
    <q-page-container>
      <q-page>
        <div class="q-gutter-md">
          <div
            class="entry q-card q-mb-md cursor-pointer"
            v-for="entry in sortedEntries"
            :key="entry.id"
            @click="selectedEntry = entry"
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

<script>
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
  computed: {
    sortedEntries() {
      return this.requestResponseList.slice().sort((a, b) => {
        if (a.service !== b.service) {
          return a.service.localeCompare(b.service);
        }
        return a.callType.localeCompare(b.callType);
      });
    }
  }
};
</script>

<style scoped>

.cursor-pointer {
  cursor: pointer;
}
</style>
