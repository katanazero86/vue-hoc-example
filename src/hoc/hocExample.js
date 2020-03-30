import Vue from 'vue';

const withPrintMessage = (targetComponent) => {
  return Vue.component('withPrintMessage', {
    components: { targetComponent },
    template: '<target-component @click="printMessage" :message="message"/>',

    data () {
      return {
        message: null
      }
    },
    methods: {
      printMessage (msg) {
        if (!msg) {
          return false;
        }
        this.message = msg;
      }
    }

  });
}

// Vue.component('my-component', {
// 옵션
// })

// 위와 같이 template 으로 사용을 하려면, runtime-compiler option true

export default withPrintMessage
