[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["packages/vue-identicon/src/icons/Empty"](_packages_vue_identicon_src_icons_empty_.md)

# Module: "packages/vue-identicon/src/icons/Empty"

## Index

### Variables

* [Empty](_packages_vue_identicon_src_icons_empty_.md#const-empty)

## Variables

### `Const` Empty

• **Empty**: *VueConstructor‹object & Vue‹››* = Vue.extend({
  props: ['size'],
  template: `
    <svg :height="size" :width="size" viewBox="0 0 64 64">
      <circle cx="50%" cy="50%" fill="#eee" r="50%" />
    </svg>
  `
})

*Defined in [packages/vue-identicon/src/icons/Empty.ts:11](https://github.com/polkadot-js/ui/blob/245247016/packages/vue-identicon/src/icons/Empty.ts#L11)*

**`name`** Empty

**`description`** An empty identicon
