[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["packages/react-qr/src/util"](_packages_react_qr_src_util_.md)

# Module: "packages/react-qr/src/util"

## Index

### Functions

* [createAddressPayload](_packages_react_qr_src_util_.md#createaddresspayload)
* [createFrames](_packages_react_qr_src_util_.md#createframes)
* [createImgSize](_packages_react_qr_src_util_.md#createimgsize)
* [createSignPayload](_packages_react_qr_src_util_.md#createsignpayload)
* [decodeString](_packages_react_qr_src_util_.md#decodestring)
* [encodeNumber](_packages_react_qr_src_util_.md#encodenumber)
* [encodeString](_packages_react_qr_src_util_.md#encodestring)

## Functions

###  createAddressPayload

▸ **createAddressPayload**(`address`: string, `genesisHash`: string): *Uint8Array*

*Defined in [packages/react-qr/src/util.ts:32](https://github.com/polkadot-js/ui/blob/4c58f4864/packages/react-qr/src/util.ts#L32)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`genesisHash` | string |

**Returns:** *Uint8Array*

___

###  createFrames

▸ **createFrames**(`input`: Uint8Array): *Uint8Array[]*

*Defined in [packages/react-qr/src/util.ts:47](https://github.com/polkadot-js/ui/blob/4c58f4864/packages/react-qr/src/util.ts#L47)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | Uint8Array |

**Returns:** *Uint8Array[]*

___

###  createImgSize

▸ **createImgSize**(`size?`: string | number): *Record‹string, string›*

*Defined in [packages/react-qr/src/util.ts:67](https://github.com/polkadot-js/ui/blob/4c58f4864/packages/react-qr/src/util.ts#L67)*

**Parameters:**

Name | Type |
------ | ------ |
`size?` | string &#124; number |

**Returns:** *Record‹string, string›*

___

###  createSignPayload

▸ **createSignPayload**(`address`: string, `cmd`: number, `payload`: string | Uint8Array, `genesisHash`: string | Uint8Array): *Uint8Array*

*Defined in [packages/react-qr/src/util.ts:36](https://github.com/polkadot-js/ui/blob/4c58f4864/packages/react-qr/src/util.ts#L36)*

**Parameters:**

Name | Type |
------ | ------ |
`address` | string |
`cmd` | number |
`payload` | string &#124; Uint8Array |
`genesisHash` | string &#124; Uint8Array |

**Returns:** *Uint8Array*

___

###  decodeString

▸ **decodeString**(`value`: Uint8Array): *string*

*Defined in [packages/react-qr/src/util.ts:26](https://github.com/polkadot-js/ui/blob/4c58f4864/packages/react-qr/src/util.ts#L26)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | Uint8Array |

**Returns:** *string*

___

###  encodeNumber

▸ **encodeNumber**(`value`: number): *Uint8Array*

*Defined in [packages/react-qr/src/util.ts:12](https://github.com/polkadot-js/ui/blob/4c58f4864/packages/react-qr/src/util.ts#L12)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | number |

**Returns:** *Uint8Array*

___

###  encodeString

▸ **encodeString**(`value`: string): *Uint8Array*

*Defined in [packages/react-qr/src/util.ts:16](https://github.com/polkadot-js/ui/blob/4c58f4864/packages/react-qr/src/util.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`value` | string |

**Returns:** *Uint8Array*
