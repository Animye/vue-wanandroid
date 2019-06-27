<template>
  <div class="todos">
    <div class="todos-top">
      <button>
        <router-link to="/lg/todo/list/0">只用这一个</router-link>
      </button>
      <button>
        <router-link to="/lg/todo/list/1">工作</router-link>
      </button>
      <button>
        <router-link to="/lg/todo/list/2">学习</router-link>
      </button>
      <button>
        <router-link to="/lg/todo/list/3">生活</router-link>
      </button>
    </div>
    <div class="todos-list">
      <div>
        <h3 style="backgroundColor:#2ab27f">
          代办清单
          <span @click="todoShow=!todoShow">+</span>
        </h3>
        <ul>
          <li v-for="(item, index) in todo" :key="index">
            <p>{{item.dateStr}}</p>
            <p>
              <span @click="done(item.id)">未完成</span>
              {{item.title}}
              <span @click="delTodo(item.id)">删除</span>
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h3 style="backgroundColor:#e4a340">已完成清单</h3>
        <ul>
          <li v-for="(item, index) in todo2" :key="index">
            <p>{{item.dateStr}}</p>
            <p>
              <span @click="unDone(item.id)">已完成</span>
              {{item.title}}
              <span @click="delTodo(item.id)">删除</span>
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div class="todo-box" :style="{display:todoShow?'block':'none'}">
      <h3>
        <span>添加代办清单</span>
        <span @click="todoShow=false">X</span>
      </h3>
      <form action>
        <div>
          <label for="12">
            标题
            <span>*</span>
          </label>
          <input type="text" id="12" v-model="title">
        </div>
        <div>
          <label for="123">
            详情
            <span>*</span>
          </label>
          <input type="text" id="123" v-model="content">
        </div>
        <div>
          <label for="1234">
            时间
            <span>*</span>
          </label>
          <input type="text" id="1234" v-model="date">
        </div>
      </form>
      <p>
        <span @click="todoShow=false">取消</span>
        <span @click="addTodo">保存</span>
      </p>
    </div>
    <div class="todoShadow" :style="{display:todoShow?'block':'none'}"></div>
  </div>
</template>
<script>
export default {
  name: "todo",
  data: () => ({
    todoShow: false,
    title: "ssfdfddd",
    content: "dddd",
    date: "2019-4-16",
    status: 0
  }),
  computed: {
    todo() {
      return this.$store.state.todo.todo.filter(e => e.status === 0);
    },
    todo2() {
      return this.$store.state.todo.todo.filter(e => e.status === 1);
    }
  },
  created() {
    this.getTodo();
  },
  methods: {
    getTodo() {
      const { type } = this.$route.params;
      this.$store.dispatch("getTodo", type);
    },
    addTodo() {
      const { type } = this.$route.params;
      const a = this.title;
      const b = this.content;
      const c = this.date;
      const d = this.status;
      this.$store.dispatch("addTodo", { a, b, c, type, d });
      this.todoShow = false;
    },
    delTodo(id) {
      this.$store.dispatch("delTodo", id);
    },
    done(id) {
      this.$store.dispatch("done", id);
    },
    unDone(id) {
      this.$store.dispatch("unDone", id);
    }
  },
  watch: {
    "$route.params.type"() {
      this.getTodo();
    },
    "$store.state.todo.todo.status"() {
      this.getTodo();
    }
  }
};
</script>
<style>
.todos {
  /* height: 100vh; */
  width: 960px;
  margin-left: 90px;
  margin-top: 30px;
}
.todos-top {
  display: flex;
}
.todos-top > button {
  cursor: pointer;
  line-height: 32px;
  background-color: #2c90e4;

  text-align: center;
  padding: 0 10px;
  outline: 0;
  border: 0;
  border-radius: 18px;
  margin-right: 20px;
}
.todos-top > button a {
  color: #fff;
}
.todos-list {
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
}
.todos-list > div {
  line-height: 46px;

  text-align: center;
  width: 45%;
}

.todos-list > div span {
  cursor: pointer;
}
.todos-list > div > h3 {
  color: #fff;
}
.todos-list > div > h3 > span {
  cursor: pointer;
}
.todo-box {
  z-index: 20;
  position: fixed;
  top: 20%;
  left: 50%;
  margin-left: -300px;

  width: 600px;
  height: 428px;
  background-color: #fff;
}
.todo-box > h3 {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  font-weight: normal;
}
form {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
form input {
  width: 382px;
  line-height: 37px;
}
form label {
  font-size: 20px;
}
.todo-box p {
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
}
.todo-box p span {
  cursor: pointer;
  width: 140px;
  line-height: 35px;
  text-align: center;
}
.todo-box p span:first-child {
  background-color: #eeeeee;
  color: #3a9adb;
}
.todo-box p span:last-child {
  background-color: #3498db;
  color: #fff;
}
.todoShadow {
  top: 0;
  left: 0;
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
