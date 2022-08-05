/*! 
*  @plugin @tinymce-plugin/tp-extendgroups
*  @version 0.0.9 (2022-5-5)
*  @description 扩展组件
*  @copyright (2022) Five(Li Hailong) https://github.com/tinymce-plugin/tp-extendgroups
*/

(function() {
  "use strict";
  var getextendGroupsList = function(editor) {
    return Object.assign({
      alignmentdrop: {
        icon: "align-left",
        tooltip: "alignment",
        isSelect: true,
        type: "choiceitem",
        styleSelector: "text-align",
        onAction: function(editor2, value) {
          editor2.formatter.apply("align" + value);
        },
        items: [
          {
            icon: "align-left",
            text: "\u5C45\u5DE6\u5BF9\u9F50",
            value: "left"
          },
          {
            icon: "align-center",
            text: "\u5C45\u4E2D\u5BF9\u9F50",
            value: "center"
          },
          {
            icon: "align-right",
            text: "\u5C45\u53F3\u5BF9\u9F50",
            value: "right"
          },
          {
            icon: "align-justify",
            text: "\u4E24\u7AEF\u5BF9\u9F50",
            value: "justify"
          }
        ]
      }
    }, editor.getParam("tp_extend_groups", {}, Object));
  };
  var getextendGroupsAddIcon = function(editor) {
    return editor.getParam("tp_extend_groups_addicon", {}, Object);
  };
  var Qedotor = "";
  var global$1$1 = tinymce.util.Tools.resolve("tinymce.util.Tools");
  var doAct = function(editor, value, callback) {
    editor.undoManager.transact(function() {
      editor.focus();
      callback(editor, value);
    });
  };
  var _$state = { isActive: false };
  var _$api = {
    createState: function(_item) {
      var _id = new Date().getTime();
      _$state[_id] = [];
      _item.stateId = _id;
    },
    setState: function(id, v) {
      _$state[id] = v;
    },
    getState: function(id) {
      return _$state[id];
    }
  };
  var tp$Tools = Qedotor.tp$.Tools;
  var Cell = tp$Tools.selection.cell;
  var getDefaultItems = function(_items) {
    return _items.length > 0 ? typeof _items[0] === "string" ? _items[0] : _items[0].value : "";
  };
  var commandFn = function(editor, cmd, val) {
    editor.execCommand(cmd, val);
  };
  var setSelectorAdapter = function(item, val) {
    return !item.selector ? [
      '*[style*="' + (val ? item.styleSelector + ": " + val : item.styleSelector) + '"]',
      '*[data-mce-style*="' + (val ? item.styleSelector + ": " + val : item.styleSelector) + '"]'
    ] : ["" + item.selector];
  };
  var createStateSelectItem = function(_item) {
    var _items = _item.value.split(" ");
    _$api.createState(_item);
    global$1$1.map(_items, function(item, index) {
      _$state[_item.stateId].push(Cell(false));
      setTimeout(function() {
        Qedotor.selection.selectorChangedWithUnbind(setSelectorAdapter(_item, item).join(","), _$state[_item.stateId][index].set).unbind;
      }, 2e3);
    });
  };
  var registerStateTogglemenuitem = function(editor, registerName, registerObj) {
    var items = registerObj.items;
    global$1$1.map(items, function(item) {
      switch (item.type) {
        case "selectItem":
          createStateSelectItem(item);
          break;
      }
    });
  };
  var registerStateChoiceitem = function(editor, registerName, registerObj) {
    var items = registerObj.items;
    if (registerObj.styleSelector) {
      _$api.createState(registerObj);
      global$1$1.map(items, function(item, index) {
        _$state[registerObj.stateId].push(Cell(false));
        setTimeout(function() {
          Qedotor.selection.selectorChangedWithUnbind(setSelectorAdapter(registerObj, item.value).join(","), _$state[registerObj.stateId][index].set).unbind;
        }, 2e3);
      });
    }
  };
  var registerChoiceitem = function(editor, registerName, registerObj) {
    var items = registerObj.items;
    var defaultVal = Cell(getDefaultItems(registerObj.items));
    editor.ui.registry.addSplitButton(registerName, {
      icon: registerObj.icon,
      tooltip: registerObj.tooltip,
      select: function(value) {
        return registerObj.isSelect ? value === defaultVal.get() : false;
      },
      fetch: function(done) {
        done(global$1$1.map(items, function(item, index) {
          _$state[registerObj.stateId][index].get() ? defaultVal.set(item.value) : "";
          return {
            type: "choiceitem",
            icon: item.icon,
            text: item.text,
            value: item.value
          };
        }));
      },
      onAction: typeof registerObj.onAction === "function" ? function(_api) {
        doAct(editor, defaultVal.getAction(), registerObj.onAction);
      } : function(_api) {
        choiceitemSelectFn(editor, defaultVal.getAction());
      },
      onItemAction: typeof registerObj.onAction === "function" ? function(_api, value) {
        defaultVal.set(value, value);
        doAct(editor, value, registerObj.onAction);
      } : function(_api, value) {
        defaultVal.set(value, value);
        choiceitemSelectFn(editor, value);
      }
    });
    var choiceitemSelectFn = function(editor2, cmd) {
      editor2.execCommand(cmd);
    };
  };
  var registerTogglemenuitem = function(editor, registerName, registerObj) {
    var items = registerObj.items;
    Cell(getDefaultItems(registerObj.items));
    editor.ui.registry.addMenuButton(registerName, {
      icon: registerObj.icon,
      tooltip: registerObj.tooltip,
      fetch: function(done) {
        done(global$1$1.map(items, function(item) {
          switch (item.type) {
            case "selectItem":
              return createSelectItem2(editor, item);
            default:
              return createTogglemenuitem2(editor, item);
          }
        }));
      }
    });
    var createSelectItem2 = function(editor2, _item) {
      var _items = _item.value.split(" ");
      var _createSelectItem = {
        type: "nestedmenuitem",
        text: _item.text || "",
        getSubmenuItems: function() {
          return global$1$1.map(_items, function(item, index) {
            return {
              type: "togglemenuitem",
              text: item,
              value: item,
              active: _$state[_item.stateId][index].get(),
              onAction: function(_api) {
                doAct(editor2, item, _item.onAction);
              }
            };
          });
        }
      };
      _item.icon ? _createSelectItem.icon = _item.icon : "";
      return _createSelectItem;
    };
    var createTogglemenuitem2 = function(editor2, _item) {
      _item.buttonApi && _item.buttonApi.setActive ? "" : _item.buttonApi = {
        isActive: function() {
          return false;
        },
        setActive: ""
      };
      _item.isActive = false;
      return !(_item.selector || _item.styleSelector) ? {
        type: "togglemenuitem",
        icon: _item.icon || "",
        text: _item.text,
        value: _item.value,
        active: _item.isActive,
        onAction: function(_api) {
          _item.isActive = !_item.isActive;
          commandFn(editor2, _item.value);
        }
      } : {
        type: "togglemenuitem",
        icon: _item.icon || "",
        text: _item.text,
        value: _item.value,
        active: _item.buttonApi.isActive(),
        onAction: function(_api) {
          commandFn(editor2, _item.value);
        },
        onSetup: _item.buttonApi.setActive ? function() {
        } : stateSelectorAdapter2(editor2, setSelectorAdapter(_item), _item)
      };
    };
    var stateSelectorAdapter2 = function(editor2, selector, _item) {
      if (_item.buttonApi.setActive) {
        return {};
      } else {
        return function(buttonApi) {
          _item.buttonApi = buttonApi;
          return editor2.selection.selectorChangedWithUnbind(selector.join(","), buttonApi.setActive).bind;
        };
      }
    };
  };
  var register$1 = function(editor, registerName, registerObj) {
    Qedotor = editor;
    switch (registerObj.type) {
      case "choiceitem":
        registerChoiceitem(editor, registerName, registerObj);
        break;
      case "togglemenuitem":
        registerTogglemenuitem(editor, registerName, registerObj);
        break;
    }
  };
  var register$State = function(editor, registerName, registerObj) {
    switch (registerObj.type) {
      case "choiceitem":
        registerStateChoiceitem(editor, registerName, registerObj);
        break;
      case "togglemenuitem":
        registerStateTogglemenuitem(editor, registerName, registerObj);
        break;
    }
  };
  tinymce.util.Tools.resolve("tinymce.PluginManager");
  var global$1 = tinymce.util.Tools.resolve("tinymce.util.Tools");
  var Plugin = function(opt2) {
    tinymce.PluginManager.add(opt2.registryName, function(editor, url) {
      var list = getextendGroupsList(editor);
      var listAddIcon = getextendGroupsAddIcon(editor);
      global$1.each(list, function(item, key) {
        register$1(editor, key, item);
        register$State(editor, key, item);
      });
      global$1.each(listAddIcon, function(_item, key) {
        editor.ui.registry.addIcon(key, _item);
      });
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
    name: "Extendgroups",
    registryName: "tpExtendgroups",
    title: "Extend Groups",
    repo: "https://github.com/tinymce-plugin/tp-extendgroups",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9.984 12.984v-1.969h12v1.969h-12zM9.984 18.984v-1.969h12v1.969h-12zM9.984 5.016h12v1.969h-12v-1.969zM6 6.984v10.031h2.484l-3.469 3.469-3.516-3.469h2.484v-10.031h-2.484l3.516-3.469 3.469 3.469h-2.484z"></path></svg>'
  };
  Plugin(opt);
  var main = {
    opt
  };
  return main;
}());