[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["packages/ui-settings/src/defaults/ss58"](_packages_ui_settings_src_defaults_ss58_.md)

# Module: "packages/ui-settings/src/defaults/ss58"

## Index

### Variables

* [PREFIXES](_packages_ui_settings_src_defaults_ss58_.md#const-prefixes)
* [PREFIX_DEFAULT](_packages_ui_settings_src_defaults_ss58_.md#const-prefix_default)

## Variables

### `Const` PREFIXES

• **PREFIXES**: *[Option](_packages_ui_settings_src_types_.md#option)[]* = [
  {
    info: 'default',
    text: 'Default for the connected node',
    value: -1
  },
  // keep as first (well, after default)
  {
    info: 'substrate',
    text: 'Substrate (generic)',
    value: 42
  },
  // all in ascending order based on value
  {
    info: 'polkadot',
    text: 'Polkadot (live)',
    value: 0
  },
  {
    info: 'kusama',
    text: 'Kusama (canary)',
    value: 2
  },
  {
    info: 'edgeware',
    text: 'Edgeware (live)',
    value: 7
  }
]

*Defined in [packages/ui-settings/src/defaults/ss58.ts:9](https://github.com/polkadot-js/ui/blob/245247016/packages/ui-settings/src/defaults/ss58.ts#L9)*

___

### `Const` PREFIX_DEFAULT

• **PREFIX_DEFAULT**: *-1* = -1

*Defined in [packages/ui-settings/src/defaults/ss58.ts:7](https://github.com/polkadot-js/ui/blob/245247016/packages/ui-settings/src/defaults/ss58.ts#L7)*
