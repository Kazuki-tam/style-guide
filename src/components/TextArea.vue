<template>
  <div class="text_area">
    <label class="text_area_label" for="message">{{ label }} <span class="text_area_required">必須</span></label>
    <textarea name="message" id="message" class="text_area_message" rows="10" v-model="text" v-on:keyup="validate"></textarea>
    <p class="text_area_confirm">入力内容: {{ text }}</p>
    <p class="text_area_alert" v-show="alert">*要望を入力してください</p>
  </div>
</template>

<script>
export default {
  name: 'TextArea',
  data() {
    return {
      label: 'お問い合わせ内容',
      text: '',
      alert: false
    }
  },
  methods: {
    validate: function () {
      if (this.text == '') {
       this.alert = true
      } else {
       this.alert = false 
      }
    }
  }
}
</script>

<style scoped>
.text_area_label {
  display: block;
  font-size: 1rem;
  margin-bottom: .6rem;
}
.text_area_required {
  background: red;
  color: #fff;
  font-size: .7rem;
  padding: .3rem .4rem;
  margin: 0 0 0 .4rem;
  display: inline-block;
  vertical-align: middle;
  line-height: 1;
}
.text_area_message {
  max-width: 640px;
  width: 100%;
}
.text_area_confirm {
  font-size: .8rem;
}
.text_area_alert {
  color: red;
}
</style>
