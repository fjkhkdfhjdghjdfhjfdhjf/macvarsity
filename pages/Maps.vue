<template>
  <div class="home" style="height:100%">
    <div class="columns"  style="height:100%">
      <div class="column">
        <MapsComponent />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MapsComponent from '@/components/Maps/MapsComponent.vue'

export default {
  name: 'Home',
  components: {
    MapsComponent
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
