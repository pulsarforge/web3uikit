(window.webpackJsonp=window.webpackJsonp||[]).push([[14,15],{"./node_modules/@web3auth/wallet-connect-v1-adapter/dist/walletConnectV1Adapter.esm.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"WalletConnectV1Adapter",(function(){return WalletConnectV1Adapter}));var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/defineProperty.js"),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__),_walletconnect_client__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@walletconnect/client/dist/esm/index.js"),_web3auth_base__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@web3auth/base/dist/base.esm.js"),_web3auth_ethereum_provider__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@web3auth/ethereum-provider/dist/ethereumProvider.esm.js"),loglevel__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/loglevel/lib/loglevel.js"),loglevel__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(loglevel__WEBPACK_IMPORTED_MODULE_4__);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}class WalletConnectV1Adapter extends _web3auth_base__WEBPACK_IMPORTED_MODULE_2__.e{constructor(){let options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};super(),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"name",_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.i.WALLET_CONNECT_V1),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"adapterNamespace",_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.c.EIP155),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"currentChainNamespace",_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.f.EIP155),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"type",_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.a.EXTERNAL),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"adapterOptions",void 0),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"status",_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.NOT_READY),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"adapterData",{uri:""}),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"connector",null),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"wcProvider",null),_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this,"rehydrated",!1),this.adapterOptions=function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({},options),this.chainConfig=options.chainConfig||null}get connected(){var _this$connector;return!(null===(_this$connector=this.connector)||void 0===_this$connector||!_this$connector.connected)}get provider(){var _this$wcProvider;return(null===(_this$wcProvider=this.wcProvider)||void 0===_this$wcProvider?void 0:_this$wcProvider.provider)||null}set provider(_){throw new Error("Not implemented")}async init(){super.checkInitializationRequirements(),this.chainConfig||(this.chainConfig=Object(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.m)(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.f.EIP155,1)),this.connector=this.getWalletConnectInstance(),this.wcProvider=new _web3auth_ethereum_provider__WEBPACK_IMPORTED_MODULE_3__.WalletConnectProvider({config:{chainConfig:this.chainConfig}}),this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.READY,_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.i.WALLET_CONNECT_V1),this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.READY,this.connector.connected&&(this.rehydrated=!0,await this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId.toString()}))}async connect(){if(super.checkConnectionRequirements(),!this.connector)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_2__.j.notReady("Wallet adapter is not ready yet");if(this.connected)return await this.onConnectHandler({accounts:this.connector.accounts,chainId:this.connector.chainId.toString()}),this.provider;var _this$adapterOptions$;this.status!==_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.CONNECTING&&(null!==(_this$adapterOptions$=this.adapterOptions.adapterSettings)&&void 0!==_this$adapterOptions$&&_this$adapterOptions$.qrcodeModal&&(this.connector=this.getWalletConnectInstance()),await this.createNewSession(),this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.CONNECTING,this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.CONNECTING,{adapter:_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.i.WALLET_CONNECT_V1}));return new Promise(((resolve,reject)=>{if(!this.connector)return reject(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.j.notReady("Wallet adapter is not ready yet"));this.connector.on("modal_closed",(async()=>(this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.READY,this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.READY,_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.i.WALLET_CONNECT_V1),reject(new Error("User closed modal")))));try{this.connector.on("connect",(async(error,payload)=>(error&&this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.ERRORED,error),await this.onConnectHandler(payload.params[0]),resolve(this.provider))))}catch(error){loglevel__WEBPACK_IMPORTED_MODULE_4___default.a.error("Wallet connect v1 adapter error while connecting",error),this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.READY,this.rehydrated=!0,this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.ERRORED,error),reject(error instanceof _web3auth_base__WEBPACK_IMPORTED_MODULE_2__.l?error:_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.k.connectionError("Failed to login with wallet connect: ".concat((null==error?void 0:error.message)||"")))}}))}async getUserInfo(){if(!this.connected)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_2__.k.notConnectedError("Not connected with wallet, Please login/connect first");return{}}async disconnect(){let options=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cleanup:!1};const{cleanup:cleanup}=options;if(!this.connector||!this.connected)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_2__.k.notConnectedError("Not connected with wallet");await this.connector.killSession(),this.rehydrated=!1,cleanup?(this.connector=null,this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.NOT_READY,this.wcProvider=null):this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.READY,this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.DISCONNECTED)}async createNewSession(){var _this$adapterOptions,_this$adapterOptions$2;let opts=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{forceNewSession:!1};if(!this.connector)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_2__.j.notReady("Wallet adapter is not ready yet");if(opts.forceNewSession&&this.connector.pending&&await this.connector.killSession(),null===(_this$adapterOptions=this.adapterOptions)||void 0===_this$adapterOptions||null===(_this$adapterOptions$2=_this$adapterOptions.adapterSettings)||void 0===_this$adapterOptions$2||!_this$adapterOptions$2.qrcodeModal)return new Promise(((resolve,reject)=>{var _this$chainConfig2;if(!this.connector)return reject(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.j.notReady("Wallet adapter is not ready yet"));loglevel__WEBPACK_IMPORTED_MODULE_4___default.a.debug("creating new session for web3auth wallet connect"),this.connector.on("display_uri",(async(err,payload)=>{var _this$connector2;if(err)return this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.ERRORED,_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.k.connectionError("Failed to display wallet connect qr code")),reject(err);const uri=payload.params[0];return this.updateAdapterData({uri:uri}),null===(_this$connector2=this.connector)||void 0===_this$connector2||_this$connector2.off("display_uri"),resolve()})),this.connector.createSession({chainId:parseInt((null===(_this$chainConfig2=this.chainConfig)||void 0===_this$chainConfig2?void 0:_this$chainConfig2.chainId)||"0x1",16)}).catch((error=>(loglevel__WEBPACK_IMPORTED_MODULE_4___default.a.error("error while creating new wallet connect session",error),this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.ERRORED,error),reject(error))))}));var _this$chainConfig;await this.connector.createSession({chainId:parseInt((null===(_this$chainConfig=this.chainConfig)||void 0===_this$chainConfig?void 0:_this$chainConfig.chainId)||"0x1",16)})}async onConnectHandler(params){if(!this.connector||!this.wcProvider)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_2__.j.notReady("Wallet adapter is not ready yet");if(!this.chainConfig)throw _web3auth_base__WEBPACK_IMPORTED_MODULE_2__.j.invalidParams("Chain config is not set");const{chainId:chainId}=params;loglevel__WEBPACK_IMPORTED_MODULE_4___default.a.debug("connected chainId",chainId);const connectedChainId=parseInt(chainId,Object(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.n)(chainId)?16:10);if(connectedChainId!==parseInt(this.chainConfig.chainId,16))return await this.createNewSession({forceNewSession:!0}),void this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.ERRORED,_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.j.fromCode(5e3,"Not connected to correct chainId. Expected: ".concat(this.chainConfig.chainId,", Current: ").concat(connectedChainId,", Please switch to correct chain from wallet")));await this.wcProvider.setupProvider(this.connector),this.subscribeEvents(this.connector),this.status=_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.d.CONNECTED,this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.CONNECTED,{adapter:_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.i.WALLET_CONNECT_V1,reconnected:this.rehydrated})}subscribeEvents(connector){connector.on("session_update",(async error=>{error&&this.emit(_web3auth_base__WEBPACK_IMPORTED_MODULE_2__.b.ERRORED,error)}))}getWalletConnectInstance(){const walletConnectOptions=this.adapterOptions.adapterSettings||{};return walletConnectOptions.bridge=walletConnectOptions.bridge||"https://bridge.walletconnect.org",new _walletconnect_client__WEBPACK_IMPORTED_MODULE_1__.a(walletConnectOptions)}}},31:function(module,exports){},32:function(module,exports){},34:function(module,exports){},35:function(module,exports){},36:function(module,exports){},37:function(module,exports){}}]);