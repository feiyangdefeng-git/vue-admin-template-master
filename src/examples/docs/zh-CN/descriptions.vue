
    <template>
      <section class="content element-doc">
        <h2 id="descriptions-miao-shu-lie-biao"><a class="header-anchor" href="#descriptions-miao-shu-lie-biao">¶</a> Descriptions 描述列表</h2>
<p>列表形式展示多个字段。</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<demo-block>
        
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-descriptions title=&quot;用户信息&quot;&gt;
    &lt;el-descriptions-item label=&quot;用户名&quot;&gt;kooriookami&lt;/el-descriptions-item&gt;
    &lt;el-descriptions-item label=&quot;手机号&quot;&gt;18100000000&lt;/el-descriptions-item&gt;
    &lt;el-descriptions-item label=&quot;居住地&quot;&gt;苏州市&lt;/el-descriptions-item&gt;
    &lt;el-descriptions-item label=&quot;备注&quot;&gt;
      &lt;el-tag size=&quot;small&quot;&gt;学校&lt;/el-tag&gt;
    &lt;/el-descriptions-item&gt;
    &lt;el-descriptions-item label=&quot;联系地址&quot;&gt;江苏省苏州市吴中区吴中大道 1188 号&lt;/el-descriptions-item&gt;
&lt;/el-descriptions&gt;
</code></pre></template></demo-block><h3 id="bu-tong-chi-cun"><a class="header-anchor" href="#bu-tong-chi-cun">¶</a> 不同尺寸</h3>
<demo-block>
        
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;template&gt;
  &lt;el-radio-group v-model=&quot;size&quot;&gt;
    &lt;el-radio label=&quot;&quot;&gt;默认&lt;/el-radio&gt;
    &lt;el-radio label=&quot;medium&quot;&gt;中等&lt;/el-radio&gt;
    &lt;el-radio label=&quot;small&quot;&gt;小型&lt;/el-radio&gt;
    &lt;el-radio label=&quot;mini&quot;&gt;超小&lt;/el-radio&gt;
  &lt;/el-radio-group&gt;

  &lt;el-descriptions class=&quot;margin-top&quot; title=&quot;带边框列表&quot; :column=&quot;3&quot; :size=&quot;size&quot; border&gt;
    &lt;template slot=&quot;extra&quot;&gt;
      &lt;el-button type=&quot;primary&quot; size=&quot;small&quot;&gt;操作&lt;/el-button&gt;
    &lt;/template&gt;
    &lt;el-descriptions-item&gt;
      &lt;template slot=&quot;label&quot;&gt;
        &lt;i class=&quot;el-icon-user&quot;&gt;&lt;/i&gt;
        用户名
      &lt;/template&gt;
      kooriookami
    &lt;/el-descriptions-item&gt;
    &lt;el-descriptions-item&gt;
      &lt;template slot=&quot;label&quot;&gt;
        &lt;i class=&quot;el-icon-mobile-phone&quot;&gt;&lt;/i&gt;
        手机号
      &lt;/template&gt;
      18100000000
    &lt;/el-descriptions-item&gt;
    &lt;el-descriptions-item&gt;
      &lt;template slot=&quot;label&quot;&gt;
        &lt;i class=&quot;el-icon-location-outline&quot;&gt;&lt;/i&gt;
        居住地
      &lt;/template&gt;
      苏州市
    &lt;/el-descriptions-item&gt;
    &lt;el-descriptions-item&gt;
      &lt;template slot=&quot;label&quot;&gt;
        &lt;i class=&quot;el-icon-tickets&quot;&gt;&lt;/i&gt;
        备注
      &lt;/template&gt;
      &lt;el-tag size=&quot;small&quot;&gt;学校&lt;/el-tag&gt;
    &lt;/el-descriptions-item&gt;
    &lt;el-descriptions-item&gt;
      &lt;template slot=&quot;label&quot;&gt;
        &lt;i class=&quot;el-icon-office-building&quot;&gt;&lt;/i&gt;
        联系地址
      &lt;/template&gt;
      江苏省苏州市吴中区吴中大道 1188 号
    &lt;/el-descriptions-item&gt;
  &lt;/el-descriptions&gt;

  &lt;el-descriptions class=&quot;margin-top&quot; title=&quot;无边框列表&quot; :column=&quot;3&quot; :size=&quot;size&quot;&gt;
    &lt;template slot=&quot;extra&quot;&gt;
      &lt;el-button type=&quot;primary&quot; size=&quot;small&quot;&gt;操作&lt;/el-button&gt;
    &lt;/template&gt;
    &lt;el-descriptions-item label=&quot;用户名&quot;&gt;kooriookami&lt;/el-descriptions-item&gt;
    &lt;el-descriptions-item label=&quot;手机号&quot;&gt;18100000000&lt;/el-descriptions-item&gt;
    &lt;el-descriptions-item label=&quot;居住地&quot;&gt;苏州市&lt;/el-descriptions-item&gt;
    &lt;el-descriptions-item label=&quot;备注&quot;&gt;
      &lt;el-tag size=&quot;small&quot;&gt;学校&lt;/el-tag&gt;
    &lt;/el-descriptions-item&gt;
    &lt;el-descriptions-item label=&quot;联系地址&quot;&gt;江苏省苏州市吴中区吴中大道 1188 号&lt;/el-descriptions-item&gt;
  &lt;/el-descriptions&gt;
&lt;/template&gt;

&lt;script&gt;
  export default {
    data () {
      return {
        size: ''
      };
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="chui-zhi-lie-biao"><a class="header-anchor" href="#chui-zhi-lie-biao">¶</a> 垂直列表</h3>
<demo-block>
        
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-descriptions title=&quot;垂直带边框列表&quot; direction=&quot;vertical&quot; :column=&quot;4&quot; border&gt;
  &lt;el-descriptions-item label=&quot;用户名&quot;&gt;kooriookami&lt;/el-descriptions-item&gt;
  &lt;el-descriptions-item label=&quot;手机号&quot;&gt;18100000000&lt;/el-descriptions-item&gt;
  &lt;el-descriptions-item label=&quot;居住地&quot; :span=&quot;2&quot;&gt;苏州市&lt;/el-descriptions-item&gt;
  &lt;el-descriptions-item label=&quot;备注&quot;&gt;
    &lt;el-tag size=&quot;small&quot;&gt;学校&lt;/el-tag&gt;
  &lt;/el-descriptions-item&gt;
  &lt;el-descriptions-item label=&quot;联系地址&quot;&gt;江苏省苏州市吴中区吴中大道 1188 号&lt;/el-descriptions-item&gt;
&lt;/el-descriptions&gt;

&lt;el-descriptions class=&quot;margin-top&quot; title=&quot;垂直无边框列表&quot; :column=&quot;4&quot; direction=&quot;vertical&quot;&gt;
  &lt;el-descriptions-item label=&quot;用户名&quot;&gt;kooriookami&lt;/el-descriptions-item&gt;
  &lt;el-descriptions-item label=&quot;手机号&quot;&gt;18100000000&lt;/el-descriptions-item&gt;
  &lt;el-descriptions-item label=&quot;居住地&quot; :span=&quot;2&quot;&gt;苏州市&lt;/el-descriptions-item&gt;
  &lt;el-descriptions-item label=&quot;备注&quot;&gt;
    &lt;el-tag size=&quot;small&quot;&gt;学校&lt;/el-tag&gt;
  &lt;/el-descriptions-item&gt;
  &lt;el-descriptions-item label=&quot;联系地址&quot;&gt;江苏省苏州市吴中区吴中大道 1188 号&lt;/el-descriptions-item&gt;
&lt;/el-descriptions&gt;
</code></pre></template></demo-block><h3 id="zi-ding-yi-yang-shi"><a class="header-anchor" href="#zi-ding-yi-yang-shi">¶</a> 自定义样式</h3>
<demo-block>
        
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;el-descriptions title=&quot;自定义样式列表&quot; :column=&quot;3&quot; border&gt;
  &lt;el-descriptions-item label=&quot;用户名&quot; label-class-name=&quot;my-label&quot; content-class-name=&quot;my-content&quot;&gt;kooriookami&lt;/el-descriptions-item&gt;
  &lt;el-descriptions-item label=&quot;手机号&quot;&gt;18100000000&lt;/el-descriptions-item&gt;
  &lt;el-descriptions-item label=&quot;居住地&quot;&gt;苏州市&lt;/el-descriptions-item&gt;
  &lt;el-descriptions-item label=&quot;备注&quot;&gt;
    &lt;el-tag size=&quot;small&quot;&gt;学校&lt;/el-tag&gt;
  &lt;/el-descriptions-item&gt;
  &lt;el-descriptions-item label=&quot;联系地址&quot; :contentStyle=&quot;{'text-align': 'right'}&quot;&gt;江苏省苏州市吴中区吴中大道 1188 号&lt;/el-descriptions-item&gt;
&lt;/el-descriptions&gt;
&lt;style&gt;
  .my-label {
    background: #E1F3D8;
  }

  .my-content {
    background: #FDE2E2;
  }
&lt;/style&gt;
</code></pre></template></demo-block><h3 id="descriptions-attributes"><a class="header-anchor" href="#descriptions-attributes">¶</a> Descriptions Attributes</h3>
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
<td>border</td>
<td>是否带有边框</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>column</td>
<td>一行 <code>Descriptions Item</code> 的数量</td>
<td>number</td>
<td>—</td>
<td>3</td>
</tr>
<tr>
<td>direction</td>
<td>排列的方向</td>
<td>string</td>
<td>vertical / horizontal</td>
<td>horizontal</td>
</tr>
<tr>
<td>size</td>
<td>列表的尺寸</td>
<td>string</td>
<td>medium / small / mini</td>
<td>—</td>
</tr>
<tr>
<td>title</td>
<td>标题文本，显示在左上方</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>extra</td>
<td>操作区文本，显示在右上方</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>colon</td>
<td>是否显示冒号</td>
<td>boolean</td>
<td>—</td>
<td>true</td>
</tr>
<tr>
<td>labelClassName</td>
<td>自定义标签类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>contentClassName</td>
<td>自定义内容类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>labelStyle</td>
<td>自定义标签样式</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>contentStyle</td>
<td>自定义内容样式</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="descriptions-slots"><a class="header-anchor" href="#descriptions-slots">¶</a> Descriptions Slots</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>自定义标题，显示在左上方</td>
</tr>
<tr>
<td>extra</td>
<td>自定义操作区，显示在右上方</td>
</tr>
</tbody>
</table>
<h3 id="descriptions-item-attributes"><a class="header-anchor" href="#descriptions-item-attributes">¶</a> Descriptions Item Attributes</h3>
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
<td>label</td>
<td>标签文本</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>span</td>
<td>列的数量</td>
<td>number</td>
<td>—</td>
<td>1</td>
</tr>
<tr>
<td>labelClassName</td>
<td>自定义标签类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>contentClassName</td>
<td>自定义内容类名</td>
<td>string</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>labelStyle</td>
<td>自定义标签样式</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
<tr>
<td>contentStyle</td>
<td>自定义内容样式</td>
<td>object</td>
<td>—</td>
<td>—</td>
</tr>
</tbody>
</table>
<h3 id="descriptions-item-slots"><a class="header-anchor" href="#descriptions-item-slots">¶</a> Descriptions Item Slots</h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>自定义标签文本</td>
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
        "el-descriptions",
        { attrs: { title: "用户信息" } },
        [
          _c("el-descriptions-item", { attrs: { label: "用户名" } }, [
            _vm._v("kooriookami")
          ]),
          _vm._v(" "),
          _c("el-descriptions-item", { attrs: { label: "手机号" } }, [
            _vm._v("18100000000")
          ]),
          _vm._v(" "),
          _c("el-descriptions-item", { attrs: { label: "居住地" } }, [
            _vm._v("苏州市")
          ]),
          _vm._v(" "),
          _c(
            "el-descriptions-item",
            { attrs: { label: "备注" } },
            [_c("el-tag", { attrs: { size: "small" } }, [_vm._v("学校")])],
            1
          ),
          _vm._v(" "),
          _c("el-descriptions-item", { attrs: { label: "联系地址" } }, [
            _vm._v("江苏省苏州市吴中区吴中大道 1188 号")
          ])
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
      [
        _c(
          "el-radio-group",
          {
            model: {
              value: _vm.size,
              callback: function($$v) {
                _vm.size = $$v
              },
              expression: "size"
            }
          },
          [
            _c("el-radio", { attrs: { label: "" } }, [_vm._v("默认")]),
            _vm._v(" "),
            _c("el-radio", { attrs: { label: "medium" } }, [_vm._v("中等")]),
            _vm._v(" "),
            _c("el-radio", { attrs: { label: "small" } }, [_vm._v("小型")]),
            _vm._v(" "),
            _c("el-radio", { attrs: { label: "mini" } }, [_vm._v("超小")])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "el-descriptions",
          {
            staticClass: "margin-top",
            attrs: {
              title: "带边框列表",
              column: 3,
              size: _vm.size,
              border: ""
            }
          },
          [
            _c(
              "template",
              { slot: "extra" },
              [
                _c("el-button", { attrs: { type: "primary", size: "small" } }, [
                  _vm._v("操作")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "el-descriptions-item",
              [
                _c("template", { slot: "label" }, [
                  _c("i", { staticClass: "el-icon-user" }),
                  _vm._v("\n        用户名\n      ")
                ]),
                _vm._v("\n      kooriookami\n    ")
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "el-descriptions-item",
              [
                _c("template", { slot: "label" }, [
                  _c("i", { staticClass: "el-icon-mobile-phone" }),
                  _vm._v("\n        手机号\n      ")
                ]),
                _vm._v("\n      18100000000\n    ")
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "el-descriptions-item",
              [
                _c("template", { slot: "label" }, [
                  _c("i", { staticClass: "el-icon-location-outline" }),
                  _vm._v("\n        居住地\n      ")
                ]),
                _vm._v("\n      苏州市\n    ")
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "el-descriptions-item",
              [
                _c("template", { slot: "label" }, [
                  _c("i", { staticClass: "el-icon-tickets" }),
                  _vm._v("\n        备注\n      ")
                ]),
                _vm._v(" "),
                _c("el-tag", { attrs: { size: "small" } }, [_vm._v("学校")])
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "el-descriptions-item",
              [
                _c("template", { slot: "label" }, [
                  _c("i", { staticClass: "el-icon-office-building" }),
                  _vm._v("\n        联系地址\n      ")
                ]),
                _vm._v("\n      江苏省苏州市吴中区吴中大道 1188 号\n    ")
              ],
              2
            )
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "el-descriptions",
          {
            staticClass: "margin-top",
            attrs: { title: "无边框列表", column: 3, size: _vm.size }
          },
          [
            _c(
              "template",
              { slot: "extra" },
              [
                _c("el-button", { attrs: { type: "primary", size: "small" } }, [
                  _vm._v("操作")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c("el-descriptions-item", { attrs: { label: "用户名" } }, [
              _vm._v("kooriookami")
            ]),
            _vm._v(" "),
            _c("el-descriptions-item", { attrs: { label: "手机号" } }, [
              _vm._v("18100000000")
            ]),
            _vm._v(" "),
            _c("el-descriptions-item", { attrs: { label: "居住地" } }, [
              _vm._v("苏州市")
            ]),
            _vm._v(" "),
            _c(
              "el-descriptions-item",
              { attrs: { label: "备注" } },
              [_c("el-tag", { attrs: { size: "small" } }, [_vm._v("学校")])],
              1
            ),
            _vm._v(" "),
            _c("el-descriptions-item", { attrs: { label: "联系地址" } }, [
              _vm._v("江苏省苏州市吴中区吴中大道 1188 号")
            ])
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

  
    const democomponentExport = {
    data () {
      return {
        size: ''
      };
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
      _c(
        "el-descriptions",
        {
          attrs: {
            title: "垂直带边框列表",
            direction: "vertical",
            column: 4,
            border: ""
          }
        },
        [
          _c("el-descriptions-item", { attrs: { label: "用户名" } }, [
            _vm._v("kooriookami")
          ]),
          _vm._v(" "),
          _c("el-descriptions-item", { attrs: { label: "手机号" } }, [
            _vm._v("18100000000")
          ]),
          _vm._v(" "),
          _c("el-descriptions-item", { attrs: { label: "居住地", span: 2 } }, [
            _vm._v("苏州市")
          ]),
          _vm._v(" "),
          _c(
            "el-descriptions-item",
            { attrs: { label: "备注" } },
            [_c("el-tag", { attrs: { size: "small" } }, [_vm._v("学校")])],
            1
          ),
          _vm._v(" "),
          _c("el-descriptions-item", { attrs: { label: "联系地址" } }, [
            _vm._v("江苏省苏州市吴中区吴中大道 1188 号")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "el-descriptions",
        {
          staticClass: "margin-top",
          attrs: { title: "垂直无边框列表", column: 4, direction: "vertical" }
        },
        [
          _c("el-descriptions-item", { attrs: { label: "用户名" } }, [
            _vm._v("kooriookami")
          ]),
          _vm._v(" "),
          _c("el-descriptions-item", { attrs: { label: "手机号" } }, [
            _vm._v("18100000000")
          ]),
          _vm._v(" "),
          _c("el-descriptions-item", { attrs: { label: "居住地", span: 2 } }, [
            _vm._v("苏州市")
          ]),
          _vm._v(" "),
          _c(
            "el-descriptions-item",
            { attrs: { label: "备注" } },
            [_c("el-tag", { attrs: { size: "small" } }, [_vm._v("学校")])],
            1
          ),
          _vm._v(" "),
          _c("el-descriptions-item", { attrs: { label: "联系地址" } }, [
            _vm._v("江苏省苏州市吴中区吴中大道 1188 号")
          ])
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
  })(),"element-demo3": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "el-descriptions",
        { attrs: { title: "自定义样式列表", column: 3, border: "" } },
        [
          _c(
            "el-descriptions-item",
            {
              attrs: {
                label: "用户名",
                "label-class-name": "my-label",
                "content-class-name": "my-content"
              }
            },
            [_vm._v("kooriookami")]
          ),
          _vm._v(" "),
          _c("el-descriptions-item", { attrs: { label: "手机号" } }, [
            _vm._v("18100000000")
          ]),
          _vm._v(" "),
          _c("el-descriptions-item", { attrs: { label: "居住地" } }, [
            _vm._v("苏州市")
          ]),
          _vm._v(" "),
          _c(
            "el-descriptions-item",
            { attrs: { label: "备注" } },
            [_c("el-tag", { attrs: { size: "small" } }, [_vm._v("学校")])],
            1
          ),
          _vm._v(" "),
          _c(
            "el-descriptions-item",
            {
              attrs: {
                label: "联系地址",
                contentStyle: { "text-align": "right" }
              }
            },
            [_vm._v("江苏省苏州市吴中区吴中大道 1188 号")]
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
  })(),
        }
      }
    </script>
  