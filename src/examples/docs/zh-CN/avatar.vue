
    <template>
      <section class="content element-doc">
        <h2 id="avatar-tou-xiang"><a class="header-anchor" href="#avatar-tou-xiang">¶</a> Avatar 头像</h2>
<p>用图标、图片或者字符的形式展示用户或事物信息。</p>
<h3 id="ji-ben-yong-fa"><a class="header-anchor" href="#ji-ben-yong-fa">¶</a> 基本用法</h3>
<p>通过 <code>shape</code> 和 <code>size</code> 设置头像的形状和大小。</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-row class=&quot;demo-avatar demo-basic&quot;&gt;
    &lt;el-col :span=&quot;12&quot;&gt;
      &lt;div class=&quot;sub-title&quot;&gt;circle&lt;/div&gt;
      &lt;div class=&quot;demo-basic--circle&quot;&gt;
        &lt;div class=&quot;block&quot;&gt;&lt;el-avatar :size=&quot;50&quot; :src=&quot;circleUrl&quot;&gt;&lt;/el-avatar&gt;&lt;/div&gt;
        &lt;div class=&quot;block&quot; v-for=&quot;size in sizeList&quot; :key=&quot;size&quot;&gt;
          &lt;el-avatar :size=&quot;size&quot; :src=&quot;circleUrl&quot;&gt;&lt;/el-avatar&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/el-col&gt;  
    &lt;el-col :span=&quot;12&quot;&gt;
      &lt;div class=&quot;sub-title&quot;&gt;square&lt;/div&gt;
      &lt;div class=&quot;demo-basic--circle&quot;&gt;
        &lt;div class=&quot;block&quot;&gt;&lt;el-avatar shape=&quot;square&quot; :size=&quot;50&quot; :src=&quot;squareUrl&quot;&gt;&lt;/el-avatar&gt;&lt;/div&gt;
        &lt;div class=&quot;block&quot; v-for=&quot;size in sizeList&quot; :key=&quot;size&quot;&gt;
          &lt;el-avatar shape=&quot;square&quot; :size=&quot;size&quot; :src=&quot;squareUrl&quot;&gt;&lt;/el-avatar&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/el-col&gt; 
  &lt;/el-row&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      return {
        circleUrl: &quot;https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png&quot;,
        squareUrl: &quot;https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png&quot;,
        sizeList: [&quot;large&quot;, &quot;medium&quot;, &quot;small&quot;]
      }
    }
  }
&lt;/script&gt;

</code></pre></template></demo-block><h3 id="zhan-shi-lei-xing"><a class="header-anchor" href="#zhan-shi-lei-xing">¶</a> 展示类型</h3>
<p>支持三种类型：图标、图片和字符</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;demo-type&quot;&gt;
    &lt;div&gt;
      &lt;el-avatar icon=&quot;el-icon-user-solid&quot;&gt;&lt;/el-avatar&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;el-avatar src=&quot;https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png&quot;&gt;&lt;/el-avatar&gt;
    &lt;/div&gt;
    &lt;div&gt;
      &lt;el-avatar&gt; user &lt;/el-avatar&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="tu-pian-jia-zai-shi-bai-de-fallback-xing-wei"><a class="header-anchor" href="#tu-pian-jia-zai-shi-bai-de-fallback-xing-wei">¶</a> 图片加载失败的 fallback 行为</h3>
<p>当展示类型为图片的时候，图片加载失败的 fallback 行为</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;demo-type&quot;&gt;
    &lt;el-avatar :size=&quot;60&quot; src=&quot;https://empty&quot; @error=&quot;errorHandler&quot;&gt;
      &lt;img src=&quot;https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png&quot;/&gt;
    &lt;/el-avatar&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      errorHandler() {
        return true
      }
    }
  }
&lt;/script&gt;

</code></pre></template></demo-block><h3 id="tu-pian-ru-he-gua-ying-rong-qi-kuang"><a class="header-anchor" href="#tu-pian-ru-he-gua-ying-rong-qi-kuang">¶</a> 图片如何适应容器框</h3>
<p>当展示类型为图片的时候，使用 <code>fit</code> 属性定义图片如何适应容器框，同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a>。</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div class=&quot;demo-fit&quot;&gt;
    &lt;div class=&quot;block&quot; v-for=&quot;fit in fits&quot; :key=&quot;fit&quot;&gt;
        &lt;span class=&quot;title&quot;&gt;{{ fit }}&lt;/span&gt;
        &lt;el-avatar shape=&quot;square&quot; :size=&quot;100&quot; :fit=&quot;fit&quot; :src=&quot;url&quot;&gt;&lt;/el-avatar&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
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
<td>icon</td>
<td>设置头像的图标类型，参考 Icon 组件</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>size</td>
<td>设置头像的大小</td>
<td>number/string</td>
<td>number / large / medium / small</td>
<td>large</td>
</tr>
<tr>
<td>shape</td>
<td>设置头像的形状</td>
<td>string</td>
<td>circle / square</td>
<td>circle</td>
</tr>
<tr>
<td>src</td>
<td>图片头像的资源地址</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>srcSet</td>
<td>以逗号分隔的一个或多个字符串列表表明一系列用户代理使用的可能的图像</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>alt</td>
<td>描述图像的替换文本</td>
<td>string</td>
<td></td>
<td></td>
</tr>
<tr>
<td>fit</td>
<td>当展示类型为图片的时候，设置图片如何适应容器框</td>
<td>string</td>
<td>fill / contain / cover / none / scale-down</td>
<td>cover</td>
</tr>
</tbody>
</table>
<h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3>
<table>
<thead>
<tr>
<th>事件名</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>error</td>
<td>图片类头像加载失败的回调， 返回 false 会关闭组件默认的 fallback 行为</td>
<td>(e: Event)</td>
</tr>
</tbody>
</table>
<h3 id="slot"><a class="header-anchor" href="#slot">¶</a> Slot</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>自定义头像展示内容</td>
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
          "el-row",
          { staticClass: "demo-avatar demo-basic" },
          [
            _c("el-col", { attrs: { span: 12 } }, [
              _c("div", { staticClass: "sub-title" }, [_vm._v("circle")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "demo-basic--circle" },
                [
                  _c(
                    "div",
                    { staticClass: "block" },
                    [
                      _c("el-avatar", {
                        attrs: { size: 50, src: _vm.circleUrl }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.sizeList, function(size) {
                    return _c(
                      "div",
                      { key: size, staticClass: "block" },
                      [
                        _c("el-avatar", {
                          attrs: { size: size, src: _vm.circleUrl }
                        })
                      ],
                      1
                    )
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            _c("el-col", { attrs: { span: 12 } }, [
              _c("div", { staticClass: "sub-title" }, [_vm._v("square")]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "demo-basic--circle" },
                [
                  _c(
                    "div",
                    { staticClass: "block" },
                    [
                      _c("el-avatar", {
                        attrs: { shape: "square", size: 50, src: _vm.squareUrl }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.sizeList, function(size) {
                    return _c(
                      "div",
                      { key: size, staticClass: "block" },
                      [
                        _c("el-avatar", {
                          attrs: {
                            shape: "square",
                            size: size,
                            src: _vm.squareUrl
                          }
                        })
                      ],
                      1
                    )
                  })
                ],
                2
              )
            ])
          ],
          1
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
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"]
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
        _c("div", { staticClass: "demo-type" }, [
          _c(
            "div",
            [_c("el-avatar", { attrs: { icon: "el-icon-user-solid" } })],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("el-avatar", {
                attrs: {
                  src:
                    "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", [_c("el-avatar", [_vm._v(" user ")])], 1)
        ])
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo2": (function() {
    
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
          { staticClass: "demo-type" },
          [
            _c(
              "el-avatar",
              {
                attrs: { size: 60, src: "https://empty" },
                on: { error: _vm.errorHandler }
              },
              [
                _c("img", {
                  attrs: {
                    src:
                      "https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
                  }
                })
              ]
            )
          ],
          1
        )
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      errorHandler() {
        return true
      }
    }
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo3": (function() {
    
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
          { staticClass: "demo-fit" },
          _vm._l(_vm.fits, function(fit) {
            return _c(
              "div",
              { key: fit, staticClass: "block" },
              [
                _c("span", { staticClass: "title" }, [_vm._v(_vm._s(fit))]),
                _vm._v(" "),
                _c("el-avatar", {
                  attrs: { shape: "square", size: 100, fit: fit, src: _vm.url }
                })
              ],
              1
            )
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
    data() {
      return {
        fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
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
  