<template>
    <!-- 加载动画 -->
    <div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
      <div class="cp-spinner-block">
          <div class="cp-spinner cp-skeleton"></div>
      </div>
      <div>&nbsp;</div>
      <h1 style="text-align: center;">
        <small>莫 小 伟 个 人 博 客</small>
      </h1>
    </div>
    <!-- //加载动画 -->
</template>

<script>
export default {};
</script>

<style scoped>
/* 加载动画 */
.cp-spinner-block {
  width: 40%;
  margin: 10px 20px;
  text-align: center;
}
.cp-spinner-block span {
  color: #4a5b6c;
  display: block;
  padding: 5px 0px;
}
.cp-spinner-block pre {
  font-size: 0.75em;
  background-color: #f0f0f0;
  padding: 4px 7px;
  border-radius: 2px;
  font-family: "Lucida Console", Monaco, monospace;
  display: inline-block;
  white-space: pre-wrap;
}
@media only screen and (max-width: 1024px) {
  .cp-wrapper {
    width: 100%;
  }
  .cp-spinner-block {
    display: block;
    width: 90%;
    margin: 40px 5%;
  }
}
@media only screen and (min-width: 1025px) and (max-width: 1400px) {
  .cp-wrapper {
    width: 70%;
  }
  .cp-spinner-block {
    margin: 5px auto;
  }
}
@media only screen and (min-width: 1500px) {
  .cp-wrapper {
    width: 90%;
  }
  .cp-spinner-block {
    display: inline-block;
    width: 30%;
    margin: 10px 20px;
  }
}
@media only screen and (min-width: 1700px) {
  .cp-wrapper {
    width: 70%;
  }
  .cp-spinner-block {
    display: inline-block;
    width: 30%;
    margin: 10px 20px;
  }
}
.cp-spinner {
  width: 48px;
  height: 48px;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
}
/*Skeleton Spinner*/
.cp-skeleton {
  width: 38px;
  height: 38px;
  display: inline-block;
  box-sizing: border-box;
  border-radius: 50%;
  border-top: solid 6px #f56151;
  border-right: solid 6px transparent;
  border-bottom: solid 6px transparent;
  border-left: solid 6px transparent;
  animation: cp-skeleton-animate 0.618s linear infinite;
}
.cp-skeleton:before {
  border-radius: 50%;
  content: " ";
  width: 38px;
  height: 38px;
  display: inline-block;
  box-sizing: border-box;
  border-top: solid 6px transparent;
  border-right: solid 6px transparent;
  border-bottom: solid 6px transparent;
  border-left: solid 6px #f56151;
  position: absolute;
  top: -6px;
  left: -6px;
  transform: rotateZ(-30deg);
}
.cp-skeleton:after {
  border-radius: 50%;
  content: " ";
  width: 38px;
  height: 38px;
  display: inline-block;
  box-sizing: border-box;
  border-top: solid 6px transparent;
  border-right: solid 6px #f56151;
  border-bottom: solid 6px transparent;
  border-left: solid 6px transparent;
  position: absolute;
  top: -6px;
  right: -6px;
  transform: rotateZ(30deg);
}
/*Skeleton Spinner Animation*/
@keyframes cp-skeleton-animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* //加载动画 */
</style>
