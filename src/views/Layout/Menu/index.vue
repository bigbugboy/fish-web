<template>
  <nav class="menu">
    <span></span>
    <ol>
      <li class="menu-item"><router-link to="/" exact-active-class="active" >Home</router-link></li>
      <li class="menu-item"><router-link to="/fish" exact-active-class="active">Fish</router-link></li>
      <li class="menu-item"><router-link to="/about" exact-active-class="active">About</router-link></li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
}
</script>


<style scoped>

a {
  font-weight: 700;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  color: #9575cd;
  padding: 10px 0px;
}

.menu {
  background: #fff;
  margin: auto;
  text-align: center;
  padding: 15px;
  box-shadow: 0px -4px 24px 2px rgba(0, 0, 0, 0.15);
}
.menu ol {
  padding-left: 0px;
}

.menu-item {
  list-style-type: none;
  display: inline;
  position: relative;
  margin: 15px;
}

.active {
  border-bottom: 3px solid #9575cd;
  width: 100%;
  left: 0%;
  transition: 0.2s ease-in-out 0.15s;
}

</style>