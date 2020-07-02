[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["packages/vue-identicon/src/icons/Beachball"](_packages_vue_identicon_src_icons_beachball_.md)

# Module: "packages/vue-identicon/src/icons/Beachball"

## Index

### Variables

* [Beachball](_packages_vue_identicon_src_icons_beachball_.md#const-beachball)

## Variables

### `Const` Beachball

• **Beachball**: *VueConstructor‹Data & object & object & Vue‹››* = Vue.extend({
  created: function (): void {
    this.createHtml();
  },
  data: function (): Data {
    return {
      // eslint-disable-next-line quotes
      html: `<div />`
    };
  },
  methods: {
    createHtml: function (): void {
      this.html = beachballIcon(this.address, this.size).outerHTML;
    }
  },
  props: ['address', 'size'],
  // eslint-disable-next-line quotes
  template: `<div v-html="html" />`
})

*Defined in [packages/vue-identicon/src/icons/Beachball.ts:16](https://github.com/polkadot-js/ui/blob/245247016/packages/vue-identicon/src/icons/Beachball.ts#L16)*

**`name`** Beachball

**`description`** The Beachball identicon
