<template>
  <div>
    <h1>Create Event</h1>
    <p>This event is created by {{ user.name }}</p>
    <p>The id is {{ user.id }}</p>
  
    <ul>Categories</ul>
    <li v-for="cat in categories" :key="cat">{{ cat }}</li>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: 
    mapState({categories: 'categories',
    user: 'user'
    })
}

</script>
