import { b as _inherits, c as _getPrototypeOf, d as _possibleConstructorReturn, e as _classCallCheck, f as init, s as safe_not_equal, g as _assertThisInitialized, h as dispatch_dev, S as SvelteComponentDev, v as validate_slots, m as element, D as space, t as text, p as claim_element, q as children, E as claim_space, r as claim_text, u as detach_dev, x as attr_dev, y as add_location, z as insert_dev, A as append_dev, C as noop } from './client.38aa6a78.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\Tools.svelte";

function create_fragment(ctx) {
  var main;
  var img;
  var img_src_value;
  var t0;
  var p0;
  var t1;
  var t2;
  var a;
  var t3;
  var t4;
  var p1;
  var t5;
  var t6;
  var ul;
  var li0;
  var t7;
  var t8;
  var li1;
  var t9;
  var t10;
  var li2;
  var t11;
  var t12;
  var li3;
  var t13;
  var t14;
  var li4;
  var t15;
  var t16;
  var p2;
  var t17;
  var t18;
  var p3;
  var t19;
  var t20;
  var p4;
  var t21;
  var t22;
  var p5;
  var t23;
  var t24;
  var p6;
  var t25;
  var t26;
  var p7;
  var t27;
  var t28;
  var p8;
  var t29;
  var block = {
    c: function create() {
      main = element("main");
      img = element("img");
      t0 = space();
      p0 = element("p");
      t1 = text("This is a glimpse of my dialog tool which I haven't worked on in a while. I made this in 2018-2019 over the\r\n        break so I could learn a bit about WPF.");
      t2 = space();
      a = element("a");
      t3 = text("Link To the Tool");
      t4 = space();
      p1 = element("p");
      t5 = text("It features several things including:");
      t6 = space();
      ul = element("ul");
      li0 = element("li");
      t7 = text("Branching dialog (choices)");
      t8 = space();
      li1 = element("li");
      t9 = text("Node based editing (similar to UE4 controls)");
      t10 = space();
      li2 = element("li");
      t11 = text("Dialog Conditionals");
      t12 = space();
      li3 = element("li");
      t13 = text("Support for triggering events in my game");
      t14 = space();
      li4 = element("li");
      t15 = text("Exports the dialog data to JSON which can be added to data tables within UE4");
      t16 = space();
      p2 = element("p");
      t17 = text("The controls are straight forward (like UE4 node editors). They controls are specified in the github but here's\r\n        a short reiteration:");
      t18 = space();
      p3 = element("p");
      t19 = text("Click on any node to select them, or click drag to create a selection rectangle and select multiple nodes. Then\r\n        we can move them all by dragging from one of the bodies of the selected noes.");
      t20 = space();
      p4 = element("p");
      t21 = text("Scroll to zoom in and out. Pan around by right click dragging around the dark blue background. Double click on\r\n        the red header to change the title of the dialog. This matters since inside the game, the conversation name is\r\n        used for several things.");
      t22 = space();
      p5 = element("p");
      t23 = text("Drag and drop nodes around the editing field. Make sure to connect nodes to the root node since the dialog tree\r\n        is traversed from the root node. Hold F and click to create a dialog node. Drag off the little button and drop\r\n        onto the body of another nodes to create a connection. If there's more than one connection from a node, it\r\n        becomes a choice node.");
      t24 = space();
      p6 = element("p");
      t25 = text("Hold T and click to create a Trigger node. Hold C and click to create a conditional node which should connect to\r\n        two nodes. The first node it is connected to is reached if the condition is true, and the second node connected\r\n        is reached if the condition is false.");
      t26 = space();
      p7 = element("p");
      t27 = text("Click on the selection box and hover over an element to see a description of what parameters to pass to the\r\n        condition and trigger nodes.");
      t28 = space();
      p8 = element("p");
      t29 = text("I think I enjoy developing web apps more so I'll probably be making tools with Svelte form now on. However, WPF\r\n        was an interesting framework. I still need to make time to learn more C#, but there are so many things to learn\r\n        and I don't know what I feel like doing. I guess wherever my career takes me I'll focus on that, although\r\n        gameplay programming will always be one of the higher priorities.");
      this.h();
    },
    l: function claim(nodes) {
      main = claim_element(nodes, "MAIN", {
        class: true
      });
      var main_nodes = children(main);
      img = claim_element(main_nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      t0 = claim_space(main_nodes);
      p0 = claim_element(main_nodes, "P", {});
      var p0_nodes = children(p0);
      t1 = claim_text(p0_nodes, "This is a glimpse of my dialog tool which I haven't worked on in a while. I made this in 2018-2019 over the\r\n        break so I could learn a bit about WPF.");
      p0_nodes.forEach(detach_dev);
      t2 = claim_space(main_nodes);
      a = claim_element(main_nodes, "A", {
        href: true,
        class: true
      });
      var a_nodes = children(a);
      t3 = claim_text(a_nodes, "Link To the Tool");
      a_nodes.forEach(detach_dev);
      t4 = claim_space(main_nodes);
      p1 = claim_element(main_nodes, "P", {});
      var p1_nodes = children(p1);
      t5 = claim_text(p1_nodes, "It features several things including:");
      p1_nodes.forEach(detach_dev);
      t6 = claim_space(main_nodes);
      ul = claim_element(main_nodes, "UL", {});
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", {});
      var li0_nodes = children(li0);
      t7 = claim_text(li0_nodes, "Branching dialog (choices)");
      li0_nodes.forEach(detach_dev);
      t8 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", {});
      var li1_nodes = children(li1);
      t9 = claim_text(li1_nodes, "Node based editing (similar to UE4 controls)");
      li1_nodes.forEach(detach_dev);
      t10 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", {});
      var li2_nodes = children(li2);
      t11 = claim_text(li2_nodes, "Dialog Conditionals");
      li2_nodes.forEach(detach_dev);
      t12 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", {});
      var li3_nodes = children(li3);
      t13 = claim_text(li3_nodes, "Support for triggering events in my game");
      li3_nodes.forEach(detach_dev);
      t14 = claim_space(ul_nodes);
      li4 = claim_element(ul_nodes, "LI", {});
      var li4_nodes = children(li4);
      t15 = claim_text(li4_nodes, "Exports the dialog data to JSON which can be added to data tables within UE4");
      li4_nodes.forEach(detach_dev);
      ul_nodes.forEach(detach_dev);
      t16 = claim_space(main_nodes);
      p2 = claim_element(main_nodes, "P", {});
      var p2_nodes = children(p2);
      t17 = claim_text(p2_nodes, "The controls are straight forward (like UE4 node editors). They controls are specified in the github but here's\r\n        a short reiteration:");
      p2_nodes.forEach(detach_dev);
      t18 = claim_space(main_nodes);
      p3 = claim_element(main_nodes, "P", {});
      var p3_nodes = children(p3);
      t19 = claim_text(p3_nodes, "Click on any node to select them, or click drag to create a selection rectangle and select multiple nodes. Then\r\n        we can move them all by dragging from one of the bodies of the selected noes.");
      p3_nodes.forEach(detach_dev);
      t20 = claim_space(main_nodes);
      p4 = claim_element(main_nodes, "P", {});
      var p4_nodes = children(p4);
      t21 = claim_text(p4_nodes, "Scroll to zoom in and out. Pan around by right click dragging around the dark blue background. Double click on\r\n        the red header to change the title of the dialog. This matters since inside the game, the conversation name is\r\n        used for several things.");
      p4_nodes.forEach(detach_dev);
      t22 = claim_space(main_nodes);
      p5 = claim_element(main_nodes, "P", {});
      var p5_nodes = children(p5);
      t23 = claim_text(p5_nodes, "Drag and drop nodes around the editing field. Make sure to connect nodes to the root node since the dialog tree\r\n        is traversed from the root node. Hold F and click to create a dialog node. Drag off the little button and drop\r\n        onto the body of another nodes to create a connection. If there's more than one connection from a node, it\r\n        becomes a choice node.");
      p5_nodes.forEach(detach_dev);
      t24 = claim_space(main_nodes);
      p6 = claim_element(main_nodes, "P", {});
      var p6_nodes = children(p6);
      t25 = claim_text(p6_nodes, "Hold T and click to create a Trigger node. Hold C and click to create a conditional node which should connect to\r\n        two nodes. The first node it is connected to is reached if the condition is true, and the second node connected\r\n        is reached if the condition is false.");
      p6_nodes.forEach(detach_dev);
      t26 = claim_space(main_nodes);
      p7 = claim_element(main_nodes, "P", {});
      var p7_nodes = children(p7);
      t27 = claim_text(p7_nodes, "Click on the selection box and hover over an element to see a description of what parameters to pass to the\r\n        condition and trigger nodes.");
      p7_nodes.forEach(detach_dev);
      t28 = claim_space(main_nodes);
      p8 = claim_element(main_nodes, "P", {});
      var p8_nodes = children(p8);
      t29 = claim_text(p8_nodes, "I think I enjoy developing web apps more so I'll probably be making tools with Svelte form now on. However, WPF\r\n        was an interesting framework. I still need to make time to learn more C#, but there are so many things to learn\r\n        and I don't know what I feel like doing. I guess wherever my career takes me I'll focus on that, although\r\n        gameplay programming will always be one of the higher priorities.");
      p8_nodes.forEach(detach_dev);
      main_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value = toolOverviewImage)) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Missing");
      attr_dev(img, "class", "mx-auto");
      add_location(img, file, 5, 4, 110);
      add_location(p0, file, 6, 4, 179);
      attr_dev(a, "href", "https://github.com/cyphina/DialogTool");
      attr_dev(a, "class", "my-2");
      add_location(a, file, 10, 4, 364);
      add_location(p1, file, 11, 4, 451);
      add_location(li0, file, 13, 8, 515);
      add_location(li1, file, 14, 8, 560);
      add_location(li2, file, 15, 8, 623);
      add_location(li3, file, 16, 8, 661);
      add_location(li4, file, 17, 8, 720);
      add_location(ul, file, 12, 4, 501);
      add_location(p2, file, 19, 4, 822);
      add_location(p3, file, 23, 4, 992);
      add_location(p4, file, 27, 4, 1219);
      add_location(p5, file, 32, 4, 1512);
      add_location(p6, file, 38, 4, 1920);
      add_location(p7, file, 43, 4, 2229);
      add_location(p8, file, 47, 4, 2403);
      attr_dev(main, "class", "m-2");
      add_location(main, file, 4, 0, 86);
    },
    m: function mount(target, anchor) {
      insert_dev(target, main, anchor);
      append_dev(main, img);
      append_dev(main, t0);
      append_dev(main, p0);
      append_dev(p0, t1);
      append_dev(main, t2);
      append_dev(main, a);
      append_dev(a, t3);
      append_dev(main, t4);
      append_dev(main, p1);
      append_dev(p1, t5);
      append_dev(main, t6);
      append_dev(main, ul);
      append_dev(ul, li0);
      append_dev(li0, t7);
      append_dev(ul, t8);
      append_dev(ul, li1);
      append_dev(li1, t9);
      append_dev(ul, t10);
      append_dev(ul, li2);
      append_dev(li2, t11);
      append_dev(ul, t12);
      append_dev(ul, li3);
      append_dev(li3, t13);
      append_dev(ul, t14);
      append_dev(ul, li4);
      append_dev(li4, t15);
      append_dev(main, t16);
      append_dev(main, p2);
      append_dev(p2, t17);
      append_dev(main, t18);
      append_dev(main, p3);
      append_dev(p3, t19);
      append_dev(main, t20);
      append_dev(main, p4);
      append_dev(p4, t21);
      append_dev(main, t22);
      append_dev(main, p5);
      append_dev(p5, t23);
      append_dev(main, t24);
      append_dev(main, p6);
      append_dev(p6, t25);
      append_dev(main, t26);
      append_dev(main, p7);
      append_dev(p7, t27);
      append_dev(main, t28);
      append_dev(main, p8);
      append_dev(p8, t29);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(main);
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

var toolOverviewImage = "/images/tools/dialogtool.png";

function instance($$self, $$props, $$invalidate) {
  var writable_props = [];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Tools> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Tools", $$slots, []);

  $$self.$capture_state = function () {
    return {
      toolOverviewImage: toolOverviewImage
    };
  };

  return [];
}

var Tools = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Tools, _SvelteComponentDev);

  var _super = _createSuper(Tools);

  function Tools(options) {
    var _this;

    _classCallCheck(this, Tools);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Tools",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return Tools;
}(SvelteComponentDev);

export default Tools;
