
    <template>
      <section class="content element-doc">
        <h2 id="switch-kai-guan"><a class="header-anchor" href="#switch-kai-guan">¶</a> Switch 开关</h2>
<p>表示两种相互对立的状态间的切换，多用于触发「开/关」。</p>
<h3 id="ji-ben-yong-fa"><a class="header-anchor" href="#ji-ben-yong-fa">¶</a> 基本用法</h3>
<demo-block>
        <div><p>绑定<code>v-model</code>到一个<code>Boolean</code>类型的变量。可以使用<code>active-color</code>属性与<code>inactive-color</code>属性来设置开关的背景色。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-switch
  v-model=&quot;value&quot;
  active-color=&quot;#13ce66&quot;
  inactive-color=&quot;#ff4949&quot;&gt;
&lt;/el-switch&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: true
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="wen-zi-miao-shu"><a class="header-anchor" href="#wen-zi-miao-shu">¶</a> 文字描述</h3>
<demo-block>
        <div><p>使用<code>active-text</code>属性与<code>inactive-text</code>属性来设置开关的文字描述。</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-switch
  v-model=&quot;value1&quot;
  active-text=&quot;按月付费&quot;
  inactive-text=&quot;按年付费&quot;&gt;
&lt;/el-switch&gt;
&lt;el-switch
  style=&quot;display: block&quot;
  v-model=&quot;value2&quot;
  active-color=&quot;#13ce66&quot;
  inactive-color=&quot;#ff4949&quot;
  active-text=&quot;按月付费&quot;
  inactive-text=&quot;按年付费&quot;&gt;
&lt;/el-switch&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="kuo-zhan-de-value-lei-xing"><a class="header-anchor" href="#kuo-zhan-de-value-lei-xing">¶</a> 扩展的 value 类型</h3>
<demo-block>
        <div><p>设置<code>active-value</code>和<code>inactive-value</code>属性，接受<code>Boolean</code>, <code>String</code>或<code>Number</code>类型的值。</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-tooltip :content=&quot;'Switch value: ' + value&quot; placement=&quot;top&quot;&gt;
  &lt;el-switch
    v-model=&quot;value&quot;
    active-color=&quot;#13ce66&quot;
    inactive-color=&quot;#ff4949&quot;
    active-value=&quot;100&quot;
    inactive-value=&quot;0&quot;&gt;
  &lt;/el-switch&gt;
&lt;/el-tooltip&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        value: '100'
      }
    }
  };
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="jin-yong-zhuang-tai"><a class="header-anchor" href="#jin-yong-zhuang-tai">¶</a> 禁用状态</h3>
<demo-block>
        <div><p>设置<code>disabled</code>属性，接受一个<code>Boolean</code>，设置<code>true</code>即可禁用。</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-switch
  v-model=&quot;value1&quot;
  disabled&gt;
&lt;/el-switch&gt;
&lt;el-switch
  v-model=&quot;value2&quot;
  disabled&gt;
&lt;/el-switch&gt;
&lt;script&gt;
  export default {
    data() {
      return {
        value1: true,
        value2: false
      }
    }
  };
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
<td>value / v-model</td>
<td>绑定值</td>
<td>boolean / string / number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>width</td>
<td>switch 的宽度（像素）</td>
<td>number</td>
<td>—</td>
<td>40</td>
</tr>
<tr>
<td>active-icon-class</td>
<td>switch 打开时所显示图标的类名，设置此项会忽略 <code>active-text</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inactive-icon-class</td>
<td>switch 关闭时所显示图标的类名，设置此项会忽略 <code>inactive-text</code></td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>active-text</td>
<td>switch 打开时的文字描述</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>inactive-text</td>
<td>switch 关闭时的文字描述</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>active-value</td>
<td>switch 打开时的值</td>
<td>boolean / string / number</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>inactive-value</td>
<td>switch 关闭时的值</td>
<td>boolean / string / number</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>active-color</td>
<td>switch 打开时的背景色</td>
<td>string</td>
<td>—</td>
<td>#409EFF</td>
</tr>
<tr>
<td>inactive-color</td>
<td>switch 关闭时的背景色</td>
<td>string</td>
<td>—</td>
<td>#C0CCDA</td>
</tr>
<tr>
<td>name</td>
<td>switch 对应的 name 属性</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>validate-event</td>
<td>改变 switch 状态时是否触发表单的校验</td>
<td>boolean</td>
<td>-</td>
<td>true</td>
</tr>
</tbody>
</table>
<h3 id="events"><a class="header-anchor" href="#events">¶</a> Events</h3>
<table>
<thead>
<tr>
<th>事件名称</th>
<th>说明</th>
<th>回调参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>switch 状态发生变化时的回调函数</td>
<td>新状态的值</td>
</tr>
</tbody>
</table>
<h3 id="methods"><a class="header-anchor" href="#methods">¶</a> Methods</h3>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>focus</td>
<td>使 Switch 获取焦点</td>
<td>-</td>
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
      _c("el-switch", {
        attrs: { "active-color": "#13ce66", "inactive-color": "#ff4949" },
        model: {
          value: _vm.value,
          callback: function($$v) {
            _vm.value = $$v
          },
          expression: "value"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        value: true
      }
    }
  };
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
      _c("el-switch", {
        attrs: { "active-text": "按月付费", "inactive-text": "按年付费" },
        model: {
          value: _vm.value1,
          callback: function($$v) {
            _vm.value1 = $$v
          },
          expression: "value1"
        }
      }),
      _vm._v(" "),
      _c("el-switch", {
        staticStyle: { display: "block" },
        attrs: {
          "active-color": "#13ce66",
          "inactive-color": "#ff4949",
          "active-text": "按月付费",
          "inactive-text": "按年付费"
        },
        model: {
          value: _vm.value2,
          callback: function($$v) {
            _vm.value2 = $$v
          },
          expression: "value2"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  };
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
      _c(
        "el-tooltip",
        { attrs: { content: "Switch value: " + _vm.value, placement: "top" } },
        [
          _c("el-switch", {
            attrs: {
              "active-color": "#13ce66",
              "inactive-color": "#ff4949",
              "active-value": "100",
              "inactive-value": "0"
            },
            model: {
              value: _vm.value,
              callback: function($$v) {
                _vm.value = $$v
              },
              expression: "value"
            }
          })
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        value: '100'
      }
    }
  };
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
      _c("el-switch", {
        attrs: { disabled: "" },
        model: {
          value: _vm.value1,
          callback: function($$v) {
            _vm.value1 = $$v
          },
          expression: "value1"
        }
      }),
      _vm._v(" "),
      _c("el-switch", {
        attrs: { disabled: "" },
        model: {
          value: _vm.value2,
          callback: function($$v) {
            _vm.value2 = $$v
          },
          expression: "value2"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        value1: true,
        value2: false
      }
    }
  };
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
  