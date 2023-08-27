<template>
  <q-page class="column q-ma-md">



    <div class="q-gutter-md">
      <div class="q-col-xs-12 q-col-md-6 q-mb-md" style="height: 100px;">
        <div class="entry q-card cursor-pointer" >
          <main-component class="col bg-white "/>
        </div>
      </div>
      <div class="q-col-xs-12 q-col-md-6 q-mb-md">
        <div class="details q-card">
          <service-communicator class="col"/>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import MainComponent from 'components/MainComponent.vue';
import ServiceCommunicator from 'components/ServiceCommunicator.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'IndexPage',
  components: { MainComponent, ServiceCommunicator },
  setup () {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });
    return { todos, meta };
  }
});
</script>
