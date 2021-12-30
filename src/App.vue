<template>
  <div id="___gatsby">
    <router-view />
  </div>
</template>
<script>
export default {};
</script>
<style>
.lt800-hide{
  display: block;
}
.gt800-hide{
  display: none;
}

@media only screen and (min-width: 800px) {
  .lt800-hide{
    display: none!important;
  }
  .gt800-hide{
    display: block!important;
  }
}



</style>
