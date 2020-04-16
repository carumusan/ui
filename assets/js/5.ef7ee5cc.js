(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{249:function(e,t,a){"use strict";a.r(t);var o=a(28),r=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_0-52-1-apr-15-2020"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-52-1-apr-15-2020"}},[e._v("#")]),e._v(" 0.52.1 Apr 15, 2020")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Breaking change")]),e._v(" (TypeScript only) The "),a("code",[e._v("*.d.ts")]),e._v(" files now contain TypeScript 3.8 features, "),a("code",[e._v("#private")]),e._v(", which is not usable in older versions")]),e._v(" "),a("li",[e._v("Allow for the encoding of chain-settings via QR (Thanks to https://github.com/hanwencheng)")]),e._v(" "),a("li",[e._v("Enhance checks for ws url in settings (Thanks to https://github.com/kwingram25)")]),e._v(" "),a("li",[e._v("Start of "),a("code",[e._v("isAlternative")]),e._v(" implementations for identicons to react, react-native & vue (currently only Polkadot sixPoint)")]),e._v(" "),a("li",[e._v("Bump to "),a("code",[e._v("@polkadot/api")]),e._v(" 1.10 & "),a("code",[e._v("@polkadot/util")]),e._v(" 2.8")]),e._v(" "),a("li",[e._v("Convert "),a("code",[e._v("private <field>")]),e._v(" to "),a("code",[e._v("#<field>")])]),e._v(" "),a("li",[e._v("Remove internal/duplicated ui-keyring ss58Format mapping, rather set it directly on wrapped keyring")])]),e._v(" "),a("h1",{attrs:{id:"_0-51-1-feb-18-2020"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-51-1-feb-18-2020"}},[e._v("#")]),e._v(" 0.51.1 Feb 18, 2020")]),e._v(" "),a("ul",[a("li",[e._v("Support formatting of addresses via createPair base on latest upstream keyring")]),e._v(" "),a("li",[e._v("Bump to "),a("code",[e._v("@polkadot/api")]),e._v(" 1.3.1")]),e._v(" "),a("li",[e._v("Bump to "),a("code",[e._v("@polkadot/util")]),e._v(" 2.4.1")])]),e._v(" "),a("h1",{attrs:{id:"_0-50-1-feb-16-2020"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-50-1-feb-16-2020"}},[e._v("#")]),e._v(" 0.50.1 Feb 16, 2020")]),e._v(" "),a("ul",[a("li",[e._v("ui-settings does not expose pre-configured endpoints by default (only local dev node)")]),e._v(" "),a("li",[e._v("Bump to "),a("code",[e._v("@polkadot/api")]),e._v(" 1.2.1")]),e._v(" "),a("li",[e._v("Bump to "),a("code",[e._v("@polkadot/util")]),e._v(" 2.3.1")])]),e._v(" "),a("h1",{attrs:{id:"_0-49-1-feb-06-2020"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-49-1-feb-06-2020"}},[e._v("#")]),e._v(" 0.49.1 Feb 06, 2020")]),e._v(" "),a("ul",[a("li",[e._v("Add resolver for jest requires (tests from src)")])]),e._v(" "),a("h1",{attrs:{id:"_0-48-1-jan-30-2020"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-48-1-jan-30-2020"}},[e._v("#")]),e._v(" 0.48.1 Jan 30, 2020")]),e._v(" "),a("ul",[a("li",[e._v("Add Westend & Kulupulu, remove Alexander")]),e._v(" "),a("li",[e._v("Update Edgeware wss uri")]),e._v(" "),a("li",[e._v("Change display name for Kusama")]),e._v(" "),a("li",[e._v("Mirror QR scanning display")])]),e._v(" "),a("h1",{attrs:{id:"_0-47-1-nov-29-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-47-1-nov-29-2019"}},[e._v("#")]),e._v(" 0.47.1 Nov 29, 2019")]),e._v(" "),a("ul",[a("li",[e._v("Support for Kusama CC3 (network endpoints)")]),e._v(" "),a("li",[e._v("Genesis hashes for accounts can now lookup against a range (so CC2-locked accounts will show on CC3)")]),e._v(" "),a("li",[e._v("Language options have been removed from settings (these will be app-specific)")]),e._v(" "),a("li",[e._v("QR display loops now have a timeout decay (slower as it loops)")])]),e._v(" "),a("h1",{attrs:{id:"_0-46-1-oct-25-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-46-1-oct-25-2019"}},[e._v("#")]),e._v(" 0.46.1 Oct 25, 2019")]),e._v(" "),a("ul",[a("li",[e._v("Add an example for using React Native (thanks to https://github.com/cameronfr)")]),e._v(" "),a("li",[e._v("Add base documentation for getting started")]),e._v(" "),a("li",[e._v("Add camera access to the setting structure")])]),e._v(" "),a("h1",{attrs:{id:"_0-45-1-sep-26-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-45-1-sep-26-2019"}},[e._v("#")]),e._v(" 0.45.1 Sep 26, 2019")]),e._v(" "),a("ul",[a("li",[e._v("Support for Kusama CC2")]),e._v(" "),a("li",[a("strong",[e._v("Breaking change")]),e._v(" The subscription subject for "),a("code",[e._v("ui-keyring")]),e._v(" does not return a pre-formatted React object anymore. This is SUI-specific, so had limited use and therefore should not even be split into a "),a("code",[e._v("react-keyring")]),e._v(" component. Rather users of this functionality should construct their own options for their framework.")]),e._v(" "),a("li",[e._v("Experimental support for signing via Ledger HW")]),e._v(" "),a("li",[e._v("Add specific settings for the icon type to "),a("code",[e._v("ui-settings")])]),e._v(" "),a("li",[e._v("Add Edgeware live RPC endpoints to "),a("code",[e._v("ui-settings")])]),e._v(" "),a("li",[e._v("Adjust "),a("code",[e._v("react-identicon")]),e._v(" highlights (validators)")]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("example-{react, vue}")]),e._v(" highlighting simple use with "),a("code",[e._v("ui-keyring")]),e._v(", "),a("code",[e._v("ui-settings")]),e._v(" & "),a("code",[e._v("*-identicon")]),e._v(" components")])]),e._v(" "),a("h1",{attrs:{id:"_0-44-1-sep-12-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-44-1-sep-12-2019"}},[e._v("#")]),e._v(" 0.44.1 Sep 12, 2019")]),e._v(" "),a("ul",[a("li",[e._v("Update "),a("code",[e._v("@polkadot/util")]),e._v(" to 1.4.1")]),e._v(" "),a("li",[e._v("Upddate to Babel 7.6")])]),e._v(" "),a("h1",{attrs:{id:"_0-43-1-sep-10-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-43-1-sep-10-2019"}},[e._v("#")]),e._v(" 0.43.1 Sep 10, 2019")]),e._v(" "),a("ul",[a("li",[e._v("Add W3F Node for Kusama")]),e._v(" "),a("li",[e._v("Add extended info to ui-settings, i.e. info on each option")]),e._v(" "),a("li",[e._v("Adjust logos in ui-assets (incl. updated Substrate logo)")]),e._v(" "),a("li",[e._v("ui-keyring now check the genesisHash on  all load operations (if supplied)")]),e._v(" "),a("li",[e._v("react-qr is now operational and integrated in the polkadot-js/extension and apps repos")])]),e._v(" "),a("h1",{attrs:{id:"_0-42-1-aug-24-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-42-1-aug-24-2019"}},[e._v("#")]),e._v(" 0.42.1 Aug 24, 2019")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Breaking Change")]),e._v(" The "),a("code",[e._v("@polkadot/ui-identicon")]),e._v(" package has been renamed to "),a("code",[e._v("@polkadot/react-identicon")])]),e._v(" "),a("li",[a("strong",[e._v("Breaking change")]),e._v(" For "),a("code",[e._v("@polkadot/ui-keyring")]),e._v(" the stores are now not exported from the index, imports should be changed to either "),a("code",[e._v("ui-keyring/stores")]),e._v(" or explicitly to "),a("code",[e._v("ui-keyring/stores/Extension")])]),e._v(" "),a("li",[e._v("Support for Kusama with endpoints and settings")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("@polkadot/reactnative-identicon")]),e._v(" package has been added (only Polkadot support atm)")]),e._v(" "),a("li",[e._v("The "),a("code",[e._v("@polkadot/react-qr")]),e._v(" package has been added to display/scan QR codes")]),e._v(" "),a("li",[a("code",[e._v("@polkadot/ui-settings")]),e._v(" has UNfrastructure added as an RPC provider for Alex")]),e._v(" "),a("li",[a("code",[e._v("@polkadot/ui-settings")]),e._v(" exposes a dropdown with address prefix options")])]),e._v(" "),a("h1",{attrs:{id:"_0-41-1-jun-14-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-41-1-jun-14-2019"}},[e._v("#")]),e._v(" 0.41.1 Jun 14, 2019")]),e._v(" "),a("ul",[a("li",[e._v("Adapt interface to cater for new "),a("code",[e._v("@polkadot/keyring")]),e._v(", where pairs -\n"),a("ul",[a("li",[e._v("expose "),a("code",[e._v("address")]),e._v(" getter instead of "),a("code",[e._v("address()")])]),e._v(" "),a("li",[e._v("expose "),a("code",[e._v("publicKey")]),e._v(" getter instead of "),a("code",[e._v("publicKey()")])]),e._v(" "),a("li",[e._v("expose "),a("code",[e._v("meta")]),e._v(" getter instead of "),a("code",[e._v("getMeta()")])])])]),e._v(" "),a("li",[e._v("The functions "),a("code",[e._v("getAccount")]),e._v(" "),a("code",[e._v("getAddress")]),e._v(" "),a("code",[e._v("getContract")]),e._v(" in "),a("code",[e._v("@polkadot/ui-keyring")]),e._v(" now return either undefined or an object with the above properties.")]),e._v(" "),a("li",[e._v("Add support for the saving of contracts to the keyring")]),e._v(" "),a("li",[e._v("Use the injection of stores, providing an additional "),a("code",[e._v("ExtensionStore")]),e._v(" for saving to Chrome/FF extensions (in addition to the standard localStorage saving)")]),e._v(" "),a("li",[e._v("Remove previously deprecated kering functions, "),a("code",[e._v("createAccount")]),e._v(", "),a("code",[e._v("createAccountExternal")]),e._v(" & "),a("code",[e._v("createAccountMnemonic")])]),e._v(" "),a("li",[e._v("Remove (previously deprecated), "),a("code",[e._v("@polkadot/ui-util")]),e._v(", all these functions have been incorporated in "),a("code",[e._v("@polkadot/util")])])]),e._v(" "),a("h1",{attrs:{id:"_0-40-1-jun-04-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-40-1-jun-04-2019"}},[e._v("#")]),e._v(" 0.40.1 Jun 04, 2019")]),e._v(" "),a("ul",[a("li",[e._v("Address encoding changes, use encoded address instead of supplied")])]),e._v(" "),a("h1",{attrs:{id:"_0-39-1-may-22-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-39-1-may-22-2019"}},[e._v("#")]),e._v(" 0.39.1 May 22, 2019")]),e._v(" "),a("ul",[a("li",[e._v("Allow for externally injected accounts")]),e._v(" "),a("li",[e._v("@polkadot/util 0.91.1 & @polkadot/api 0.79.1")])]),e._v(" "),a("h1",{attrs:{id:"_0-38-1-may-08-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-38-1-may-08-2019"}},[e._v("#")]),e._v(" 0.38.1 May 08, 2019")]),e._v(" "),a("ul",[a("li",[e._v("Sorting of keyring addresses")]),e._v(" "),a("li",[e._v("Fix JSON import defaults (previously detection was not working for old accounts)")]),e._v(" "),a("li",[e._v("Display icons using publicKey (not the encoded address)")]),e._v(" "),a("li",[e._v("Ensure only a single instance of ui-keyring is loaded")]),e._v(" "),a("li",[e._v("Adjust short address option display (keyring options)")])]),e._v(" "),a("h1",{attrs:{id:"_0-37-1-apr-03-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-37-1-apr-03-2019"}},[e._v("#")]),e._v(" 0.37.1 Apr 03, 2019")]),e._v(" "),a("ul",[a("li",[e._v("Add Emberic Elm (Dried Danta discontinued)")]),e._v(" "),a("li",[e._v("@polkadot/util & @polkadot/api 0.75.1")])]),e._v(" "),a("h1",{attrs:{id:"_0-36-1-mar-29-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-36-1-mar-29-2019"}},[e._v("#")]),e._v(" 0.36.1 Mar 29, 2019")]),e._v(" "),a("ul",[a("li",[e._v("Small fixes, latest @polkadot/wasm-* packages")])]),e._v(" "),a("h1",{attrs:{id:"_0-35-1-mar-29-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-35-1-mar-29-2019"}},[e._v("#")]),e._v(" 0.35.1  Mar 29, 2019")]),e._v(" "),a("ul",[a("li",[e._v("@polkadot/util & @polkadot/api 0.75.1")])]),e._v(" "),a("h1",{attrs:{id:"_0-34-1-mar-28-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-34-1-mar-28-2019"}},[e._v("#")]),e._v(" 0.34.1 Mar 28, 2019")]),e._v(" "),a("ul",[a("li",[e._v("Fix for blake2 in Polkadot identicon generation")])]),e._v(" "),a("h1",{attrs:{id:"_0-33-1-mar-23-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-33-1-mar-23-2019"}},[e._v("#")]),e._v(" 0.33.1 Mar 23, 2019")]),e._v(" "),a("ul",[a("li",[e._v("Rename createUri and createExternal to addExternal and addUri")]),e._v(" "),a("li",[e._v("Rename addAccountPair to addPair")]),e._v(" "),a("li",[e._v("Add additional createFromUri function to create pair, but not add it")]),e._v(" "),a("li",[e._v("Latest api, util & util-crypto (this with WASM and JS fallbacks)")])]),e._v(" "),a("h1",{attrs:{id:"_0-32-1-mar-20-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-32-1-mar-20-2019"}},[e._v("#")]),e._v(" 0.32.1 Mar 20, 2019")]),e._v(" "),a("ul",[a("li",[e._v("Add createUri to create an account from a path uri")]),e._v(" "),a("li",[e._v("Add createExternal as an alias for createAccountExternal")]),e._v(" "),a("li",[e._v("Deprecate createAccount, createAccountExternal and createAccountMnemonic")]),e._v(" "),a("li",[e._v("Fix styled-component dependencies when used in a non-@polkadot project")])]),e._v(" "),a("h1",{attrs:{id:"_0-31-1-mar-18-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-31-1-mar-18-2019"}},[e._v("#")]),e._v(" 0.31.1 Mar 18, 2019")]),e._v(" "),a("ul",[a("li",[e._v("Allow for latest keyring with sr25519 derived support")]),e._v(" "),a("li",[e._v("When using dev mode, it assumes the substrate node has sr25519 derived keys")])]),e._v(" "),a("h1",{attrs:{id:"_0-30-1-mar-14-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-30-1-mar-14-2019"}},[e._v("#")]),e._v(" 0.30.1 Mar 14, 2019")]),e._v(" "),a("ul",[a("li",[e._v("Swap to publishing -beta.x on merge (non-breaking testing)")])]),e._v(" "),a("h1",{attrs:{id:"_0-29-1-mar-13-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-29-1-mar-13-2019"}},[e._v("#")]),e._v(" 0.29.1 Mar 13, 2019")]),e._v(" "),a("p",[e._v("Swap to using a dev HDKD keyring (only available on latest substrate master, only affects nodes running with --dev, normal operation unaffected)")]),e._v(" "),a("h1",{attrs:{id:"_0-28-1-feb-21-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-28-1-feb-21-2019"}},[e._v("#")]),e._v(" 0.28.1 Feb 21, 2019")]),e._v(" "),a("p",[e._v("Default Substrate icon is Jdenticon")]),e._v(" "),a("h1",{attrs:{id:"_0-27-1-feb-20-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-27-1-feb-20-2019"}},[e._v("#")]),e._v(" 0.27.1 Feb 20, 2019")]),e._v(" "),a("p",[e._v("Replace Charred Cherry with Dried Danta, remove old decimals and token name configs")]),e._v(" "),a("h1",{attrs:{id:"_0-26-1-feb-14-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-26-1-feb-14-2019"}},[e._v("#")]),e._v(" 0.26.1 Feb 14, 2019")]),e._v(" "),a("p",[e._v("Add keyring support for sd25519 (schnorrkel)")]),e._v(" "),a("h1",{attrs:{id:"_0-25-1-jan-09-2019"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-25-1-jan-09-2019"}},[e._v("#")]),e._v(" 0.25.1 Jan 09, 2019")]),e._v(" "),a("p",[e._v("Add "),a("code",[e._v("@polkadot/{keyring,util,util-crypto,types}")]),e._v(" as peerDependencies for the various packages as used. Thie should allow less churn on this repo with version bumps, although it does add some extra effort onto the users of these libraries. (But the assumption is that they use these anyway)")]),e._v(" "),a("h1",{attrs:{id:"_0-24-1-dec-19-2018"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-24-1-dec-19-2018"}},[e._v("#")]),e._v(" 0.24.1 Dec 19, 2018")]),e._v(" "),a("h1",{attrs:{id:"_0-23-1-dec-14-2018"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-23-1-dec-14-2018"}},[e._v("#")]),e._v(" 0.23.1 Dec 14, 2018")]),e._v(" "),a("h1",{attrs:{id:"_0-22-1-dec-05-2018"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_0-22-1-dec-05-2018"}},[e._v("#")]),e._v(" 0.22.1 Dec 05, 2018")]),e._v(" "),a("ul",[a("li",[e._v("Split from apps")])])])}),[],!1,null,null,null);t.default=r.exports}}]);