import { w as writable, a as assign, n as now, l as loop, i as identity, _ as _typeof, b as _inherits, c as _getPrototypeOf, d as _possibleConstructorReturn, e as _classCallCheck, f as init, s as safe_not_equal, g as _assertThisInitialized, h as dispatch_dev, j as _createClass, S as SvelteComponentDev, k as create_slot, o as onMount, v as validate_slots, m as element, t as text, p as claim_element, q as children, r as claim_text, u as detach_dev, x as attr_dev, y as add_location, z as insert_dev, A as append_dev, B as listen_dev, C as noop, D as space, E as claim_space, F as null_to_empty, G as _slicedToArray, H as update_slot, I as transition_in, J as transition_out, K as binding_callbacks, L as validate_each_argument, M as validate_each_keys, N as bind, O as validate_store, P as component_subscribe, Q as fade, R as cubicInOut, T as create_component, U as claim_component, V as set_style, W as mount_component, X as update_keyed_each, Y as add_flush_callback, Z as destroy_component, $ as run_all, a0 as add_render_callback, a1 as create_in_transition, a2 as destroy_block } from './client.38aa6a78.js';

function is_date(obj) {
  return Object.prototype.toString.call(obj) === '[object Date]';
}

function get_interpolator(a, b) {
  if (a === b || a !== a) return function () {
    return a;
  };

  var type = _typeof(a);

  if (type !== _typeof(b) || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error('Cannot interpolate values of different type');
  }

  if (Array.isArray(a)) {
    var arr = b.map(function (bi, i) {
      return get_interpolator(a[i], bi);
    });
    return function (t) {
      return arr.map(function (fn) {
        return fn(t);
      });
    };
  }

  if (type === 'object') {
    if (!a || !b) throw new Error('Object cannot be null');

    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      var delta = b - a;
      return function (t) {
        return new Date(a + t * delta);
      };
    }

    var keys = Object.keys(b);
    var interpolators = {};
    keys.forEach(function (key) {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return function (t) {
      var result = {};
      keys.forEach(function (key) {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }

  if (type === 'number') {
    var _delta = b - a;

    return function (t) {
      return a + t * _delta;
    };
  }

  throw new Error("Cannot interpolate ".concat(type, " values"));
}

function tweened(value) {
  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var store = writable(value);
  var task;
  var target_value = value;

  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }

    target_value = new_value;
    var previous_task = task;
    var started = false;

    var _assign = assign(assign({}, defaults), opts),
        _assign$delay = _assign.delay,
        delay = _assign$delay === void 0 ? 0 : _assign$delay,
        _assign$duration = _assign.duration,
        duration = _assign$duration === void 0 ? 400 : _assign$duration,
        _assign$easing = _assign.easing,
        easing = _assign$easing === void 0 ? identity : _assign$easing,
        _assign$interpolate = _assign.interpolate,
        interpolate = _assign$interpolate === void 0 ? get_interpolator : _assign$interpolate;

    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }

      store.set(value = target_value);
      return Promise.resolve();
    }

    var start = now() + delay;
    var fn;
    task = loop(function (now) {
      if (now < start) return true;

      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === 'function') duration = duration(value, new_value);
        started = true;
      }

      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }

      var elapsed = now - start;

      if (elapsed > duration) {
        store.set(value = new_value);
        return false;
      } // @ts-ignore


      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }

  return {
    set: set,
    update: function update(fn, opts) {
      return set(fn(target_value, value), opts);
    },
    subscribe: store.subscribe
  };
}

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file = "src\\components\\Modal.svelte"; // (19:8) {#if canClose}

function create_if_block(ctx) {
  var button;
  var t;
  var mounted;
  var dispose;
  var block = {
    c: function create() {
      button = element("button");
      t = text("✖");
      this.h();
    },
    l: function claim(nodes) {
      button = claim_element(nodes, "BUTTON", {
        class: true
      });
      var button_nodes = children(button);
      t = claim_text(button_nodes, "✖");
      button_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(button, "class", "close-btn ml-1 svelte-c0vvpv");
      add_location(button, file, 19, 12, 680);
    },
    m: function mount(target, anchor) {
      insert_dev(target, button, anchor);
      append_dev(button, t);

      if (!mounted) {
        dispose = listen_dev(button, "click",
        /*close*/
        ctx[3], false, false, false);
        mounted = true;
      }
    },
    p: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(button);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block.name,
    type: "if",
    source: "(19:8) {#if canClose}",
    ctx: ctx
  });
  return block;
}

function create_fragment(ctx) {
  var dialog;
  var header;
  var t;
  var main;
  var dialog_class_value;
  var current;
  var if_block =
  /*canClose*/
  ctx[1] && create_if_block(ctx);
  var default_slot_template =
  /*$$slots*/
  ctx[6].default;
  var default_slot = create_slot(default_slot_template, ctx,
  /*$$scope*/
  ctx[5], null);
  var block = {
    c: function create() {
      dialog = element("dialog");
      header = element("header");
      if (if_block) if_block.c();
      t = space();
      main = element("main");
      if (default_slot) default_slot.c();
      this.h();
    },
    l: function claim(nodes) {
      dialog = claim_element(nodes, "DIALOG", {
        class: true
      });
      var dialog_nodes = children(dialog);
      header = claim_element(dialog_nodes, "HEADER", {
        class: true
      });
      var header_nodes = children(header);
      if (if_block) if_block.l(header_nodes);
      header_nodes.forEach(detach_dev);
      t = claim_space(dialog_nodes);
      main = claim_element(dialog_nodes, "MAIN", {
        class: true
      });
      var main_nodes = children(main);
      if (default_slot) default_slot.l(main_nodes);
      main_nodes.forEach(detach_dev);
      dialog_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(header, "class", "svelte-c0vvpv");
      add_location(header, file, 17, 4, 634);
      attr_dev(main, "class", "svelte-c0vvpv");
      add_location(main, file, 23, 4, 835);
      attr_dev(dialog, "class", dialog_class_value = "" + (null_to_empty(
      /*classNames*/
      ctx[2]) + " svelte-c0vvpv"));
      add_location(dialog, file, 16, 0, 576);
    },
    m: function mount(target, anchor) {
      insert_dev(target, dialog, anchor);
      append_dev(dialog, header);
      if (if_block) if_block.m(header, null);
      append_dev(dialog, t);
      append_dev(dialog, main);

      if (default_slot) {
        default_slot.m(main, null);
      }
      /*dialog_binding*/


      ctx[7](dialog);
      current = true;
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (
      /*canClose*/
      ctx[1]) {
        if (if_block) {
          if_block.p(ctx, dirty);
        } else {
          if_block = create_if_block(ctx);
          if_block.c();
          if_block.m(header, null);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (default_slot) {
        if (default_slot.p && dirty &
        /*$$scope*/
        32) {
          update_slot(default_slot, default_slot_template, ctx,
          /*$$scope*/
          ctx[5], dirty, null, null);
        }
      }

      if (!current || dirty &
      /*classNames*/
      4 && dialog_class_value !== (dialog_class_value = "" + (null_to_empty(
      /*classNames*/
      ctx[2]) + " svelte-c0vvpv"))) {
        attr_dev(dialog, "class", dialog_class_value);
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
      if (detaching) detach_dev(dialog);
      if (if_block) if_block.d();
      if (default_slot) default_slot.d(detaching);
      /*dialog_binding*/

      ctx[7](null);
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
  var _$$props$canClose = $$props.canClose,
      canClose = _$$props$canClose === void 0 ? true : _$$props$canClose; // Should an X be displayed

  var _$$props$className = $$props.className,
      className = _$$props$className === void 0 ? "" : _$$props$className; // Optional CSS class name

  var modalRef = $$props.modalRef; // If parent components bind to this, they can get a reference to call show(), showModal() and close()

  onMount(function () {
    return dialogPolyfill.registerDialog(modalRef);
  }); // Life cycle function called when this component is added to the DOM

  function close() {
    modalRef.close();
  }

  var writable_props = ["canClose", "className", "modalRef"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Modal> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Modal", $$slots, ['default']);

  function dialog_binding($$value) {
    binding_callbacks[$$value ? "unshift" : "push"](function () {
      modalRef = $$value;
      $$invalidate(0, modalRef);
    });
  }

  $$self.$set = function ($$props) {
    if ("canClose" in $$props) $$invalidate(1, canClose = $$props.canClose);
    if ("className" in $$props) $$invalidate(4, className = $$props.className);
    if ("modalRef" in $$props) $$invalidate(0, modalRef = $$props.modalRef);
    if ("$$scope" in $$props) $$invalidate(5, $$scope = $$props.$$scope);
  };

  $$self.$capture_state = function () {
    return {
      onMount: onMount,
      canClose: canClose,
      className: className,
      modalRef: modalRef,
      close: close,
      classNames: classNames
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("canClose" in $$props) $$invalidate(1, canClose = $$props.canClose);
    if ("className" in $$props) $$invalidate(4, className = $$props.className);
    if ("modalRef" in $$props) $$invalidate(0, modalRef = $$props.modalRef);
    if ("classNames" in $$props) $$invalidate(2, classNames = $$props.classNames);
  };

  var classNames;

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  $$self.$$.update = function () {
    if ($$self.$$.dirty &
    /*className*/
    16) {
       $$invalidate(2, classNames = "Dialog" + (className ? " " + className : ""));
    }
  };

  return [modalRef, canClose, classNames, close, className, $$scope, $$slots, dialog_binding];
}

var Modal = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Modal, _SvelteComponentDev);

  var _super = _createSuper(Modal);

  function Modal(options) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance, create_fragment, safe_not_equal, {
      canClose: 1,
      className: 4,
      modalRef: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Modal",
      options: options,
      id: create_fragment.name
    });
    var ctx = _this.$$.ctx;
    var props = options.props || {};

    if (
    /*modalRef*/
    ctx[0] === undefined && !("modalRef" in props)) {
      console.warn("<Modal> was created without expected prop 'modalRef'");
    }

    return _this;
  }

  _createClass(Modal, [{
    key: "canClose",
    get: function get() {
      throw new Error("<Modal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Modal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "className",
    get: function get() {
      throw new Error("<Modal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Modal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }, {
    key: "modalRef",
    get: function get() {
      throw new Error("<Modal>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Modal>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Modal;
}(SvelteComponentDev);

function _createSuper$1(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct$1(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct$1() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }
var file$1 = "src\\components\\Gallery.svelte";

function get_each_context(ctx, list, i) {
  var child_ctx = ctx.slice();
  child_ctx[14] = list[i];
  child_ctx[16] = i;
  return child_ctx;
} // (54:16) {#if curImgIndex !== index}


function create_if_block$1(ctx) {
  var img;
  var img_src_value;
  var img_intro;
  var mounted;
  var dispose;

  function click_handler_1() {
    var _ctx;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      /*click_handler_1*/
      (_ctx = ctx)[10].apply(_ctx, [
      /*index*/
      ctx[16]].concat(args))
    );
  }

  var block = {
    c: function create() {
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      img = claim_element(nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value =
      /*slide*/
      ctx[14])) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Missing");
      attr_dev(img, "class", "object-cover h-24 w-40 mx-2 cursor-pointer hover:opacity-75");
      add_location(img, file$1, 54, 20, 1842);
    },
    m: function mount(target, anchor) {
      insert_dev(target, img, anchor);

      if (!mounted) {
        dispose = listen_dev(img, "click", click_handler_1, false, false, false);
        mounted = true;
      }
    },
    p: function update(new_ctx, dirty) {
      ctx = new_ctx;

      if (dirty &
      /*slides*/
      1 && img.src !== (img_src_value =
      /*slide*/
      ctx[14])) {
        attr_dev(img, "src", img_src_value);
      }
    },
    i: function intro(local) {
      if (!img_intro) {
        add_render_callback(function () {
          img_intro = create_in_transition(img, fade, {
            duration: 300,
            easing: cubicInOut
          });
          img_intro.start();
        });
      }
    },
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(img);
      mounted = false;
      dispose();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_if_block$1.name,
    type: "if",
    source: "(54:16) {#if curImgIndex !== index}",
    ctx: ctx
  });
  return block;
} // (52:8) {#each slides as slide, index (slide)}


function create_each_block(key_1, ctx) {
  var div;
  var t;
  var if_block =
  /*curImgIndex*/
  ctx[2] !==
  /*index*/
  ctx[16] && create_if_block$1(ctx);
  var block = {
    key: key_1,
    first: null,
    c: function create() {
      div = element("div");
      if (if_block) if_block.c();
      t = space();
      this.h();
    },
    l: function claim(nodes) {
      div = claim_element(nodes, "DIV", {
        class: true
      });
      var div_nodes = children(div);
      if (if_block) if_block.l(div_nodes);
      t = claim_space(div_nodes);
      div_nodes.forEach(detach_dev);
      this.h();
    },
    h: function hydrate() {
      attr_dev(div, "class", "relative overflow-hidden h-auto");
      add_location(div, file$1, 52, 12, 1730);
      this.first = div;
    },
    m: function mount(target, anchor) {
      insert_dev(target, div, anchor);
      if (if_block) if_block.m(div, null);
      append_dev(div, t);
    },
    p: function update(ctx, dirty) {
      if (
      /*curImgIndex*/
      ctx[2] !==
      /*index*/
      ctx[16]) {
        if (if_block) {
          if_block.p(ctx, dirty);

          if (dirty &
          /*curImgIndex, slides*/
          5) {
            transition_in(if_block, 1);
          }
        } else {
          if_block = create_if_block$1(ctx);
          if_block.c();
          transition_in(if_block, 1);
          if_block.m(div, t);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }
    },
    i: function intro(local) {
      transition_in(if_block);
    },
    o: noop,
    d: function destroy(detaching) {
      if (detaching) detach_dev(div);
      if (if_block) if_block.d();
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_each_block.name,
    type: "each",
    source: "(52:8) {#each slides as slide, index (slide)}",
    ctx: ctx
  });
  return block;
} // (72:0) <Modal title="Closer Up Image" bind:modalRef>


function create_default_slot(ctx) {
  var img;
  var img_src_value;
  var block = {
    c: function create() {
      img = element("img");
      this.h();
    },
    l: function claim(nodes) {
      img = claim_element(nodes, "IMG", {
        src: true,
        alt: true,
        class: true
      });
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value =
      /*slides*/
      ctx[0][
      /*curImgIndex*/
      ctx[2]])) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Missing");
      attr_dev(img, "class", "object-cover h-full w-full");
      add_location(img, file$1, 72, 4, 2437);
    },
    m: function mount(target, anchor) {
      insert_dev(target, img, anchor);
    },
    p: function update(ctx, dirty) {
      if (dirty &
      /*slides, curImgIndex*/
      5 && img.src !== (img_src_value =
      /*slides*/
      ctx[0][
      /*curImgIndex*/
      ctx[2]])) {
        attr_dev(img, "src", img_src_value);
      }
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(img);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_default_slot.name,
    type: "slot",
    source: "(72:0) <Modal title=\\\"Closer Up Image\\\" bind:modalRef>",
    ctx: ctx
  });
  return block;
}

function create_fragment$1(ctx) {
  var div2;
  var div0;
  var button;
  var img;
  var img_src_value;
  var t0;
  var div1;
  var each_blocks = [];
  var each_1_lookup = new Map();
  var t1;
  var modal;
  var updating_modalRef;
  var current;
  var mounted;
  var dispose;
  var each_value =
  /*slides*/
  ctx[0];
  validate_each_argument(each_value);

  var get_key = function get_key(ctx) {
    return (
      /*slide*/
      ctx[14]
    );
  };

  validate_each_keys(ctx, each_value, get_each_context, get_key);

  for (var i = 0; i < each_value.length; i += 1) {
    var child_ctx = get_each_context(ctx, each_value, i);
    var key = get_key(child_ctx);
    each_1_lookup.set(key, each_blocks[i] = create_each_block(key, child_ctx));
  }

  function modal_modalRef_binding(value) {
    /*modal_modalRef_binding*/
    ctx[13].call(null, value);
  }

  var modal_props = {
    title: "Closer Up Image",
    $$slots: {
      default: [create_default_slot]
    },
    $$scope: {
      ctx: ctx
    }
  };

  if (
  /*modalRef*/
  ctx[3] !== void 0) {
    modal_props.modalRef =
    /*modalRef*/
    ctx[3];
  }

  modal = new Modal({
    props: modal_props,
    $$inline: true
  });
  binding_callbacks.push(function () {
    return bind(modal, "modalRef", modal_modalRef_binding);
  });
  var block = {
    c: function create() {
      div2 = element("div");
      div0 = element("div");
      button = element("button");
      img = element("img");
      t0 = space();
      div1 = element("div");

      for (var _i = 0; _i < each_blocks.length; _i += 1) {
        each_blocks[_i].c();
      }

      t1 = space();
      create_component(modal.$$.fragment);
      this.h();
    },
    l: function claim(nodes) {
      div2 = claim_element(nodes, "DIV", {
        class: true
      });
      var div2_nodes = children(div2);
      div0 = claim_element(div2_nodes, "DIV", {});
      var div0_nodes = children(div0);
      button = claim_element(div0_nodes, "BUTTON", {});
      var button_nodes = children(button);
      img = claim_element(button_nodes, "IMG", {
        src: true,
        alt: true,
        class: true,
        style: true
      });
      button_nodes.forEach(detach_dev);
      div0_nodes.forEach(detach_dev);
      t0 = claim_space(div2_nodes);
      div1 = claim_element(div2_nodes, "DIV", {
        class: true,
        style: true
      });
      var div1_nodes = children(div1);

      for (var _i2 = 0; _i2 < each_blocks.length; _i2 += 1) {
        each_blocks[_i2].l(div1_nodes);
      }

      div1_nodes.forEach(detach_dev);
      div2_nodes.forEach(detach_dev);
      t1 = claim_space(nodes);
      claim_component(modal.$$.fragment, nodes);
      this.h();
    },
    h: function hydrate() {
      if (img.src !== (img_src_value =
      /*slides*/
      ctx[0][
      /*curImgIndex*/
      ctx[2]])) attr_dev(img, "src", img_src_value);
      attr_dev(img, "alt", "Missing");
      attr_dev(img, "class", "slide absolute top-0 object-cover h-full w-full");
      set_style(img, "opacity",
      /*$pictureOpacityStore*/
      ctx[4]);
      add_location(img, file$1, 38, 12, 1223);
      add_location(button, file$1, 37, 8, 1161);
      add_location(div0, file$1, 36, 4, 1146);
      attr_dev(div1, "class", "flex pl-1 pr-3 justify-end items-center absolute bottom-0 left-0 bg-opacity-50 bg-black w-full h-32");
      set_style(div1, "opacity",
      /*bShowGalleryNav*/
      ctx[1] ? 1 : 0);
      add_location(div1, file$1, 47, 4, 1488);
      attr_dev(div2, "class", "gallery relative overflow-hidden svelte-16rks1u");
      add_location(div2, file$1, 30, 0, 984);
    },
    m: function mount(target, anchor) {
      insert_dev(target, div2, anchor);
      append_dev(div2, div0);
      append_dev(div0, button);
      append_dev(button, img);
      append_dev(div2, t0);
      append_dev(div2, div1);

      for (var _i3 = 0; _i3 < each_blocks.length; _i3 += 1) {
        each_blocks[_i3].m(div1, null);
      }

      insert_dev(target, t1, anchor);
      mount_component(modal, target, anchor);
      current = true;

      if (!mounted) {
        dispose = [listen_dev(button, "click",
        /*click_handler*/
        ctx[9], false, false, false), listen_dev(div2, "mouseenter",
        /*mouseenter_handler*/
        ctx[11], false, false, false), listen_dev(div2, "mouseleave",
        /*mouseleave_handler*/
        ctx[12], false, false, false)];
        mounted = true;
      }
    },
    p: function update(ctx, _ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          dirty = _ref2[0];

      if (!current || dirty &
      /*slides, curImgIndex*/
      5 && img.src !== (img_src_value =
      /*slides*/
      ctx[0][
      /*curImgIndex*/
      ctx[2]])) {
        attr_dev(img, "src", img_src_value);
      }

      if (!current || dirty &
      /*$pictureOpacityStore*/
      16) {
        set_style(img, "opacity",
        /*$pictureOpacityStore*/
        ctx[4]);
      }

      if (dirty &
      /*slides, changeViewingImage, onGalleryPictureChange, curImgIndex*/
      325) {
        var _each_value =
        /*slides*/
        ctx[0];
        validate_each_argument(_each_value);
        validate_each_keys(ctx, _each_value, get_each_context, get_key);
        each_blocks = update_keyed_each(each_blocks, dirty, get_key, 1, ctx, _each_value, each_1_lookup, div1, destroy_block, create_each_block, null, get_each_context);
      }

      if (!current || dirty &
      /*bShowGalleryNav*/
      2) {
        set_style(div1, "opacity",
        /*bShowGalleryNav*/
        ctx[1] ? 1 : 0);
      }

      var modal_changes = {};

      if (dirty &
      /*$$scope, slides, curImgIndex*/
      131077) {
        modal_changes.$$scope = {
          dirty: dirty,
          ctx: ctx
        };
      }

      if (!updating_modalRef && dirty &
      /*modalRef*/
      8) {
        updating_modalRef = true;
        modal_changes.modalRef =
        /*modalRef*/
        ctx[3];
        add_flush_callback(function () {
          return updating_modalRef = false;
        });
      }

      modal.$set(modal_changes);
    },
    i: function intro(local) {
      if (current) return;

      for (var _i4 = 0; _i4 < each_value.length; _i4 += 1) {
        transition_in(each_blocks[_i4]);
      }

      transition_in(modal.$$.fragment, local);
      current = true;
    },
    o: function outro(local) {
      transition_out(modal.$$.fragment, local);
      current = false;
    },
    d: function destroy(detaching) {
      if (detaching) detach_dev(div2);

      for (var _i5 = 0; _i5 < each_blocks.length; _i5 += 1) {
        each_blocks[_i5].d();
      }

      if (detaching) detach_dev(t1);
      destroy_component(modal, detaching);
      mounted = false;
      run_all(dispose);
    }
  };
  dispatch_dev("SvelteRegisterBlock", {
    block: block,
    id: create_fragment$1.name,
    type: "component",
    source: "",
    ctx: ctx
  });
  return block;
}

function instance$1($$self, $$props, $$invalidate) {
  var $pictureOpacityStore;
  var pictureOpacityStore = tweened(1, {
    duration: 300,
    easing: cubicInOut
  });
  validate_store(pictureOpacityStore, "pictureOpacityStore");
  component_subscribe($$self, pictureOpacityStore, function (value) {
    return $$invalidate(4, $pictureOpacityStore = value);
  });
  var _$$props$slides = $$props.slides,
      slides = _$$props$slides === void 0 ? [] : _$$props$slides;
  var bShowGalleryNav = false;
  var curImgIndex = 0; // Dialog vars

  var modalRef; // A reference to the popup modal we pass into the modal component. The modal component then binds it to the correct element.

  function changeViewingImage(newIndex) {
    $$invalidate(2, curImgIndex = newIndex);
  }

  function showGalleryNav(bShouldNewShowNav) {
    $$invalidate(1, bShowGalleryNav = bShouldNewShowNav);
  }

  function onGalleryPictureChange() {
    // Create a litte fade in effect
    pictureOpacityStore.set(0, {
      duration: 0
    });
    pictureOpacityStore.set(1, {
      duration: 1000,
      easing: cubicInOut
    });
  }

  var writable_props = ["slides"];
  Object.keys($$props).forEach(function (key) {
    if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn("<Gallery> was created with unknown prop '".concat(key, "'"));
  });
  var _$$props$$$slots = $$props.$$slots,
      $$slots = _$$props$$$slots === void 0 ? {} : _$$props$$$slots,
      $$scope = $$props.$$scope;
  validate_slots("Gallery", $$slots, []);

  var click_handler = function click_handler() {
    return modalRef.showModal();
  };

  var click_handler_1 = function click_handler_1(index) {
    changeViewingImage(index);
    onGalleryPictureChange();
  };

  var mouseenter_handler = function mouseenter_handler() {
    return showGalleryNav(true);
  };

  var mouseleave_handler = function mouseleave_handler() {
    return showGalleryNav(false);
  };

  function modal_modalRef_binding(value) {
    modalRef = value;
    $$invalidate(3, modalRef);
  }

  $$self.$set = function ($$props) {
    if ("slides" in $$props) $$invalidate(0, slides = $$props.slides);
  };

  $$self.$capture_state = function () {
    return {
      fade: fade,
      tweened: tweened,
      cubicInOut: cubicInOut,
      Modal: Modal,
      pictureOpacityStore: pictureOpacityStore,
      slides: slides,
      bShowGalleryNav: bShowGalleryNav,
      curImgIndex: curImgIndex,
      modalRef: modalRef,
      changeViewingImage: changeViewingImage,
      showGalleryNav: showGalleryNav,
      onGalleryPictureChange: onGalleryPictureChange,
      $pictureOpacityStore: $pictureOpacityStore
    };
  };

  $$self.$inject_state = function ($$props) {
    if ("slides" in $$props) $$invalidate(0, slides = $$props.slides);
    if ("bShowGalleryNav" in $$props) $$invalidate(1, bShowGalleryNav = $$props.bShowGalleryNav);
    if ("curImgIndex" in $$props) $$invalidate(2, curImgIndex = $$props.curImgIndex);
    if ("modalRef" in $$props) $$invalidate(3, modalRef = $$props.modalRef);
  };

  if ($$props && "$$inject" in $$props) {
    $$self.$inject_state($$props.$$inject);
  }

  return [slides, bShowGalleryNav, curImgIndex, modalRef, $pictureOpacityStore, pictureOpacityStore, changeViewingImage, showGalleryNav, onGalleryPictureChange, click_handler, click_handler_1, mouseenter_handler, mouseleave_handler, modal_modalRef_binding];
}

var Gallery = /*#__PURE__*/function (_SvelteComponentDev) {
  _inherits(Gallery, _SvelteComponentDev);

  var _super = _createSuper$1(Gallery);

  function Gallery(options) {
    var _this;

    _classCallCheck(this, Gallery);

    _this = _super.call(this, options);
    init(_assertThisInitialized(_this), options, instance$1, create_fragment$1, safe_not_equal, {
      slides: 0
    });
    dispatch_dev("SvelteRegisterComponent", {
      component: _assertThisInitialized(_this),
      tagName: "Gallery",
      options: options,
      id: create_fragment$1.name
    });
    return _this;
  }

  _createClass(Gallery, [{
    key: "slides",
    get: function get() {
      throw new Error("<Gallery>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    },
    set: function set(value) {
      throw new Error("<Gallery>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
    }
  }]);

  return Gallery;
}(SvelteComponentDev);

export { Gallery as G };
