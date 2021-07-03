<template>
    <div class="flex-grow">
        <form action="" method="post" class="flex flex-col w-1/2 mx-auto">
            <label for="name">Name</label>
            <input type="text" name="name">
            <label for="email">Email</label>
            <input type="email" name="email">
            <label for="message">Message</label>
            <textarea name="message" cols="30" rows="10"></textarea>
            <button type="submit"
             class="main-color rounded-full mt-5 ml-auto py-1.5 font-bold text-xl px-3 w-1/4">
              Send
            </button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Contact',
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
