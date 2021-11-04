
    <template>
      <section class="content element-doc">
        <h2 id="infinitescroll-wu-xian-gun-dong"><a class="header-anchor" href="#infinitescroll-wu-xian-gun-dong">¶</a> InfiniteScroll 无限滚动</h2>
<p>滚动至底部时，加载更多数据。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>在要实现滚动加载的列表上上添加<code>v-infinite-scroll</code>，并赋值相应的加载方法，可实现滚动到底部时自动执行加载方法。</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;ul class=&quot;infinite-list&quot; v-infinite-scroll=&quot;load&quot; style=&quot;overflow:auto&quot;&gt;
    &lt;li v-for=&quot;i in count&quot; class=&quot;infinite-list-item&quot;&gt;{{ i }}&lt;/li&gt;
  &lt;/ul&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      load () {
        this.count += 2
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="jin-yong-jia-zai"><a class="header-anchor" href="#jin-yong-jia-zai">¶</a> 禁用加载</h3>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;infinite-list-wrapper&quot; style=&quot;overflow:auto&quot;&gt;
    &lt;ul
      class=&quot;list&quot;
      v-infinite-scroll=&quot;load&quot;
      infinite-scroll-disabled=&quot;disabled&quot;&gt;
      &lt;li v-for=&quot;i in count&quot; class=&quot;list-item&quot;&gt;{{ i }}&lt;/li&gt;
    &lt;/ul&gt;
    &lt;p v-if=&quot;loading&quot;&gt;加载中...&lt;/p&gt;
    &lt;p v-if=&quot;noMore&quot;&gt;没有更多了&lt;/p&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count &gt;= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() =&gt; {
          this.count += 2
          this.loading = false
        }, 2000)
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="attributes"><a class="header-anchor" href="#attributes">¶</a> Attributes</h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>类型</th>
<th>可选值</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>infinite-scroll-disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>-</td>
<td>false</td>
</tr>
<tr>
<td>infinite-scroll-delay</td>
<td>节流时延，单位为ms</td>
<td>number</td>
<td>-</td>
<td>200</td>
</tr>
<tr>
<td>infinite-scroll-distance</td>
<td>触发加载的距离阈值，单位为px</td>
<td>number</td>
<td>-</td>
<td>0</td>
</tr>
<tr>
<td>infinite-scroll-immediate</td>
<td>是否立即执行加载方法，以防初始状态下内容无法撑满容器。</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>

      </section>
    </template>
    <script>
      export default {
        name: 'component-doc',
        components: {
          "element-demo0": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "ul",
          {
            directives: [
              {
                name: "infinite-scroll",
                rawName: "v-infinite-scroll",
                value: _vm.load,
                expression: "load"
              }
            ],
            staticClass: "infinite-list",
            staticStyle: { overflow: "auto" }
          },
          _vm._l(_vm.count, function(i) {
            return _c("li", { staticClass: "infinite-list-item" }, [
              _vm._v(_vm._s(i))
            ])
          }),
          0
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data () {
      return {
        count: 0
      }
    },
    methods: {
      load () {
        this.count += 2
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo1": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      [
        _c(
          "div",
          {
            staticClass: "infinite-list-wrapper",
            staticStyle: { overflow: "auto" }
          },
          [
            _c(
              "ul",
              {
                directives: [
                  {
                    name: "infinite-scroll",
                    rawName: "v-infinite-scroll",
                    value: _vm.load,
                    expression: "load"
                  }
                ],
                staticClass: "list",
                attrs: { "infinite-scroll-disabled": "disabled" }
              },
              _vm._l(_vm.count, function(i) {
                return _c("li", { staticClass: "list-item" }, [
                  _vm._v(_vm._s(i))
                ])
              }),
              0
            ),
            _vm._v(" "),
            _vm.loading ? _c("p", [_vm._v("加载中...")]) : _vm._e(),
            _vm._v(" "),
            _vm.noMore ? _c("p", [_vm._v("没有更多了")]) : _vm._e()
          ]
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data () {
      return {
        count: 10,
        loading: false
      }
    },
    computed: {
      noMore () {
        return this.count >= 20
      },
      disabled () {
        return this.loading || this.noMore
      }
    },
    methods: {
      load () {
        this.loading = true
        setTimeout(() => {
          this.count += 2
          this.loading = false
        }, 2000)
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
  