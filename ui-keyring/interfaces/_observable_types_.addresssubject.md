[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["observable/types"](../modules/_observable_types_.md) › [AddressSubject](_observable_types_.addresssubject.md)

# Interface: AddressSubject

## Hierarchy

* **AddressSubject**

## Index

### Properties

* [add](_observable_types_.addresssubject.md#add)
* [remove](_observable_types_.addresssubject.md#remove)
* [subject](_observable_types_.addresssubject.md#subject)

## Properties

###  add

• **add**: *function*

*Defined in [packages/ui-keyring/src/observable/types.ts:19](https://github.com/polkadot-js/ui/blob/ea7fad63a/packages/ui-keyring/src/observable/types.ts#L19)*

#### Type declaration:

▸ (`store`: [KeyringStore](_types_.keyringstore.md), `address`: string, `json`: [KeyringJson](_types_.keyringjson.md)): *[SingleAddress](_observable_types_.singleaddress.md)*

**Parameters:**

Name | Type |
------ | ------ |
`store` | [KeyringStore](_types_.keyringstore.md) |
`address` | string |
`json` | [KeyringJson](_types_.keyringjson.md) |

___

###  remove

• **remove**: *function*

*Defined in [packages/ui-keyring/src/observable/types.ts:20](https://github.com/polkadot-js/ui/blob/ea7fad63a/packages/ui-keyring/src/observable/types.ts#L20)*

#### Type declaration:

▸ (`store`: [KeyringStore](_types_.keyringstore.md), `address`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`store` | [KeyringStore](_types_.keyringstore.md) |
`address` | string |

___

###  subject

• **subject**: *BehaviorSubject‹[SubjectInfo](_observable_types_.subjectinfo.md)›*

*Defined in [packages/ui-keyring/src/observable/types.ts:21](https://github.com/polkadot-js/ui/blob/ea7fad63a/packages/ui-keyring/src/observable/types.ts#L21)*
