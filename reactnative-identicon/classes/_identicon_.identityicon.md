[Polkadot JS UI libraries](../README.md) › [Globals](../globals.md) › ["Identicon"](../modules/_identicon_.md) › [IdentityIcon](_identicon_.identityicon.md)

# Class: IdentityIcon <**SS**>

## Type parameters

▪ **SS**

## Hierarchy

* PureComponent‹Props, State›

  ↳ **IdentityIcon**

## Index

### Methods

* [UNSAFE_componentWillMount](_identicon_.identityicon.md#optional-unsafe_componentwillmount)
* [UNSAFE_componentWillReceiveProps](_identicon_.identityicon.md#optional-unsafe_componentwillreceiveprops)
* [UNSAFE_componentWillUpdate](_identicon_.identityicon.md#optional-unsafe_componentwillupdate)
* [componentDidCatch](_identicon_.identityicon.md#optional-componentdidcatch)
* [componentDidMount](_identicon_.identityicon.md#optional-componentdidmount)
* [componentDidUpdate](_identicon_.identityicon.md#optional-componentdidupdate)
* [componentWillMount](_identicon_.identityicon.md#optional-componentwillmount)
* [componentWillReceiveProps](_identicon_.identityicon.md#optional-componentwillreceiveprops)
* [componentWillUnmount](_identicon_.identityicon.md#optional-componentwillunmount)
* [componentWillUpdate](_identicon_.identityicon.md#optional-componentwillupdate)
* [getSnapshotBeforeUpdate](_identicon_.identityicon.md#optional-getsnapshotbeforeupdate)
* [render](_identicon_.identityicon.md#render)
* [shouldComponentUpdate](_identicon_.identityicon.md#optional-shouldcomponentupdate)
* [getDerivedStateFromProps](_identicon_.identityicon.md#static-getderivedstatefromprops)
* [setDefaultPrefix](_identicon_.identityicon.md#static-setdefaultprefix)

### Object literals

* [state](_identicon_.identityicon.md#state)

## Methods

### `Optional` UNSAFE_componentWillMount

▸ **UNSAFE_componentWillMount**(): *void*

*Inherited from [IdentityIcon](_identicon_.identityicon.md).[UNSAFE_componentWillMount](_identicon_.identityicon.md#optional-unsafe_componentwillmount)*

Defined in node_modules/@types/react/index.d.ts:712

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillReceiveProps

▸ **UNSAFE_componentWillReceiveProps**(`nextProps`: Readonly‹Props›, `nextContext`: any): *void*

*Inherited from [IdentityIcon](_identicon_.identityicon.md).[UNSAFE_componentWillReceiveProps](_identicon_.identityicon.md#optional-unsafe_componentwillreceiveprops)*

Defined in node_modules/@types/react/index.d.ts:744

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹Props› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` UNSAFE_componentWillUpdate

▸ **UNSAFE_componentWillUpdate**(`nextProps`: Readonly‹Props›, `nextState`: Readonly‹State›, `nextContext`: any): *void*

*Inherited from [IdentityIcon](_identicon_.identityicon.md).[UNSAFE_componentWillUpdate](_identicon_.identityicon.md#optional-unsafe_componentwillupdate)*

Defined in node_modules/@types/react/index.d.ts:772

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹Props› |
`nextState` | Readonly‹State› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentDidCatch

▸ **componentDidCatch**(`error`: Error, `errorInfo`: ErrorInfo): *void*

*Inherited from [IdentityIcon](_identicon_.identityicon.md).[componentDidCatch](_identicon_.identityicon.md#optional-componentdidcatch)*

Defined in node_modules/@types/react/index.d.ts:641

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

**Parameters:**

Name | Type |
------ | ------ |
`error` | Error |
`errorInfo` | ErrorInfo |

**Returns:** *void*

___

### `Optional` componentDidMount

▸ **componentDidMount**(): *void*

*Inherited from [IdentityIcon](_identicon_.identityicon.md).[componentDidMount](_identicon_.identityicon.md#optional-componentdidmount)*

Defined in node_modules/@types/react/index.d.ts:620

Called immediately after a component is mounted. Setting state here will trigger re-rendering.

**Returns:** *void*

___

### `Optional` componentDidUpdate

▸ **componentDidUpdate**(`prevProps`: Readonly‹Props›, `prevState`: Readonly‹State›, `snapshot?`: SS): *void*

*Inherited from [IdentityIcon](_identicon_.identityicon.md).[componentDidUpdate](_identicon_.identityicon.md#optional-componentdidupdate)*

Defined in node_modules/@types/react/index.d.ts:683

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹Props› |
`prevState` | Readonly‹State› |
`snapshot?` | SS |

**Returns:** *void*

___

### `Optional` componentWillMount

▸ **componentWillMount**(): *void*

*Inherited from [IdentityIcon](_identicon_.identityicon.md).[componentWillMount](_identicon_.identityicon.md#optional-componentwillmount)*

Defined in node_modules/@types/react/index.d.ts:698

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Returns:** *void*

___

### `Optional` componentWillReceiveProps

▸ **componentWillReceiveProps**(`nextProps`: Readonly‹Props›, `nextContext`: any): *void*

*Inherited from [IdentityIcon](_identicon_.identityicon.md).[componentWillReceiveProps](_identicon_.identityicon.md#optional-componentwillreceiveprops)*

Defined in node_modules/@types/react/index.d.ts:727

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹Props› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` componentWillUnmount

▸ **componentWillUnmount**(): *void*

*Inherited from [IdentityIcon](_identicon_.identityicon.md).[componentWillUnmount](_identicon_.identityicon.md#optional-componentwillunmount)*

Defined in node_modules/@types/react/index.d.ts:636

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

**Returns:** *void*

___

### `Optional` componentWillUpdate

▸ **componentWillUpdate**(`nextProps`: Readonly‹Props›, `nextState`: Readonly‹State›, `nextContext`: any): *void*

*Inherited from [IdentityIcon](_identicon_.identityicon.md).[componentWillUpdate](_identicon_.identityicon.md#optional-componentwillupdate)*

Defined in node_modules/@types/react/index.d.ts:757

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`deprecated`** 16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update

**`see`** https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹Props› |
`nextState` | Readonly‹State› |
`nextContext` | any |

**Returns:** *void*

___

### `Optional` getSnapshotBeforeUpdate

▸ **getSnapshotBeforeUpdate**(`prevProps`: Readonly‹Props›, `prevState`: Readonly‹State›): *SS | null*

*Inherited from [IdentityIcon](_identicon_.identityicon.md).[getSnapshotBeforeUpdate](_identicon_.identityicon.md#optional-getsnapshotbeforeupdate)*

Defined in node_modules/@types/react/index.d.ts:677

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

**Parameters:**

Name | Type |
------ | ------ |
`prevProps` | Readonly‹Props› |
`prevState` | Readonly‹State› |

**Returns:** *SS | null*

___

###  render

▸ **render**(): *React.ReactNode*

*Defined in [packages/reactnative-identicon/src/Identicon.tsx:65](https://github.com/polkadot-js/ui/blob/8d39fabad/packages/reactnative-identicon/src/Identicon.tsx#L65)*

**Returns:** *React.ReactNode*

___

### `Optional` shouldComponentUpdate

▸ **shouldComponentUpdate**(`nextProps`: Readonly‹Props›, `nextState`: Readonly‹State›, `nextContext`: any): *boolean*

*Inherited from [IdentityIcon](_identicon_.identityicon.md).[shouldComponentUpdate](_identicon_.identityicon.md#optional-shouldcomponentupdate)*

Defined in node_modules/@types/react/index.d.ts:631

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

**Parameters:**

Name | Type |
------ | ------ |
`nextProps` | Readonly‹Props› |
`nextState` | Readonly‹State› |
`nextContext` | any |

**Returns:** *boolean*

___

### `Static` getDerivedStateFromProps

▸ **getDerivedStateFromProps**(`__namedParameters`: object, `prevState`: State): *State | null*

*Defined in [packages/reactnative-identicon/src/Identicon.tsx:47](https://github.com/polkadot-js/ui/blob/8d39fabad/packages/reactnative-identicon/src/Identicon.tsx#L47)*

**Parameters:**

▪ **__namedParameters**: *object*

Name | Type | Default |
------ | ------ | ------ |
`prefix` | undefined &#124; number | IdentityIcon.prefix |
`value` | undefined &#124; null &#124; string &#124; Uint8Array‹› | - |

▪ **prevState**: *State*

**Returns:** *State | null*

___

### `Static` setDefaultPrefix

▸ **setDefaultPrefix**(`prefix`: Prefix): *void*

*Defined in [packages/reactnative-identicon/src/Identicon.tsx:43](https://github.com/polkadot-js/ui/blob/8d39fabad/packages/reactnative-identicon/src/Identicon.tsx#L43)*

**Parameters:**

Name | Type |
------ | ------ |
`prefix` | Prefix |

**Returns:** *void*

## Object literals

###  state

### ▪ **state**: *object*

*Defined in [packages/reactnative-identicon/src/Identicon.tsx:36](https://github.com/polkadot-js/ui/blob/8d39fabad/packages/reactnative-identicon/src/Identicon.tsx#L36)*

###  address

• **address**: *string* = ""

*Defined in [packages/reactnative-identicon/src/Identicon.tsx:37](https://github.com/polkadot-js/ui/blob/8d39fabad/packages/reactnative-identicon/src/Identicon.tsx#L37)*

###  publicKey

• **publicKey**: *string* = "0x"

*Defined in [packages/reactnative-identicon/src/Identicon.tsx:38](https://github.com/polkadot-js/ui/blob/8d39fabad/packages/reactnative-identicon/src/Identicon.tsx#L38)*
