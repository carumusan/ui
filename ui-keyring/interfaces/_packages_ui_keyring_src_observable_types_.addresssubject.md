[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["packages/ui-keyring/src/observable/types"](../modules/_packages_ui_keyring_src_observable_types_.md) › [AddressSubject](_packages_ui_keyring_src_observable_types_.addresssubject.md)

# Interface: AddressSubject

## Hierarchy

* **AddressSubject**

## Index

### Properties

* [add](_packages_ui_keyring_src_observable_types_.addresssubject.md#add)
* [remove](_packages_ui_keyring_src_observable_types_.addresssubject.md#remove)
* [subject](_packages_ui_keyring_src_observable_types_.addresssubject.md#subject)

## Properties

###  add

• **add**: *function*

*Defined in [packages/ui-keyring/src/observable/types.ts:19](https://github.com/polkadot-js/ui/blob/43da3b50d/packages/ui-keyring/src/observable/types.ts#L19)*

#### Type declaration:

▸ (`store`: [KeyringStore](_packages_ui_keyring_src_types_.keyringstore.md), `address`: string, `json`: [KeyringJson](_packages_ui_keyring_src_types_.keyringjson.md)): *[SingleAddress](_packages_ui_keyring_src_observable_types_.singleaddress.md)*

**Parameters:**

Name | Type |
------ | ------ |
`store` | [KeyringStore](_packages_ui_keyring_src_types_.keyringstore.md) |
`address` | string |
`json` | [KeyringJson](_packages_ui_keyring_src_types_.keyringjson.md) |

___

###  remove

• **remove**: *function*

*Defined in [packages/ui-keyring/src/observable/types.ts:20](https://github.com/polkadot-js/ui/blob/43da3b50d/packages/ui-keyring/src/observable/types.ts#L20)*

#### Type declaration:

▸ (`store`: [KeyringStore](_packages_ui_keyring_src_types_.keyringstore.md), `address`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`store` | [KeyringStore](_packages_ui_keyring_src_types_.keyringstore.md) |
`address` | string |

___

###  subject

• **subject**: *BehaviorSubject‹[SubjectInfo](_packages_ui_keyring_src_observable_types_.subjectinfo.md)›*

*Defined in [packages/ui-keyring/src/observable/types.ts:21](https://github.com/polkadot-js/ui/blob/43da3b50d/packages/ui-keyring/src/observable/types.ts#L21)*
