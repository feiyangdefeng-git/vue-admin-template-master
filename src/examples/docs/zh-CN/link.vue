
    <template>
      <section class="content element-doc">
        <h2 id="link-wen-zi-lian-jie"><a class="header-anchor" href="#link-wen-zi-lian-jie">¶</a> Link 文字链接</h2>
<p>文字超链接</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<p>基础的文字链接用法。</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
  &lt;el-link href=&quot;https://element.eleme.io&quot; target=&quot;_blank&quot;&gt;默认链接&lt;/el-link&gt;
  &lt;el-link type=&quot;primary&quot;&gt;主要链接&lt;/el-link&gt;
  &lt;el-link type=&quot;success&quot;&gt;成功链接&lt;/el-link&gt;
  &lt;el-link type=&quot;warning&quot;&gt;警告链接&lt;/el-link&gt;
  &lt;el-link type=&quot;danger&quot;&gt;危险链接&lt;/el-link&gt;
  &lt;el-link type=&quot;info&quot;&gt;信息链接&lt;/el-link&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="jin-yong-zhuang-tai"><a class="header-anchor" href="#jin-yong-zhuang-tai">¶</a> 禁用状态</h3>
<p>文字链接不可用状态。</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
  &lt;el-link disabled&gt;默认链接&lt;/el-link&gt;
  &lt;el-link type=&quot;primary&quot; disabled&gt;主要链接&lt;/el-link&gt;
  &lt;el-link type=&quot;success&quot; disabled&gt;成功链接&lt;/el-link&gt;
  &lt;el-link type=&quot;warning&quot; disabled&gt;警告链接&lt;/el-link&gt;
  &lt;el-link type=&quot;danger&quot; disabled&gt;危险链接&lt;/el-link&gt;
  &lt;el-link type=&quot;info&quot; disabled&gt;信息链接&lt;/el-link&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="xia-hua-xian"><a class="header-anchor" href="#xia-hua-xian">¶</a> 下划线</h3>
<p>文字链接下划线。</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
  &lt;el-link :underline=&quot;false&quot;&gt;无下划线&lt;/el-link&gt;
  &lt;el-link&gt;有下划线&lt;/el-link&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="tu-biao"><a class="header-anchor" href="#tu-biao">¶</a> 图标</h3>
<p>带图标的文字链接可增强辨识度。</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div&gt;
  &lt;el-link icon=&quot;el-icon-edit&quot;&gt;编辑&lt;/el-link&gt;
  &lt;el-link&gt;查看&lt;i class=&quot;el-icon-view el-icon--right&quot;&gt;&lt;/i&gt; &lt;/el-link&gt;
&lt;/div&gt;
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
<td>type</td>
<td>类型</td>
<td>string</td>
<td>primary / success / warning / danger / info</td>
<td>default</td>
</tr>
<tr>
<td>underline</td>
<td>是否下划线</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>disabled</td>
<td>是否禁用状态</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>href</td>
<td>原生 href 属性</td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
<tr>
<td>icon</td>
<td>图标类名</td>
<td>string</td>
<td>—</td>
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
  return _c("div", [
    _c(
      "div",
      [
        _c(
          "el-link",
          { attrs: { href: "https://element.eleme.io", target: "_blank" } },
          [_vm._v("默认链接")]
        ),
        _vm._v(" "),
        _c("el-link", { attrs: { type: "primary" } }, [_vm._v("主要链接")]),
        _vm._v(" "),
        _c("el-link", { attrs: { type: "success" } }, [_vm._v("成功链接")]),
        _vm._v(" "),
        _c("el-link", { attrs: { type: "warning" } }, [_vm._v("警告链接")]),
        _vm._v(" "),
        _c("el-link", { attrs: { type: "danger" } }, [_vm._v("危险链接")]),
        _vm._v(" "),
        _c("el-link", { attrs: { type: "info" } }, [_vm._v("信息链接")])
      ],
      1
    )
  ])
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
  return _c("div", [
    _c(
      "div",
      [
        _c("el-link", { attrs: { disabled: "" } }, [_vm._v("默认链接")]),
        _vm._v(" "),
        _c("el-link", { attrs: { type: "primary", disabled: "" } }, [
          _vm._v("主要链接")
        ]),
        _vm._v(" "),
        _c("el-link", { attrs: { type: "success", disabled: "" } }, [
          _vm._v("成功链接")
        ]),
        _vm._v(" "),
        _c("el-link", { attrs: { type: "warning", disabled: "" } }, [
          _vm._v("警告链接")
        ]),
        _vm._v(" "),
        _c("el-link", { attrs: { type: "danger", disabled: "" } }, [
          _vm._v("危险链接")
        ]),
        _vm._v(" "),
        _c("el-link", { attrs: { type: "info", disabled: "" } }, [
          _vm._v("信息链接")
        ])
      ],
      1
    )
  ])
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
  return _c("div", [
    _c(
      "div",
      [
        _c("el-link", { attrs: { underline: false } }, [_vm._v("无下划线")]),
        _vm._v(" "),
        _c("el-link", [_vm._v("有下划线")])
      ],
      1
    )
  ])
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
  return _c("div", [
    _c(
      "div",
      [
        _c("el-link", { attrs: { icon: "el-icon-edit" } }, [_vm._v("编辑")]),
        _vm._v(" "),
        _c("el-link", [
          _vm._v("查看"),
          _c("i", { staticClass: "el-icon-view el-icon--right" })
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {}
    return {
      render,
      staticRenderFns,
      ...democomponentExport
    }
  })(),
        }
      }
    </script>
  