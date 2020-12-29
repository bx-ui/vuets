<template>
  <div>
    {{ name }}
    {{ count }}
    {{ msg }}
    {{ qwNum | loadData }}
    <hello :msg="msg" @hello="helloClick" />
    <div ref="child">回头吧不要走</div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component, Watch, Ref } from "vue-property-decorator"
  import hello from "@/components/hello.vue"
  // 使用vuex
  import { State, Action, namespace } from "vuex-class"

  const userModule = namespace('user')

  @Component({
    filters: {
      loadData: (num: number) => {
        return num * 2
      }
    },
    components: {
      hello
    }
  })
  export default class About extends Vue {
    public name!: String;
    private msg!: string;
    private qwNum!: number;

    // vuex
    @userModule.State("username")
    username!: string

    @userModule.Mutation("asdf")
    setUser!: any
    // ref
    @Ref('child')
    readonly ref!: any;
    // 计算属性
    get count() {
      return this.name.length
    }
    // 监听器
    @Watch("msg", { immediate: true, deep: true })
    onChangeMsg(newVal: string, oldVal: string) {
     console.log("msg 改变了")
    }
    // methods
    helloClick(msg: number) {
      console.log(msg)
      console.log(this.ref)
    }
    // 钩子函数
    created() {
      this.name = "张三"
      this.msg = "邴鑫"
      this.qwNum = 100

      // this.setUser();
    }
  }
</script>

<style scoped>

</style>