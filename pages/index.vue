<template>
  <v-layout
    column
    justify-center
    align-center>
    <v-flex xs12 sm8 md6>
      <canvas width="512" height="512" ref="canvas" id="canvas"
              @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd" />
    </v-flex>
    <v-flex xs12 sm8 md6>
      <v-btn v-for="(c, index) in colors" :key=index
             fab depressed small :color="c" @click="color = c"/>
    </v-flex>
    <v-flex xs12 sm8 md6>
      <v-btn fab outline small @click="color = 'white'">
        <v-icon>fa fa-eraser</v-icon>
      </v-btn>
      <v-btn fab outline small @click="color = 'black'">
        <v-icon>fa fa-pencil</v-icon>
      </v-btn>
      <v-btn fab outline small @click="clearCanvas">
        <v-icon>fa fa-trash</v-icon>
      </v-btn>
    </v-flex>
    <v-flex xs12 sm8 md6>
      <v-slider
        v-model="width"
        :thumb-size="24"
        :min="5"
        :max="50"
        thumb-label
      ></v-slider>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: function() {
    return {
      x: false,
      y: false,
      width: 5,
      color: 'black',
      colors: [
        '#000000',
        '#F44336',
        '#9C27B0',
        '#3F51B5',
        '#03A9F4',
        '#009688',
        '#8BC34A',
        '#FFEB3B',
        '#FF9800',
        '#795548',
        '#9E9E9E',
      ]
    }
  },
  mounted() {
    this.ctx = this.$refs['canvas'].getContext('2d')
    this.canvas =  this.$refs['canvas']
    this.ctx.beginPath()
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.closePath()
  },
  methods:{
    clearCanvas: function() {
    this.ctx.beginPath()
    this.ctx.fillStyle = 'white'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    this.ctx.closePath()
    },
    touchStart: function(e) {

    },
    touchMove: function(e) {
      e.preventDefault()
      if (e.targetTouches.length !== 1) {
        return
      }
      let touch = e.targetTouches[0]
      let rect = e.target.getBoundingClientRect()
      let endX = touch.clientX - rect.left
      let endY = touch.clientY - rect.top

      this.draw(endX, endY)

      this.x = endX
      this.y = endY
    },
    touchEnd: function(e) {
      this.x = false
      this.y = false
    },
    draw: function(x, y) {
      let endX = x
      let endY = y
      let startX = this.x || endX
      let startY = this.y || endY

      this.ctx.beginPath()
      this.ctx.lineCap = 'round'
      this.ctx.lineWidth = this.width
      this.ctx.strokeStyle = this.color
      this.ctx.moveTo(startX, startY)
      this.ctx.lineTo(endX, endY)
      this.ctx.stroke()
      this.ctx.closePath()
    }
  }
}
</script>
