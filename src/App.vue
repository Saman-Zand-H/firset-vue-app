<template>
  <div class="container-fluid mt-4">
    <div class="border border-1 rounded rounded-1 px-4">
      <TaskHeader 
                  btn_text="New Task" 
                  @open-new-task-modal="openModal"
                  :show_button="showButton"
                 ></TaskHeader>
      <router-view></router-view>
      <SiteFooter />
    </div>
  </div>
</template>

<script>
  import TaskHeader from './components/Header.vue'
  import SiteFooter from './components/Footer.vue'
  import $ from 'jquery'

  export default {
    name: 'App',
    components: {
      TaskHeader,
      SiteFooter
    },
    methods: {
      openModal() {
        $("#openModalBtn").click()
      },
    },
    computed: {
      showButton() {
        return this.$route.path === "/" ? true : false
      }
    }
}
</script>
