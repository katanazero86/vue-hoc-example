<template>
  <div>

    <button @click="printMessage">click!</button>
    <p>
      {{message}}
    </p>

    <hr>
    <hello-hoc/>

  </div>

</template>

<script>
import testMixin from '../mixins/testMixin'
import HelloHoc from './HelloHoc'
import withPrintMessage from '../hoc/hocExample'

export default {
  name: 'HelloWorld',
  components: { HelloHoc: withPrintMessage(HelloHoc) },
  mixins: [testMixin],
  data () {
    return {
      message: null
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  button {
    border: none;
    outline: none;
    padding: 8px;
    background-color: #3d84f5;
    cursor: pointer;
    color: white;
    font-weight: 600;
  }

  button:hover {
    background-color: #0a51c2;
  }

  p {
    margin: 0;
    padding: 4px;
  }

</style>
