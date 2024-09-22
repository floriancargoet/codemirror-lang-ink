// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
import {contentText, comments, tags, tracker} from "./tokens.js"
const spec_DivertOperator = {__proto__:null,"<-":10, "->":62, "->->":86}
const spec_Identifier = {__proto__:null,mod:24, has:30, hasnt:32, and:38, or:42, true:48, false:50, not:84, TODO:90, LIST:94, VAR:106, CONST:110, EXTERNAL:114, ref:120, INCLUDE:124, return:134, temp:138, inner:164, function:186}
export const parser = LRParser.deserialize({
  version: 14,
  states: "CQQ]QYOOO!^QbOOP#ROYOOO#ZQbO'#FQO#cQbO'#DnO$UQgO'#DvO$`QYO'#EZO$hQYO'#E^O$pQbO'#FPOOQQ'#FP'#FPO$uQYO'#E`OOQQ'#FO'#FOOOQQ'#Ee'#EeQ]QYOOOOQQ'#Fm'#FmO%|O&jO'#DYO&UQYO'#D[O&ZQYO'#DbO&`QYO'#DdO&eQYO'#DfO&jQrO'#DkO&oQYO'#FQO(XQ!dO'#EcO(cO,UO'#CvOOQQ'#Fg'#FgOOQQ'#Cz'#CzO(qQYO'#C|O*jQ!dO'#DQOOQQ'#Ff'#FfO*zQ!dO'#FfO!^QbO'#FfOOQQ'#FS'#FSQ,tQbO'#ErQ!^QbOOO,yQ!dO'#FlPOOO'#C]'#C]P.pO7[O'#C^POOO)C@n)C@nO.{QbO'#CbO/^QbO'#FRO/lQbO,5;lO/wQbO,5;lO0PQ!dO,5:YO0WQ!dO'#DQOOQQ,5:Y,5:YO0eQbO,5:YO0jQbO'#DpO0qQYO'#DrO0vQYO'#DyOOQV'#Dx'#DxO0{QbO'#DzOOQV'#En'#EnO1SQgO,5:bOOQV'#D}'#D}OOQV'#ES'#ESOOQV'#Fs'#FsOOQV'#Eo'#EoO1ZQgO'#D|O1oQZO'#ETOOQQ,5:b,5:bO1}QgO,5:bO2`QbO,5:bO1SQgO,5:bO2hQbO,5:uO2sQYO,5:uO2xQbO,5:xO3TQYO,5:xOOQQ,5;k,5;kOOQQ,5:z,5:zOOQQ-E8c-E8cOOOO'#Ek'#EkO3YO&jO,59tOOQQ,59t,59tO3bQrO,59vO3bQrO,59|O3bQrO,5:OOOQQ'#Dh'#DhO3gQYO,5:QO3lQbO,5:VOOQQ,5;l,5;lOOQQ'#Cg'#CgOOQQ'#Ci'#CiOOQQ'#Cj'#CjOOQQ'#Cm'#CmOOQQ'#Cn'#CnOOQQ'#Cp'#CpO!^QbO,5;oO!^QbO,5;oO!^QbO,5;oO!^QbO,5;oO!^QbO,5;oO!^QbO,5;oO!^QbO'#CwOOOO'#Eg'#EgO3qO,UO,59bOOQQ,59b,59bO4PQYO'#C}O4[QYO,59hO4dQYO,59lOOQQ,59o,59oO!^QbO'#CeOOQQ,5<Q,5<QOOQQ,5;^,5;^OOQQ-E8p-E8pO4iQ!dO'#CbO6cQ!dO'#FROOQQ,5<W,5<WPOOO'#Ed'#EdP8YO7[O,58xPOOO,58x,58xO8eQYO'#EfO8jQbO,58|OOQQ,5;m,5;mOOQQ,5;U,5;UO8{QbO1G1WOOQQ-E8h-E8hOOQQ1G/t1G/tO!^QbO,5:^O9WQ!dO,5:[O9_QrO,5:^O9jQYO,5:eO9oQ!dO,5:fO9vQYO,5:jOOQQ'#EP'#EPOOQV-E8l-E8lOOQQ1G/|1G/|O9{QgO1G/|O:^QbO1G/|O:fQYO'#EOOOQV-E8m-E8mOOQR'#Ep'#EpO:kQZO'#EVO:yOMhO'#EXO;OOMhO'#FuOOQV'#Ft'#FtOOQV,5:o,5:oO;TQYO,5:oO:XQbO1G/|O;]QgO1G/|O;dQ#vO'#DiOOQQ1G0a1G0aO;oQbO1G0aO;tQbO1G0aO;|QbO1G0aOOQQ1G0d1G0dO<XQbO1G0dO<^QbO1G0dO<fQbO1G0dOOOO-E8i-E8iOOQQ1G/`1G/`OOQQ'#D^'#D^O<qQYO1G/bO!^QbO1G/hO!^QbO1G/jO<yQbO1G/lOOQQ1G/q1G/qOOQQ1G1Z1G1ZO>lQ!dO1G1ZO>vQ!dO1G1ZO@bQ!dO1G1ZO@xQ!dO1G1ZOBmQ!dO1G1ZOCWQ!dO,59cOOOO-E8e-E8eOOQQ1G.|1G.|OC_QYO,59iO(qQYO'#EhOCdQYO1G/SOOQQ1G/S1G/SOOQQ1G/W1G/WOClQ!dO,59POCvQ!dO,58|POOO-E8b-E8bPOOO1G.d1G.dOOQQ,5;Q,5;QOOQQ-E8d-E8dPEpQYO'#CbPFOQYO'#FRPFZQYO'#EjOFcQ!dO1G/xO!^QbO1G/xOOQV1G0P1G0POOQV1G0Q1G0QOOQV1G0U1G0UP!^QbO'#DzOOQQ7+%h7+%hOFjQbO7+%hOFoQgO7+%hOOQR-E8n-E8nOOOO'#Eq'#EqOGQOMhO,5:sOOQV,5<a,5<aOOQV1G0Z1G0ZOGYQbO7+%hOGbQYO'#FqOOQQ'#Fq'#FqOGgQYO,5:TOGoQ#vO'#FqOOQQ7+%{7+%{OGwQbO7+%{OG|QbO7+%{OOQQ7+&O7+&OOHUQbO7+&OOHZQbO7+&OOHcQrO'#DaOHnQYO'#DaOHsQbO'#D`OH{QbO7+$|OIQQ!dO7+%SOIXQ!dO7+%UOOQQ7+%W7+%WOOOO1G.}1G.}OOQQ1G/T1G/TOOQQ,5;S,5;SOOQQ-E8f-E8fOOQQ7+$n7+$nO!^QbO'#EiOI`QYO1G.kOOQQ1G.k1G.kPIhQYO,58|OIvQ!dO7+%dOOQQ<<IS<<ISOI}QbO<<ISOOOO-E8o-E8oOJSQgO<<ISOOQQ,5<],5<]O;dQ#vO'#EmOJeQYO1G/oOOQQ1G/o1G/oOJmQYO,5<]OOQQ<<Ig<<IgOJrQbO<<IgOOQQ<<Ij<<IjOJwQbO<<IjOJ|QbO,59{OKRQrO,59{O<qQYO'#ElOKZQbO,59zOOQQ<<Hh<<HhOOQQ<<Hn<<HnOOQQ<<Hp<<HpOKcQ!dO,5;TOOQQ-E8g-E8gOOQQ7+$V7+$VOOQQAN>nAN>nOKmQbOAN>nOOQQ,5;X,5;XOOQQ-E8k-E8kOOQQ7+%Z7+%ZOOQQ1G1w1G1wOOQQAN?RAN?ROOQQAN?UAN?UOOQQ1G/g1G/gOKrQrO1G/gOK}QbO1G/gOOQQ,5;W,5;WOOQQ-E8j-E8jOOQQG24YG24YOLSQbO7+%ROLXQYO7+%ROOQQ<<Hm<<Hm",
  stateData: "Li~O#mOS#iQQ#nQQ~OTeOo^O{^O}_O!P`O!VaO!XbO!ZcO!`dO!cSO!kTO#OUO#RVO#TYO$lXO~OVkOYjOfhOghOhhOihOorOxnOynOznO$[gO~O#isO#ntO~OVvO$b#tX~OV{O!e!OO!g!PO$b|O~P!aO!o!SO!u!XO!x![O#h!VO#j!WO~OY!QO$b!]O~P#sOV!aO#P!bO~OV!cO#P!dO~O$b!eO~OY!QOT#SXo#SX{#SX}#SX!P#SX!V#SX!X#SX!Z#SX!`#SX!c#SX!k#SX#O#SX#R#SX#T#SX#g#SX$l#SX~O$c!hO$d!jO~OV!kO~OV!lO~OV!mO~OV!nO~O!a!pO~OVvO~O[!rO_!tO`!tOc!|Oe!}O#x!rO#y!rO#z!rO#{!sO#|!sO#}!tO$O!tO$P!tO$Q!uO$R!uO$S!uO$T!uO$U!uO$V!uO$W!vO$X!wO~O$b#VX#g#VX~P&tOl#OO$]#PO$^#PO$_#RO~OV#SO~OW#UOY#WO[tX_tX`tXctXetXutXvtX#xtX#ytX#ztX#{tX#|tX#}tX$OtX$PtX$QtX$RtX$StX$TtX$UtX$VtX$WtX$XtX$btX~O#gtXmtXrtXstX~P(vOu#XOv#XO[$YX_$YX`$YXc$YXe$YX#x$YX#y$YX#z$YX#{$YX#|$YX#}$YX$O$YX$P$YX$Q$YX$R$YX$S$YX$T$YX$U$YX$V$YX$W$YX$X$YX$b$YX#g$YXm$YXr$YXs$YX~O$b#YO~OV#[O[$`X_$`X`$`Xc$`Xe$`X#x$`X#y$`X#z$`X#{$`X#|$`X#}$`X$O$`X$P$`X$Q$`X$R$`X$S$`X$T$`X$U$`X$V$`X$W$`X$X$`X$b$`X#g$`Xm$`Xr$`Xs$`X~O#o#_O#p#_O#q#aO~OW#bOYUXoUX{UX$bUX~OY#WOo#uX{#uX$b#uX~Oo^O{^O$b#ta~OVvO$b#ta~O$b#hO~P&tO!R#iO!h#iO!i#iO~P(vO$b#hO~O$b!dX~P!^OV#kO~OV#lO~O!t#oO~P!^O$b#qO~P#sO!o#tO!u!XO#h!VO#j!WO!x!pX$b!pX~O!o#tO!z#zO#h!VO$j#xO~O!o#tO!u!XO#h!VO#j!WO$b#qO~O!x![O$b#qO~OY$PO#O$RO$b$QO~OV$TO~OY$PO#R$VO$b$UO~OV$XO~O$c!hO$d$ZO~O!R$[O~OY$PO~O$b$aO~Ol#OO$]#PO$^#PO$_$jO~OW$kOrqXsqX~Or$lOs$nO~OV$oO~OW#bOYUX[UX_UX`UXcUXeUX#xUX#yUX#zUX#{UX#|UX#}UX$OUX$PUX$QUX$RUX$SUX$TUX$UUX$VUX$WUX$XUX$bUX#gUXmUXrUXsUX~OY#WO[#uX_#uX`#uXc#uXe#uX#x#uX#y#uX#z#uX#{#uX#|#uX#}#uX$O#uX$P#uX$Q#uX$R#uX$S#uX$T#uX$U#uX$V#uX$W#uX$X#uX$b#uX#g#uXm#uXr#uXs#uX~O#o#_O#p#_O#q$sO~OV$tO~OW#bOYUaoUa{Ua$bUa~Oo^O{^O$b#ti~O$b!da~P&tO!R$zO!h$zO!i$zO~Os${O~Om$|O~P&tOm$}O~O!o#tO!u!XO#h!VO#j!WO$b%PO~O!x![O$b%PO~O!t#oO~O!o#tO#h!VO!z!yX$j!yX~O$k%TO~O!|%VO~O!z#zO$j#xO~O$b%PO~P#sOV%ZO!^%]O$f%YO~O$b%^O~O#O%_O$b%^O~OY$PO#O%_O$b%^O~O$b%aO~O#R%bO$b%aO~OY$PO#R%bO$b%aO~OV%dOY%eO~O$b%jO~O[!rO#x!rO#y!rO#z!rO_#wi`#wic#wie#wi#}#wi$O#wi$P#wi$Q#wi$R#wi$S#wi$T#wi$U#wi$V#wi$W#wi$X#wi$b#wi#g#wim#wir#wis#wi~O#{#wi#|#wi~P=OO#{!sO#|!sO~P=OO[!rO_!tO`!tO#x!rO#y!rO#z!rO#{!sO#|!sO#}!tO$O!tO$P!tOc#wie#wi$W#wi$X#wi$b#wi#g#wim#wir#wis#wi~O$Q#wi$R#wi$S#wi$T#wi$U#wi$V#wi~P?QO$Q!uO$R!uO$S!uO$T!uO$U!uO$V!uO~P?QO[!rO_!tO`!tOc!|O#x!rO#y!rO#z!rO#{!sO#|!sO#}!tO$O!tO$P!tO$Q!uO$R!uO$S!uO$T!uO$U!uO$V!uO$W!vO~Oe#wi$X#wi$b#wi#g#wim#wir#wis#wi~PA`Om%kO~P&tOV%lO~Or$lOs%oO~Or%pOs%rO~P&tOW#bOYUa[Ua_Ua`UacUaeUa#xUa#yUa#zUa#{Ua#|Ua#}Ua$OUa$PUa$QUa$RUa$SUa$TUa$UUa$VUa$WUa$XUa$bUa#gUamUarUasUa~OW#bOYUXoUX{UX~OY#WOo#uX{#uX~Oo^O{^O~O$b!fi~P&tO$b%uO~O!o#tO!u!XO#h!VO#j!WO$b%uO~O$k%TO!|!{a~O!x![O$b%uO~OV%yO~Or%zOs%|O~OV%yO$f%}O~O$b&OO~O#O&PO$b&OO~O$b&QO~O#R&RO$b&QO~O!R$[Or!TX$b!TX~OV&TO~Or&UO$b!SX~O$b&WO~O$b&XO~P&tO$b&YO~P&tOr%pOs&]O~OW#bOYUaoUa{Ua~O$b!fq~P&tO$b&^O~O!o#tO!u!XO#h!VO#j!WO$b&^O~Or%zOs&bO~OV&cO~O$b&dO~O$b&eO~Og&fO~Os&gO!R$[O~Or&UO$b!Sa~Or#]as#]a~P&tO$b&kO~O!R$[Or!Ti$b!Ti~Og&mO~Og&nO~Os&nO~O#m$bfgS#Tx#O#R#O~",
  goto: "2e$jP$k$kPPP$nPP$vP%PP%c%tPP&U&eP&sPPPPP'Q'hPP'lP'l(SPP(YPP'lPPPP(pP(pP(tP)W)Z(pP(pP(pP)a)dP(pPP(pP)sP)sPPP(pP)v)y*PP*V*m*|+]PP+a+lP+{P,OP(pPP(pP,SPP,W,[,b,h,v,|-S-Y-`-f-l-r-|.Z.a.gPPPPPPPPPPP.m,S.q.u/R0YPPPPPPPPPPPPPPPP0o'lPPPP1X1oPPP1xP2O2Z2aRuQUwReyR#]rS#Vk{V#dw#]$wq!xfz#j#m$c$d$e$f$g$h$p$y%h%i%t&Zo!yfz#j#m$d$e$f$g$h$p$y%h%i%t&Zm!zfz#j#m$e$f$g$h$p$y%h%i%t&Zk!{fz#j#m$f$g$h$p$y%h%i%t&Zi!|fz#j#m$g$h$p$y%h%i%t&Zg!}fz#j#m$h$p$y%h%i%t&ZyhPSnq!O!S!x!y!z!{!|!}#O#W#i$^$_$z%O%pT#Pg#QylPSnq!O!S!x!y!z!{!|!}#O#W#i$^$_$z%O%pQ#TjR%m$lymPSnq!O!S!x!y!z!{!|!}#O#W#i$^$_$z%O%pTXO]Q$]!kQ$^!lQ$_!mQ&S%dQ&h&TR&l&gR%g$]Q%f$]R&i&UR!ocQ$S!aQ$W!cQ$`!oQ%`$TR%c$XR}SR!`TQ!RTR!fYX!TT!U!`$OQ!_TS#s!U!`Q#}!^Q%Q#rQ%X$OQ%v%RR&_%xb!YT!U!Z!^!`#r$O%R%xT#v![#wb!XT!U!Z!^!`#r$O%R%xT#v![#wT#n!S#tc!XT!U!Z!^!`#r$O%R%xQ!^TU#r!U!_!`S%R#s$OR%x%XR#|![T#y![#|TZO]TpPqQ#`tR$r#`Q]OR!g]Q#cvQ$q#[U$u#c$q%sR%s$vQ#QgR$i#QQ$m#TR%n$mQ%q$pR&[%qQyRR#gyQ!i_R$Y!iQ&V%fR&j&VQ%{%[R&a%{Q!UTS#p!U$OR$O!``!ZT!U!^!`#r$O%R%xR#u!ZQ#w![R%S#wQ%U#xR%w%UQqPR#ZqT[O]TWO]QxRQ!qeQ#^rR#fySfPqQzSQ#j!OS#m!S%OQ$b!xQ$c!yQ$d!zQ$e!{Q$f!|Q$g!}Q$h#OQ$p#WQ$y#iQ%h$^Q%i$_Q%t$zR&Z%pwoPSq!O!S!x!y!z!{!|!}#O#W#i$^$_$z%O%pvoPSq!O!S!x!y!z!{!|!}#O#W#i$^$_$z%O%pR#XnyiPSnq!O!S!x!y!z!{!|!}#O#W#i$^$_$z%O%pSRO]V#ex#f$xQ%[$PR&`%zc!YT!U!Z!^!`#r$O%R%xQ#{![R%W#|T#z![#|",
  nodeNames: "⚠ LineComment BlockComment Story DivertOperator <- DotSeparatedDivertPathComponents Identifier . ExpressionFunctionCallArguments ( ArithOp mod ArithOp ListOp has hasnt CompareOp LogicOp and LogicOp or Float Integer true false String Interpolation { } ExpressionDivertTarget -> ExpressionList ListMember , ) ExpressionVariableName ++ -- ExpressionFunctionCall - ! not ->-> AuthorWarning TODO ListDeclaration LIST DeclarationEqual = ListDefinition ListElementDefinition VariableDeclaration VAR ConstDeclaration CONST ExternalDeclaration EXTERNAL FunctionIdentifier BracketedKnotDeclArguments ref IncludeStatement INCLUDE Included LogicLine ~ ReturnStatement return TempDeclarationOrAssignment temp -= += Choice Bullets ChoiceName BracketedName ChoiceSingleCondition { MixedTextAndLogic ContentText InlineLogic InnerLogic inner Glue Tag ChoiceBrackets [ MixedTextAndLogicInChoiceBrackets ] ChoiceTag ] KnotDeclaration KnotTitleEquals function StitchDeclaration StitchTitleEquals Gather GatherDashes Expressions Expression",
  maxTerm: 166,
  context: tracker,
  skippedNodes: [0,1,2,4,100],
  repeatNodeCount: 15,
  tokenData: "-{~RpXY#VYZ#bpq#Vqr#irs$Ost$Tuv$Yvw$_xy$jyz$oz{$t{|%d|}&l}!O&q!O!P)R!P!Q)W!Q![)e!^!_*}!_!`+g!`!a,T!a!b,b!c!},g!}#O,{#P#Q-Q#Q#R-V#R#S*e#T#o,g#o#p-[#p#q-a#q#r-l#r#s-q~~-v~#[Q#m~XY#Vpq#V&Y#iO$l`$b%x$f#nQyp!_!`#t!a!b#y#t#yO$V#t#t$OO$O#t~$TO$[~~$YO$j~~$_O#y~~$bPvw$e~$jO$W~~$oOY~~$tOs~$U${R#z#t!k`XY%Upq%Uz{%U`%ZR!k`XY%Upq%Uz{%U%h%kS#{#t!k`XY%wpq%w{|&V!_!`&g`%|R!k`XY%wpq%w{|%w$U&^Ru#t!k`XY%wpq%w{|%w%W&lO!i%W~&qOr~+t&zU#|#t#T`xpXY'^pq'^}!O'l!Q!['|!_!`(g!`!a(l`'cR#T`XY'^pq'^}!O'^$U'sRv#t#T`XY'^pq'^}!O'^p(RQgp!O!P(X!Q!['|p([P!Q![(_p(dPfp!Q![(_%W(lO!h%W'l(sP$f&jS!Q}!O(v!Q(yP!`!a(|!Q)ROS!Q~)WOW~~)]P#x~z{)`~)eO#n~#S)jTgp!O!P)y!Q![)e!c!}*e#R#S*e#T#o*e#S)|Q!Q![(_#]#^*S!b*VP#b#c*Y!b*]P#_#`*`!b*eO!a!b!b*hT!O!P*w!Q![*e!c!}*e#R#S*e#T#o*e!b*zP#]#^*S~+SR$R#t}!O(|!_!`+]!`!a+b~+bO$Q~p+gO!up&Y+nP!R%W#R!Q!_!`+q$v+xP$U#t#O!Q!_!`+{!Q,QP#O!Q!_!`+{~,YP$T~!_!`,]~,bO$S~~,gO#}~+t,lTV*b!O!P*w!Q![,g!c!},g#R#S,g#T#o,g~-QO!x~~-VO!z~~-[O$P~~-aO!o~~-dP#p#q-g~-lO$X~~-qOm~~-vO!c~%x-{O$b%x",
  tokenizers: [contentText, comments, tags, 4, 5, 6, 7, 8, new LocalTokenGroup("_~RQYZX~~X~^O$d~~", 14, 157), new LocalTokenGroup("!Q~RRrs[#O#Pa#o#pz~aO$_~~dRO;'Sm;'S;=`r;=`Om~rO$]~~wP$]~;=`<%lm~!POl~~", 47, 152), new LocalTokenGroup("j~RQYZXz{^~^O#p~~aP!P!Qd~iO#q~~", 25, 123), new LocalTokenGroup("[~RP#P#QU~ZO!|~~", 11, 165)],
  topRules: {"Story":[0,3],"Expressions":[1,98]},
  specialized: [{term: 4, get: (value: keyof typeof spec_DivertOperator) => spec_DivertOperator[value] || -1},{term: 7, get: (value: keyof typeof spec_Identifier) => spec_Identifier[value] || -1}],
  tokenPrec: 1992
})
