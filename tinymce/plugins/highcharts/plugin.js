tinymce.PluginManager.add('highcharts', function (editor, url) {
  var modal = highed.ModalEditor(false, {
                 features: 'data templates customize',
                 allowDone: true
             }, function (chart) {
                 var html = chart.export.html(true);
                editor.insertContent('<div class="mceNonEditable">' + html + '</div><p></p>');                
             }); 
     editor.ui.registry.addMenuItem('highcharts', {
         text: 'Highcharts (Interactive)',
         onAction: function (e) {
             tinymce.activeEditor.schema.addValidElements("script[type|src],div[id|style]a[*],altGlyph[*],altGlyphDef[*],altGlyphItem[*],animate[*],animateColor[*],animateMotion[*],animateTransform[*],circle[*],clipPath[*],color-profile[*],cursor[*],defs[*],desc[*],ellipse[*],feBlend[*],feColorMatrix[*],feComponentTransfer[*],feComposite[*],feConvolveMatrix[*],feDiffuseLighting[*],feDisplacementMap[*],feDistantLight[*],feFlood[*],feFuncA[*],feFuncB[*],feFuncG[*],feFuncR[*],feGaussianBlur[*],feImage[*],feMerge[*],feMergeNode[*],feMorphology[*],feOffset[*],fePointLight[*],feSpecularLighting[*],feSpotLight[*],feTile[*],feTurbulence[*],filter[*],font[*],font-face[*],font-face-format[*],font-face-name[*],font-face-src[*],font-face-uri[*],foreignObject[*],g[*],glyph[*],glyphRef[*],hkern[*],image[*],line[*],linearGradient[*],marker[*],mask[*],metadata[*],missing-glyph[*],mpath[*],path[*],pattern[*],polygon[*],polyline[*],radialGradient[*],rect[*],script[*],set[*],stop[*],style[*],svg[*],switch[*],symbol[*],text[*],textPath[*],title[*],tref[*],tspan[*],use[*],view[*],vkern[*]");
             modal.attachToSummoner(this._id);
             modal.show();
            //  modal.resize();
         }
     });
});
