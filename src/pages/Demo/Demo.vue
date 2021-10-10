<template>
  <!-- <div v-if="todo.loading">Loading TODO!</div> -->
  <!-- <div v-else>{{todo.result && todo.result.title}}</div> -->
  <!-- <div v-if="post.loading">Loading POST!</div> -->
  <!-- <div v-else>{{post.result && post.result.body}}</div> -->
  <child :msg="msg" v-if="toggle"></child>
  <br>
  ===========
  <br>
  <button @click="toggle = !toggle">Hide</button>
  <h1>{{count}}</h1>
  <h1>{{double}}</h1>
  <button @click="addCount"><h1>Add!</h1></button>
  <h1>Name: {{name}}</h1>
  <h1>Age: {{age}}</h1>
  <button @click="change"><h1>Change name!</h1></button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed, toRefs, onMounted } from 'vue'
import { Child } from './components'
// import useURLLoader from './useURLLoader'
// interface PostProps {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }
// interface TodoProps {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean; 
// }

export default defineComponent({
  name: 'App',
  components: {
    Child
  },
  setup () {
    const count = ref(0)
    const msg = ref('hello')
    const addCount = () => {
      count.value++
      msg.value += 'hello'
    }
    // const todo = useURLLoader<TodoProps>('https://jsonplaceholder.typicode.com/todos/1')
    // const post = useURLLoader<PostProps>('https://jsonplaceholder.typicode.com/posts/1')
    const double = computed(() => count.value * 2)
    const toggle = ref(true)
    const person = reactive({
      name: 'viking',
      age: 20,
      change() {
        person.name = 'maomao'
        person.age = 30
      }
    })
    const person2 = toRefs(person)

    onMounted(() => {
      console.log('------onMounted-----')
    })

    return {
      count,
      addCount,
      double,
      msg,
      toggle,
      ...person2,
    //   todo,
    //   post
    }
  },

})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
