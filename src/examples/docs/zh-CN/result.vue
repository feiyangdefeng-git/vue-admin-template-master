
    <template>
      <section class="content element-doc">
        <h2 id="result-jie-guo"><a class="header-anchor" href="#result-jie-guo">¶</a> Result 结果</h2>
<p>用于对用户的操作结果或者异常状态做反馈。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-row&gt;
  &lt;el-col :sm=&quot;12&quot; :lg=&quot;6&quot;&gt;
    &lt;el-result icon=&quot;success&quot; title=&quot;成功提示&quot; subTitle=&quot;请根据提示进行操作&quot;&gt;
      &lt;template slot=&quot;extra&quot;&gt;
        &lt;el-button type=&quot;primary&quot; size=&quot;medium&quot;&gt;返回&lt;/el-button&gt;
      &lt;/template&gt;
    &lt;/el-result&gt;
  &lt;/el-col&gt;
  &lt;el-col :sm=&quot;12&quot; :lg=&quot;6&quot;&gt;
    &lt;el-result icon=&quot;warning&quot; title=&quot;警告提示&quot; subTitle=&quot;请根据提示进行操作&quot;&gt;
      &lt;template slot=&quot;extra&quot;&gt;
        &lt;el-button type=&quot;primary&quot; size=&quot;medium&quot;&gt;返回&lt;/el-button&gt;
      &lt;/template&gt;
    &lt;/el-result&gt;
  &lt;/el-col&gt;
  &lt;el-col :sm=&quot;12&quot; :lg=&quot;6&quot;&gt;
    &lt;el-result icon=&quot;error&quot; title=&quot;错误提示&quot; subTitle=&quot;请根据提示进行操作&quot;&gt;
      &lt;template slot=&quot;extra&quot;&gt;
        &lt;el-button type=&quot;primary&quot; size=&quot;medium&quot;&gt;返回&lt;/el-button&gt;
      &lt;/template&gt;
    &lt;/el-result&gt;
  &lt;/el-col&gt;
  &lt;el-col :sm=&quot;12&quot; :lg=&quot;6&quot;&gt;
    &lt;el-result icon=&quot;info&quot; title=&quot;信息提示&quot; subTitle=&quot;请根据提示进行操作&quot;&gt;
      &lt;template slot=&quot;extra&quot;&gt;
        &lt;el-button type=&quot;primary&quot; size=&quot;medium&quot;&gt;返回&lt;/el-button&gt;
      &lt;/template&gt;
    &lt;/el-result&gt;
  &lt;/el-col&gt;
&lt;/el-row&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-nei-rong"><a class="header-anchor" href="#zi-ding-yi-nei-rong">¶</a> 自定义内容</h3>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-result title=&quot;404&quot; subTitle=&quot;抱歉，请求错误&quot;&gt;
  &lt;template slot=&quot;icon&quot;&gt;
    &lt;el-image src=&quot;https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png&quot;&gt;&lt;/el-image&gt;
  &lt;/template&gt;
  &lt;template slot=&quot;extra&quot;&gt;
    &lt;el-button type=&quot;primary&quot; size=&quot;medium&quot;&gt;返回&lt;/el-button&gt;
  &lt;/template&gt;
&lt;/el-result&gt;
</code></pre></template></demo-block><h3 id="result-attributes"><a class="header-anchor" href="#result-attributes">¶</a> Result Attributes</h3>
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
<td>sub-title</td>
<td>二级标题</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>icon</td>
<td>图标类型</td>
<td>string</td>
<td>success / warning / info / error</td>
<td>info</td>
</tr>
</tbody>
</table>
<h3 id="result-slots"><a class="header-anchor" href="#result-slots">¶</a> Result Slots</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>icon</td>
<td>自定义图标</td>
</tr>
<tr>
<td>title</td>
<td>自定义标题</td>
</tr>
<tr>
<td>subTitle</td>
<td>自定义二级标题</td>
</tr>
<tr>
<td>extra</td>
<td>自定义底部额外区域</td>
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
      _c(
        "el-row",
        [
          _c(
            "el-col",
            { attrs: { sm: 12, lg: 6 } },
            [
              _c(
                "el-result",
                {
                  attrs: {
                    icon: "success",
                    title: "成功提示",
                    subTitle: "请根据提示进行操作"
                  }
                },
                [
                  _c(
                    "template",
                    { slot: "extra" },
                    [
                      _c(
                        "el-button",
                        { attrs: { type: "primary", size: "medium" } },
                        [_vm._v("返回")]
                      )
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { sm: 12, lg: 6 } },
            [
              _c(
                "el-result",
                {
                  attrs: {
                    icon: "warning",
                    title: "警告提示",
                    subTitle: "请根据提示进行操作"
                  }
                },
                [
                  _c(
                    "template",
                    { slot: "extra" },
                    [
                      _c(
                        "el-button",
                        { attrs: { type: "primary", size: "medium" } },
                        [_vm._v("返回")]
                      )
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { sm: 12, lg: 6 } },
            [
              _c(
                "el-result",
                {
                  attrs: {
                    icon: "error",
                    title: "错误提示",
                    subTitle: "请根据提示进行操作"
                  }
                },
                [
                  _c(
                    "template",
                    { slot: "extra" },
                    [
                      _c(
                        "el-button",
                        { attrs: { type: "primary", size: "medium" } },
                        [_vm._v("返回")]
                      )
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "el-col",
            { attrs: { sm: 12, lg: 6 } },
            [
              _c(
                "el-result",
                {
                  attrs: {
                    icon: "info",
                    title: "信息提示",
                    subTitle: "请根据提示进行操作"
                  }
                },
                [
                  _c(
                    "template",
                    { slot: "extra" },
                    [
                      _c(
                        "el-button",
                        { attrs: { type: "primary", size: "medium" } },
                        [_vm._v("返回")]
                      )
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          )
        ],
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
  })(),"element-demo1": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-result",
        { attrs: { title: "404", subTitle: "抱歉，请求错误" } },
        [
          _c(
            "template",
            { slot: "icon" },
            [
              _c("el-image", {
                attrs: {
                  src:
                    "https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "template",
            { slot: "extra" },
            [
              _c("el-button", { attrs: { type: "primary", size: "medium" } }, [
                _vm._v("返回")
              ])
            ],
            1
          )
        ],
        2
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
  