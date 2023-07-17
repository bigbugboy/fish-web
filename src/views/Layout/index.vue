<template>
    <div class="layout">
        <div class="menu">
            <Menu></Menu>
        </div>
        <div class="content">
            <Content></Content>
        </div>
    </div>
  
</template>

<script>
import Menu from './Menu'
import Content from './Content'
export default {
    name: 'Layout',
    components: {Menu, Content},

}
</script>

<style>

</style>