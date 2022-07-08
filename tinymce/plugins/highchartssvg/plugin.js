
tinymce.PluginManager.add('highchartssvg', function (editor, url) {
  var modal = highed.ModalEditor(false, {}, function (html, svg) {
                 editor.insertContent('<div class="mceNonEditable">' + svg + '</div>');                
              })
  ; 

  editor.ui.registry.addMenuItem('highchartssvg', {
      text: 'Highcharts (SVG)',
      context: 'insert',
      onAction: function (e) {
          tinymce.activeEditor.schema.addValidElements("div[class],a[*],altGlyph[*],altGlyphDef[*],altGlyphItem[*],animate[*],animateColor[*],animateMotion[*],animateTransform[*],circle[*],clipPath[*],color-profile[*],cursor[*],defs[*],desc[*],ellipse[*],feBlend[*],feColorMatrix[*],feComponentTransfer[*],feComposite[*],feConvolveMatrix[*],feDiffuseLighting[*],feDisplacementMap[*],feDistantLight[*],feFlood[*],feFuncA[*],feFuncB[*],feFuncG[*],feFuncR[*],feGaussianBlur[*],feImage[*],feMerge[*],feMergeNode[*],feMorphology[*],feOffset[*],fePointLight[*],feSpecularLighting[*],feSpotLight[*],feTile[*],feTurbulence[*],filter[*],font[*],font-face[*],font-face-format[*],font-face-name[*],font-face-src[*],font-face-uri[*],foreignObject[*],g[*],glyph[*],glyphRef[*],hkern[*],image[*],line[*],linearGradient[*],marker[*],mask[*],metadata[*],missing-glyph[*],mpath[*],path[*],pattern[*],polygon[*],polyline[*],radialGradient[*],rect[*],script[*],set[*],stop[*],style[*],svg[*],switch[*],symbol[*],text[*],textPath[*],title[*],tref[*],tspan[*],use[*],view[*],vkern[*]");
          modal.attachToSummoner(this._id);
          modal.show();
      }
  });
  return {
      getMetadata: function () {
          return  {
              name: pluginName,
              url: "https://github.com/Five-great/tinymce-plugins",
          };
      }
  };
});
