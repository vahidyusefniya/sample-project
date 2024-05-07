<template>
  <div>
    <input type="text" class="textbox" id="description" name="description" v-model="description" @input="validateMessage()"/>
    <p v-if="showMessage">{{ isBalanced() }}</p>
  </div>
</template>

<script>
export default {
  name: 'Description',
  data () {
    return {
      description: '',
      debounce: null,
      showMessage: false
    }
  },
  methods: {
    isBalanced() {
      if(
        this.description.includes('(') ||
        this.description.includes(')') ||
        this.description.includes('{') ||
        this.description.includes('}') ||
        this.description.includes('[') ||
        this.description.includes(']')
      ){

        if(this.description.includes('(') || this.description.includes(')')){
          if(this.description.includes('(') && this.description.includes(')')){
            
            if(this.description.includes('{') || this.description.includes('}')){
              if(this.description.includes('{') && this.description.includes('}')){
                if(this.description.includes('[') || this.description.includes(']')){
                  if(this.description.includes('[') && this.description.includes(']')){
                    return 'The text is balanced.'
                  }else{
                    return 'The text is not balanced.'
                  }
                }else{
                  return 'The text is balanced.'
                }
              }else{
                return 'The text is not balanced.'
              }
            }else{
              return 'The text is balanced.'
            }
          }else{
            return 'The text is not balanced.'
          }
        }
      }else{
        return 'The text is balanced.'
      }
    },

    validateMessage() {
      clearTimeout(this.debounce)
      this.debounce = setTimeout(() => {
        this.showMessage = true
      }, 1000)
    }
  }
}
</script>
