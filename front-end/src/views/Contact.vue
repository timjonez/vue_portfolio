<template>
    <div class="flex-grow">
        <form @submit.prevent="sendEmail" class="flex flex-col w-11/12 md:w-1/2 mx-auto">
            <label for="name">Name</label>
            <input type="text" name="name" v-model="name">
            <label for="email">Email</label>
            <input type="email" name="email" v-model="email">
            <label for="subject">Subject</label>
            <input type="text" name="subject" v-model="subject">
            <label for="message">Message</label>
            <textarea name="message" cols="30" rows="10" v-model="message"></textarea>
            <button type="submit"
             class="main-color rounded-full mt-5 ml-auto py-1.5 font-bold text-xl px-3 w-1/4">
              Send
            </button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

const apiUrl = 'http://127.0.0.1:3000';

export default {
  name: 'Contact',
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: '',
    };
  },
  methods: {
    sendEmail() {
      axios.post(`${apiUrl}/contact`, {
        name: this.name,
        email: this.email,
        subject: this.subject,
        message: this.message,
      })
        .then(() => {
          this.$swal({
            icon: 'success',
            title: 'Success!',
            text: 'Your message has successfully been sent\nYou will be redirected shortly',
            showConfirmButton: false,
            timer: 2500,
          })
            .then(() => {
              window.location.href = '/';
            });
        });
    },
  },
};
</script>

<style scoped>
label {
    color: white;
}
input, textarea {
    margin-bottom: 0.75rem;
    padding: 5px 10px;
}
</style>
