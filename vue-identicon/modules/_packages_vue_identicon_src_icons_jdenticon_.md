[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["packages/vue-identicon/src/icons/Jdenticon"](_packages_vue_identicon_src_icons_jdenticon_.md)

# Module: "packages/vue-identicon/src/icons/Jdenticon"

## Index

### Variables

* [Jdenticon](_packages_vue_identicon_src_icons_jdenticon_.md#const-jdenticon)

## Variables

### `Const` Jdenticon

• **Jdenticon**: *VueConstructor‹Data & object & object & Vue‹››* = Vue.extend({
  created: function (): void {
    this.createSvgHtml();
  },
  data: function (): Data {
    return {
      // eslint-disable-next-line quotes
      svgHtml: `<svg viewBox="0 0 64 64" />`
    };
  },
  methods: {
    createSvgHtml: function (): void {
      this.svgHtml = jdenticon.toSvg((this.publicKey as string).substr(2), this.size);
    }
  },
  props: ['publicKey', 'size'],
  // eslint-disable-next-line quotes
  template: `<div v-html="svgHtml" />`
})

*Defined in [packages/vue-identicon/src/icons/Jdenticon.ts:16](https://github.com/polkadot-js/ui/blob/245247016/packages/vue-identicon/src/icons/Jdenticon.ts#L16)*

**`name`** Jdenticon

**`description`** The substrate default via Jdenticon
