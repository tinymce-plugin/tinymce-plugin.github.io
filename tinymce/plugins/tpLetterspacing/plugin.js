/*! 
*  @plugin @tinymce-plugin/tp-letterspacing
*  @version 0.0.9 (2022-4-19)
*  @description 字母间距
*  @copyright (2022) Five(Li Hailong) https://github.com/tinymce-plugin/tp-letterspacing
*/

(function() {
  "use strict";
  var getLetterspacingVal = function(editor) {
    return editor.getParam("tp-letterspacing", "0px 1px 2px 4px 6px 8px 10px 20px 40px");
  };
  var create = function(editor, value) {
    editor.undoManager.transact(function() {
      editor.focus();
      editor.execCommand("tpLetterspacing", false, value);
    });
  };
  var setup = function(editor, opt2) {
    if (!editor.ui.registry.getAll().icons[opt2.registryName]) { 
      editor.ui.registry.addIcon(opt2.registryName, opt2.icon);
    }
    var global$1 = tinymce.util.Tools.resolve("tinymce.util.Tools");
    var tp$Tools = editor.tp$.Tools;
    var Cell = function(initial) {
      var value = initial;
      var action = initial;
      var get = function() {
        return value;
      };
      var getAction = function() {
        return action;
      };
      var set = function(v, s) {
        value = v;
        s ? action = s : "";
      };
      return {
        get,
        set,
        getAction
      };
    };
    var getDefaultItems = function(_items2) {
      return _items2.length > 0 ? _items2[0] : "";
    };
    var _items = getLetterspacingVal(editor).split(" ");
    var defaultSelection = Cell(getDefaultItems(_items));
    editor.ui.registry.addSplitButton(opt2.registryName, {
      icon: opt2.registryName,
      tooltip: opt2.title,
      select: function(value) {
        return value === defaultSelection.get();
      },
      fetch: function(done) {
        var _block = editor.selection.getStart();
        var lhv = -1;
        if (lhv == -1) {
          var _value = tp$Tools.getCurrentValue(_block, "letter-spacing");
          lhv = _value ? _value : getDefaultItems(_items);
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
        var _block = editor.selection.getStart();
        var lhv = -1;
        if (lhv == -1) {
          var _value = tp$Tools.getCurrentValue(_block, "letter-spacing");
          lhv = _value ? _value : getDefaultItems(_items);
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
    name: "Letterspacing",
    registryName: "tpLetterspacing",
    title: "Letter Spacing",
    repo: "https://github.com/tinymce-plugin/tp-letterspacing",
    icon: '<svg t="1610616201691" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="969" width="24" height="24"><path d="M682.666667 704l128 106.666667-128 106.666666v-85.333333H341.333333v85.333333L213.333333 810.666667l128-106.666667v85.333333h341.333334v-85.333333zM170.666667 170.666667v682.666666H85.333333V170.666667h85.333334z m768 0v682.666666h-85.333334V170.666667h85.333334z m-394.666667 0l202.666667 469.333333h-89.6l-38.4-93.866667h-213.333334L366.933333 640H277.333333l202.666667-469.333333h64zM512 255.146667L432.213333 469.333333h159.573334L512 255.146667z" p-id="970" fill="#222f3e"></path></svg>'
  };
  Plugin(opt);
  var main = {
    opt
  };
  return main;
}());