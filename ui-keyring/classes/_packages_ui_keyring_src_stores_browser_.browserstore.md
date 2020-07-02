[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["packages/ui-keyring/src/stores/Browser"](../modules/_packages_ui_keyring_src_stores_browser_.md) › [BrowserStore](_packages_ui_keyring_src_stores_browser_.browserstore.md)

# Class: BrowserStore

## Hierarchy

* **BrowserStore**

## Implements

* [KeyringStore](../interfaces/_packages_ui_keyring_src_types_.keyringstore.md)

## Index

### Methods

* [all](_packages_ui_keyring_src_stores_browser_.browserstore.md#all)
* [get](_packages_ui_keyring_src_stores_browser_.browserstore.md#get)
* [remove](_packages_ui_keyring_src_stores_browser_.browserstore.md#remove)
* [set](_packages_ui_keyring_src_stores_browser_.browserstore.md#set)

## Methods

###  all

▸ **all**(`cb`: function): *void*

*Defined in [packages/ui-keyring/src/stores/Browser.ts:10](https://github.com/polkadot-js/ui/blob/43da3b50d/packages/ui-keyring/src/stores/Browser.ts#L10)*

**Parameters:**

▪ **cb**: *function*

▸ (`key`: string, `value`: [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md) |

**Returns:** *void*

___

###  get

▸ **get**(`key`: string, `cb`: function): *void*

*Defined in [packages/ui-keyring/src/stores/Browser.ts:16](https://github.com/polkadot-js/ui/blob/43da3b50d/packages/ui-keyring/src/stores/Browser.ts#L16)*

**Parameters:**

▪ **key**: *string*

▪ **cb**: *function*

▸ (`value`: [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md) |

**Returns:** *void*

___

###  remove

▸ **remove**(`key`: string, `cb?`: undefined | function): *void*

*Defined in [packages/ui-keyring/src/stores/Browser.ts:20](https://github.com/polkadot-js/ui/blob/43da3b50d/packages/ui-keyring/src/stores/Browser.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`cb?` | undefined &#124; function |

**Returns:** *void*

___

###  set

▸ **set**(`key`: string, `value`: [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md), `cb?`: undefined | function): *void*

*Defined in [packages/ui-keyring/src/stores/Browser.ts:25](https://github.com/polkadot-js/ui/blob/43da3b50d/packages/ui-keyring/src/stores/Browser.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [KeyringJson](../interfaces/_packages_ui_keyring_src_types_.keyringjson.md) |
`cb?` | undefined &#124; function |

**Returns:** *void*
