<template>
  <el-main class="main-wrapper">
    Content Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores sit id ratione reprehenderit ipsam adipisci quos sapiente dolorem maiores modi, molestias consectetur nemo, vitae corrupti minima exercitationem voluptates eaque similique! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia accusamus sed ratione facere repellendus soluta doloribus fugit totam ullam ea quod nisi, commodi eveniet, accusantium praesentium voluptas corrupti, doloremque ipsa! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit iste eos, quaerat laborum eius reiciendis esse unde repellendus tempora distinctio! A dolorum ratione voluptatem totam porro qui hic nobis numquam!
  </el-main>
</template>

<script>

export default {
  name: 'Content',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main-wrapper {
  position: absolute;
  top: 65px;
  left: $sidenav-width;
  bottom: 0;
  background: $bg-white-light;
  box-sizing: border-box;
}
</style>
