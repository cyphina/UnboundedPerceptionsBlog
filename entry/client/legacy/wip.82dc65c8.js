import { b as _inherits, c as _getPrototypeOf, d as _possibleConstructorReturn, e as _classCallCheck, f as init, s as safe_not_equal, g as _assertThisInitialized, h as dispatch_dev, S as SvelteComponentDev, v as validate_slots, m as element, t as text, p as claim_element, q as children, r as claim_text, u as detach_dev, x as attr_dev, y as add_location, z as insert_dev, A as append_dev, C as noop } from './client.38aa6a78.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\wip.svelte";

function create_fragment(ctx) {
  var div;
  var h1;
  var t;
  var block = {
    c: function create() {
      div = element("div");
      h1 = element("h1");
      t = text("Still working on this...");
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      h1 = claim_element(div_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t = claim_text(h1_nodes, "Still working on this...");
      h1_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "text-3xl");
      add_location(h1, file, 1, 4, 24);
      attr_dev(div, "class", "h-20");
      add_location(div, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, h1);
      append_dev(h1, t);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance($$self, $$props) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Wip> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Wip", $$slots, []);
  return [];
}

var Wip = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Wip, _SvelteComponentDev);

  var _super = _createSuper(Wip);

  function Wip(options) {
    var _this;

    _classCallCheck(this, Wip);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Wip",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Wip;
}(SvelteComponentDev);

export default Wip;
