import"./pinia.js";import"./tinymce.js";import{E as p}from"./plugin.js";import{R as s,E as o,a as j}from"./Editor.js";import{M as m}from"./vue.js";const n={name:"domeVue3",components:{TinymceVue:p},data(){return{content:"dsdsdssfdddddddddddddddddddsd",tinymceOptions:{min_height:200,max_height:700,skeletonScreen:!0,base_url:"/v6/tinymce",external_plugins:{tpImportword:"v6/tinymce/tpImportword/plugin.js"},plugins:" code   autoresize tpCollapse tpTabs tpButtons  preview",toolbar:["|code tpIndent2em tpImportword | Preview"]}}}};n.methods?n.methods.source=function(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li><li ><span>34</span></li><li ><span>35</span></li><li ><span>36</span></li><li ><span>37</span></li><li ><span>38</span></li><li ><span>39</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:init</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">

<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;tinymce&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@tinymce-plugin/tinymce-vue&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em/plugin.js&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue3&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;dsdsdssfdddddddddddddddddddsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-comment">// custom_elements: &#x27;tp-collapse&#x27;,</span>
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/v6/tinymce&#x27;</span>,
                <span class="hljs-attr">external_plugins</span>:{
                  <span class="hljs-attr">tpImportword</span>: <span class="hljs-string">&#x27;v6/tinymce/tpImportword/plugin.js&#x27;</span>,
                },
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27; code   autoresize tpCollapse tpTabs tpButtons  preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code tpIndent2em tpImportword | Preview&#x27;</span>],
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`}:n.methods={source(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li><li ><span>34</span></li><li ><span>35</span></li><li ><span>36</span></li><li ><span>37</span></li><li ><span>38</span></li><li ><span>39</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:init</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">

<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;tinymce&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@tinymce-plugin/tinymce-vue&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em/plugin.js&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue3&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;dsdsdssfdddddddddddddddddddsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-comment">// custom_elements: &#x27;tp-collapse&#x27;,</span>
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/v6/tinymce&#x27;</span>,
                <span class="hljs-attr">external_plugins</span>:{
                  <span class="hljs-attr">tpImportword</span>: <span class="hljs-string">&#x27;v6/tinymce/tpImportword/plugin.js&#x27;</span>,
                },
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27; code   autoresize tpCollapse tpTabs tpButtons  preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code tpIndent2em tpImportword | Preview&#x27;</span>],
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`}};n.template=`<Preview class="demo-introduction_t_mr50a31661495750455_p_" :source="source()">
                                <template v-slot:demo><div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :init="tinymceOptions" ></tinymce-vue>
  </div>
  <div  v-html="content"></div>
</div></template>'
                                 
                              </Preview>`;const t={};t.methods={source(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li><li ><span>34</span></li><li ><span>35</span></li><li ><span>36</span></li><li ><span>37</span></li><li ><span>38</span></li><li ><span>39</span></li><li ><span>40</span></li><li ><span>41</span></li><li ><span>42</span></li><li ><span>43</span></li><li ><span>44</span></li><li ><span>45</span></li><li ><span>46</span></li><li ><span>47</span></li><li ><span>48</span></li><li ><span>49</span></li><li ><span>50</span></li><li ><span>51</span></li><li ><span>52</span></li><li ><span>53</span></li><li ><span>54</span></li><li ><span>55</span></li><li ><span>56</span></li><li ><span>57</span></li><li ><span>58</span></li><li ><span>59</span></li><li ><span>60</span></li><li ><span>61</span></li><li ><span>62</span></li><li ><span>63</span></li><li ><span>64</span></li><li ><span>65</span></li><li ><span>66</span></li><li ><span>67</span></li><li ><span>68</span></li><li ><span>69</span></li><li ><span>70</span></li><li ><span>71</span></li><li ><span>72</span></li><li ><span>73</span></li><li ><span>74</span></li><li ><span>75</span></li><li ><span>76</span></li><li ><span>77</span></li><li ><span>78</span></li><li ><span>79</span></li><li ><span>80</span></li><li ><span>81</span></li><li ><span>82</span></li><li ><span>83</span></li><li ><span>84</span></li><li ><span>85</span></li><li ><span>86</span></li><li ><span>87</span></li><li ><span>88</span></li><li ><span>89</span></li><li ><span>90</span></li><li ><span>91</span></li><li ><span>92</span></li><li ><span>93</span></li><li ><span>94</span></li><li ><span>95</span></li><li ><span>96</span></li><li ><span>97</span></li><li ><span>98</span></li><li ><span>99</span></li><li ><span>100</span></li><li ><span>101</span></li><li ><span>102</span></li><li ><span>103</span></li><li ><span>104</span></li><li ><span>105</span></li><li ><span>106</span></li><li ><span>107</span></li><li ><span>108</span></li><li ><span>109</span></li><li ><span>110</span></li><li ><span>111</span></li><li ><span>112</span></li><li ><span>113</span></li><li ><span>114</span></li><li ><span>115</span></li><li ><span>116</span></li><li ><span>117</span></li><li ><span>118</span></li><li ><span>119</span></li><li ><span>120</span></li><li ><span>121</span></li><li ><span>122</span></li><li ><span>123</span></li><li ><span>124</span></li><li ><span>125</span></li><li ><span>126</span></li><li ><span>127</span></li><li ><span>128</span></li><li ><span>129</span></li><li ><span>130</span></li><li ><span>131</span></li><li ><span>132</span></li><li ><span>133</span></li><li ><span>134</span></li><li ><span>135</span></li><li ><span>136</span></li><li ><span>137</span></li><li ><span>138</span></li><li ><span>139</span></li><li ><span>140</span></li><li ><span>141</span></li><li ><span>142</span></li><li ><span>143</span></li><li ><span>144</span></li><li ><span>145</span></li><li ><span>146</span></li><li ><span>147</span></li><li ><span>148</span></li><li ><span>149</span></li><li ><span>150</span></li><li ><span>151</span></li><li ><span>152</span></li><li ><span>153</span></li><li ><span>154</span></li><li ><span>155</span></li><li ><span>156</span></li><li ><span>157</span></li><li ><span>158</span></li><li ><span>159</span></li><li ><span>160</span></li><li ><span>161</span></li><li ><span>162</span></li><li ><span>163</span></li><li ><span>164</span></li><li ><span>165</span></li><li ><span>166</span></li><li ><span>167</span></li><li ><span>168</span></li><li ><span>169</span></li><li ><span>170</span></li><li ><span>171</span></li><li ><span>172</span></li><li ><span>173</span></li><li ><span>174</span></li><li ><span>175</span></li><li ><span>176</span></li><li ><span>177</span></li><li ><span>178</span></li><li ><span>179</span></li><li ><span>180</span></li><li ><span>181</span></li><li ><span>182</span></li><li ><span>183</span></li><li ><span>184</span></li><li ><span>185</span></li><li ><span>186</span></li><li ><span>187</span></li><li ><span>188</span></li><li ><span>189</span></li><li ><span>190</span></li><li ><span>191</span></li><li ><span>192</span></li><li ><span>193</span></li><li ><span>194</span></li><li ><span>195</span></li><li ><span>196</span></li><li ><span>197</span></li><li ><span>198</span></li><li ><span>199</span></li><li ><span>200</span></li><li ><span>201</span></li><li ><span>202</span></li></ul><code class=" hljs  hljs-html" @click.stop="()=>{}"><span class="hljs-meta">&lt;!DOCTYPE <span class="hljs-keyword">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">html</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">head</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">charset</span>=<span class="hljs-string">&quot;UTF-8&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">http-equiv</span>=<span class="hljs-string">&quot;X-UA-Compatible&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;IE=edge&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;viewport&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;width=device-width, initial-scale=1.0&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">meta</span> <span class="hljs-attr">name</span>=<span class="hljs-string">&quot;renderer&quot;</span> <span class="hljs-attr">content</span>=<span class="hljs-string">&quot;webkit&quot;</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://cdn.staticfile.org/jquery/2.2.4/jquery.min.js&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- &lt;script src=&#x27;./api/api.js&#x27;&gt;&lt;/script&gt; --&gt;</span>
  
  <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&#x27;/v6/tinymce/tinymce.js&#x27;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span><span class="hljs-comment">&lt;!-- \u5FC5\u8981 --&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&#x27;/v6/tinymce/tinymce-plugin.js&#x27;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span> <span class="hljs-comment">&lt;!--\u5FC5\u8981 --&gt;</span>

  <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css">
    <span class="hljs-selector-tag">body</span>{<span class="hljs-attribute">max-width</span>: <span class="hljs-number">1920px</span>;<span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>; <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;}
    <span class="hljs-selector-tag">header</span>{}
    <span class="hljs-selector-class">.header_logo</span>{ <span class="hljs-attribute">display</span>: inline-block;<span class="hljs-attribute">vertical-align</span>: middle;}
    <span class="hljs-selector-tag">header</span> &gt; <span class="hljs-selector-tag">div</span>{ <span class="hljs-attribute">display</span>: block; <span class="hljs-attribute">text-align</span>: center;}
   <span class="hljs-selector-class">.demo</span>,<span class="hljs-selector-id">#showID</span>{ <span class="hljs-attribute">margin-top</span>:<span class="hljs-number">50px</span>;}
   <span class="hljs-selector-id">#showID</span>{ <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;}
   <span class="hljs-selector-id">#tinymce-app</span> <span class="hljs-selector-class">.tinymce-box</span> {<span class="hljs-attribute">padding-bottom</span>: <span class="hljs-number">0px</span><span class="hljs-meta">!important</span>;}
   <span class="hljs-selector-class">.tiny_color</span>{ <span class="hljs-attribute">color</span>:<span class="hljs-number">#344A85</span> ;<span class="hljs-attribute">text-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">3px</span> <span class="hljs-number">5px</span> <span class="hljs-number">#677285</span>; <span class="hljs-attribute">display</span>: inline-block;<span class="hljs-attribute">margin-right</span>: -<span class="hljs-number">20px</span>; <span class="hljs-attribute">vertical-align</span>: middle;}
   <span class="hljs-selector-class">.plugin_color</span> { <span class="hljs-attribute">color</span>: <span class="hljs-number">#43B984</span>;<span class="hljs-attribute">text-shadow</span>: <span class="hljs-number">0</span> <span class="hljs-number">3px</span> <span class="hljs-number">5px</span> <span class="hljs-number">#34435C</span>;<span class="hljs-attribute">display</span>: inline-block;<span class="hljs-attribute">margin-left</span>: -<span class="hljs-number">23px</span>; <span class="hljs-attribute">vertical-align</span>: middle;}
   <span class="hljs-selector-class">.text-center</span>{ <span class="hljs-attribute">text-align</span>: center;}
   <span class="hljs-selector-class">.animated</span> <span class="hljs-selector-id">#logoSvgId</span>{
    fill-<span class="hljs-attribute">opacity</span>: <span class="hljs-number">0.75</span>
   }
   <span class="hljs-selector-tag">a</span>{<span class="hljs-attribute">display</span>: inline-block; <span class="hljs-attribute">padding</span>: <span class="hljs-number">20px</span>;<span class="hljs-attribute">font-size</span>: <span class="hljs-number">20px</span>; <span class="hljs-attribute">list-style</span>: none; <span class="hljs-attribute">text-decoration</span>: none;<span class="hljs-attribute">color</span>: <span class="hljs-number">#333</span>;}
   <span class="hljs-selector-id">#logoSvgId</span>{<span class="hljs-attribute">display</span>: inline-block; <span class="hljs-attribute">vertical-align</span>: middle;}
   <span class="hljs-selector-class">.btn</span>{ <span class="hljs-attribute">border-radius</span>: <span class="hljs-number">20px</span>; <span class="hljs-attribute">outline</span>: none; <span class="hljs-attribute">width</span>: <span class="hljs-number">300px</span>;<span class="hljs-attribute">height</span>: <span class="hljs-number">60px</span>; <span class="hljs-attribute">margin</span>: <span class="hljs-number">20px</span> auto; <span class="hljs-attribute">display</span>: block; <span class="hljs-attribute">background</span>: <span class="hljs-number">#1488F5</span>; <span class="hljs-attribute">text-align</span>: center;<span class="hljs-attribute">line-height</span>: <span class="hljs-number">60px</span>; <span class="hljs-attribute">font-size</span>: <span class="hljs-number">28px</span>;<span class="hljs-attribute">letter-spacing</span>: <span class="hljs-number">2px</span>; <span class="hljs-attribute">color</span>: <span class="hljs-number">#dedede</span>;}
  </span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">head</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">body</span> <span class="hljs-attr">tp-page-height</span>=<span class="hljs-string">&quot;498&quot;</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;demo&quot;</span>&gt;</span>
        <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;tinymce-app&quot;</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tinymce-demo&quot;</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #000;&quot;</span>&gt;</span>
                <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;tinymce-cnt&quot;</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;mytextarea&quot;</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;fvContentID&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">ol</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;letter-spacing: 2px;&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #2dc26b;&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #000000;&quot;</span>&gt;</span>\u4E0D\u77E5\u5982\u4F55\u4F7F\u7528\u7F16\u8F91\u6846\u53EF\u4EE5\u70B9\u51FB<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://xwjywjb.obs.cn-southwest-2.myhuaweicloud.com/db/UploadFile/2020/11/13/fcd5cc64-aff6-4ded-8f14-6a98b66a2aea.png&quot;</span>&gt;</span>\uFF08\u6216 Alt+0)\uFF0C\u67E5\u770B\u5E2E\u52A9-\u3010\u5FEB\u6377\u952E\u3011\u3010\u529F\u80FD\u4ECB\u7ECD\u3011\u3010\u64CD\u4F5C\u624B\u518C\u3011\u3010\u7591\u95EE\u89E3\u7B54\u3011\u3010\u53CD\u9988\u95EE\u9898\u3011 \u3002<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;letter-spacing: 2px;&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #3598db;&quot;</span>&gt;</span>\u9F20\u6807\u60AC\u6D6E<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>\u5728<span class="hljs-tag">&lt;<span class="hljs-name">em</span>&gt;</span>\u529F\u80FD\u56FE\u6807<span class="hljs-tag">&lt;/<span class="hljs-name">em</span>&gt;</span>\u4E0A\u53EF\u4E86\u89E3\u529F\u80FD\u540D\u79F0<span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;letter-spacing: 2px;&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #e03e2d;&quot;</span>&gt;</span>\u5982\u8FC7\u9700\u8981\u4FEE\u65392020\u5E7411\u6708\u4E4B\u524D\u7684\u65E7\u65B0\u95FB\uFF0C\u5EFA\u8BAE\u5148\u6E05\u9664\u683C\u5F0F<span class="hljs-symbol">&amp;nbsp;</span> \u6216<span class="hljs-symbol">&amp;nbsp;</span> \u4E00\u952E\u5E03\u5C40<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://xwjywjb.obs.cn-southwest-2.myhuaweicloud.com/db/UploadFile/2020/11/13/e952a0d5-2d30-4d86-ae7d-e8fd5c4e7cc7.png&quot;</span>&gt;</span>\uFF0C\u5C06\u65E7\u65B0\u95FB\u6837\u5F0F\u53BB\u6389\u91CD\u65B0\u6392\u7248<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;letter-spacing: 2px;&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #e03e2d;&quot;</span>&gt;</span>\u82E5\u6587\u6863\u7F16\u8F91\u8C03\u6574\u8FC7\u7A0B\u4E2D\u53D1\u751F\u610F\u5916\u5173\u95ED\u3010\u5982\uFF1A\u767B\u5F55\u65F6\u95F4\u8FC7\u957F\u3011\uFF0C\u5E76\u4E14\u672A\u5B58\u4E3A\u8349\u7A3F \u53EF\u4EE5\u70B9\u51FB<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://xwjywjb.obs.cn-southwest-2.myhuaweicloud.com/db/UploadFile/2020/12/25/9b1473d3-e399-43d9-86b1-a0cb5970d7d0.png&quot;</span>&gt;</span>\uFF0C\u6062\u590D\u6587\u6863\u7F16\u8F91\u72B6\u6001\uFF081\u5C0F\u65F6\u4EE5\u5185\u7684\u6700\u8FD1\u72B6\u6001\uFF09<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                    <span class="hljs-tag">&lt;<span class="hljs-name">li</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;letter-spacing: 2px;&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;color: #e03e2d;&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">id</span>=<span class="hljs-string">&quot;attachment_mce_1&quot;</span> <span class="hljs-attr">contenteditable</span>=<span class="hljs-string">&quot;false&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">style</span>=<span class="hljs-string">&quot;width: 30px;&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">&quot;https://api.hope55.com/Content/js/tinymce/plugins/attachment/icons/file_type_pdf2.svg&quot;</span> <span class="hljs-attr">width</span>=<span class="hljs-string">&quot;30px&quot;</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">&quot;https://xwjywjb.obs.cn-southwest-2.myhuaweicloud.com/db/UploadFile/2020/11/9/a7653b78-f186-4237-81fb-213aac317ebe.pdf&quot;</span> <span class="hljs-attr">target</span>=<span class="hljs-string">&quot;_blank&quot;</span> <span class="hljs-attr">rel</span>=<span class="hljs-string">&quot;noopener&quot;</span>&gt;</span>\u65B0\u7F16\u8F91\u5668\u65B0\u95FB\u4E0A\u4F20\u64CD\u4F5C\u8BF4\u660E(1).pdf (1.04 M)<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">li</span>&gt;</span>
                  <span class="hljs-tag">&lt;/<span class="hljs-name">ol</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
                  <span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="language-css"> <span class="hljs-selector-id">#fvContentID</span> <span class="hljs-selector-tag">a</span>{<span class="hljs-attribute">display</span>:inline-block<span class="hljs-meta">!important</span>} <span class="hljs-selector-id">#fvContentID</span> <span class="hljs-selector-class">.attachment</span>&gt;<span class="hljs-selector-tag">img</span>{<span class="hljs-attribute">display</span>:inline-block<span class="hljs-meta">!important</span>;<span class="hljs-attribute">max-width</span>:<span class="hljs-number">30px</span><span class="hljs-meta">!important</span>;<span class="hljs-attribute">min-width</span>:<span class="hljs-number">30px</span><span class="hljs-meta">!important</span>;}<span class="hljs-selector-id">#fvContentID</span> <span class="hljs-selector-class">.attachment</span>&gt;<span class="hljs-selector-tag">a</span>{<span class="hljs-attribute">display</span>:contents<span class="hljs-meta">!important</span>;}</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>
                <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
        <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
    <span class="hljs-keyword">function</span> <span class="hljs-title function_">savefun</span>(<span class="hljs-params"></span>){
      $(<span class="hljs-string">&quot;#showID&quot;</span>).<span class="hljs-title function_">html</span>(tinymceConfig.<span class="hljs-title function_">getHtml</span>())
    }

                <span class="hljs-keyword">var</span> xhrOnProgress = <span class="hljs-keyword">function</span> (<span class="hljs-params">fun</span>) {
                xhrOnProgress.<span class="hljs-property">onprogress</span> = fun;
                <span class="hljs-keyword">return</span> <span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) {
                    <span class="hljs-keyword">var</span> xhr = $.ajaxSettings.<span class="hljs-title function_">xhr</span>();
                    <span class="hljs-keyword">if</span> (<span class="hljs-keyword">typeof</span> xhrOnProgress.<span class="hljs-property">onprogress</span> !== <span class="hljs-string">&#x27;function&#x27;</span>)
                        <span class="hljs-keyword">return</span> xhr;
                    <span class="hljs-keyword">if</span> (xhrOnProgress.<span class="hljs-property">onprogress</span> &amp;&amp; xhr.<span class="hljs-property">upload</span>) {
                        xhr.<span class="hljs-property">upload</span>.<span class="hljs-property">onprogress</span> = xhrOnProgress.<span class="hljs-property">onprogress</span>;
                    }
                    <span class="hljs-keyword">return</span> xhr;
                }
            }
            <span class="hljs-keyword">var</span> tinymceConfig= {
                <span class="hljs-attr">tinyID</span>: <span class="hljs-string">&quot;mytextarea&quot;</span>,<span class="hljs-comment">//\u4F5C\u7528\u57DFID</span>
                <span class="hljs-attr">placeholder</span>: <span class="hljs-string">&#x27;&#x27;</span>, <span class="hljs-comment">//\u9ED8\u8BA4\u6587\u5B57</span>
                <span class="hljs-attr">infoHtml</span>: $(<span class="hljs-variable language_">this</span>.<span class="hljs-property">tinyID</span>).<span class="hljs-title function_">html</span>(),<span class="hljs-comment">//\u521D\u59CB\u5316\u5185\u5BB9</span>
                <span class="hljs-title class_">GbaseUrl</span>: <span class="hljs-string">&#x27;&#x27;</span>,<span class="hljs-comment">//\u5168\u5C40baseUrl</span>
                <span class="hljs-attr">OMHtml</span>: <span class="hljs-string">&#x27;&lt;div style=&quot;height: 1500px;&quot;&gt;&lt;p&gt;&lt;h2&gt;\u64CD\u4F5C\u624B\u518C\uFF1A&lt;/h2&gt;&lt;/p&gt;&lt;/div&gt;&lt;p&gt;666&lt;/p&gt;&#x27;</span>, <span class="hljs-comment">//\u8BBE\u7F6E\u64CD\u4F5C\u624B\u518CHtml</span>
                <span class="hljs-attr">CPHtml</span>: <span class="hljs-string">&#x27;&#x27;</span>,
            }
          tinymce.<span class="hljs-title function_">init</span>({
                 <span class="hljs-attr">selector</span>: <span class="hljs-string">&#x27;#&#x27;</span>+tinymceConfig.<span class="hljs-property">tinyID</span>,
                 <span class="hljs-attr">language</span>:<span class="hljs-string">&#x27;zh_CN&#x27;</span>,
                 <span class="hljs-attr">menubar</span>:<span class="hljs-literal">false</span>,
                 <span class="hljs-attr">branding</span>: <span class="hljs-literal">false</span>,
                 <span class="hljs-attr">min_height</span>:<span class="hljs-number">400</span>,
                 <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                 <span class="hljs-attr">tp_importword_langs</span>: <span class="hljs-string">&#x27;/v6/tinymce/plugins/tpImportword/&#x27;</span>,
                <span class="hljs-comment">//  baseURL: &#x27;./&#x27;</span>
                 <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;      preview insertdatetime  attachment  searchreplace visualblocks autolink   fullscreen  image  link media code codesample table charmap  pagebreak  anchor advlist lists  help emoticons      tpIndent2em  tpImportword    autoresize   tpCollapse tpTabs tpButtons&#x27;</span>,
                 <span class="hljs-attr">toolbar_groups</span>: {
                         <span class="hljs-attr">formatting</span>: {
                             <span class="hljs-attr">text</span>: <span class="hljs-string">&#x27;\u6587\u5B57\u683C\u5F0F&#x27;</span>,
                             <span class="hljs-attr">tooltip</span>: <span class="hljs-string">&#x27;Formatting&#x27;</span>,
                             <span class="hljs-attr">items</span>: <span class="hljs-string">&#x27;bold italic underline | superscript subscript&#x27;</span>,
                         },
                         <span class="hljs-attr">alignment</span>: {
                             <span class="hljs-attr">icon</span>: <span class="hljs-string">&#x27;align-left&#x27;</span>,
                             <span class="hljs-attr">tooltip</span>: <span class="hljs-string">&#x27;alignment&#x27;</span>,
                             <span class="hljs-attr">items</span>: <span class="hljs-string">&#x27;alignleft aligncenter alignright alignjustify&#x27;</span>,
                         }
                  },
                 <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code formatselect fontselect fontsizeselect forecolor backcolor bold italic underline strikethrough  link alignment bullist numlist blockquote subscript superscript  removeformat table image  media    emoticons     pagebreak    tpImportword codesample visualblocks insertdatetime    quickbars   cut copy undo redo ltr rtl tpCollapse tpTabs tpButtons restoredraft  searchreplace fullscreen tpIndent2em  help wordcount preview&#x27;</span>],
                 <span class="hljs-attr">table_style_by_css</span>: <span class="hljs-literal">true</span>,
                 <span class="hljs-title class_">OperationManualHtml</span>: <span class="hljs-string">&#x27;&#x27;</span>,
                 <span class="hljs-title class_">CommonProblemHtml</span>: <span class="hljs-string">&#x27;&#x27;</span>,
                 <span class="hljs-attr">fixed_toolbar_container</span>:<span class="hljs-string">&#x27;#tinymce-app .toolbar&#x27;</span>,
                 <span class="hljs-attr">custom_ui_selector</span>: <span class="hljs-string">&#x27;#tinymce-app&#x27;</span>,
                 <span class="hljs-attr">placeholder</span>:<span class="hljs-string">&#x27;&#x27;</span>+tinymceConfig.<span class="hljs-property">placeholder</span>,
                 <span class="hljs-attr">file_picker_types</span>: <span class="hljs-string">&#x27;media&#x27;</span>,
                 <span class="hljs-attr">powerpaste_word_import</span>: <span class="hljs-string">&quot;clean&quot;</span>, <span class="hljs-comment">// \u662F\u5426\u4FDD\u7559word\u7C98\u8D34\u6837\u5F0F  clean | merge </span>
                 <span class="hljs-attr">powerpaste_html_import</span>: <span class="hljs-string">&#x27;clean&#x27;</span>, <span class="hljs-comment">// propmt, merge, clean</span>
                 <span class="hljs-attr">powerpaste_allow_local_images</span>: <span class="hljs-literal">true</span>,<span class="hljs-comment">//</span>
                 <span class="hljs-attr">powerpaste_keep_unsupported_src</span>:<span class="hljs-literal">true</span>,
                 <span class="hljs-attr">paste_data_images</span>: <span class="hljs-literal">true</span>,
                 <span class="hljs-attr">toolbar_sticky</span>: <span class="hljs-literal">false</span>,
                <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
                 <span class="hljs-attr">autosave_ask_before_unload</span>: <span class="hljs-literal">false</span>,
                 <span class="hljs-attr">fontsize_formats</span>: <span class="hljs-string">&#x27;12px 14px 16px 18px 24px 36px 48px 56px 72px&#x27;</span>,
                 <span class="hljs-attr">font_formats</span>: <span class="hljs-string">&#x27;\u5FAE\u8F6F\u96C5\u9ED1=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;\u82F9\u679C\u82F9\u65B9=PingFang SC,Microsoft YaHei,sans-serif;\u5B8B\u4F53=simsun,serif;\u4EFF\u5B8B\u4F53=FangSong,serif;\u9ED1\u4F53=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Symbol=symbol;Tahoma=tahoma,arial,helvetica,sans-serif;Terminal=terminal,monaco;Times New Roman=times new roman,times;Verdana=verdana,geneva;Webdings=webdings;Wingdings=wingdings,zapf dingbats;&#x27;</span>,
                 <span class="hljs-attr">images_upload_base_path</span>: <span class="hljs-string">&#x27;&#x27;</span>,
               
                 <span class="hljs-attr">images_upload_handler</span>: <span class="hljs-function">(<span class="hljs-params">blobInfo, progress</span>) =&gt;</span> <span class="hljs-keyword">new</span> <span class="hljs-title class_">Promise</span>(<span class="hljs-function">(<span class="hljs-params">resolve, reject</span>)=&gt;</span>{
                     <span class="hljs-keyword">var</span> file = blobInfo.<span class="hljs-title function_">blob</span>();
                    <span class="hljs-keyword">var</span> reader = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FileReader</span>();
                        reader.<span class="hljs-property">onload</span> = <span class="hljs-keyword">function</span>(<span class="hljs-params">e</span>){
                        <span class="hljs-title function_">resolve</span>(e.<span class="hljs-property">target</span>.<span class="hljs-property">result</span>)
                        }
                   reader.<span class="hljs-title function_">readAsDataURL</span>(file)
                 }),
                 <span class="hljs-attr">file_picker_callback</span>: <span class="hljs-keyword">function</span> (<span class="hljs-params">succFun, value, meta</span>) { <span class="hljs-comment">//\u81EA\u5B9A\u4E49\u6587\u4EF6\u4E0A\u4F20\u51FD\u6570 </span>
                    <span class="hljs-keyword">var</span> filetype = <span class="hljs-string">&#x27;.pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx, .mp3, .mp4&#x27;</span>;
                    <span class="hljs-keyword">var</span> input = <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">createElement</span>(<span class="hljs-string">&#x27;input&#x27;</span>);
                    input.<span class="hljs-title function_">setAttribute</span>(<span class="hljs-string">&#x27;type&#x27;</span>, <span class="hljs-string">&#x27;file&#x27;</span>);
                    input.<span class="hljs-title function_">setAttribute</span>(<span class="hljs-string">&#x27;accept&#x27;</span>, filetype);
                    input.<span class="hljs-title function_">click</span>();
                    input.<span class="hljs-property">onchange</span> = <span class="hljs-keyword">function</span> (<span class="hljs-params"></span>) {
                        <span class="hljs-keyword">var</span> file = <span class="hljs-variable language_">this</span>.<span class="hljs-property">files</span>[<span class="hljs-number">0</span>];
                        <span class="hljs-keyword">var</span> data = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormData</span>();
                         data.<span class="hljs-title function_">append</span>(<span class="hljs-string">&quot;file&quot;</span>, file);
                        $.<span class="hljs-title function_">ajax</span>({
                            <span class="hljs-attr">data</span>: data,
                            <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;GET&#x27;</span>,
                            <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;./api/file.json&#x27;</span>,
                            <span class="hljs-attr">header</span>:{<span class="hljs-string">&#x27;Content-Type&#x27;</span>:<span class="hljs-string">&#x27;multipart/form-data&#x27;</span>},
                            <span class="hljs-attr">cache</span>: <span class="hljs-literal">false</span>,
                            <span class="hljs-attr">contentType</span>: <span class="hljs-literal">false</span>,
                            <span class="hljs-attr">processData</span>: <span class="hljs-literal">false</span>,
                            <span class="hljs-attr">dataType</span>: <span class="hljs-string">&#x27;json&#x27;</span>,
                            <span class="hljs-attr">xhr</span>: <span class="hljs-title function_">xhrOnProgress</span>(<span class="hljs-keyword">function</span> (<span class="hljs-params">e</span>) {
                                <span class="hljs-keyword">const</span> percent = (e.<span class="hljs-property">loaded</span> / e.<span class="hljs-property">total</span> * <span class="hljs-number">100</span> | <span class="hljs-number">0</span>) + <span class="hljs-string">&#x27;%&#x27;</span>;<span class="hljs-comment">//\u8BA1\u7B97\u767E\u5206\u6BD4</span>
                                <span class="hljs-comment">// console.log(percent);</span>
                                <span class="hljs-title function_">progressCallback</span>(percent);
                  
                            }),
                        }).<span class="hljs-title function_">then</span>(<span class="hljs-keyword">function</span> (<span class="hljs-params">data</span>) {
                            <span class="hljs-keyword">if</span> ( data.<span class="hljs-property">code</span>== <span class="hljs-number">200</span>) {
                                <span class="hljs-title function_">succFun</span>(data.<span class="hljs-property">data</span>,{ <span class="hljs-attr">text</span>: data.<span class="hljs-property">data</span> });
                            }
                        }).<span class="hljs-title function_">fail</span>(<span class="hljs-keyword">function</span> (<span class="hljs-params">error</span>) {
                            <span class="hljs-title function_">failFun</span>(<span class="hljs-string">&#x27;\u4E0A\u4F20\u5931\u8D25:&#x27;</span> + error.<span class="hljs-property">message</span>)
                        });
                    }
                 },
                 <span class="hljs-attr">file_callback</span>: <span class="hljs-keyword">function</span> (<span class="hljs-params">file, succFun</span>) { <span class="hljs-comment">//\u6587\u4EF6\u4E0A\u4F20  file:\u6587\u4EF6\u5BF9\u8C61 succFun(url|string,obj) \u6210\u529F\u56DE\u8C03</span>
                    <span class="hljs-keyword">var</span> data = <span class="hljs-keyword">new</span> <span class="hljs-title class_">FormData</span>();
                    data.<span class="hljs-title function_">append</span>(<span class="hljs-string">&quot;file&quot;</span>, file);
                    $.<span class="hljs-title function_">ajax</span>({
                        <span class="hljs-attr">data</span>: data,
                        <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;GET&#x27;</span>,
                        <span class="hljs-attr">url</span>: <span class="hljs-string">&#x27;/v6/tinymce/api/file.json&#x27;</span>,
                        <span class="hljs-attr">cache</span>: <span class="hljs-literal">false</span>,
                        <span class="hljs-attr">contentType</span>: <span class="hljs-literal">false</span>,
                        <span class="hljs-attr">processData</span>: <span class="hljs-literal">false</span>,
                        <span class="hljs-attr">header</span>:{<span class="hljs-string">&#x27;Content-Type&#x27;</span>:<span class="hljs-string">&#x27;multipart/form-data&#x27;</span>},
                        <span class="hljs-attr">dataType</span>: <span class="hljs-string">&#x27;json&#x27;</span>,
                        <span class="hljs-attr">xhr</span>: <span class="hljs-title function_">xhrOnProgress</span>(<span class="hljs-keyword">function</span> (<span class="hljs-params">e</span>) {
                            <span class="hljs-keyword">const</span> percent = (e.<span class="hljs-property">loaded</span> / e.<span class="hljs-property">total</span> * <span class="hljs-number">100</span> | <span class="hljs-number">0</span>) + <span class="hljs-string">&#x27;%&#x27;</span>;<span class="hljs-comment">//\u8BA1\u7B97\u767E\u5206\u6BD4</span>
                            <span class="hljs-title function_">progressCallback</span>(percent);
                        }),
                    }).<span class="hljs-title function_">then</span>(<span class="hljs-keyword">function</span> (<span class="hljs-params">data</span>) {
                        <span class="hljs-keyword">if</span> ( data.<span class="hljs-property">code</span>== <span class="hljs-number">200</span>) {
                            <span class="hljs-title function_">succFun</span>(data.<span class="hljs-property">data</span>,{<span class="hljs-attr">text</span>: file.<span class="hljs-property">name</span>});
                        } 
                    }).<span class="hljs-title function_">fail</span>(<span class="hljs-keyword">function</span> (<span class="hljs-params">error</span>) {
                        <span class="hljs-comment">// failFun(&#x27;\u4E0A\u4F20\u5931\u8D25:&#x27; + error.message)</span>
                    });
                 },
                 <span class="hljs-attr">tp_attachment_max_size</span>: <span class="hljs-number">5009715200</span>,
                <span class="hljs-comment">//  attachment_style: &#x27;.attachment&gt;img{display:inline-block!important;max-width:30px!important;}&#x27;,</span>
                 <span class="hljs-attr">tp_attachment_assets_path</span>: <span class="hljs-string">&#x27;/v6/tinymce/plugins/attachment/icons&#x27;</span>,
                
              
                 <span class="hljs-attr">init_instance_callback</span>: <span class="hljs-keyword">function</span>(<span class="hljs-params">editor</span>){
                     $(<span class="hljs-string">&#x27;#tinymce-app&#x27;</span>).<span class="hljs-title function_">fadeIn</span>(<span class="hljs-number">1000</span>);
                  <span class="hljs-comment">//    editor.execCommand(&#x27;selectAll&#x27;);</span>
                  <span class="hljs-comment">//    editor.selection.getRng().collapse(false);</span>
                  <span class="hljs-comment">//    editor.focus();</span>
                 }
          }).<span class="hljs-title function_">then</span>(<span class="hljs-keyword">function</span>(<span class="hljs-params">res</span>){
          
                 tinymce.<span class="hljs-property">feedBackIframeUrl</span> =<span class="hljs-string">&#x27;/v6/tinymce/plugins/help/docBox.html&#x27;</span>; <span class="hljs-comment">//\u53CD\u9988\u94FE\u63A5</span>
             });
  </span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">html</span>&gt;</span>

</code><div class="language-text" >html</div></pre>`},sourceCode(){return'<iframe scrolling="no" width="100%" style="width:100%;margin:auto 0;border:0px; min-height: 519px"  onload="autoIframeHeight(this)"  src="/v6/demo/demo-introduction_t_mr50a31661495750455_p_1661495754863/index.html"></iframe>'}};t.template=`<PreviewIframe class="demo-introduction_t_mr50a31661495750455_p_" idx="Demo1"  :source="source()" :sourceCode="sourceCode()">
                              
                            </PreviewIframe>`;const l={name:"domeVue3",components:{TinymceVue:p},data(){return{content:"dsdsdssfdddddddddddddddddddsd",tinymceOptions:{min_height:200,max_height:700,skeletonScreen:!0,base_url:"/v6/tinymce",plugins:" code  tpIndent2em autoresize tpCollapse tpTabs tpButtons tpImportword preview",toolbar:["|code tpIndent2em tpCollapse tpTabs tpButtons tpImportword | Preview"]}}}};l.methods?l.methods.source=function(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li><li ><span>34</span></li><li ><span>35</span></li><li ><span>36</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:init</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;tinymce&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@tinymce-plugin/tinymce-vue&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em/plugin.js&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpImportword/plugin.js&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue3&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;dsdsdssfdddddddddddddddddddsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-comment">// custom_elements: &#x27;tp-collapse&#x27;,</span>
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/v6/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27; code  tpIndent2em autoresize tpCollapse tpTabs tpButtons tpImportword preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code tpIndent2em tpCollapse tpTabs tpButtons tpImportword | Preview&#x27;</span>],
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`}:l.methods={source(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li><li ><span>34</span></li><li ><span>35</span></li><li ><span>36</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:init</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span>  <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;tinymce&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@tinymce-plugin/tinymce-vue&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em/plugin.js&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpImportword/plugin.js&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue3&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;dsdsdssfdddddddddddddddddddsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-comment">// custom_elements: &#x27;tp-collapse&#x27;,</span>
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/v6/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27; code  tpIndent2em autoresize tpCollapse tpTabs tpButtons tpImportword preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;|code tpIndent2em tpCollapse tpTabs tpButtons tpImportword | Preview&#x27;</span>],
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`}};l.template=`<Preview class="demo-introduction_t_mr50a31661495750455_p_" :source="source()">
                                <template v-slot:demo><div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :init="tinymceOptions" ></tinymce-vue>
  </div>
  <div  v-html="content"></div>
</div></template>'
                                 
                              </Preview>`;const a={};a.methods?(a.methods.source=function(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li><li ><span>34</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:init</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em/plugin.js&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpImportword/plugin.js&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@tinymce-plugin/tinymce-vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;fivesdsdsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/v6/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27; code  tpIndent2em autoresize tpCollapse tpTabs tpButtons image preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;code tpIndent2em tpCollapse tpTabs tpButtons Preview&#x27;</span>],
                <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`},a.methods.template=function(){return`<div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :init="tinymceOptions" ></tinymce-vue>
  </div>
  <div v-html="content"></div>
</div>`},a.methods.sourceCode=function(){return{name:"domeVue2",components:{TinymceVue:p},data:function(){return{content:"fivesdsdsd",tinymceOptions:{min_height:200,max_height:700,base_url:"/v6/tinymce",plugins:" code  tpIndent2em autoresize tpCollapse tpTabs tpButtons image preview",toolbar:["code tpIndent2em tpCollapse tpTabs tpButtons Preview"],skeletonScreen:!0}}}}}):a.methods={template(){return`<div>
 <h1>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF</h1>
  <div class="vueDemo">
    <tinymce-vue v-model="content" :init="tinymceOptions" ></tinymce-vue>
  </div>
  <div v-html="content"></div>
</div>`},sourceCode(){return{name:"domeVue2",components:{TinymceVue:p},data:function(){return{content:"fivesdsdsd",tinymceOptions:{min_height:200,max_height:700,base_url:"/v6/tinymce",plugins:" code  tpIndent2em autoresize tpCollapse tpTabs tpButtons image preview",toolbar:["code tpIndent2em tpCollapse tpTabs tpButtons Preview"],skeletonScreen:!0}}}}},source(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li><li ><span>34</span></li></ul><code class=" hljs  hljs-js" @click.stop="()=>{}">&lt;template&gt;
<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
 <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>\u63D2\u4EF6demo\u5C55\u793A\u533A\u57DF<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">&quot;vueDemo&quot;</span>&gt;</span>
    <span class="hljs-tag">&lt;<span class="hljs-name">tinymce-vue</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;content&quot;</span> <span class="hljs-attr">:init</span>=<span class="hljs-string">&quot;tinymceOptions&quot;</span> &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">tinymce-vue</span>&gt;</span>
  <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">v-html</span>=<span class="hljs-string">&quot;content&quot;</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
&lt;/template&gt;

<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em/plugin.js&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpImportword/plugin.js&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">TinymceVue</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;@tinymce-plugin/tinymce-vue&quot;</span>;
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span>{
<span class="hljs-attr">name</span>: <span class="hljs-string">&#x27;domeVue2&#x27;</span>,
<span class="hljs-attr">components</span>: { <span class="hljs-title class_">TinymceVue</span> },
<span class="hljs-title function_">data</span>(<span class="hljs-params"></span>){
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">content</span>: <span class="hljs-string">&#x27;fivesdsdsd&#x27;</span>,
        <span class="hljs-attr">tinymceOptions</span>:{
                <span class="hljs-attr">min_height</span>: <span class="hljs-number">200</span>,
                <span class="hljs-attr">max_height</span>: <span class="hljs-number">700</span>,
                <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/v6/tinymce&#x27;</span>,
                <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27; code  tpIndent2em autoresize tpCollapse tpTabs tpButtons image preview&#x27;</span>,
                <span class="hljs-attr">toolbar</span>: [<span class="hljs-string">&#x27;code tpIndent2em tpCollapse tpTabs tpButtons Preview&#x27;</span>],
                <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
             
        }
    }
  }
}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></span>
</code><div class="language-text" >vue</div></pre>`}};a.template=`<PreviewVue2 class="demo-introduction_t_mr50a31661495750455_p_"  :template="template()"  :source="source()">
                              
                            </PreviewVue2>`;const i={};i.methods={source(){return`<pre class="hljs fv-hljs "><ul class="highlight-line-number "  ><li ><span>1</span></li><li ><span>2</span></li><li ><span>3</span></li><li ><span>4</span></li><li ><span>5</span></li><li ><span>6</span></li><li ><span>7</span></li><li ><span>8</span></li><li ><span>9</span></li><li ><span>10</span></li><li ><span>11</span></li><li ><span>12</span></li><li ><span>13</span></li><li ><span>14</span></li><li ><span>15</span></li><li ><span>16</span></li><li ><span>17</span></li><li ><span>18</span></li><li ><span>19</span></li><li ><span>20</span></li><li ><span>21</span></li><li ><span>22</span></li><li ><span>23</span></li><li ><span>24</span></li><li ><span>25</span></li><li ><span>26</span></li><li ><span>27</span></li><li ><span>28</span></li><li ><span>29</span></li><li ><span>30</span></li><li ><span>31</span></li><li ><span>32</span></li><li ><span>33</span></li><li ><span>34</span></li><li ><span>35</span></li><li ><span>36</span></li><li ><span>37</span></li><li ><span>38</span></li><li ><span>39</span></li><li ><span>40</span></li><li ><span>41</span></li><li ><span>42</span></li><li ><span>43</span></li></ul><code class=" hljs  hljs-html" @click.stop="()=>{}"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="language-javascript">
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span> <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react&#x27;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-title class_">React</span>DOM <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;react-dom&#x27;</span>;
<span class="hljs-keyword">import</span> tinymce <span class="hljs-keyword">from</span> <span class="hljs-string">&quot;tinymce&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpIndent2em/plugin.js&quot;</span>;
<span class="hljs-keyword">import</span> <span class="hljs-string">&quot;tinymce-plugin/plugins/tpImportword/plugin.js&quot;</span>;
<span class="hljs-keyword">import</span> { <span class="hljs-title class_">Editor</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">&#x27;@tinymce/tinymce-react&#x27;</span>;

     <span class="hljs-keyword">class</span> <span class="hljs-title class_">ReactDemo</span> <span class="hljs-keyword">extends</span> <span class="hljs-title class_ inherited__">React.Component</span>{
       <span class="hljs-title function_">constructor</span>(<span class="hljs-params">props</span>) {
           <span class="hljs-variable language_">super</span>(props);
           <span class="hljs-variable language_">this</span>.<span class="hljs-property">state</span> = { <span class="hljs-attr">reactDemoInitialValue</span>: <span class="hljs-string">&quot;&lt;p&gt;\u8FD9\u662F\u4E00\u4E2AREactDemo&lt;/p&gt;&quot;</span>};
           <span class="hljs-variable language_">this</span>.<span class="hljs-property">reactDemoInit</span> = {
                    <span class="hljs-attr">min_height</span>: <span class="hljs-number">220</span>,
                    <span class="hljs-attr">base_url</span>:<span class="hljs-string">&#x27;/v6/tinymce&#x27;</span>,
                    <span class="hljs-attr">branding</span>: <span class="hljs-literal">false</span>,
                    <span class="hljs-attr">language</span>:<span class="hljs-string">&#x27;zh_CN&#x27;</span>,
                    <span class="hljs-attr">menubar</span>: <span class="hljs-literal">false</span>,
                    <span class="hljs-attr">skeletonScreen</span>: <span class="hljs-literal">true</span>,
                    <span class="hljs-attr">plugins</span>: <span class="hljs-string">&#x27;advlist autolink lists link image charmap  preview anchor searchreplace visualblocks code fullscreen tpIndent2em autoresize tpCollapse tpTabs tpButtons insertdatetime media table code help wordcount tpImportword&#x27;</span>,
                    <span class="hljs-attr">toolbar</span>: <span class="hljs-string">&#x27;undo redo tpIndent2em autoresize tpCollapse tpTabs tpButtons tpImportword | formatselect image | &#x27;</span> + <span class="hljs-string">&#x27;bold italic backcolor | alignleft aligncenter &#x27;</span> + <span class="hljs-string">&#x27;alignright alignjustify | bullist numlist outdent indent | &#x27;</span> + <span class="hljs-string">&#x27;removeformat | help&#x27;</span>,
                    <span class="hljs-attr">content_style</span>: <span class="hljs-string">&#x27;body { font-family:Helvetica,Arial,sans-serif; font-size:14px }&#x27;</span>
             };
       <span class="hljs-variable language_">this</span>.<span class="hljs-property">handleChange</span> = <span class="hljs-function">(<span class="hljs-params">data</span>)=&gt;</span>{
              <span class="hljs-variable language_">this</span>.<span class="hljs-title function_">setState</span>({<span class="hljs-attr">reactDemoInitialValue</span>: data})
        }
      }
      <span class="hljs-title function_">render</span>(<span class="hljs-params"></span>){
        <span class="hljs-keyword">return</span> (
           <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">h1</span>&gt;</span>tinymce demo2<span class="hljs-tag">&lt;/<span class="hljs-name">h1</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">Editor</span> <span class="hljs-attr">initialValue</span>=<span class="hljs-string">{this.state.reactDemoInitialValue}</span> <span class="hljs-attr">init</span>=<span class="hljs-string">{this.reactDemoInit}</span> <span class="hljs-attr">onEditorChange</span>=<span class="hljs-string">{this.handleChange}</span> /&gt;</span>
            <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
            <span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">dangerouslySetInnerHTML</span>=<span class="hljs-string">{{__html:</span> <span class="hljs-attr">this.state.reactDemoInitialValue</span> }} &gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
          <span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>
          );
      }
    }

   <span class="hljs-title class_">React</span>DOM.<span class="hljs-title function_">render</span>(<span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">ReactDemo</span> /&gt;</span></span>, <span class="hljs-variable language_">document</span>.<span class="hljs-title function_">getElementById</span>(<span class="hljs-string">&#x27;ReactRootID&#x27;</span>));
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>
</code><div class="language-text" >html</div></pre>`},sourceCode(e){class c extends s.Component{constructor(r){super(r),this.state={reactDemoInitialValue:"<p>\u8FD9\u662F\u4E00\u4E2AREactDemo</p>"},this.reactDemoInit={min_height:220,base_url:"/v6/tinymce",branding:!1,language:"zh_CN",menubar:!1,skeletonScreen:!0,plugins:"advlist autolink lists link image charmap  preview anchor searchreplace visualblocks code fullscreen tpIndent2em autoresize tpCollapse tpTabs tpButtons insertdatetime media table code help wordcount tpImportword",toolbar:"undo redo tpIndent2em autoresize tpCollapse tpTabs tpButtons tpImportword | formatselect image | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"},this.handleChange=h=>{this.setState({reactDemoInitialValue:h})}}render(){return s.createElement("div",null,s.createElement("h1",null,"tinymce demo2"),s.createElement("div",null,s.createElement(o,{initialValue:this.state.reactDemoInitialValue,init:this.reactDemoInit,onEditorChange:this.handleChange})),s.createElement("div",{dangerouslySetInnerHTML:{__html:this.state.reactDemoInitialValue}}))}}return j.render(s.createElement(c,null),e)}};i.template=`<PreviewReact class="demo-introduction_t_mr50a31661495750455_p_" idx="Demo4"  :source="source()">
                              
                            </PreviewReact>`;const b=m({components:{Demo0:n,Demo1:t,Demo2:l,Demo3:a,Demo4:i},template:`<div class="fv-mardown-html"><div class="fv-mardown-main tp-doc"><h1 id="Welcome!" tabindex="-1"><a class="header-anchor" href="#\u{1F44B} Welcome !">#</a> <strong>\u{1F44B} Welcome !</strong></h1>
<hr>
<blockquote>
<p>\u6B22\u8FCE\u6765\u5230 <a href="https://github.com/tinymce-plugin" target="_blank"><strong><code class="fv-code_inline">Tinymce-plugin</code></strong> </a></p>
<p>\u8FD9\u662F\u4E00\u4E2A\u4E13\u6CE8 \u63D0\u4F9B <strong>\u5F3A\u5927\u3001\u597D\u7528\u3001\u4E30\u5BCC</strong> \u7684 <a href="https://www.tiny.cloud" target="_blank"><code class="fv-code_inline">tinymce</code></a> \u5BCC\u6587\u672C\u7F16\u8F91\u5668 <strong>\u63D2\u4EF6</strong>\u3001<strong>\u6269\u5C55</strong> \u548C <strong>\u6280\u672F</strong> \u7684\u6280\u672F\u793E\u533A\uFF0C\u65B9\u4FBF <strong>\u4EA4\u6D41\u8BA8\u8BBA</strong>\uFF0C<strong>\u5206\u4EAB\u7ECF\u9A8C</strong> \u3002</p>
<p>\u672C\u793E\u533A\u6709\u591A\u4E2A\u4E0D\u9519\u7684\u63D2\u4EF6\u6216\u8005\u9879\u76EE\uFF0C\u6B22\u8FCE Star \u2B50 \u5173\u6CE8~</p>
</blockquote>
<h1 id="\u2728Tinymce-plugin" tabindex="-1"><a class="header-anchor" href="#\u2728Tinymce-plugin">#</a> \u2728Tinymce-plugin</h1>
<hr>
<p><a href="https://github.com/tinymce-plugin" target="_blank"><img src="https://tinymce-plugin.github.io/badge.svg" alt="tinymce-plugin"></a>\xA0
<a href="https://www.npmjs.com/package/tinymce-plugin" target="_blank"><img src="https://img.shields.io/npm/v/tinymce-plugin.svg" alt="release candidate"></a>\xA0
<a href="https://www.tiny.cloud" target="_blank"><img src="https://img.shields.io/badge/tinymce-6.x-green.svg" alt="tinymce Version"></a>\xA0
<a href="https://github.com/tinymce-plugin/tp-indent2em/blob/main/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/tinymce-plugin/tp-indent2em.svg" alt="GitHub license"></a>\xA0
<a href="https://www.tiny.cloud" target="_blank"><img src="https://img.shields.io/npm/dm/@npkg/tinymce-plugins" alt="tinymce Version"></a></p>
<div class="tip fv-state-tip fv-tip">
<p><strong>Tinymce-plugin \u793E\u533A \u6240\u6709\u7A33\u5B9A\u63D2\u4EF6 \u5C06\u6536\u5F55\u5728 <a href="https://www.npmjs.com/package/tinymce-plugin" target="_blank"><strong>tinymce-plugin</strong></a> \u548C <a href="https://www.npmjs.com/package/@npkg/tinymce-plugin" target="_blank"><strong>@npkg/tinymce-plugin</strong></a> \u4E2D\u3002\uFF08\u4E8C\u8005\u540C\u6B65\uFF09</strong></p>
</div>
<!--\u{1F680} \u8868\u793A\u5DF2\u7ECF\u5B9E\u73B0\u7684\u529F\u80FD

\u{1F477} \u8868\u793A\u8FDB\u884C\u4E2D\u7684\u529F\u80FD

\u23F3 \u8868\u793A\u89C4\u5212\u4E2D\u7684\u529F\u80FD

\u{1F4A1} \u60F3\u6CD5

\u{1F4DD} \u8BA1\u5212

 \u4F46\u662F\u{1F947}\u{1F948}\u{1F949}\u{1F3C5}\u{1F396}\u{1F3C6}\u{1F525}-->
<div class="warning fv-state-tip fv-warning"><p class="fv-state-title" ></p>
<h3 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F">#</a> \u6CE8\u610F</h3>
<p>\u65E7\u7248\u5305 <a href="https://www.npmjs.com/package/@npkg/tinymce-plugins" target="_blank"><s><strong><code class="fv-code_inline">@npkg/tinymce-plugins</code></strong></s></a> \u505C\u6B62\u7EF4\u62A4</p>
<p>\u7531<a href="https://www.npmjs.com/package/tinymce-plugin" target="_blank"><strong><code class="fv-code_inline">tinymce-plugin</code></strong></a> \u548C <a href="https://www.npmjs.com/package/@npkg/tinymce-plugin" target="_blank"><strong><code class="fv-code_inline">@npkg/tinymce-plugin</code></strong></a> \u66FF\u4EE3</p>
</div>
<h1 id="\u200D\u2642\uFE0F\u52A0\u5165\u793E\u533A" tabindex="-1"><a class="header-anchor" href="#\u{1F64B}\u200D\u2642\uFE0F \u52A0\u5165\u793E\u533A">#</a> \u{1F64B}\u200D\u2642\uFE0F \u52A0\u5165\u793E\u533A</h1>
<hr>
<p>\u5982\u679C\u4F60\u6B63\u5728\u4F7F\u7528tinymce\uFF0C\u4E0D\u59A8\u52A0\u5165 Tinymce-plugin \u7EC4\u7EC7\uFF0C\u548C\u6211\u4EEC\u4E00\u8D77\u7EF4\u62A4\u53D1\u5C55\uFF0C\u5171\u540C\u6210\u957F\u3002\u53EF\u4EE5\u901A\u8FC7\u4EE5\u4E0B\u4E24\u79CD\u65B9\u5F0F\u52A0\u5165\uFF1A</p>
<ul>
<li>\u76F4\u63A5\u5728\u8FD9\u4E2A <a href="https://github.com/tinymce-plugin/tinymce-plugin.github.io/issues/3" target="_blank"><em><em><strong>issue</strong></em></em></a> \u4E0A\u8BC4\u8BBA\uFF0C\u544A\u77E5\u6211\u4EEC\u4F60\u60F3\u52A0\u5165 tinymce-plugin\u3002</li>
<li>\u53D1\u9001\u90AE\u4EF6\u5230 <a href="mailto:fivecc@qq.com?Subject=%E5%8A%A0%E5%85%A5Tinymce-plugin%E7%A4%BE%E5%8C%BA%E7%BB%84%E7%BB%87" target="_blank"><strong>fivecc@qq.com</strong></a>\uFF0C\u5199\u660E\u4F60\u7684 GitHub ID\uFF0C\u5982 five-great\u3002
\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5728\u4F60\u52A0\u5165\u6211\u4EEC\u4E4B\u540E\uFF0C\u4F60\u4F5C\u4E3A GitHub tinymce-plugin \u7EC4\u7EC7\u6210\u5458\u7684\u4FE1\u606F\u662F\u5904\u4E8E\u9690\u85CF\u72B6\u6001\u7684\u3002\u5982\u679C\u4F60\u5E0C\u671B\u5728\u4F60\u7684\u4E2A\u4EBA GitHub \u8D44\u6599\u9875\u4E0A\u5C55\u793A tinymce-plugin \u7EC4\u7EC7\uFF0C\u4F60\u53EF\u4EE5\u5728 <a href="https://github.com/orgs/tinymce-plugin/people" target="_blank"><em><em><strong>Tinymce-plugin People</strong></em></em></a> \u5904\u5C06\u4F60\u7684\u4FE1\u606F\u4ECE private \u201C\u79C1\u6709\u201D\u6539\u4E3A public \u201C\u516C\u5F00\u201D\u3002\u5F53\u7136\uFF0C\u6211\u4EEC\u63A8\u8350\u8BBE\u7F6E\u4E3A\u516C\u5F00\u3002</li>
</ul>
<h1 id="\u4EA4\u6D41\u8BA8\u8BBA" tabindex="-1"><a class="header-anchor" href="#\u{1F4AC} \u4EA4\u6D41\u8BA8\u8BBA">#</a> \u{1F4AC} \u4EA4\u6D41\u8BA8\u8BBA</h1>
<hr>
<ul>
<li>
<p>\u6B22\u8FCE\u524D\u5F80 <a href="https://github.com/tinymce-plugin/tinymce-plugin.github.io/discussions" target="_blank"><em><em><strong>Discussions</strong></em></em></a> \u4E0A\u53C2\u4E0E\u8BA8\u8BBA\u6216\u54A8\u8BE2\u95EE\u9898\u3002</p>
</li>
<li>
<p>\u6B22\u8FCE\u52A0\u5165 <a href="https://jq.qq.com/?_wv=1027&amp;k=JgsnIlUw" target="_blank"><em><em><strong><code class="fv-code_inline">qq\u4EA4\u6D41\u7FA4 143085779</code></strong></em></em></a>
<img src="https://tinymce-plugin.github.io/qq.png#pic_center" alt="qq\u7FA4\u4E8C\u7EF4\u7801"></p>
</li>
</ul>
<h1 id="\u8D21\u732E\u8005\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u{1F44D} \u8D21\u732E\u8005\u5217\u8868">#</a> \u{1F44D} \u8D21\u732E\u8005\u5217\u8868</h1>
<hr>
<p><a href="https://opencollective.com/tinymce-plugin/contributors.svg?width=890&button=false"><img src="https://opencollective.com/tinymce-plugin/contributors.svg?width=890&button=false" /></a></p>
<hr>
<Demo0 data-isComponent="vue" class="demo-introduction_t_mr50a31661495750455_p_" />
<demoGroup>
 <demoGroupItem title=" Javascript ">
<Demo1  data-isComponent="iframe" />
 </demoGroupItem>
 <demoGroupItem title="Vue" active>
<Demo2 data-isComponent="vue" class="demo-introduction_t_mr50a31661495750455_p_" />
 </demoGroupItem>
 <demoGroupItem title="Vue2">
<Demo3 data-isComponent="vue" class="demo-introduction_t_mr50a31661495750455_p_" />
 </demoGroupItem>
 <demoGroupItem title="React">
<Demo4  data-isComponent="react"  class="demo-introduction_t_mr50a31661495750455_p_" />
 </demoGroupItem>
</demoGroup></div></div><PagesRouter  docPath="guide/introduction.md" mapType="docs" docRepo="tinymce-plugin-docs" pagesName="introduction_t_mr50a31661495750455_p_" />`});export{b as default};
