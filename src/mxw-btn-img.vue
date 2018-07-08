<template>
    <div class="input-group">
        <input type="text" class="form-control form-input" readonly="readonly">
        <span class="input-group-btn">
            <button class="btn btn-default" type="button" @click="show">选择图片</button>
        </span>
    </div><!-- /input-group -->
</template>
<script>
export default {
  mounted() {},
  methods: {
    show() {
      $("#myModal2").modal("toggle");
    }
  }
};
</script>
<style scoped>
.form-input {
  background: #f1f1f1;
  border-radius: 0;
  border: 1px solid #dce1e4;
  box-shadow: none !important;
  font-size: 13px;
  padding: 6px 10px !important;
  transition: all 0.2s ease-in-out;
}

</style>


