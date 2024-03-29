
    <template>
      <section class="content element-doc">
        <h2 id="image-tu-pian"><a class="header-anchor" href="#image-tu-pian">¶</a> Image 图片</h2>
<p>图片容器，在保留原生img的特性下，支持懒加载，自定义占位、加载失败等</p>
<h3 id="ji-chu-yong-fa"><a class="header-anchor" href="#ji-chu-yong-fa">¶</a> 基础用法</h3>
<demo-block>
        <div><p>可通过<code>fit</code>确定图片如何适应到容器框，同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a>。</p>
</div>
        <template slot="source"><element-demo0 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-image&quot;&gt;
  &lt;div class=&quot;block&quot; v-for=&quot;fit in fits&quot; :key=&quot;fit&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;{{ fit }}&lt;/span&gt;
    &lt;el-image
      style=&quot;width: 100px; height: 100px&quot;
      :src=&quot;url&quot;
      :fit=&quot;fit&quot;&gt;&lt;/el-image&gt;
  &lt;/div&gt;
&lt;/div&gt;

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
</code></pre></template></demo-block><h3 id="zhan-wei-nei-rong"><a class="header-anchor" href="#zhan-wei-nei-rong">¶</a> 占位内容</h3>
<demo-block>
        <div><p>可通过<code>slot = placeholder</code>可自定义占位内容</p>
</div>
        <template slot="source"><element-demo1 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-image__placeholder&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;默认&lt;/span&gt;
    &lt;el-image :src=&quot;src&quot;&gt;&lt;/el-image&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;自定义&lt;/span&gt;
    &lt;el-image :src=&quot;src&quot;&gt;
      &lt;div slot=&quot;placeholder&quot; class=&quot;image-slot&quot;&gt;
        加载中&lt;span class=&quot;dot&quot;&gt;...&lt;/span&gt;
      &lt;/div&gt;
    &lt;/el-image&gt;
  &lt;/div&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="jia-zai-shi-bai"><a class="header-anchor" href="#jia-zai-shi-bai">¶</a> 加载失败</h3>
<demo-block>
        <div><p>可通过<code>slot = error</code>可自定义加载失败内容</p>
</div>
        <template slot="source"><element-demo2 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-image__error&quot;&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;默认&lt;/span&gt;
    &lt;el-image&gt;&lt;/el-image&gt;
  &lt;/div&gt;
  &lt;div class=&quot;block&quot;&gt;
    &lt;span class=&quot;demonstration&quot;&gt;自定义&lt;/span&gt;
    &lt;el-image&gt;
      &lt;div slot=&quot;error&quot; class=&quot;image-slot&quot;&gt;
        &lt;i class=&quot;el-icon-picture-outline&quot;&gt;&lt;/i&gt;
      &lt;/div&gt;
    &lt;/el-image&gt;
  &lt;/div&gt;
&lt;/div&gt;
</code></pre></template></demo-block><h3 id="lan-jia-zai"><a class="header-anchor" href="#lan-jia-zai">¶</a> 懒加载</h3>
<demo-block>
        <div><p>可通过<code>lazy</code>开启懒加载功能，当图片滚动到可视范围内才会加载。可通过<code>scroll-container</code>来设置滚动容器，若未定义，则为最近一个<code>overflow</code>值为<code>auto</code>或<code>scroll</code>的父元素。</p>
</div>
        <template slot="source"><element-demo3 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-image__lazy&quot;&gt;
  &lt;el-image v-for=&quot;url in urls&quot; :key=&quot;url&quot; :src=&quot;url&quot; lazy&gt;&lt;/el-image&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
      }
    }
  }
&lt;/script&gt;
</code></pre></template></demo-block><h3 id="da-tu-yu-lan"><a class="header-anchor" href="#da-tu-yu-lan">¶</a> 大图预览</h3>
<demo-block>
        <div><p>可通过 <code>previewSrcList</code> 开启预览大图的功能。</p>
</div>
        <template slot="source"><element-demo4 /></template>
        <template slot="highlight"><pre v-pre><code class="html">&lt;div class=&quot;demo-image__preview&quot;&gt;
  &lt;el-image 
    style=&quot;width: 100px; height: 100px&quot;
    :src=&quot;url&quot; 
    :preview-src-list=&quot;srcList&quot;&gt;
  &lt;/el-image&gt;
&lt;/div&gt;

&lt;script&gt;
  export default {
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
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
<td>src</td>
<td>图片源，同原生</td>
<td>string</td>
<td>—</td>
<td>-</td>
</tr>
<tr>
<td>fit</td>
<td>确定图片如何适应容器框，同原生 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit">object-fit</a></td>
<td>string</td>
<td>fill / contain / cover / none / scale-down</td>
<td>-</td>
</tr>
<tr>
<td>alt</td>
<td>原生 alt</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>referrer-policy</td>
<td>原生 referrerPolicy</td>
<td>string</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>lazy</td>
<td>是否开启懒加载</td>
<td>boolean</td>
<td>—</td>
<td>false</td>
</tr>
<tr>
<td>scroll-container</td>
<td>开启懒加载后，监听 scroll 事件的容器</td>
<td>string / HTMLElement</td>
<td>—</td>
<td>最近一个 overflow 值为 auto 或 scroll 的父元素</td>
</tr>
<tr>
<td>preview-src-list</td>
<td>开启图片预览功能</td>
<td>Array</td>
<td>—</td>
<td>-</td>
</tr>
<tr>
<td>z-index</td>
<td>设置图片预览的 z-index</td>
<td>Number</td>
<td>—</td>
<td>2000</td>
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
<td>load</td>
<td>图片加载成功触发</td>
<td>(e: Event)</td>
</tr>
<tr>
<td>error</td>
<td>图片加载失败触发</td>
<td>(e: Error)</td>
</tr>
</tbody>
</table>
<h3 id="slots"><a class="header-anchor" href="#slots">¶</a> Slots</h3>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>placeholder</td>
<td>图片未加载的占位内容</td>
</tr>
<tr>
<td>error</td>
<td>加载失败的内容</td>
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
      { staticClass: "demo-image" },
      _vm._l(_vm.fits, function(fit) {
        return _c(
          "div",
          { key: fit, staticClass: "block" },
          [
            _c("span", { staticClass: "demonstration" }, [_vm._v(_vm._s(fit))]),
            _vm._v(" "),
            _c("el-image", {
              staticStyle: { width: "100px", height: "100px" },
              attrs: { src: _vm.url, fit: fit }
            })
          ],
          1
        )
      }),
      0
    )
  ])
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
  })(),"element-demo1": (function() {
    
    var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "demo-image__placeholder" }, [
      _c(
        "div",
        { staticClass: "block" },
        [
          _c("span", { staticClass: "demonstration" }, [_vm._v("默认")]),
          _vm._v(" "),
          _c("el-image", { attrs: { src: _vm.src } })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "block" },
        [
          _c("span", { staticClass: "demonstration" }, [_vm._v("自定义")]),
          _vm._v(" "),
          _c("el-image", { attrs: { src: _vm.src } }, [
            _c(
              "div",
              {
                staticClass: "image-slot",
                attrs: { slot: "placeholder" },
                slot: "placeholder"
              },
              [
                _vm._v("\n        加载中"),
                _c("span", { staticClass: "dot" }, [_vm._v("...")])
              ]
            )
          ])
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg'
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
  return _c("div", [
    _c("div", { staticClass: "demo-image__error" }, [
      _c(
        "div",
        { staticClass: "block" },
        [
          _c("span", { staticClass: "demonstration" }, [_vm._v("默认")]),
          _vm._v(" "),
          _c("el-image")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "block" },
        [
          _c("span", { staticClass: "demonstration" }, [_vm._v("自定义")]),
          _vm._v(" "),
          _c("el-image", [
            _c(
              "div",
              {
                staticClass: "image-slot",
                attrs: { slot: "error" },
                slot: "error"
              },
              [_c("i", { staticClass: "el-icon-picture-outline" })]
            )
          ])
        ],
        1
      )
    ])
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
      { staticClass: "demo-image__lazy" },
      _vm._l(_vm.urls, function(url) {
        return _c("el-image", { key: url, attrs: { src: url, lazy: "" } })
      }),
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        urls: [
          'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
          'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
          'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
          'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
          'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
          'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
        ]
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "demo-image__preview" },
      [
        _c("el-image", {
          staticStyle: { width: "100px", height: "100px" },
          attrs: { src: _vm.url, "preview-src-list": _vm.srcList }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true

  
    const democomponentExport = {
    data() {
      return {
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
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
  