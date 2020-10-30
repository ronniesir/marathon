<template>
  <div class="login-page">
    <h1>欢迎使用众安服务</h1>
    <h4>基础共建 / 服务共享</h4>
    <van-form @submit="onSubmit" label-width="32">
      <van-field v-model="username" name="用户名" label="账号" placeholder="" :rules="[{ required: true, message: '请填写用户名' }]" />
      <van-field v-model="password" type="password" name="密码" label="密码" placeholder="" :rules="[{ required: true, message: '请填写密码' }]" />
      <div style="margin: 16px 0">
        <van-button block type="primary" native-type="submit">提交</van-button>
      </div>
      <van-checkbox v-model="checked" shape="square" checked-color="#07c160" icon-size="12px">5天内自动登录</van-checkbox>
    </van-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: '',
      checked: false,
    }
  },
  methods: {
    onSubmit () { }
  }
}
</script>

<style scoped>
.login-page {
  height: 100vh;
  padding: 71px;
  background-image: url('../assets/top2.png');
  background-repeat: no-repeat;
  background-size: auto 100%;
  background-clip: border-box;
  background-position: top left;
  -moz-background-size: 100% 100%;
}

.login-page::after {
}

login-page h1 {
  font-size: 32px;
  font-weight: 700;
  color: #343434;
  line-height: 45px;
  margin-bottom: 4px;
}

.login-page h4 {
  font-size: 16px;
  font-weight: 400;
  color: #bcbcbc;
  line-height: 22px;
}
</style>

<style>
.login-page .van-cell {
  padding-left: 5px;
  padding-right: 5px;
}
.login-page .van-checkbox__label {
  font-size: 12px;
  color: #909090;
}
</style>