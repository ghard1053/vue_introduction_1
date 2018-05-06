(function() {

  // var newInstance = new Vue({
  //   el: '#app',
  //   data: {
  //     count: 0
  //   }
  // })

  Vue.component('item', {
    template: '<div>{{ content }} world!</div>',
    props: ['content']
  })

  new Vue ({
    el: '#app',
    data: function() {
      return {
        numArray: [1,2,3,4,5]
      }
    },
    // data: {
    //   count: 0,
    //   showFlg: false,
    //   array: ["a", "b", "c"],
    //   object: {
    //     "hoge": "hogehoge",
    //     "fuga": "fugafuga"
    //   },
    //   number: 10,
    //   string: "Lorem",
    //   text: "",
    //   checked: false,
    //   checkedNames: [],
    //   modulation: "",
    //   hisyo: "",
    //   kantai: []
    // },
    computed: {
      odd() {
        return this.numArray.filter(num => { return num % 2 !== 0 })
      },
      even() {
        return this.numArray.filter(num => { return num % 2 === 0 })
      }
    },
    methods: {
      showAlert: function() {
        alert('hoge')
      },
      increment: function() {
        this.count += 1
      }
    }
  })

})()