<template>
  <div class="container">
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        {{ message }}
      </li>
    </ul>
    <input type="text" v-model="newMessage" />
    <button @click="sendMessage">Send</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: ''
    };
  },
  mounted() {
    this.$socket.on('new_message', (data) => {
      console.log(123)
      this.messages.push(data.message);
    });
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() === '') return;

      this.$axios.$post('http://localhost:5001/send-message', {
        message: this.newMessage
      });

      this.newMessage = '';
    }
  }
};
</script>

<style scoped>
/* You can add your Tailwind classes here */
</style>
