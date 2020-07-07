import { b as _inherits, c as _getPrototypeOf, d as _possibleConstructorReturn, e as _classCallCheck, f as init, s as safe_not_equal, g as _assertThisInitialized, h as dispatch_dev, S as SvelteComponentDev, k as create_slot, v as validate_slots, m as element, t as text, D as space, p as claim_element, q as children, r as claim_text, u as detach_dev, E as claim_space, x as attr_dev, y as add_location, z as insert_dev, A as append_dev, G as _slicedToArray, H as update_slot, I as transition_in, J as transition_out } from './client.38aa6a78.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\posts\\_layout.svelte";

function create_fragment(ctx) {
  var main;
  var h1;
  var t0;
  var t1;
  var current;
  var default_slot_template =
  /*$$slots*/
  ctx[1].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[0], null);
  var block = {
    c: function create() {
      main = element("main");
      h1 = element("h1");
      t0 = text("Make the most from what you have...");
      t1 = space();
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      main = claim_element(nodes, "MAIN", {
        class: true
      });
      var main_nodes = children(main);
      h1 = claim_element(main_nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Make the most from what you have...");
      h1_nodes.forEach(detach_dev);
      t1 = claim_space(main_nodes);
      if (default_slot) default_slot.l(main_nodes);
      main_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "text-xl text-red-700 text-center mb-4 font-sans italic");
      add_location(h1, file, 5, 4, 53);
      attr_dev(main, "class", "bg-green m-2");
      add_location(main, file, 4, 0, 21);
    },
    m: function mount(target, anchor) {
      insert_dev(target, main, anchor);
      append_dev(main, h1);
      append_dev(h1, t0);
      append_dev(main, t1);

      if (default_slot) {
        default_slot.m(main, null);
      }

      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        1) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[0], dirty, null, null);
        }
      }
    },
    i: function intro(local) {
      if (current) return;
      transition_in(default_slot, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(main);
      if (default_slot) default_slot.d(detaching);
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

function instance($$self, $$props, $$invalidate) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Layout> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Layout", $$slots, ['default']);

  $$self.$set = function ($$props) {
    if ("$$scope" in $$props) $$invalidate(0, $$scope = $$props.$$scope);
  };

  return [$$scope, $$slots];
}

var Layout = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Layout, _SvelteComponentDev);

  var _super = _createSuper(Layout);

  function Layout(options) {
    var _this;

    _classCallCheck(this, Layout);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Layout",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Layout;
}(SvelteComponentDev);

export default Layout;
