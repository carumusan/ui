[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["Identicon"](_identicon_.md)

# Module: "Identicon"

## Index

### Variables

* [Identicon](_identicon_.md#const-identicon)

## Variables

### `Const` Identicon

• **Identicon**: *VueConstructor‹Data & object & object & Vue‹››* = Vue.extend({
  components: {
    Beachball,
    Empty,
    Jdenticon,
    Polkadot
  },
  created: function (): void {
    this.createData();
  },
  data: function (): Data {
    return {
      address: '',
      iconSize: DEFAULT_SIZE,
      publicKey: '0x',
      type: 'empty'
    };
  },
  methods: {
    createData: function (): void {
      this.iconSize = this.size || DEFAULT_SIZE;
      this.type = this.theme;

      this.recodeAddress();
    },
    recodeAddress: function (): void {
      const { address, publicKey } = encodeAccount(this.value);

      this.address = address;
      this.publicKey = publicKey;
    }
  },
  props: ['prefix', 'isAlternative', 'size', 'theme', 'value'],
  // FIXME These nested divs are not correct, would like a different way
  // here so we don't create a div wrapped for the div wrapper of the icon
  template: `
    <div v-if="type === 'empty' || address === ''">
      <Empty :key="address" :size="iconSize" />
    </div>
    <div v-else-if="type === 'beachball'">
      <Beachball :key="address" :address="address" :size="iconSize" />
    </div>
    <div v-else-if="type === 'polkadot'">
      <Polkadot :key="address" :address="address" :isAlternative="isAlternative" :size="iconSize" />
    </div>
    <div v-else>
      <Jdenticon :key="address" :publicKey="publicKey" :size="iconSize" />
    </div>
  `,
  watch: {
    value: function (): void {
      this.recodeAddress();
    }
  }
})

*Defined in [Identicon.ts:48](https://github.com/polkadot-js/ui/blob/82315bd34/packages/vue-identicon/src/Identicon.ts#L48)*

**`name`** Identicon

**`description`** The main Identicon component, taking a number of properties

**`example`** 
```html
<Identicon :size="128" :theme="polkadot" :value="..." />
```
