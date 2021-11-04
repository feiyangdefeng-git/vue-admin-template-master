<template>
  <div class="data-view-con w-100 h-100 ">
    <div class="parent w-100 h-100">
        <div class="data-view-header header"> 
            <slot name="header"></slot>
        </div>
        <div class="data-view-body px-10 pb-10"> 
            <slot name="body"></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {

  },
  components: {

  },
  data() {
    return {

    };
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {

  },
  methods: {

  },
};
</script>

<style lang="scss">
    .data-view-con{
        box-sizing:border-box;
        background-image: linear-gradient(to bottom,#040D34, #030F37, #153C99,#061131);
        .parent {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: 1fr repeat(6, 2fr);
            grid-column-gap: 0px;
            grid-row-gap: 5px;
            position: relative;
        }
        .header{
            background-image: url('./../../assets/public/tou.jpg'); 
            background-repeat: no-repeat;
            background-size: 100% auto;
        }
        .data-view-header { grid-area: 1 / 1 / 2 / 6; }
        .data-view-body { grid-area: 2 / 1 / 8 / 6; }
       
        .border-box{
            position: relative;
            border: 2px solid #00a1ff;
            // border-radius: 8px; 
        }
        .border-box::before {
            position: absolute;
            top: -2px;
            bottom: -2px;
            left: 30px;
            width: calc(100% - 60px);
            content: "";
            border-top: 2px solid #016886;
            border-bottom: 2px solid #016886;
            z-index: 0;
        }
        .border-box::after {
            position: absolute;
            top: 30px;
            right: -2px;
            left: -2px;
            height: calc(100% - 60px);
            content: "";
            border-right: 2px solid #016886;
            border-left: 2px solid #016886;
            z-index: 0;
        }
    }
</style>
