import { b as _inherits, c as _getPrototypeOf, d as _possibleConstructorReturn, e as _classCallCheck, f as init, s as safe_not_equal, g as _assertThisInitialized, h as dispatch_dev, S as SvelteComponentDev, v as validate_slots, m as element, t as text, D as space, p as claim_element, q as children, r as claim_text, u as detach_dev, E as claim_space, x as attr_dev, y as add_location, z as insert_dev, A as append_dev, C as noop } from './client.38aa6a78.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\Contact.svelte";

function create_fragment(ctx) {
  var div;
  var h1;
  var t0;
  var t1;
  var address;
  var ul;
  var li0;
  var t2;
  var t3;
  var li1;
  var t4;
  var t5;
  var li2;
  var t6;
  var t7;
  var li3;
  var t8;
  var a;
  var t9;
  var block = {
    c: function create() {
      div = element("div");
      h1 = element("h1");
      t0 = text("Contact Zi Ha At...");
      t1 = space();
      address = element("address");
      ul = element("ul");
      li0 = element("li");
      t2 = text("For friendly chat - cyphina@gmail.com");
      t3 = space();
      li1 = element("li");
      t4 = text("For something business oriented - z.nam.ky.ha@gmail.com");
      t5 = space();
      li2 = element("li");
      t6 = text("For something you want me to see 100% - Add Cyphina on Epic Games Launcher");
      t7 = space();
      li3 = element("li");
      t8 = text("To see my projects:\r\n                ");
      a = element("a");
      t9 = text("My Github");
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
      t0 = claim_text(h1_nodes, "Contact Zi Ha At...");
      h1_nodes.forEach(detach_dev);
      t1 = claim_space(div_nodes);
      address = claim_element(div_nodes, "ADDRESS", {});
      var address_nodes = children(address);
      ul = claim_element(address_nodes, "UL", {
        class: true
      });
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li0_nodes = children(li0);
      t2 = claim_text(li0_nodes, "For friendly chat - cyphina@gmail.com");
      li0_nodes.forEach(detach_dev);
      t3 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li1_nodes = children(li1);
      t4 = claim_text(li1_nodes, "For something business oriented - z.nam.ky.ha@gmail.com");
      li1_nodes.forEach(detach_dev);
      t5 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li2_nodes = children(li2);
      t6 = claim_text(li2_nodes, "For something you want me to see 100% - Add Cyphina on Epic Games Launcher");
      li2_nodes.forEach(detach_dev);
      t7 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", {
        class: true
      });
      var li3_nodes = children(li3);
      t8 = claim_text(li3_nodes, "To see my projects:\r\n                ");
      a = claim_element(li3_nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t9 = claim_text(a_nodes, "My Github");
      a_nodes.forEach(detach_dev);
      li3_nodes.forEach(detach_dev);
      ul_nodes.forEach(detach_dev);
      address_nodes.forEach(detach_dev);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h1, "class", "text-red-500 text-2xl font-extrabold border-b border-red-500");
      add_location(h1, file, 1, 4, 24);
      attr_dev(li0, "class", "svelte-1c0pp3a");
      add_location(li0, file, 4, 12, 195);
      attr_dev(li1, "class", "svelte-1c0pp3a");
      add_location(li1, file, 5, 12, 255);
      attr_dev(li2, "class", "svelte-1c0pp3a");
      add_location(li2, file, 6, 12, 333);
      attr_dev(a, "href", "https://github.com/cyphina/UnboundedPerceptions");
      attr_dev(a, "class", "svelte-1c0pp3a");
      add_location(a, file, 9, 16, 489);
      attr_dev(li3, "class", "svelte-1c0pp3a");
      add_location(li3, file, 7, 12, 430);
      attr_dev(ul, "class", "mx-2 mt-2 list-decimal");
      add_location(ul, file, 3, 8, 146);
      add_location(address, file, 2, 4, 127);
      attr_dev(div, "class", "m-2");
      add_location(div, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      append_dev(div, h1);
      append_dev(h1, t0);
      append_dev(div, t1);
      append_dev(div, address);
      append_dev(address, ul);
      append_dev(ul, li0);
      append_dev(li0, t2);
      append_dev(ul, t3);
      append_dev(ul, li1);
      append_dev(li1, t4);
      append_dev(ul, t5);
      append_dev(ul, li2);
      append_dev(li2, t6);
      append_dev(ul, t7);
      append_dev(ul, li3);
      append_dev(li3, t8);
      append_dev(li3, a);
      append_dev(a, t9);
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
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Contact> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Contact", $$slots, []);
  return [];
}

var Contact = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Contact, _SvelteComponentDev);

  var _super = _createSuper(Contact);

  function Contact(options) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Contact",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Contact;
}(SvelteComponentDev);

export default Contact;
