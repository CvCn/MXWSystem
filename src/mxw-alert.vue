<template>
<div>
    <div v-for="(item, index) in alert" :key="index">
        <div :class="'alert alert-'+ item.level +' col-sm-2 col-xs-12'" :style="'top: ' + (65*(index + 1)) + 'px; z-index: 30000;'">
            <a href="#" class="close" @click="close(index)">
                &times;
            </a>
            <i :class="'fa-fw fa fa-' + icon(item.level)"></i> &nbsp;&nbsp;{{item.text}}
        </div>
    </div>
</div>
</template>
<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["alert"])
  },
  methods: {
    close(index){
      this.$store.dispatch('delAlert2', index);
    },
    icon(level) {
      switch (level) {
        case "success":
          return "check";
          break;
        case "info":
          return "info";
          break;
        case "warning":
          return "exclamation";
          break;
        case "danger":
          return "close";
          break;
      }
    }
  },
  mounted() {}
};
</script>
<style scoped>
.alert {
  z-index: 100;
  position: fixed;
  right: 0;
  opacity: 0.95;
  border-radius: 0;
}
/* .alert-danger {
  background-color: #e23d55;
  color: white;
}
.alert-warning{
  background-color: #dbbb56;
  color: white;
} */
</style>


