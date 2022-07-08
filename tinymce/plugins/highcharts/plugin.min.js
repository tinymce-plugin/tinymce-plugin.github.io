/*

Highcharts Editor v0.3.0

Copyright (c) 2016-2017, Highsoft

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
tinymce.PluginManager.add("highcharts",function(e,t){var i=highed.ModalEditor(!1,{features:"data templates customize",allowDone:!0},function(t){var i=t.export.html(!0);e.insertContent('<div class="mceNonEditable">'+i+"</div><p></p>")});tinymce.majorVersion>4?e.ui.registry.addMenuItem("highcharts",{text:"Highcharts (Interactive)",onAction:function(e){tinymce.activeEditor.schema.addValidElements("script[type|src],div[id|style]a[*],altGlyph[*],altGlyphDef[*],altGlyphItem[*],animate[*],animateColor[*],animateMotion[*],animateTransform[*],circle[*],clipPath[*],color-profile[*],cursor[*],defs[*],desc[*],ellipse[*],feBlend[*],feColorMatrix[*],feComponentTransfer[*],feComposite[*],feConvolveMatrix[*],feDiffuseLighting[*],feDisplacementMap[*],feDistantLight[*],feFlood[*],feFuncA[*],feFuncB[*],feFuncG[*],feFuncR[*],feGaussianBlur[*],feImage[*],feMerge[*],feMergeNode[*],feMorphology[*],feOffset[*],fePointLight[*],feSpecularLighting[*],feSpotLight[*],feTile[*],feTurbulence[*],filter[*],font[*],font-face[*],font-face-format[*],font-face-name[*],font-face-src[*],font-face-uri[*],foreignObject[*],g[*],glyph[*],glyphRef[*],hkern[*],image[*],line[*],linearGradient[*],marker[*],mask[*],metadata[*],missing-glyph[*],mpath[*],path[*],pattern[*],polygon[*],polyline[*],radialGradient[*],rect[*],script[*],set[*],stop[*],style[*],svg[*],switch[*],symbol[*],text[*],textPath[*],title[*],tref[*],tspan[*],use[*],view[*],vkern[*]"),i.attachToSummoner(this._id),i.show(),i.resize()}}):e.addMenuItem("highcharts",{text:"Highcharts (Interactive)",context:"insert",icon:!1,onclick:function(e){tinymce.activeEditor.schema.addValidElements("script[type|src],div[id|style]a[*],altGlyph[*],altGlyphDef[*],altGlyphItem[*],animate[*],animateColor[*],animateMotion[*],animateTransform[*],circle[*],clipPath[*],color-profile[*],cursor[*],defs[*],desc[*],ellipse[*],feBlend[*],feColorMatrix[*],feComponentTransfer[*],feComposite[*],feConvolveMatrix[*],feDiffuseLighting[*],feDisplacementMap[*],feDistantLight[*],feFlood[*],feFuncA[*],feFuncB[*],feFuncG[*],feFuncR[*],feGaussianBlur[*],feImage[*],feMerge[*],feMergeNode[*],feMorphology[*],feOffset[*],fePointLight[*],feSpecularLighting[*],feSpotLight[*],feTile[*],feTurbulence[*],filter[*],font[*],font-face[*],font-face-format[*],font-face-name[*],font-face-src[*],font-face-uri[*],foreignObject[*],g[*],glyph[*],glyphRef[*],hkern[*],image[*],line[*],linearGradient[*],marker[*],mask[*],metadata[*],missing-glyph[*],mpath[*],path[*],pattern[*],polygon[*],polyline[*],radialGradient[*],rect[*],script[*],set[*],stop[*],style[*],svg[*],switch[*],symbol[*],text[*],textPath[*],title[*],tref[*],tspan[*],use[*],view[*],vkern[*]"),i.attachToSummoner(this._id),i.show(),i.resize()}})});