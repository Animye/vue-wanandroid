<template>
  <div>
    <slot></slot>
    <h3>
      <slot name="up"></slot>
    </h3>
    <h5>
      <span>2</span>
      <slot name="down"></slot>
    </h5>
    <h6>
      <slot name="yy"></slot>
    </h6>
  </div>
</template>
<script>
export default {
  name: "img-t",
  props: ["img"]
};
</script>