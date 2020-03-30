<template>
    <div>
      Hello HOC!!
      <button @click="$emit('click', 'hello HOC zzzz!!')">click!</button>
      <p>
        {{message}}
      </p>
    </div>
</template>

<script>
export default {
  name: 'HelloHoc',
  props: {
    message: { type: String, default: '' }
  }

}
</script>

<style scoped>

  button {
    outline: none;
    border: none;
    padding: 8px;
    margin: 0;
    background-color: #6ac8a7;
    cursor: pointer;
    color: white;
    font-weight: 600;
  }

</style>
