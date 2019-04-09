<template>
  <div class="hello">


    <FontAwesomeLayers class="fa-lg">
    <FontAwesomeIcon icon="square"  @click="hello()" class="box" />
      <FontAwesomeIcon icon="check" @click="hello()" v-if="checked" class="check"/>
    </FontAwesomeLayers>

  </div>
</template>

<script>


export default {
  name: 'Checkbox',
  props: {
    msg: String,
    count: Number
  },
  data: function ()  {
    return{
      checked: false

    }

  },
  methods: {
  hello: function () {
    this.checked = !this.checked;
    console.log(this.checked);
  }
  }
  

}

  // this.checked = true;

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.box, .check{
  width:5em;
  height:5em;
  
}
.check{
  color:green;
}
</style>
