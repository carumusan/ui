[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["icons/Polkadot"](_icons_polkadot_.md)

# Module: "icons/Polkadot"

## Index

### Variables

* [Polkadot](_icons_polkadot_.md#const-polkadot)

## Variables

### `Const` Polkadot

• **Polkadot**: *VueConstructor‹Data & object & object & Vue‹››* = Vue.extend({
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
      const circles = polkadotIcon(this.address, { isAlternative: this.isAlternative || false }).map(({ cx, cy, fill, r }) =>
        `<circle cx=${cx} cy=${cy} fill="${fill}" r=${r} />`
      ).join('');

      this.svgHtml = `<svg height=${this.size} viewBox='0 0 64 64' width=${this.size}>${circles}</svg>`;
    }
  },
  props: ['address', 'isAlternative', 'size'],
  // eslint-disable-next-line quotes
  template: `<div v-html="svgHtml" />`
})

*Defined in [icons/Polkadot.ts:16](https://github.com/polkadot-js/ui/blob/b6909b132/packages/vue-identicon/src/icons/Polkadot.ts#L16)*

**`name`** Polkadot

**`description`** The Polkadot default identicon
