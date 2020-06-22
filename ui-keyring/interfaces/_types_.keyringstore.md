[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["types"](../modules/_types_.md) › [KeyringStore](_types_.keyringstore.md)

# Interface: KeyringStore

## Hierarchy

* **KeyringStore**

## Implemented by

* [BrowserStore](../classes/_stores_browser_.browserstore.md)
* [FileStore](../classes/_stores_file_.filestore.md)

## Index

### Properties

* [all](_types_.keyringstore.md#all)
* [get](_types_.keyringstore.md#get)
* [remove](_types_.keyringstore.md#remove)
* [set](_types_.keyringstore.md#set)

## Properties

###  all

• **all**: *function*

*Defined in [packages/ui-keyring/src/types.ts:16](https://github.com/polkadot-js/ui/blob/47fa7f9f0/packages/ui-keyring/src/types.ts#L16)*

#### Type declaration:

▸ (`cb`: function): *void*

**Parameters:**

▪ **cb**: *function*

▸ (`key`: string, `value`: [KeyringJson](_types_.keyringjson.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [KeyringJson](_types_.keyringjson.md) |

___

###  get

• **get**: *function*

*Defined in [packages/ui-keyring/src/types.ts:17](https://github.com/polkadot-js/ui/blob/47fa7f9f0/packages/ui-keyring/src/types.ts#L17)*

#### Type declaration:

▸ (`key`: string, `cb`: function): *void*

**Parameters:**

▪ **key**: *string*

▪ **cb**: *function*

▸ (`value`: [KeyringJson](_types_.keyringjson.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | [KeyringJson](_types_.keyringjson.md) |

___

###  remove

• **remove**: *function*

*Defined in [packages/ui-keyring/src/types.ts:18](https://github.com/polkadot-js/ui/blob/47fa7f9f0/packages/ui-keyring/src/types.ts#L18)*

#### Type declaration:

▸ (`key`: string, `cb?`: undefined | function): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`cb?` | undefined &#124; function |

___

###  set

• **set**: *function*

*Defined in [packages/ui-keyring/src/types.ts:19](https://github.com/polkadot-js/ui/blob/47fa7f9f0/packages/ui-keyring/src/types.ts#L19)*

#### Type declaration:

▸ (`key`: string, `value`: [KeyringJson](_types_.keyringjson.md), `cb?`: undefined | function): *void*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`value` | [KeyringJson](_types_.keyringjson.md) |
`cb?` | undefined &#124; function |
