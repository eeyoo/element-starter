<template>
    <div id="app">
        <!--<img src="./assets/logo.png">-->
        <!--<h1>{{ msg }}</h1>-->
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>

        </el-menu>

        <div class="line"></div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
                <template slot="title">我的工作台</template>
                <el-menu-item index="2-1">选项1</el-menu-item>
                <el-menu-item index="2-2">选项2</el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>

        </el-menu>

        <el-row>
            <el-col :span="8">
                <el-button @click.native="startHacking">Yes!</el-button>
            </el-col>
            <el-col :span="8">
                <el-select v-model="value" clearable multiple placeholder="请选择" @change="handleSelect1">
                    <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                            :disabled="item.disabled">
                        <span style="float: left">{{ item.label }} - {{ item.value }}</span>
                    </el-option>
                </el-select>
            </el-col>

            <el-col :span="8">
                <el-radio class="radio" v-model="radio" label="1">男</el-radio>
                <el-radio class="radio" v-model="radio" label="2">女</el-radio>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="24">
        <el-steps :space="100" :active="active">
            <el-step title="步骤 1"></el-step>
            <el-step title="步骤 2"></el-step>
            <el-step title="步骤 3"></el-step>
        </el-steps>
            </el-col>
        </el-row>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>

        <el-progress :text-inside="true" :stroke-width="18" :percentage="percent"></el-progress>
        <el-progress :percentage="70"></el-progress>
        <el-progress :percentage="100" status="success"></el-progress>
        <el-progress :percentage="50" status="exception"></el-progress>
    </div>
</template>

<script>

  export default {
    data () {
      return {
        msg: 'Want something new?',
        options: [
          {value: 1, label: '北京'},
          {value: 2, label: '上海'},
          {value: 3, label: '广州'},
          {value: 4, label: '深圳'},
          {value: 5, label: '南京', disabled: true}
        ],
        value: 3, radio: '1', activeIndex: '1', activeIndex2: '2', active: 0, percent: 0
      }
    },
    created: function () {
      //this.setInterval(this.step, 1000);
      this.step();
    },
    methods: {
      startHacking () {
        this.$notify({
          title: '咋了？',
          message: 'Just be patient...',
          duration: 3000
        })
      },
      handleSelect () {
        console.log(this.activeIndex2);
      },
      handleSelect1 () {
        //alert('1');
        console.log(this.value);
      },
      next () {
        if (this.active++ > 2) this.active = 0;
        console.log(this.active);
      },
      step () {
        if (this.percent > 100) {
          this.percent = 0;
        }
        this.percent += 5;
      }
    }
  }
</script>

<style>
    #app {
        font-family: Helvetica, sans-serif;
        text-align: center;
    }
</style>
