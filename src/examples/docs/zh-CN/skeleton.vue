
    <template>
      <section class="content element-doc">
        <h2 id="skeleton-gu-jia-ping"><a class="header-anchor" href="#skeleton-gu-jia-ping">¶</a> Skeleton 骨架屏</h2>
<p>在需要等待加载内容的位置设置一个骨架屏，某些场景下比 Loading 的视觉效果更好。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>基础的骨架效果。</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-skeleton /&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="geng-duo-can-shu"><a class="header-anchor" href="#geng-duo-can-shu">¶</a> 更多参数</h3>
<p>可以配置骨架屏段落数量，以便更接近真实渲染效果。首行会被渲染一个长度 33% 的段首。</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-skeleton :rows=&quot;6&quot; /&gt;
</code></pre></template></demo-block><h3 id="dong-hua-xiao-guo"><a class="header-anchor" href="#dong-hua-xiao-guo">¶</a> 动画效果</h3>
<p>显示动画效果。</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-skeleton :rows=&quot;6&quot; animated /&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-yang-shi"><a class="header-anchor" href="#zi-ding-yi-yang-shi">¶</a> 自定义样式</h3>
<p>ElementPlus 提供的排版模式有时候并不满足要求，当您想要用自己定义的模板时，可以通过一个具名 Slot 来自己设定模板。</p>
<p>我们提供了不同的模板单元可供使用，具体可选值请看 API 详细描述。 建议在描述模板的时候，尽量靠近真实的 DOM 结构，这样可以避免 DOM 高度差距引起的抖动。</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-skeleton style=&quot;width: 240px&quot;&gt;
    &lt;template slot=&quot;template&quot;&gt;
      &lt;el-skeleton-item variant=&quot;image&quot; style=&quot;width: 240px; height: 240px;&quot; /&gt;
      &lt;div style=&quot;padding: 14px;&quot;&gt;
        &lt;el-skeleton-item variant=&quot;p&quot; style=&quot;width: 50%&quot; /&gt;
        &lt;div
          style=&quot;display: flex; align-items: center; justify-items: space-between;&quot;
        &gt;
          &lt;el-skeleton-item variant=&quot;text&quot; style=&quot;margin-right: 16px;&quot; /&gt;
          &lt;el-skeleton-item variant=&quot;text&quot; style=&quot;width: 30%;&quot; /&gt;
        &lt;/div&gt;
      &lt;/div&gt;
    &lt;/template&gt;
  &lt;/el-skeleton&gt;
&lt;/template&gt;
</code></pre></template></demo-block><h3 id="loading-zhuang-tai"><a class="header-anchor" href="#loading-zhuang-tai">¶</a> Loading 状态</h3>
<p>当 Loading 结束之后，我们往往需要显示真实的 UI，可以通过 <code>loading</code> 的值来控制是否显示真实的 DOM。然后通过
具名 Slot 来设置当 loading 结束之后需要展示的 UI。</p>
<demo-block>
        
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div style=&quot;width: 240px&quot;&gt;
    &lt;p&gt;
      &lt;label style=&quot;margin-right: 16px;&quot;&gt;切换 Loading&lt;/label&gt;
      &lt;el-switch v-model=&quot;loading&quot; /&gt;
    &lt;/p&gt;
    &lt;el-skeleton style=&quot;width: 240px&quot; :loading=&quot;loading&quot; animated&gt;
      &lt;template slot=&quot;template&quot;&gt;
        &lt;el-skeleton-item
          variant=&quot;image&quot;
          style=&quot;width: 240px; height: 240px;&quot;
        /&gt;
        &lt;div style=&quot;padding: 14px;&quot;&gt;
          &lt;el-skeleton-item variant=&quot;h3&quot; style=&quot;width: 50%;&quot; /&gt;
          &lt;div
            style=&quot;display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;&quot;
          &gt;
            &lt;el-skeleton-item variant=&quot;text&quot; style=&quot;margin-right: 16px;&quot; /&gt;
            &lt;el-skeleton-item variant=&quot;text&quot; style=&quot;width: 30%;&quot; /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;template&gt;
        &lt;el-card :body-style=&quot;{ padding: '0px', marginBottom: '1px' }&quot;&gt;
          &lt;img
            src=&quot;https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png&quot;
            class=&quot;image&quot;
          /&gt;
          &lt;div style=&quot;padding: 14px;&quot;&gt;
            &lt;span&gt;好吃的汉堡&lt;/span&gt;
            &lt;div class=&quot;bottom card-header&quot;&gt;
              &lt;span class=&quot;time&quot;&gt;{{ currentDate }}&lt;/span&gt;
              &lt;el-button type=&quot;text&quot; class=&quot;button&quot;&gt;操作按钮&lt;/el-button&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/el-card&gt;
      &lt;/template&gt;
    &lt;/el-skeleton&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        loading: true,
        currentDate: '2021-06-01'
      }
    },
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="xuan-ran-duo-tiao-shu-ju"><a class="header-anchor" href="#xuan-ran-duo-tiao-shu-ju">¶</a> 渲染多条数据</h3>
<p>大多时候, 骨架屏都被用来渲染列表, 当我们需要在从服务器获取数据的时候来渲染一个假的 UI。利用 <code>count</code> 这个属性就能控制渲染多少条假的数据在页面上</p>
<div class="tip">
<p>请注意, 请尽可能的将 <code>count</code> 的大小保持在最小状态, 即使是假的 UI, DOM 元素多了之后, 照样会引起性能问题, 并且在骨架屏销毁时所消耗的时间也会更长(相对的)。</p>
</div>
<demo-block>
        
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div style=&quot;width: 400px&quot;&gt;
    &lt;p&gt;
      &lt;el-button @click=&quot;setLoading&quot;&gt;点我重新加载&lt;/el-button&gt;
    &lt;/p&gt;
    &lt;el-skeleton style=&quot;width:400px&quot; :loading=&quot;loading&quot; animated :count=&quot;3&quot;&gt;
      &lt;template slot=&quot;template&quot;&gt;
        &lt;el-skeleton-item
          variant=&quot;image&quot;
          style=&quot;width: 400px; height: 267px;&quot;
        /&gt;
        &lt;div style=&quot;padding: 14px;&quot;&gt;
          &lt;el-skeleton-item variant=&quot;h3&quot; style=&quot;width: 50%;&quot; /&gt;
          &lt;div
            style=&quot;display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;&quot;
          &gt;
            &lt;el-skeleton-item variant=&quot;text&quot; style=&quot;margin-right: 16px;&quot; /&gt;
            &lt;el-skeleton-item variant=&quot;text&quot; style=&quot;width: 30%;&quot; /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;template&gt;
        &lt;el-card
          :body-style=&quot;{ padding: '0px', marginBottom: '1px' }&quot;
          v-for=&quot;item in lists&quot;
          :key=&quot;item.name&quot;
        &gt;
          &lt;img :src=&quot;item.imgUrl&quot; class=&quot;image multi-content&quot; /&gt;
          &lt;div style=&quot;padding: 14px;&quot;&gt;
            &lt;span&gt;{{ item.name }}&lt;/span&gt;
            &lt;div class=&quot;bottom card-header&quot;&gt;
              &lt;span class=&quot;time&quot;&gt;{{ currentDate }}&lt;/span&gt;
              &lt;el-button type=&quot;text&quot; class=&quot;button&quot;&gt;操作按钮&lt;/el-button&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/el-card&gt;
      &lt;/template&gt;
    &lt;/el-skeleton&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        loading: true,
        currentDate: '2021-06-01',
        lists: [],
      }
    },
    mounted() {
      this.loading = false
      this.lists = [
        {
          imgUrl:
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          name: '鹿',
        },
        {
          imgUrl:
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          name: '马',
        },
        {
          imgUrl:
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          name: '山狮',
        },
      ]
    },
    methods: {
      setLoading() {
        this.loading = true
        setTimeout(() =&gt; (this.loading = false), 2000)
      },
    },
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="fang-zhi-xuan-ran-dou-dong"><a class="header-anchor" href="#fang-zhi-xuan-ran-dou-dong">¶</a> 防止渲染抖动</h3>
<p>有的时候，API 的请求回来的特别快，往往骨架占位刚刚被渲染，真实的数据就已经回来了，用户的界面会突然一闪，此时为了避免这种情况，就需要通过 <code>throttle</code> 属性来避免这个问题。</p>
<demo-block>
        
        <template slot="source"><element-demo6 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;div style=&quot;width: 240px&quot;&gt;
    &lt;p&gt;
      &lt;label style=&quot;margin-right: 16px;&quot;&gt;切换 Loading&lt;/label&gt;
      &lt;el-switch v-model=&quot;loading&quot; /&gt;
    &lt;/p&gt;
    &lt;el-skeleton
      style=&quot;width: 240px&quot;
      :loading=&quot;loading&quot;
      animated
      :throttle=&quot;500&quot;
    &gt;
      &lt;template slot=&quot;template&quot;&gt;
        &lt;el-skeleton-item
          variant=&quot;image&quot;
          style=&quot;width: 240px; height: 240px;&quot;
        /&gt;
        &lt;div style=&quot;padding: 14px;&quot;&gt;
          &lt;el-skeleton-item variant=&quot;h3&quot; style=&quot;width: 50%;&quot; /&gt;
          &lt;div
            style=&quot;display: flex; align-items: center; justify-items: space-between; margin-top: 16px; height: 16px;&quot;
          &gt;
            &lt;el-skeleton-item variant=&quot;text&quot; style=&quot;margin-right: 16px;&quot; /&gt;
            &lt;el-skeleton-item variant=&quot;text&quot; style=&quot;width: 30%;&quot; /&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/template&gt;
      &lt;template&gt;
        &lt;el-card :body-style=&quot;{ padding: '0px', marginBottom: '1px'}&quot;&gt;
          &lt;img
            src=&quot;https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png&quot;
            class=&quot;image&quot;
          /&gt;
          &lt;div style=&quot;padding: 14px;&quot;&gt;
            &lt;span&gt;好吃的汉堡&lt;/span&gt;
            &lt;div class=&quot;bottom card-header&quot;&gt;
              &lt;span class=&quot;time&quot;&gt;{{ currentDate }}&lt;/span&gt;
              &lt;el-button type=&quot;text&quot; class=&quot;button&quot;&gt;操作按钮&lt;/el-button&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/el-card&gt;
      &lt;/template&gt;
    &lt;/el-skeleton&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        loading: false,
        currentDate: '2021-06-01'
      }
    },
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="skeleton-attributes"><a class="header-anchor" href="#skeleton-attributes">¶</a> Skeleton Attributes</h3>
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
<td>animated</td>
<td>是否使用动画</td>
<td>boolean</td>
<td>true / false</td>
<td>false</td>
</tr>
<tr>
<td>count</td>
<td>渲染多少个 template, 建议使用尽可能小的数字</td>
<td>number</td>
<td>integer</td>
<td>1</td>
</tr>
<tr>
<td>loading</td>
<td>是否显示 skeleton 骨架屏</td>
<td>boolean</td>
<td>true / false</td>
<td>true</td>
</tr>
<tr>
<td>rows</td>
<td>骨架屏段落数量</td>
<td>number</td>
<td>正整数</td>
<td>4</td>
</tr>
<tr>
<td>throttle</td>
<td>延迟占位 DOM 渲染的时间, 单位是毫秒</td>
<td>number</td>
<td>正整数</td>
<td>0</td>
</tr>
</tbody>
</table>
<h3 id="skeleton-item-attributes"><a class="header-anchor" href="#skeleton-item-attributes">¶</a> Skeleton Item Attributes</h3>
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
<td>variant</td>
<td>当前显示的占位元素的样式</td>
<td>Enum(string)</td>
<td>p / text / h1 / h3 / text / caption / button / image / circle / rect</td>
<td>text</td>
</tr>
</tbody>
</table>
<h3 id="skeleton-slots"><a class="header-anchor" href="#skeleton-slots">¶</a> Skeleton Slots</h3>
<table>
<thead>
<tr>
<th>name</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>用来展示真实 UI</td>
</tr>
<tr>
<td>template</td>
<td>用来展示自定义占位符</td>
</tr>
</tbody>
</table>

      </section>
    </template>
    <script>
      import { Skeleton } from 'element-ui';
      export default {
        name: 'component-doc',
        components: {
          "el-skeleton":Skeleton,
          "element-demo0": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [[_c("el-skeleton")]], 2)
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {}
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
  return _c("div", [_c("el-skeleton", { attrs: { rows: 6 } })], 1)
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
  return _c("div", [_c("el-skeleton", { attrs: { rows: 6, animated: "" } })], 1)
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {}
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
          "el-skeleton",
          { staticStyle: { width: "240px" } },
          [
            _c(
              "template",
              { slot: "template" },
              [
                _c("el-skeleton-item", {
                  staticStyle: { width: "240px", height: "240px" },
                  attrs: { variant: "image" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticStyle: { padding: "14px" } },
                  [
                    _c("el-skeleton-item", {
                      staticStyle: { width: "50%" },
                      attrs: { variant: "p" }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          display: "flex",
                          "align-items": "center",
                          "justify-items": "space-between"
                        }
                      },
                      [
                        _c("el-skeleton-item", {
                          staticStyle: { "margin-right": "16px" },
                          attrs: { variant: "text" }
                        }),
                        _vm._v(" "),
                        _c("el-skeleton-item", {
                          staticStyle: { width: "30%" },
                          attrs: { variant: "text" }
                        })
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ],
          2
        )
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
  })(),"element-demo4": (function() {
    
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
          { staticStyle: { width: "240px" } },
          [
            _c(
              "p",
              [
                _c("label", { staticStyle: { "margin-right": "16px" } }, [
                  _vm._v("切换 Loading")
                ]),
                _vm._v(" "),
                _c("el-switch", {
                  model: {
                    value: _vm.loading,
                    callback: function($$v) {
                      _vm.loading = $$v
                    },
                    expression: "loading"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-skeleton",
              {
                staticStyle: { width: "240px" },
                attrs: { loading: _vm.loading, animated: "" }
              },
              [
                _c(
                  "template",
                  { slot: "template" },
                  [
                    _c("el-skeleton-item", {
                      staticStyle: { width: "240px", height: "240px" },
                      attrs: { variant: "image" }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticStyle: { padding: "14px" } },
                      [
                        _c("el-skeleton-item", {
                          staticStyle: { width: "50%" },
                          attrs: { variant: "h3" }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              display: "flex",
                              "align-items": "center",
                              "justify-items": "space-between",
                              "margin-top": "16px",
                              height: "16px"
                            }
                          },
                          [
                            _c("el-skeleton-item", {
                              staticStyle: { "margin-right": "16px" },
                              attrs: { variant: "text" }
                            }),
                            _vm._v(" "),
                            _c("el-skeleton-item", {
                              staticStyle: { width: "30%" },
                              attrs: { variant: "text" }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                [
                  _c(
                    "el-card",
                    {
                      attrs: {
                        "body-style": { padding: "0px", marginBottom: "1px" }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "image",
                        attrs: {
                          src:
                            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticStyle: { padding: "14px" } }, [
                        _c("span", [_vm._v("好吃的汉堡")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "bottom card-header" },
                          [
                            _c("span", { staticClass: "time" }, [
                              _vm._v(_vm._s(_vm.currentDate))
                            ]),
                            _vm._v(" "),
                            _c(
                              "el-button",
                              {
                                staticClass: "button",
                                attrs: { type: "text" }
                              },
                              [_vm._v("操作按钮")]
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ]
              ],
              2
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
    data () {
      return {
        loading: true,
        currentDate: '2021-06-01'
      }
    },
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo5": (function() {
    
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
          { staticStyle: { width: "400px" } },
          [
            _c(
              "p",
              [
                _c("el-button", { on: { click: _vm.setLoading } }, [
                  _vm._v("点我重新加载")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-skeleton",
              {
                staticStyle: { width: "400px" },
                attrs: { loading: _vm.loading, animated: "", count: 3 }
              },
              [
                _c(
                  "template",
                  { slot: "template" },
                  [
                    _c("el-skeleton-item", {
                      staticStyle: { width: "400px", height: "267px" },
                      attrs: { variant: "image" }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticStyle: { padding: "14px" } },
                      [
                        _c("el-skeleton-item", {
                          staticStyle: { width: "50%" },
                          attrs: { variant: "h3" }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              display: "flex",
                              "align-items": "center",
                              "justify-items": "space-between",
                              "margin-top": "16px",
                              height: "16px"
                            }
                          },
                          [
                            _c("el-skeleton-item", {
                              staticStyle: { "margin-right": "16px" },
                              attrs: { variant: "text" }
                            }),
                            _vm._v(" "),
                            _c("el-skeleton-item", {
                              staticStyle: { width: "30%" },
                              attrs: { variant: "text" }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._l(_vm.lists, function(item) {
                  return _c(
                    "el-card",
                    {
                      key: item.name,
                      attrs: {
                        "body-style": { padding: "0px", marginBottom: "1px" }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "image multi-content",
                        attrs: { src: item.imgUrl }
                      }),
                      _vm._v(" "),
                      _c("div", { staticStyle: { padding: "14px" } }, [
                        _c("span", [_vm._v(_vm._s(item.name))]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "bottom card-header" },
                          [
                            _c("span", { staticClass: "time" }, [
                              _vm._v(_vm._s(_vm.currentDate))
                            ]),
                            _vm._v(" "),
                            _c(
                              "el-button",
                              {
                                staticClass: "button",
                                attrs: { type: "text" }
                              },
                              [_vm._v("操作按钮")]
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  )
                })
              ],
              2
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
    data() {
      return {
        loading: true,
        currentDate: '2021-06-01',
        lists: [],
      }
    },
    mounted() {
      this.loading = false
      this.lists = [
        {
          imgUrl:
            'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          name: '鹿',
        },
        {
          imgUrl:
            'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          name: '马',
        },
        {
          imgUrl:
            'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          name: '山狮',
        },
      ]
    },
    methods: {
      setLoading() {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),"element-demo6": (function() {
    
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
          { staticStyle: { width: "240px" } },
          [
            _c(
              "p",
              [
                _c("label", { staticStyle: { "margin-right": "16px" } }, [
                  _vm._v("切换 Loading")
                ]),
                _vm._v(" "),
                _c("el-switch", {
                  model: {
                    value: _vm.loading,
                    callback: function($$v) {
                      _vm.loading = $$v
                    },
                    expression: "loading"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-skeleton",
              {
                staticStyle: { width: "240px" },
                attrs: { loading: _vm.loading, animated: "", throttle: 500 }
              },
              [
                _c(
                  "template",
                  { slot: "template" },
                  [
                    _c("el-skeleton-item", {
                      staticStyle: { width: "240px", height: "240px" },
                      attrs: { variant: "image" }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticStyle: { padding: "14px" } },
                      [
                        _c("el-skeleton-item", {
                          staticStyle: { width: "50%" },
                          attrs: { variant: "h3" }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              display: "flex",
                              "align-items": "center",
                              "justify-items": "space-between",
                              "margin-top": "16px",
                              height: "16px"
                            }
                          },
                          [
                            _c("el-skeleton-item", {
                              staticStyle: { "margin-right": "16px" },
                              attrs: { variant: "text" }
                            }),
                            _vm._v(" "),
                            _c("el-skeleton-item", {
                              staticStyle: { width: "30%" },
                              attrs: { variant: "text" }
                            })
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                [
                  _c(
                    "el-card",
                    {
                      attrs: {
                        "body-style": { padding: "0px", marginBottom: "1px" }
                      }
                    },
                    [
                      _c("img", {
                        staticClass: "image",
                        attrs: {
                          src:
                            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                        }
                      }),
                      _vm._v(" "),
                      _c("div", { staticStyle: { padding: "14px" } }, [
                        _c("span", [_vm._v("好吃的汉堡")]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "bottom card-header" },
                          [
                            _c("span", { staticClass: "time" }, [
                              _vm._v(_vm._s(_vm.currentDate))
                            ]),
                            _vm._v(" "),
                            _c(
                              "el-button",
                              {
                                staticClass: "button",
                                attrs: { type: "text" }
                              },
                              [_vm._v("操作按钮")]
                            )
                          ],
                          1
                        )
                      ])
                    ]
                  )
                ]
              ],
              2
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
    data() {
      return {
        loading: false,
        currentDate: '2021-06-01'
      }
    },
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
  