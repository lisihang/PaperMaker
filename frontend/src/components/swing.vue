<template>

  <div>
    <svg :width='width' :height='height' @mousemove='listener($event)'>
      <a :href="tag.href" v-for='tag in tags'>
        <text :x='tag.x' :y='tag.y' :font-size='20 * (600/(600-tag.z))' :fill-opacity='((400+tag.z)/600)'>{{tag.text}}</text>
      </a>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'swing',
  data () {
    return {
      width: 250,
      height: 250,
      tagsNum: 20,
      RADIUS: 100,
      speedX: 5 * Math.PI / 360,
      speedY: 5 * Math.PI / 360,
      tags: []
    }
  },
  computed: {
    CX () {
      return this.width / 2
    },
    CY () {
      return this.height / 2
    }
  },
  created () {
    let tags = []
    let tagtexts = ['最新试题', '中高考必杀', '易错题突破', '竞赛专题', '自主招生', '个人信息', '组卷记录']
    for (let i = 0; i < this.tagsNum; i++) {
      let tag = {}
      let k = -1 + (2 * (i + 1) - 1) / this.tagsNum
      let a = Math.acos(k)
      let b = a * Math.sqrt(this.tagsNum * Math.PI)
      tag.text = tagtexts[i % 7]
      tag.x = this.CX + this.RADIUS * Math.sin(a) * Math.cos(b)
      tag.y = this.CY + this.RADIUS * Math.sin(a) * Math.sin(b)
      tag.z = this.RADIUS * Math.cos(a)
      tag.href = '/' + tag.text
      tags.push(tag)
    }
    this.tags = tags
  },
  mounted () {
    setInterval(() => {
      this.rotateX(this.speedX)
      this.rotateY(this.speedY)
    }, 17)
  },
  methods: {
    rotateX (speedX) {
      var cos = Math.cos(speedX)
      var sin = Math.sin(speedX)
      for (let tag of this.tags) {
        var y1 = (tag.y - this.CY) * cos - tag.z * sin + this.CY
        var z1 = tag.z * cos + (tag.y - this.CY) * sin
        tag.y = y1
        tag.z = z1
      }
    },
    rotateY (speedY) {
      var cos = Math.cos(speedY)
      var sin = Math.sin(speedY)
      for (let tag of this.tags) {
        var x1 = (tag.x - this.CX) * cos - tag.z * sin + this.CX
        var z1 = tag.z * cos + (tag.x - this.CX) * sin
        tag.x = x1
        tag.z = z1
      }
    },
    listener (event) {
      var x = event.clientX - this.CX
      var y = event.clientY - this.CY
      this.speedX = x * 0.005 > 0 ? Math.min(this.RADIUS * 0.0001, x * 0.005) : Math.max(-this.RADIUS * 0.0001, x * 0.005)
      this.speedY = y * 0.005 > 0 ? Math.min(this.RADIUS * 0.0001, y * 0.005) : Math.max(-this.RADIUS * 0.0001, y * 0.005)
    }
  }
}
</script>
