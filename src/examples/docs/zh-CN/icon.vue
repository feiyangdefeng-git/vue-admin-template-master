
    <template>
      <section class="content element-doc">
        <h2 id="icon-tu-biao"><a class="header-anchor" href="#icon-tu-biao">¶</a> Icon 图标</h2>
<p>提供了一套常用的图标集合。</p>
<h3 id="shi-yong-fang-fa"><a class="header-anchor" href="#shi-yong-fang-fa">¶</a> 使用方法</h3>
<p>直接通过设置类名为 <code>el-icon-iconName</code> 来使用即可。例如：</p>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;i class=&quot;el-icon-edit&quot;&gt;&lt;/i&gt;
&lt;i class=&quot;el-icon-share&quot;&gt;&lt;/i&gt;
&lt;i class=&quot;el-icon-delete&quot;&gt;&lt;/i&gt;
&lt;el-button type=&quot;primary&quot; icon=&quot;el-icon-search&quot;&gt;搜索&lt;/el-button&gt;

</code></pre></template></demo-block><h3 id="tu-biao-ji-he"><a class="header-anchor" href="#tu-biao-ji-he">¶</a> 图标集合</h3>
<ul class="icon-list">
  <li v-for="name in $icon" :key="name">
    <span>
      <i :class="'el-icon-' + name"></i>
      <span class="icon-name">{{'el-icon-' + name}}</span>
    </span>
  </li>
</ul>

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
      _c("i", { staticClass: "el-icon-edit" }),
      _vm._v(" "),
      _c("i", { staticClass: "el-icon-share" }),
      _vm._v(" "),
      _c("i", { staticClass: "el-icon-delete" }),
      _vm._v(" "),
      _c("el-button", { attrs: { type: "primary", icon: "el-icon-search" } }, [
        _vm._v("搜索")
      ])
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
  