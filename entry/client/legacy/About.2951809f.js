import { b as _inherits, c as _getPrototypeOf, d as _possibleConstructorReturn, e as _classCallCheck, f as init, s as safe_not_equal, g as _assertThisInitialized, h as dispatch_dev, S as SvelteComponentDev, v as validate_slots, m as element, t as text, D as space, p as claim_element, q as children, r as claim_text, u as detach_dev, E as claim_space, x as attr_dev, y as add_location, z as insert_dev, A as append_dev, C as noop } from './client.38aa6a78.js';

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\routes\\About.svelte";

function create_fragment(ctx) {
  var div1;
  var div0;
  var h10;
  var t0;
  var t1;
  var h11;
  var t2;
  var t3;
  var main;
  var p0;
  var t4;
  var b0;
  var t5;
  var t6;
  var t7;
  var p1;
  var t8;
  var b1;
  var t9;
  var t10;
  var t11;
  var p2;
  var t12;
  var t13;
  var p3;
  var t14;
  var t15;
  var p4;
  var b2;
  var t16;
  var block = {
    c: function create() {
      div1 = element("div");
      div0 = element("div");
      h10 = element("h1");
      t0 = text("Innocence is not the ignorance of all reality, it is one who seeks the truth and accepts others despite\r\n            everything");
      t1 = space();
      h11 = element("h1");
      t2 = text("Sometimes we just need to hear things in the right way");
      t3 = space();
      main = element("main");
      p0 = element("p");
      t4 = text("My name is Nam Ha aka Zi. This site will contain useful information about my game, and it serves as a place\r\n            I can write some of my thoughts and describe my current work. Currently I work on my game\r\n            ");
      b0 = element("b");
      t5 = text("Unbounded Perceptions (Up)");
      t6 = text("\r\n            alone. I am trying to keep my skills narrowed down to working on gameplay systems, tools, and the story for\r\n            my game so that I can finish before dying because this story is getting quite long.");
      t7 = space();
      p1 = element("p");
      t8 = text("It is important for me to finish Up because I feel like this is my singular contribution to the world. Of\r\n            course to reach this contribution - to conceive it - I must make day to day contributions to the people\r\n            around myself. To make a great game requires exploring the boundaries of life while staying focused. But it\r\n            also requires never forgetting the times of\r\n            ");
      b1 = element("b");
      t9 = text("uncertainty");
      t10 = text("\r\n            when we lose track of the road ahead.");
      t11 = space();
      p2 = element("p");
      t12 = text("Now this may all sound silly to you, but the truth you may have forgotten is that basic appreciation and\r\n            basic principles that guide us are the ones that we forget the most, and the ones that are the solutions to\r\n            many of the problems. Although we come up with complex reasons to justify our actions which neglect these\r\n            principles, the truth boils down to if we make the sacrifices to follow fundamental values, things would be\r\n            a lot better. And that's what I want to remember despite feelings sometimes coercing me towards complacency.\r\n            I must remeber the ability I dream of - the ability to make the most out of a few skills. But sometimes it\r\n            seems like a lonely world for those who follow these guidelines.");
      t13 = space();
      p3 = element("p");
      t14 = text("And so I present to you Unbounded Perceptions. Its a story where ideas are presented to the player, but no\r\n            ideas are forced. Various characters fall into certain situations, and the player will gain new perspectives\r\n            as the story unfolds and dilemmas present themselves.");
      t15 = space();
      p4 = element("p");
      b2 = element("b");
      t16 = text("It is lonely to consider feelings and kindness into our actions, but it brings its own strength (or so I\r\n                hope to show in my story).");
      this.h();
    },
    l: function claim(nodes) {
      div1 = claim_element(nodes, "DIV", {
        class: true
      });
      var div1_nodes = children(div1);
      div0 = claim_element(div1_nodes, "DIV", {
        class: true
      });
      var div0_nodes = children(div0);
      h10 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h10_nodes = children(h10);
      t0 = claim_text(h10_nodes, "Innocence is not the ignorance of all reality, it is one who seeks the truth and accepts others despite\r\n            everything");
      h10_nodes.forEach(detach_dev);
      t1 = claim_space(div0_nodes);
      h11 = claim_element(div0_nodes, "H1", {
        class: true
      });
      var h11_nodes = children(h11);
      t2 = claim_text(h11_nodes, "Sometimes we just need to hear things in the right way");
      h11_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t3 = claim_space(div1_nodes);
      main = claim_element(div1_nodes, "MAIN", {});
      var main_nodes = children(main);
      p0 = claim_element(main_nodes, "P", {
        class: true
      });
      var p0_nodes = children(p0);
      t4 = claim_text(p0_nodes, "My name is Nam Ha aka Zi. This site will contain useful information about my game, and it serves as a place\r\n            I can write some of my thoughts and describe my current work. Currently I work on my game\r\n            ");
      b0 = claim_element(p0_nodes, "B", {});
      var b0_nodes = children(b0);
      t5 = claim_text(b0_nodes, "Unbounded Perceptions (Up)");
      b0_nodes.forEach(detach_dev);
      t6 = claim_text(p0_nodes, "\r\n            alone. I am trying to keep my skills narrowed down to working on gameplay systems, tools, and the story for\r\n            my game so that I can finish before dying because this story is getting quite long.");
      p0_nodes.forEach(detach_dev);
      t7 = claim_space(main_nodes);
      p1 = claim_element(main_nodes, "P", {
        class: true
      });
      var p1_nodes = children(p1);
      t8 = claim_text(p1_nodes, "It is important for me to finish Up because I feel like this is my singular contribution to the world. Of\r\n            course to reach this contribution - to conceive it - I must make day to day contributions to the people\r\n            around myself. To make a great game requires exploring the boundaries of life while staying focused. But it\r\n            also requires never forgetting the times of\r\n            ");
      b1 = claim_element(p1_nodes, "B", {});
      var b1_nodes = children(b1);
      t9 = claim_text(b1_nodes, "uncertainty");
      b1_nodes.forEach(detach_dev);
      t10 = claim_text(p1_nodes, "\r\n            when we lose track of the road ahead.");
      p1_nodes.forEach(detach_dev);
      t11 = claim_space(main_nodes);
      p2 = claim_element(main_nodes, "P", {
        class: true
      });
      var p2_nodes = children(p2);
      t12 = claim_text(p2_nodes, "Now this may all sound silly to you, but the truth you may have forgotten is that basic appreciation and\r\n            basic principles that guide us are the ones that we forget the most, and the ones that are the solutions to\r\n            many of the problems. Although we come up with complex reasons to justify our actions which neglect these\r\n            principles, the truth boils down to if we make the sacrifices to follow fundamental values, things would be\r\n            a lot better. And that's what I want to remember despite feelings sometimes coercing me towards complacency.\r\n            I must remeber the ability I dream of - the ability to make the most out of a few skills. But sometimes it\r\n            seems like a lonely world for those who follow these guidelines.");
      p2_nodes.forEach(detach_dev);
      t13 = claim_space(main_nodes);
      p3 = claim_element(main_nodes, "P", {
        class: true
      });
      var p3_nodes = children(p3);
      t14 = claim_text(p3_nodes, "And so I present to you Unbounded Perceptions. Its a story where ideas are presented to the player, but no\r\n            ideas are forced. Various characters fall into certain situations, and the player will gain new perspectives\r\n            as the story unfolds and dilemmas present themselves.");
      p3_nodes.forEach(detach_dev);
      t15 = claim_space(main_nodes);
      p4 = claim_element(main_nodes, "P", {
        class: true
      });
      var p4_nodes = children(p4);
      b2 = claim_element(p4_nodes, "B", {});
      var b2_nodes = children(b2);
      t16 = claim_text(b2_nodes, "It is lonely to consider feelings and kindness into our actions, but it brings its own strength (or so I\r\n                hope to show in my story).");
      b2_nodes.forEach(detach_dev);
      p4_nodes.forEach(detach_dev);
      main_nodes.forEach(detach_dev);
      div1_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(h10, "class", "italic p-4 m-4 border-b border-gray-300 svelte-p1g83n");
      add_location(h10, file, 2, 8, 136);
      attr_dev(h11, "class", "italic my-2 svelte-p1g83n");
      add_location(h11, file, 6, 8, 354);
      attr_dev(div0, "class", "rounded-lg bg-gray-100 border border-gray-900 text-blue-500 text-lg mx-2 my-4 text-center");
      add_location(div0, file, 1, 4, 23);
      add_location(b0, file, 13, 12, 714);
      attr_dev(p0, "class", "svelte-p1g83n");
      add_location(p0, file, 10, 8, 473);
      add_location(b1, file, 23, 12, 1422);
      attr_dev(p1, "class", "svelte-p1g83n");
      add_location(p1, file, 18, 8, 991);
      attr_dev(p2, "class", "svelte-p1g83n");
      add_location(p2, file, 27, 8, 1517);
      attr_dev(p3, "class", "svelte-p1g83n");
      add_location(p3, file, 37, 8, 2345);
      add_location(b2, file, 44, 12, 2700);
      attr_dev(p4, "class", "svelte-p1g83n");
      add_location(p4, file, 43, 8, 2683);
      add_location(main, file, 9, 4, 457);
      attr_dev(div1, "class", "m-2");
      add_location(div1, file, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div1, anchor);
      append_dev(div1, div0);
      append_dev(div0, h10);
      append_dev(h10, t0);
      append_dev(div0, t1);
      append_dev(div0, h11);
      append_dev(h11, t2);
      append_dev(div1, t3);
      append_dev(div1, main);
      append_dev(main, p0);
      append_dev(p0, t4);
      append_dev(p0, b0);
      append_dev(b0, t5);
      append_dev(p0, t6);
      append_dev(main, t7);
      append_dev(main, p1);
      append_dev(p1, t8);
      append_dev(p1, b1);
      append_dev(b1, t9);
      append_dev(p1, t10);
      append_dev(main, t11);
      append_dev(main, p2);
      append_dev(p2, t12);
      append_dev(main, t13);
      append_dev(main, p3);
      append_dev(p3, t14);
      append_dev(main, t15);
      append_dev(main, p4);
      append_dev(p4, b2);
      append_dev(b2, t16);
    },
    p: noop,
    i: noop,
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div1);
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
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<About> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("About", $$slots, []);
  return [];
}

var About = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(About, _SvelteComponentDev);

  var _super = _createSuper(About);

  function About(options) {
    var _this;

    _classCallCheck(this, About);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {});
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "About",
      options: options,
      id: create_fragment.name
    });
    return _this;
  }

  return About;
}(SvelteComponentDev);

export default About;
