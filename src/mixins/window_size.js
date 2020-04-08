export default {
  data () {
    return {
      windowHeight: 0,
      windowWidth: 0
    }
  },
  created () {
    window.addEventListener('resize', this.getWindowSize);
    this.getWindowSize();
  },
  mounted () {
    this.getWindowSize();
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowSize);
  },

  methods: {
    getWindowSize () {
      const container = document.getElementById('grid').offsetWidth;
      if (this.$el) {
        this.windowHeight = this.$el.clientHeight;
        container < this.$el.clientWidth ?  this.windowWidth = container : this.windowWidth = this.$el.clientWidth;
      }
    }
  }
}
