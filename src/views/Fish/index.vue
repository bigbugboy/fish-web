<template>
  <div id="fish">
    <div id="left">
      <h2>{{ cq.question }}</h2>
      <ul>
        <li>{{ cq.choice_a }}</li>
        <li>{{ cq.choice_b }}</li>
        <li>{{ cq.choice_c }}</li>
        <li>{{ cq.choice_d }}</li>
      </ul>
      <p>{{ cq.desc }}</p>
      <button>上一个</button>
      <button>下一个</button>
    </div>
    <div id="right">目前展示用户选择的题目类型</div>
  </div>
</template>

<script>
export default {
    name: 'Fish',
    data(){
      return {
        questionList: [
          {
            id: 1,
            question: '下面语法正确的是哪个？',
            choice_a: '4444',
            choice_b: '3333',
            choice_c: '2222',
            choice_d: '111',
            right_choice: 'A',
            desc: 'adsdsdsdsdsa'
          },
          {
            id: 2,
            question: 'Python有几个基本数据类型',
            choice_a: '4444',
            choice_b: '3333',
            choice_c: '2222',
            choice_d: '111',
            right_choice: 'A',
            desc: 'adsdsdsdsdsa'
          }
        ],
        currentIndex: 0
      }
    },
    computed: {
      cq(){
        return this.questionList[this.currentIndex]
      }
    },

}
</script>

<style scoped>

#fish {
  display: flex;
}

#left{
  width: 70%;
  height: 100%;
  background-color: grey;
}

#right {
  background-color: skyblue;
  width: 30%;
  height: 100%;
}

</style>