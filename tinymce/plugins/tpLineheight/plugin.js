/*! 
*  @plugin @tinymce-plugin/tp-lineheight
*  @version 0.0.9 (2022-5-5)
*  @description 行间距
*  @copyright (2022) Five(Li Hailong) https://github.com/tinymce-plugin/tp-lineheight
*/

(function() {
  "use strict";
  var getLineheightVal = function(editor) {
    return editor.getParam("tp_lineheight_value", "1 1.5 1.6 1.75 1.8 2 3 4 5");
  };
  var create = function(editor, value) {
    editor.undoManager.transact(function() {
      editor.focus();
      editor.execCommand("tpLineHeight", false, value);
    });
  };
  var setup = function(editor, opt2) {
    if (!editor.ui.registry.getAll().icons[opt2.registryName]) {
      editor.ui.registry.addIcon(opt2.registryName, opt2.icon);
    }
    var global$1 = tinymce.util.Tools.resolve("tinymce.util.Tools");
    var tp$Tools = editor.tp$.Tools;
    var getDefaultItems = function(_items2) {
      return _items2.length > 0 ? _items2[0] : "";
    };
    var _items = getLineheightVal(editor).split(" ");
    var defaultSelection = tp$Tools.selection.cell(getDefaultItems(_items));
    editor.ui.registry.addSplitButton(opt2.registryName, {
      icon: opt2.registryName,
      tooltip: opt2.title,
      select: function(value) {
        return value === defaultSelection.get();
      },
      fetch: function(done) {
        var _dom = editor.dom;
        var _block = editor.selection.getSelectedBlocks();
        var lhv = -1;
        if (lhv == -1) {
          lhv = _dom.getStyle(_block, "line-height") ? _dom.getStyle(_block, "line-height") : "";
        }
        done(global$1.map(_items, function(item) {
          lhv == item ? defaultSelection.set(item) : "";
          return {
            type: "choiceitem",
            text: item,
            value: item
          };
        }));
      },
      onAction: function() {
        create(editor, defaultSelection.getAction());
      },
      onItemAction: function(_api, value) {
        defaultSelection.set(value, value);
        create(editor, value);
      }
    });
    editor.ui.registry.addNestedMenuItem(opt2.registryName, {
      text: opt2.title,
      icon: opt2.registryName,
      getSubmenuItems: function() {
        var _dom = editor.dom;
        var _block = editor.selection.getSelectedBlocks();
        var lhv = -1;
        if (lhv == -1) {
          lhv = _dom.getStyle(_block, "line-height") ? _dom.getStyle(_block, "line-height") : "";
        }
        return global$1.map(_items, function(item) {
          return {
            type: "togglemenuitem",
            text: item,
            active: lhv === item ? true : false,
            onAction: function() {
              defaultSelection.set(item, item);
              create(editor, item);
            }
          };
        });
      }
    });
  };
  var register = function(editor, opt2) {
    editor.addCommand("mce".concat(opt2.registryName.substring(0, 1).toUpperCase() + opt2.registryName.substring(1)), function(ui, value) {
      create(editor, value);
    });
  };
  var Plugin = function(opt2) {
    tinymce.PluginManager.add(opt2.registryName, function(editor, url) {
      setup(editor, opt2);
      register(editor, opt2);
      return {
        getMetadata: function() {
          return {
            name: opt2.name,
            url: opt2.repo
          };
        }
      };
    });
  };
  var opt = {
    name: "Lineheight",
    registryName: "tpLineheight",
    title: "Line Height",
    repo: "https://github.com/tinymce-plugin/tp-lineheight",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.984 12.984v-1.969h12v1.969h-12zM9.984 18.984v-1.969h12v1.969h-12zM9.984 5.016h12v1.969h-12v-1.969zM6 6.984v10.031h2.484l-3.469 3.469-3.516-3.469h2.484v-10.031h-2.484l3.516-3.469 3.469 3.469h-2.484z"></path></svg>'
  };
  Plugin(opt);
  var main = {
    opt
  };
  return main;
}());