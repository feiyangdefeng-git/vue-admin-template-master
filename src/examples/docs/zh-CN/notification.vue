
    <template>
      <section class="content element-doc">
        <h2 id="notification-tong-zhi"><a class="header-anchor" href="#notification-tong-zhi">¶</a> Notification 通知</h2>
<p>悬浮出现在页面角落，显示全局的通知提醒消息。</p>
<h3 id="ji-ben-yong-fa"><a class="header-anchor" href="#ji-ben-yong-fa">¶</a> 基本用法</h3>
<p>适用性广泛的通知栏</p>
<demo-block>
        <div><p>Notification 组件提供通知功能，Element 注册了<code>$notify</code>方法，接收一个<code>options</code>字面量参数，在最简单的情况下，你可以设置<code>title</code>字段和<code>message</code>字段，用于设置通知的标题和正文。默认情况下，经过一段时间后 Notification 组件会自动关闭，但是通过设置<code>duration</code>，可以控制关闭的时间间隔，特别的是，如果设置为<code>0</code>，则不会自动关闭。注意：<code>duration</code>接收一个<code>Number</code>，单位为毫秒，默认为<code>4500</code>。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open1&quot;&gt;
    可自动关闭
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open2&quot;&gt;
    不会自动关闭
    &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open1() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      },

      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dai-you-qing-xiang-xing"><a class="header-anchor" href="#dai-you-qing-xiang-xing">¶</a> 带有倾向性</h3>
<p>带有 icon，常用来显示「成功、警告、消息、错误」类的系统消息</p>
<demo-block>
        <div><p>Element 为 Notification 组件准备了四种通知类型：<code>success</code>, <code>warning</code>, <code>info</code>, <code>error</code>。通过<code>type</code>字段来设置，除此以外的值将被忽略。同时，我们也为 Notification 的各种 type 注册了方法，可以在不传入<code>type</code>字段的情况下像<code>open3</code>和<code>open4</code>那样直接调用。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open1&quot;&gt;
    成功
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open2&quot;&gt;
    警告
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open3&quot;&gt;
    消息
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open4&quot;&gt;
    错误
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open1() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open2() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open3() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open4() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-dan-chu-wei-zhi"><a class="header-anchor" href="#zi-ding-yi-dan-chu-wei-zhi">¶</a> 自定义弹出位置</h3>
<p>可以让 Notification 从屏幕四角中的任意一角弹出</p>
<demo-block>
        <div><p>使用<code>position</code>属性定义 Notification 的弹出位置，支持四个选项：<code>top-right</code>、<code>top-left</code>、<code>bottom-right</code>、<code>bottom-left</code>，默认为<code>top-right</code>。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open1&quot;&gt;
    右上角
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open2&quot;&gt;
    右下角
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open3&quot;&gt;
    左下角
  &lt;/el-button&gt;
  &lt;el-button
    plain
    @click=&quot;open4&quot;&gt;
    左上角
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open1() {
        this.$notify({
          title: '自定义位置',
          message: '右上角弹出的消息'
        });
      },

      open2() {
        this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right'
        });
      },

      open3() {
        this.$notify({
          title: '自定义位置',
          message: '左下角弹出的消息',
          position: 'bottom-left'
        });
      },

      open4() {
        this.$notify({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="dai-you-pian-yi"><a class="header-anchor" href="#dai-you-pian-yi">¶</a> 带有偏移</h3>
<p>让 Notification 偏移一些位置</p>
<demo-block>
        <div><p>Notification 提供设置偏移量的功能，通过设置 <code>offset</code> 字段，可以使弹出的消息距屏幕边缘偏移一段距离。注意在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量。</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open&quot;&gt;
    偏移的消息
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$notify({
          title: '偏移',
          message: '这是一条带有偏移的提示消息',
          offset: 100
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="shi-yong-html-pian-duan"><a class="header-anchor" href="#shi-yong-html-pian-duan">¶</a> 使用 HTML 片段</h3>
<p><code>message</code> 属性支持传入 HTML 片段</p>
<demo-block>
        <div><p>将<code>dangerouslyUseHTMLString</code>属性设置为 true，<code>message</code> 就会被当作 HTML 片段处理。</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open&quot;&gt;
    使用 HTML 片段
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$notify({
          title: 'HTML 片段',
          dangerouslyUseHTMLString: true,
          message: '&lt;strong&gt;这是 &lt;i&gt;HTML&lt;/i&gt; 片段&lt;/strong&gt;'
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><div class="warning">
<p><code>message</code> 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 <a href="https://en.wikipedia.org/wiki/Cross-site_scripting">XSS 攻击</a>。因此在 <code>dangerouslyUseHTMLString</code> 打开的情况下，请确保 <code>message</code> 的内容是可信的，<strong>永远不要</strong>将用户提交的内容赋值给 <code>message</code> 属性。</p>
</div>
<h3 id="yin-cang-guan-bi-an-niu"><a class="header-anchor" href="#yin-cang-guan-bi-an-niu">¶</a> 隐藏关闭按钮</h3>
<p>可以不显示关闭按钮</p>
<demo-block>
        <div><p>将<code>showClose</code>属性设置为<code>false</code>即可隐藏关闭按钮。</p>
</div>
        <template slot="source"><element-demo5 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-button
    plain
    @click=&quot;open&quot;&gt;
    隐藏关闭按钮
  &lt;/el-button&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    methods: {
      open() {
        this.$notify.success({
          title: 'Info',
          message: '这是一条没有关闭按钮的消息',
          showClose: false
        });
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="quan-ju-fang-fa"><a class="header-anchor" href="#quan-ju-fang-fa">¶</a> 全局方法</h3>
<p>Element 为 <code>Vue.prototype</code> 添加了全局方法 <code>$notify</code>。因此在 vue instance 中可以采用本页面中的方式调用 Notification。</p>
<h3 id="dan-du-yin-yong"><a class="header-anchor" href="#dan-du-yin-yong">¶</a> 单独引用</h3>
<p>单独引入 Notification：</p>
<pre><code class="language-javascript">import { Notification } from 'element-ui';
</code></pre>
<p>此时调用方法为 <code>Notification(options)</code>。我们也为每个 type 定义了各自的方法，如 <code>Notification.success(options)</code>。并且可以调用 <code>Notification.closeAll()</code> 手动关闭所有实例。</p>
<h3 id="options"><a class="header-anchor" href="#options">¶</a> Options</h3>
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
<td>title</td>
<td>标题</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>message</td>
<td>说明文字</td>
<td>string/Vue.VNode</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>dangerouslyUseHTMLString</td>
<td>是否将 message 属性作为 HTML 片段处理</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>type</td>
<td>主题样式，如果不在可选值内将被忽略</td>
<td>string</td>
<td>success/warning/info/error</td>
<td>—</td>
</tr>
<tr>
<td>iconClass</td>
<td>自定义图标的类名。若设置了 <code>type</code>，则 <code>iconClass</code> 会被覆盖</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>customClass</td>
<td>自定义类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>duration</td>
<td>显示时间, 毫秒。设为 0 则不会自动关闭</td>
<td>number</td>
<td>—</td>
<td>4500</td>
</tr>
<tr>
<td>position</td>
<td>自定义弹出位置</td>
<td>string</td>
<td>top-right/top-left/bottom-right/bottom-left</td>
<td>top-right</td>
</tr>
<tr>
<td>showClose</td>
<td>是否显示关闭按钮</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>onClose</td>
<td>关闭时的回调函数</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>onClick</td>
<td>点击 Notification 时的回调函数</td>
<td>function</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>offset</td>
<td>偏移的距离，在同一时刻，所有的 Notification 实例应当具有一个相同的偏移量</td>
<td>number</td>
<td>—</td>
<td>0</td>
</tr>
</tbody>
</table>
<h3 id="fang-fa"><a class="header-anchor" href="#fang-fa">¶</a> 方法</h3>
<p>调用 <code>Notification</code> 或 <code>this.$notify</code> 会返回当前 Notification 的实例。如果需要手动关闭实例，可以调用它的 <code>close</code> 方法。</p>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>close</td>
<td>关闭当前的 Notification</td>
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
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open1 } }, [
          _vm._v("\n    可自动关闭\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open2 } }, [
          _vm._v("\n    不会自动关闭\n    ")
        ])
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      open1() {
        const h = this.$createElement;

        this.$notify({
          title: '标题名称',
          message: h('i', { style: 'color: teal'}, '这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案这是提示文案')
        });
      },

      open2() {
        this.$notify({
          title: '提示',
          message: '这是一条不会自动关闭的消息',
          duration: 0
        });
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
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open1 } }, [
          _vm._v("\n    成功\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open2 } }, [
          _vm._v("\n    警告\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open3 } }, [
          _vm._v("\n    消息\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open4 } }, [
          _vm._v("\n    错误\n  ")
        ])
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      open1() {
        this.$notify({
          title: '成功',
          message: '这是一条成功的提示消息',
          type: 'success'
        });
      },

      open2() {
        this.$notify({
          title: '警告',
          message: '这是一条警告的提示消息',
          type: 'warning'
        });
      },

      open3() {
        this.$notify.info({
          title: '消息',
          message: '这是一条消息的提示消息'
        });
      },

      open4() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      }
    }
  }
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
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open1 } }, [
          _vm._v("\n    右上角\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open2 } }, [
          _vm._v("\n    右下角\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open3 } }, [
          _vm._v("\n    左下角\n  ")
        ]),
        _vm._v(" "),
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open4 } }, [
          _vm._v("\n    左上角\n  ")
        ])
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      open1() {
        this.$notify({
          title: '自定义位置',
          message: '右上角弹出的消息'
        });
      },

      open2() {
        this.$notify({
          title: '自定义位置',
          message: '右下角弹出的消息',
          position: 'bottom-right'
        });
      },

      open3() {
        this.$notify({
          title: '自定义位置',
          message: '左下角弹出的消息',
          position: 'bottom-left'
        });
      },

      open4() {
        this.$notify({
          title: '自定义位置',
          message: '左上角弹出的消息',
          position: 'top-left'
        });
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
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open } }, [
          _vm._v("\n    偏移的消息\n  ")
        ])
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      open() {
        this.$notify({
          title: '偏移',
          message: '这是一条带有偏移的提示消息',
          offset: 100
        });
      }
    }
  }
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
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open } }, [
          _vm._v("\n    使用 HTML 片段\n  ")
        ])
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      open() {
        this.$notify({
          title: 'HTML 片段',
          dangerouslyUseHTMLString: true,
          message: '<strong>这是 <i>HTML</i> 片段</strong>'
        });
      }
    }
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
        _c("el-button", { attrs: { plain: "" }, on: { click: _vm.open } }, [
          _vm._v("\n    隐藏关闭按钮\n  ")
        ])
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    methods: {
      open() {
        this.$notify.success({
          title: 'Info',
          message: '这是一条没有关闭按钮的消息',
          showClose: false
        });
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
  