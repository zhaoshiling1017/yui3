YUI.add("dd-constrain",function(B){var K="dragNode",M="offsetHeight",F="offsetWidth",Q="host",P="constrain2region",H="constrain2node",G="tickXArray",O="tickYArray",N=B.DD.DDM,E="top",J="right",L="bottom",D="left",I=null,A=function(C){A.superclass.constructor.apply(this,arguments);};A.NAME="ddConstrained";A.NS="con";A.ATTRS={host:{},stickX:{value:false},stickY:{value:false},tickX:{value:false},tickY:{value:false},tickXArray:{value:false},tickYArray:{value:false},constrain2region:{value:false,getter:function(C){if(B.Lang.isObject(C)){var R={};B.mix(R,C);return R;}else{return false;}},setter:function(C){if(B.Lang.isObject(C)){if(B.Lang.isNumber(C[E])&&B.Lang.isNumber(C[J])&&B.Lang.isNumber(C[D])&&B.Lang.isNumber(C[L])){var R={};B.mix(R,C);return R;}else{return false;}}else{if(C!==false){return false;}}return C;}},gutter:{value:"0",setter:function(C){return B.DD.DDM.cssSizestoObject(C);}},constrain2node:{value:false,setter:function(R){if(!this.get(P)){var C=B.one(R);if(C){return C;}}else{if(this.get(P)!==false){}}return false;}},constrain2view:{value:false},cacheRegion:{value:true}};I={initializer:function(){this.get(Q).on("drag:start",B.bind(this._handleStart,this));this.get(Q).after("drag:align",B.bind(this.align,this));},_handleStart:function(){this.resetCache();},_regionCache:null,_cacheRegion:function(){this._regionCache=this.get(H).get("region");},resetCache:function(){this._regionCache=null;},getRegion:function(V){var T={},U=null,C=null,S=this.get("gutter"),R=this.get(Q);if(this.get(H)){if(!this._regionCache){B.on("resize",B.bind(this._cacheRegion,this),window);this._cacheRegion();}T=B.clone(this._regionCache);if(!this.get("cacheRegion")){this.resetCache();}}else{if(this.get(P)){T=this.get(P);}else{if(this.get("constrain2view")){T=R.get(K).get("viewportRegion");}else{return false;}}}B.each(S,function(W,X){if((X==J)||(X==L)){T[X]-=W;}else{T[X]+=W;}});if(V){U=R.get(K).get(M);C=R.get(K).get(F);T[J]=T[J]-C;T[L]=T[L]-U;}return T;},_checkRegion:function(C){var S=C,U=this.getRegion(),T=this.get(Q),V=T.get(K).get(M),R=T.get(K).get(F);if(S[1]>(U[L]-V)){C[1]=(U[L]-V);}if(U[E]>S[1]){C[1]=U[E];}if(S[0]>(U[J]-R)){C[0]=(U[J]-R);}if(U[D]>S[0]){C[0]=U[D];}return C;},inRegion:function(S){S=S||this.get(Q).get(K).getXY();var R=this._checkRegion([S[0],S[1]]),C=false;if((S[0]===R[0])&&(S[1]===R[1])){C=true;}return C;},align:function(){var S=this.get(Q),C=S.actXY,R=this.getRegion(true);if(this.get("stickX")){C[1]=(S.startXY[1]-S.deltaXY[1]);}if(this.get("stickY")){C[0]=(S.startXY[0]-S.deltaXY[0]);}if(R){C=this._checkRegion(C);}C=this._checkTicks(C,R);S.actXY=C;},_checkTicks:function(W,U){var T=this.get(Q),V=(T.startXY[0]-T.deltaXY[0]),S=(T.startXY[1]-T.deltaXY[1]),C=this.get("tickX"),R=this.get("tickY");if(C&&!this.get(G)){W[0]=N._calcTicks(W[0],V,C,U[D],U[J]);}if(R&&!this.get(O)){W[1]=N._calcTicks(W[1],S,R,U[E],U[L]);}if(this.get(G)){W[0]=N._calcTickArray(W[0],this.get(G),U[D],U[J]);}if(this.get(O)){W[1]=N._calcTickArray(W[1],this.get(O),U[E],U[L]);}return W;}};B.namespace("Plugin");B.extend(A,B.Base,I);B.Plugin.DDConstrained=A;B.mix(N,{_calcTicks:function(X,W,T,V,U){var R=((X-W)/T),S=Math.floor(R),C=Math.ceil(R);if((S!==0)||(C!==0)){if((R>=S)&&(R<=C)){X=(W+(T*S));if(V&&U){if(X<V){X=(W+(T*(S+1)));}if(X>U){X=(W+(T*(S-1)));}}}}return X;},_calcTickArray:function(Y,Z,X,U){var R=0,V=Z.length,T=0,S,C,W;if(!Z||(Z.length===0)){return Y;}else{if(Z[0]>=Y){return Z[0];}else{for(R=0;R<V;R++){T=(R+1);if(Z[T]&&Z[T]>=Y){S=Y-Z[R];C=Z[T]-Y;W=(C>S)?Z[R]:Z[T];if(X&&U){if(W>U){if(Z[R]){W=Z[R];}else{W=Z[V-1];}}}return W;}}return Z[Z.length-1];}}}});},"@VERSION@",{requires:["dd-drag"],skinnable:false});