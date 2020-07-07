import { a6 as _asyncToGenerator, a7 as _regeneratorRuntime, b as _inherits, c as _getPrototypeOf, d as _possibleConstructorReturn, e as _classCallCheck, f as init, s as safe_not_equal, g as _assertThisInitialized, h as dispatch_dev, j as _createClass, S as SvelteComponentDev, v as validate_slots, m as element, t as text, D as space, p as claim_element, q as children, r as claim_text, u as detach_dev, E as claim_space, x as attr_dev, y as add_location, a8 as HtmlTag, z as insert_dev, A as append_dev, G as _slicedToArray, a9 as set_data_dev, C as noop } from './client.38aa6a78.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\posts\\[slug].svelte";

function create_fragment(ctx) {
  var h1;
  var t0_value =
  /*post*/
  ctx[0].title + "";
  var t0;
  var t1;
  var h3;
  var t2_value =
  /*post*/
  ctx[0].date + "";
  var t2;
  var t3;
  var html_tag;
  var raw_value =
  /*post*/
  ctx[0].html + "";
  var block = {
    c: function create() {
      h1 = element("h1");
      t0 = text(t0_value);
      t1 = space();
      h3 = element("h3");
      t2 = text(t2_value);
      t3 = space();
      this.h();
    },
    l: function claim(nodes) {
      h1 = claim_element(nodes, "H1", {
        class: true
      });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, t0_value);
      h1_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      h3 = claim_element(nodes, "H3", {
        class: true
      });
      var h3_nodes = children(h3);
      t2 = claim_text(h3_nodes, t2_value);
      h3_nodes.forEach(detach_dev);
      t3 = claim_space(nodes);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "font-bold mb-4 text-center text-5xl");
      add_location(h1, file, 16, 0, 407);
      attr_dev(h3, "class", "italic mb-4 text-center text-base");
      add_location(h3, file, 17, 0, 474);
      html_tag = new HtmlTag(null);
    },
    m: function mount(target, anchor) {
      insert_dev(target, h1, anchor);
      append_dev(h1, t0);
      insert_dev(target, t1, anchor);
      insert_dev(target, h3, anchor);
      append_dev(h3, t2);
      insert_dev(target, t3, anchor);
      html_tag.m(raw_value, target, anchor);
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (dirty &
      /*post*/
      1 && t0_value !== (t0_value =
      /*post*/
      ctx[0].title + "")) set_data_dev(t0, t0_value);
      if (dirty &
      /*post*/
      1 && t2_value !== (t2_value =
      /*post*/
      ctx[0].date + "")) set_data_dev(t2, t2_value);
      if (dirty &
      /*post*/
      1 && raw_value !== (raw_value =
      /*post*/
      ctx[0].html + "")) html_tag.p(raw_value);
    },
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(h1);
      if (detaching) detach_dev(t1);
      if (detaching) detach_dev(h3);
      if (detaching) detach_dev(t3);
      if (detaching) html_tag.d();
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

function preload(_x) {
  return _preload.apply(this, arguments);
}

function _preload() {
  _preload = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref3) {
    var params, query, res, data;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _ref3.params, query = _ref3.query;
            _context.next = 3;
            return this.fetch("posts/".concat(params.slug, ".json"));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;

            if (!(res.status === 200)) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", {
              post: data
            });

          case 11:
            this.error(res.status, data.message);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _preload.apply(this, arguments);
}

function instance($$self, $$props, $$invalidate) {
  var post = $$props.post;
  var writable_props = ["post"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<U5Bslugu5D> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("U5Bslugu5D", $$slots, []);

  $$self.$set = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
  };

  $$self.$capture_state = function () {
    return {
      preload: preload,
      post: post
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("post" in $$props) $$invalidate(0, post = $$props.post);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [post];
}

var U5Bslugu5D = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(U5Bslugu5D, _SvelteComponentDev);

  var _super = _createSuper(U5Bslugu5D);

  function U5Bslugu5D(options) {
    var _this;

    _classCallCheck(this, U5Bslugu5D);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      post: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "U5Bslugu5D",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*post*/
    ctx[0] === undefined && !("post" in props)) {
      console.warn("<U5Bslugu5D> was created without expected prop 'post'");
    }

    return _this;
  }

  _createClass(U5Bslugu5D, [{
    key: "post",
    get: function get() {
      throw new Error("<U5Bslugu5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<U5Bslugu5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return U5Bslugu5D;
}(SvelteComponentDev);

export default U5Bslugu5D;
export { preload };
