
    <template>
      <section class="content element-doc">
        <h2 id="empty-kong-zhuang-tai"><a class="header-anchor" href="#empty-kong-zhuang-tai">¶</a> Empty 空状态</h2>
<p>空状态时的占位提示。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-empty description=&quot;描述文字&quot;&gt;&lt;/el-empty&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-tu-pian"><a class="header-anchor" href="#zi-ding-yi-tu-pian">¶</a> 自定义图片</h3>
<p>通过设置 <code>image</code> 属性传入图片 URL。</p>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-empty image=&quot;https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png&quot;&gt;&lt;/el-empty&gt;
</code></pre></template></demo-block><h3 id="tu-pian-chi-cun"><a class="header-anchor" href="#tu-pian-chi-cun">¶</a> 图片尺寸</h3>
<p>通过设置 <code>image-size</code> 属性来控制图片大小。</p>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-empty :image-size=&quot;200&quot;&gt;&lt;/el-empty&gt;
</code></pre></template></demo-block><h3 id="di-bu-nei-rong"><a class="header-anchor" href="#di-bu-nei-rong">¶</a> 底部内容</h3>
<p>使用默认插槽可在底部插入内容。</p>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-empty&gt;
  &lt;el-button type=&quot;primary&quot;&gt;按钮&lt;/el-button&gt;
&lt;/el-empty&gt;
</code></pre></template></demo-block><h3 id="empty-attributes"><a class="header-anchor" href="#empty-attributes">¶</a> Empty Attributes</h3>
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
<td>image</td>
<td>图片地址</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>image-size</td>
<td>图片大小（宽度）</td>
<td>number</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>description</td>
<td>文本描述</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="empty-slots"><a class="header-anchor" href="#empty-slots">¶</a> Empty Slots</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>default</td>
<td>自定义底部内容</td>
</tr>
<tr>
<td>image</td>
<td>自定义图片</td>
</tr>
<tr>
<td>description</td>
<td>自定义描述文字</td>
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
  return _c("div", [_c("el-empty", { attrs: { description: "描述文字" } })], 1)
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
  return _c(
    "div",
    [
      _c("el-empty", {
        attrs: {
          image:
            "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
        }
      })
    ],
    1
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
  return _c("div", [_c("el-empty", { attrs: { "image-size": 200 } })], 1)
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
      _c(
        "el-empty",
        [_c("el-button", { attrs: { type: "primary" } }, [_vm._v("按钮")])],
        1
      )
    ],
    1
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
  })(),
        }
      }
    </script>
  