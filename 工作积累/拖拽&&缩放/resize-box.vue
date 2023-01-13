<template>
  <div :id="id" class="resize-box" :style="style" @keyup="keyup" tabindex="0" hidefocus="true" @click="outstand">
    <div v-show="options.class === 'outstanding'&&pageStatus==='edit'" class="u-resize" :style="borderStyle">
      <div class="resize-topLeft" @mousedown.stop="scale($event,'topLeft')"></div>
      <div class="resize-top" @mousedown.stop="scale($event,'top')"></div>
      <div class="resize-topRight" @mousedown.stop="scale($event,'topRight')"></div>
      <div class="resize-right" @mousedown.stop="scale($event,'right')"></div>
      <div class="resize-bottomRight" @mousedown.stop="scale($event,'bottomRight')"></div>
      <div class="resize-bottom" @mousedown.stop="scale($event,'bottom')"></div>
      <div class="resize-bottomLeft" @mousedown.stop="scale($event,'bottomLeft')"></div>
      <div class="resize-left" @mousedown.stop="scale($event,'left')"></div>
    </div>
    <div v-if="pageStatus==='edit'"
         :class="options.class"
         @mousedown.stop="move"
         @dblclick="input"
         :style="outStyle"></div>
    <slot></slot>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  import Bus from 'common_modules/event-bus'
  export default {
    name: 'resize-box',
    data () {
      return {
        dragging: false,
        scaling: false,
        zindex: 1
      }
    },
    computed: {
      ...mapState({
        pageStatus: state => state.customPage.pageStatus
      }),
      style () {
        return `top:${this.options.top}px;
        left:${this.options.left}px;
        z-index:${this.options.z_index};
        width:${this.options.size[0]}px;
        height:${this.options.size[1]}px;
        border-color:${this.options.borderColor};
        border-width:${this.options.borderWidth}px;
        font-size:${this.options.fontSize}px;
        color:${this.options.fontColor};
        border-style:solid;
        border-radius:5px;
        opacity:${this.options.opacity || 1};
        background-color:${this.options.bgColor};`
      },
      outStyle () {
        return `position: absolute;
        width: 100%;height: 100%;
        overflow: hidden;border:none;
        z-index:${this.zindex};`
      },
      borderStyle () {
        return `width:${this.options.size[0] - 2 * this.options.borderWidth + 2}px;
        height:${this.options.size[1] - 2 * this.options.borderWidth + 2}px`
      },
      id () {
        return this.options.id
      },
      options () {
        return this.value
      }
    },
    methods: {
      keyup (e) {
        if (e.keyCode === 46) {
          this.$emit('delete', this.id)
        }
      },
      outstand () {
        this.zindex = 1
        this.$emit('outstand', this.id)
      },
      input () {
        this.zindex = 0
      },
      // 四舍五入返回十的倍数
      adjustNum10 (n) {
        return Math.round(n / 10) * 10
      },
      move (e) {
        this.dragging = true
        this.outstand()
        let [currentX, currentY] = [e.clientX, e.clientY]
        let dragBox = document.getElementById(this.id)
        let [left, top, that] = [dragBox.style.left.replace('px', ''), dragBox.style.top.replace('px', ''), this]
        let newLeft, newTop
        document.onmousemove = function (e) {
          if (that.dragging) {
            [newLeft, newTop] = [that.adjustNum10(Number(left) + e.clientX - currentX), that.adjustNum10(Number(top) + e.clientY - currentY)]
            dragBox.style.left = newLeft + 'px'
            dragBox.style.top = newTop + 'px'
            if (dragBox.offsetLeft <= 0) {
              dragBox.style.left = 0
              newLeft = 0
            }
            if (dragBox.offsetTop <= 0) {
              dragBox.style.top = 0
              newTop = 0
            }
            that.options.left = newLeft
            that.options.top = newTop
          }
        }
        document.onmouseup = function (e) {
          that.$emit('move')
          that.dragging = false
        }
      },
      scale (e, direction) {
        this.scaling = true
        let [currentX, currentY] = [e.clientX, e.clientY]
        let box = document.getElementById(this.id)
        let [width, height, that] = [box.offsetWidth, box.offsetHeight, this]
        let [left, top] = [this.options.left, this.options.top]
        let [newLeft, newTop] = [this.options.left, this.options.top]
        let newWidth, newHeight
        let size = []
        document.onmousemove = function (e) {
          if (that.scaling) {
            // 下面是八种拉伸方向，需要时时改变 width, height,left, top
            switch (direction) {
              case 'top':
                newHeight = height + currentY - e.clientY
                newTop = top - currentY + e.clientY
                box.style.height = newHeight + 'px'
                size = [width, newHeight]
                break
              case 'topRight':
                newHeight = height + currentY - e.clientY
                newWidth = width + e.clientX - currentX
                newTop = top - currentY + e.clientY
                box.style.width = newWidth + 'px'
                box.style.height = newHeight + 'px'
                size = [newWidth, newHeight]
                break
              case 'right':
                newWidth = width + e.clientX - currentX
                box.style.width = newWidth + 'px'
                size = [newWidth, height]
                break
              case 'bottomRight':
                newWidth = width + e.clientX - currentX
                newHeight = height + e.clientY - currentY
                box.style.width = newWidth + 'px'
                box.style.height = newHeight + 'px'
                size = [newWidth, newHeight]
                break
              case 'bottom' :
                newHeight = height + e.clientY - currentY
                box.style.height = newHeight + 'px'
                size = [width, newHeight]
                break
              case 'bottomLeft':
                newWidth = width + currentX - e.clientX
                newHeight = height + e.clientY - currentY
                newLeft = left - currentX + e.clientX
                box.style.width = newWidth + 'px'
                box.style.height = newHeight + 'px'
                size = [newWidth, newHeight]
                break
              case 'left':
                newWidth = width + currentX - e.clientX
                newLeft = left - currentX + e.clientX
                box.style.width = newWidth + 'px'
                size = [newWidth, height]
                break
              case 'topLeft':
                newWidth = width + currentX - e.clientX
                newHeight = height + currentY - e.clientY
                newLeft = left - currentX + e.clientX
                newTop = top - currentY + e.clientY
                box.style.width = newWidth + 'px'
                box.style.height = newHeight + 'px'
                size = [newWidth, newHeight]
                break
            }
            that.options.top = newTop
            that.options.left = newLeft
            that.options.size = size
            Bus.$emit('resize')
            that.$emit('scale')
          }
        }
        document.onmouseup = function () {
          that.scaling = false
        }
      }
    },
    mounted () {
      let [that, box] = [this, document.getElementById(this.id)]
      box.onmousemove = function (e) {
        if (that.options.class === 'normal') {
          box.style.borderColor = 'aqua'
        }
      }
      box.onmouseleave = function () {
        box.style.borderColor = that.options.borderColor
      }
    },
    props: {
      value: {
        type: Object,
        default () {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .resize-box {
    position: absolute;
    cursor: move;
    outline: none;
  }

  .u-resize {
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border-color: rgba(57, 155, 252, 0.6);
    border: 1px solid #aaa;
    box-sizing: border-box;
    position: absolute;
  }

  .u-resize .resize-topLeft {
    margin-top: -2px;
    margin-left: -2px;
    top: 0;
    left: 0;
    cursor: nwse-resize;
    border: 3px solid #09f;
    box-sizing: border-box;
    border-right: none;
    border-bottom: none;
    width: 10px;
    height: 10px;
  }

  .u-resize .resize-top {
    position: absolute;
    margin-top: -3px;
    margin-left: -5px;
    top: 0;
    left: 50%;
    cursor: ns-resize;
    border: 3px solid #09f;
    box-sizing: border-box;
    width: 10px;
    height: 10px;
    border-left: none;
    border-right: none;
    border-bottom: none;
  }

  .u-resize .resize-topRight {
    position: absolute;
    margin-top: -2px;
    margin-left: -7px;
    top: 0;
    left: 100%;
    cursor: nesw-resize;
    border: 3px solid #09f;
    border-left: none;
    border-bottom: none;
    box-sizing: border-box;
    width: 10px;
    height: 10px;
  }

  .u-resize .resize-right {
    position: absolute;
    margin-top: -5px;
    margin-left: -7px;
    top: 50%;
    left: 100%;
    cursor: ew-resize;
    border: 3px solid #09f;
    border-top: none;
    border-left: none;
    border-bottom: none;
    width: 10px;
    height: 10px;
  }

  .u-resize .resize-bottomRight {
    position: absolute;
    margin-top: -7px;
    margin-left: -7px;
    top: 100%;
    left: 100%;
    cursor: nwse-resize;
    border: 3px solid #09f;
    border-top: none;
    border-left: none;
    width: 10px;
    height: 10px;
  }

  .u-resize .resize-bottom {
    position: absolute;
    margin-top: -7px;
    margin-left: -5px;
    top: 100%;
    left: 50%;
    cursor: ns-resize;
    border: 3px solid #09f;
    border-top: none;
    border-left: none;
    border-right: none;
    width: 10px;
    height: 10px;
  }

  .u-resize .resize-bottomLeft {
    position: absolute;
    margin-top: -7px;
    margin-left: -2px;
    top: 100%;
    left: 0%;
    cursor: nesw-resize;
    border: 3px solid #09f;
    border-top: none;
    border-right: none;
    width: 10px;
    height: 10px;
  }

  .u-resize .resize-left {
    position: absolute;
    margin-top: -5px;
    margin-left: -3px;
    top: 50%;
    left: 0%;
    cursor: ew-resize;
    border: 3px solid #09f;
    border-top: none;
    border-right: none;
    border-bottom: none;
    width: 10px;
    height: 10px;
  }
</style>
