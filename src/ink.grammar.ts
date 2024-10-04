// This file was generated by lezer-generator. You probably shouldn't edit it.
import {LRParser, LocalTokenGroup} from "@lezer/lr"
import {comments, tags, sequenceSymbols, contentText, tracker} from "./tokens.js"
const spec_DivertOperator = {__proto__:null,"<-":10, "->":96, "->->":120}
const spec_Identifier = {__proto__:null,mod:32, has:48, hasnt:50, and:70, or:76, true:82, false:84, not:112, TODO:124, LIST:128, VAR:140, CONST:144, EXTERNAL:148, ref:154, INCLUDE:158, return:168, temp:172, once:198, cycle:200, shuffle:202, stopping:204, else:222, function:254}
export const parser = LRParser.deserialize({
  version: 14,
  states: "KnQ]Q,aOOO!jQaOOP#_OXOOO#gQaO'#FzO#oQaO'#EPOOQ,X'#E`'#E`OOQ,X'#Eu'#EuO$PQ,}O'#G]OOQ,X'#Fb'#FbO$vQ,iO'#E_O%mQ,iO'#EXO%wQaO'#FyOOQ,X'#Fy'#FyO%|QXO'#E}O&UQXO'#FQO&^Q,aO'#FSOOQ,X'#Fx'#FxOOQ,X'#FW'#FWQ]Q,aOOOOQP'#GV'#GVO'qO7[O'#DkO'yQXO'#DmO(OQXO'#DsO(TQXO'#DuO(YQXO'#DwO(_Q!cO'#D|O(dQXO'#FzO)|Q#uO'#FlO*TOMhO'#DXOOQP'#GP'#GPOOQP'#D]'#D]O*cQXO'#D_O,[Q#uO'#DgOOQP'#GO'#GOO!jQaO'#GOOOQP'#F}'#F}O.SQ#uO'#F}OOQP'#F|'#F|Q!jQaOOO.jQ#uO'#GUPOOO'#C]'#C]P0aO!LQO'#C^POOO)CAh)CAhO0lQaO'#CbO0}QaO'#F{O1]QaO,5<fO1hQaO,5<fO1pQ#uO,5:kO1wQ#uO'#DgOOQ,X,5:k,5:kO2UQaO,5:kO2ZQaO'#ERO2bQXO'#ETO2gQ#uO'#G^OOQP'#Fc'#FcO2qQXO'#EaO3SQ,aO'#EsO$PQ,}O'#GbOOQ,X'#Fg'#FgO4ZQ,aO'#EiOOQ,X'#Ff'#FfO4oQXO'#FfO5VQ,aO'#GeOOQ,X'#Ev'#EvO5^Q,aO'#EaOOQP'#Ea'#EaOOQP'#G^'#G^O5eQ,aO'#G^O5vQXO,5<wOOQP'#Eb'#EbOOQ,X-E9`-E9`O5{QXO'#E[OOQ,X'#EZ'#EZO$PQ,}O'#E]OOQ,X'#Fa'#FaO6QQ,iO,5:sO6XQ,_O'#EwOOQ,X,5:s,5:sO6gQ,iO,5:sO6xQaO,5:sO6QQ,iO,5:sOOQ,X,5<e,5<eO7QQaO,5;iO7]QXO,5;iO7bQaO,5;lO7mQXO,5;lOOQ,X,5;n,5;nOOQ,X-E9U-E9UOOOO'#F^'#F^O7rO7[O,5:VOOQ,X,5:V,5:VO7zQqO,5:XO7zQqO,5:_O7zQqO,5:aOOQP'#Dy'#DyO8PQXO,5:cO8UQaO,5:hOOQP,5<f,5<fOOQP'#Ch'#ChOOQP'#Cm'#CmOOQP'#Cp'#CpOOQP'#Cv'#CvOOQP'#C}'#C}OOQP'#DQ'#DQO!jQaO,59RO!jQaO,59RO!jQaO,59RO!jQaO,59RO!jQaO,59RO!jQaO,59ROOQP,5<W,5<WO!jQaO'#DYOOOO'#FY'#FYO8ZOMhO,59sOOQP,59s,59sO8iQXO'#D`O8tQXO,59yOOQP,59},59}O8|QXO,5:RO!jQaO'#CeOOQP,5<j,5<jOOQP,5<i,5<iOOQP-E9j-E9jO9RQ#uO'#CbO:{Q#uO'#F{OOQP,5<p,5<pPOOO'#FV'#FVP<rO!LQO,58xPOOO,58x,58xO<}QXO'#FXO=SQaO,58|OOQP,5<g,5<gOOQP,5;w,5;wO=eQaO1G2QOOQP-E9Z-E9ZOOQ,X1G0V1G0VO!jQaO,5:oO=pQ#uO,5:mO=wQ!cO,5:oOOQ,X,5;U,5;UOOQP-E9a-E9aO>SQ,aO,5:{O3SQ,aO'#EpO>^QaO'#EmOOQP'#Fh'#FhO>eQXO'#ElOOQP,5;_,5;_OOQ,X'#Fe'#FeO>mQ#uO'#EjO>tQ#uO'#F}O>{Q#uO'#F|OOQP'#Gc'#GcO5eQ,aO'#GcO@fQXO,5<|OOQ,X-E9e-E9eOOQ,X,5<Q,5<QO@kQXO,5=POOQ,X-E9d-E9dO@sQXO'#GaO@{Q,aO'#GaOOQP,5:{,5:{OASQXO'#EqO3SQ,aO'#EkOOQP'#Ek'#EkOOQP,5<x,5<xOA[Q,aO'#E_OOQ,X1G2c1G2cOApQXO,5:vOAuQ#uO,5:wOOQ,X-E9_-E9_OOQ,X1G0_1G0_OBPQ,iO1G0_OBbQaO1G0_OOQ,V'#Fj'#FjOBjQ,_O'#EyOBxO$ISO'#E{OB}O$ISO'#GgOOQ,X'#Gf'#GfOOQ,X,5;c,5;cOCSQXO,5;cOB]QaO1G0_OC[Q,iO1G0_OCcQ&kO'#DzOOQ,X1G1T1G1TOCnQaO1G1TOCsQaO1G1TOC{QaO1G1TOOQ,X1G1W1G1WODWQaO1G1WOD]QaO1G1WODeQaO1G1WOOOO-E9[-E9[OOQ,X1G/q1G/qOOQP'#Do'#DoODpQXO1G/sO!jQaO1G/yO!jQaO1G/{ODxQaO1G/}OOQ,X1G0S1G0SOOQP1G.m1G.mOFkQ#uO1G.mOFuQ#uO1G.mOHaQ#uO1G.mOHwQ#uO1G.mOJlQ#uO1G.mOKVQ#uO,59tOOOO-E9W-E9WOOQP1G/_1G/_OK^QXO,59zO*cQXO'#FZOKcQXO1G/eOOQP1G/e1G/eOOQP1G/m1G/mOKkQ#uO,59POKuQ#uO,58|POOO-E9T-E9TPOOO1G.d1G.dOOQP,5;s,5;sOOQP-E9V-E9VPMoQXO'#CbPM}QXO'#F{PNYQXO'#F]ONbQ#uO1G0ZO!jQaO1G0ZOOQP'#G_'#G_OOQP1G0g1G0gONiQXO'#G_OOQ,X-E9c-E9cOOQP,5;[,5;[ONnQ,aO,5;XO! rQXO'#EnOOQP-E9f-E9fOOQP,5<},5<}OOQ,X1G2h1G2hO! wQXO,5<{O!!PQ,aO'#FiO!!_QXO,5;]OOQP,5;V,5;VOOQ,X1G0b1G0bOOQ,X1G0c1G0cP!jQaO'#E]OOQ,X7+%y7+%yO!!gQaO7+%yO!!lQ,iO7+%yOOQ,V-E9h-E9hOOOO'#Fk'#FkO!!}O$ISO,5;gOOQ,X,5=R,5=ROOQ,X1G0}1G0}O!#VQaO7+%yO!#_QXO'#GZOOQP'#GZ'#GZO!#dQXO,5:fO!#lQ&kO'#GZOOQ,X7+&o7+&oO!#tQaO7+&oO!#yQaO7+&oOOQ,X7+&r7+&rO!$RQaO7+&rO!$WQaO7+&rO!$`Q!cO'#DrO!$kQXO'#DrO!$pQaO'#DqO!$xQaO7+%_O!$}Q#uO7+%eO!%UQ#uO7+%gOOQ,X7+%i7+%iOOOO1G/`1G/`OOQP1G/f1G/fOOQP,5;u,5;uOOQP-E9X-E9XOOQP7+%P7+%PO!jQaO'#F[O!%]QXO1G.kOOQP1G.k1G.kP!%eQXO,58|O!%sQ#uO7+%uONnQ,aO'#EhOOQP'#Fd'#FdO!%zQXO,5<yO!&SQ,aO1G0sOOQ,X,5;Y,5;YOOQP,5<T,5<TOOQP-E9g-E9gP!&^Q#uO,5:wOOQ,X<<Ie<<IeO!&eQaO<<IeOOOO-E9i-E9iO!&jQ,iO<<IeOOQP,5<u,5<uOCcQ&kO'#F`O!&{QXO1G0QOOQP1G0Q1G0QO!'TQXO,5<uOOQ,X<<JZ<<JZO!'YQaO<<JZOOQ,X<<J^<<J^O!'_QaO<<J^O!'dQaO,5:^O!'iQqO,5:^ODpQXO'#F_O!'qQaO,5:]OOQ,X<<Hy<<HyOOQ,X<<IP<<IPOOQ,X<<IR<<IRO!'yQ#uO,5;vOOQP-E9Y-E9YOOQP7+$V7+$VO!(TQ,aO,5;SOOQP-E9b-E9bOOQ,XAN?PAN?PO!(_QaOAN?POOQP,5;z,5;zOOQP-E9^-E9^OOQP7+%l7+%lOOQP1G2a1G2aOOQ,XAN?uAN?uOOQ,XAN?xAN?xOOQP1G/x1G/xO!(dQ!cO1G/xO!(oQaO1G/xOOQP,5;y,5;yOOQP-E9]-E9]OOQ,XG24kG24kO!(tQaO7+%dO!(yQXO7+%dOOQP<<IO<<IO",
  stateData: "!)X~O$gOS$bQQ$hQQ~OTjO!QcO!^cO!`dO!beO!hfO!jgO!lhO!qiO!tSO!|YO#QVO#hWO#r]O#u^O#w_O$cUO$eTO%S[O~OVpOYoOwmOxmOymOzmO!QwO!WrO!XrO!YrO$tlO~O$bxO$hyO~OV{O$z$nX~OV!QO!v!TO!x!UO$z!RO~P!mO#Q!ZO#V!gO#W!gO#X!gO#Y!gO#f!^O#h![O$cUO$d!aO$eTO%S!YO~P!jO#QVO#hWO$cUO$eTO$z#RX#l#RX~O#Q!kO#hWO#l!nO$cUO$eTO~OY!iO$z!oO~P%[O$z!sO~OV!tO#s!uO~OV!vO#s!wO~OY!iOT#vX!Q#vX!^#vX!`#vX!b#vX!h#vX!j#vX!l#vX!q#vX!t#vX!|#vX#Q#vX#h#vX#r#vX#u#vX#w#vX$a#vX$c#vX$e#vX%S#vX~O${!zO$|!|O~OV!}O~OV#OO~OV#PO~OV#QO~O!r#SO~OV{O~O]#UO^#UO_#UO`#UOb#VOc#VOe#WOf#WOg#WOh#WOi#WOk#XOl#XOm#XOn#XOo#XOp#XOr#YOs#YOu#ZOv#ZO~O$z#bO~P(iO}#cO$u#dO$v#dO$w#fO~OV#gO~OW#jOY#kO]!ZX^!ZX_!ZX`!ZXb!ZXc!ZXe!ZXf!ZXg!ZXh!ZXi!ZXk!ZXl!ZXm!ZXn!ZXo!ZXp!ZXr!ZXs!ZXu!ZXv!ZX![!ZX!]!ZX$z!ZX~O!O!ZX#Z!ZX!T!ZX!U!ZX~P*hO]$qX^$qX_$qX`$qXb$qXc$qXe$qXf$qXg$qXh$qXi$qXk$qXl$qXm$qXn$qXo$qXp$qXr$qXs$qXu$qXv$qX#Z$qX~O![#mO!]#mO$z$qX!O$qX!T$qX!U$qX~P,lOV#oO]$xX^$xX_$xX`$xXb$xXc$xXe$xXf$xXg$xXh$xXi$xXk$xXl$xXm$xXn$xXo$xXp$xXr$xXs$xXu$xXv$xX$z$xX!O$xX#Z$xX!T$xX!U$xX~O$i#rO$j#rO$k#tO~OW#uOYUX!QUX!^UX$zUX~OY#kO!Q$oX!^$oX$z$oX~O!QcO!^cO$z$na~OV{O$z$na~O$z#{O~P(iO!d#|O!y#|O!z#|O~P*hO$z#{O~O$z!uX~P!jOV$OO~O#Z$PO!O%QX~P(iO#V!gO#W!gO#X!gO#Y!gO#Z$RO~OTjOc$TO!QcO!^cO!`dO!beO!hfO!jgO!lhO!qiO!tSO!|YO#QVO#hWO$cUO$eTO%S[O~O#Q!ZO#h![O$cUO$eTO#f#]X!O#]X~O#f$aO~O#Q!ZO#f!^O#h![O$cUO$eTO~O!O%XX~P4tO!O%TP~P4tO#QVO#hWO$cUO$eTO%S$hO~O!O$lO~OV$mO~O$z$pO~P%[O#QVO#n$wO$eTO%[$uO~O#QVO#hWO$cUO$eTO$z$pO~O#l!nO$z$pO~OY$|O#r%OO$z$}O~OV%QO~OY$|O#u%SO$z%RO~OV%UO~O${!zO$|%WO~O!d%XO~OY$|O~O$z%^O~O}#cO$u#dO$v#dO$w%gO~OW%hO!T!SX!U!SX~O!T%iO!U%kO~OV%lO~OW#uOYUX]UX^UX_UX`UXbUXcUXeUXfUXgUXhUXiUXkUXlUXmUXnUXoUXpUXrUXsUXuUXvUX$zUX!OUX#ZUX!TUX!UUX~OY#kO]$oX^$oX_$oX`$oXb$oXc$oXe$oXf$oXg$oXh$oXi$oXk$oXl$oXm$oXn$oXo$oXp$oXr$oXs$oXu$oXv$oX$z$oX!O$oX#Z$oX!T$oX!U$oX~O$i#rO$j#rO$k%pO~OV%qO~OW#uOYUa!QUa!^Ua$zUa~O!QcO!^cO$z$ni~O$z!ua~P(iO!d%wO!y%wO!z%wO~O%S%zO!O%TP~P4tO#c&OO~P!jOc$TO!O#`X~O#Z$PO~P(iO!O%WX~P,lO]$pX^$pX_$pX`$pXb$pXc$pXe$pXf$pXg$pXh$pXi$pXk$pXl$pXm$pXn$pXo$pXp$pXr$pXs$pXu$pXv$pX!O%WX#Z$pX~O!O&RO~O#f$aO!O%Xa~O#f$aO!O%TX~O!O%TX~P4tO#f&TO!O#eX~O#QVO#hWO$cUO$eTO!O#RX#f#RX~O!U&WO~O!O&XO#Z$PO~P(iO#QVO#hWO$cUO$eTO$z&ZO~O#l!nO$z&ZO~O#QVO$eTO#n#mX%[#mX~O%]&_O~O#p&aO~O#n$wO%[$uO~O$z&ZO~P%[OV&eO!o&gO%O&dO~O$z&hO~O#r&iO$z&hO~OY$|O#r&iO$z&hO~O$z&kO~O#u&lO$z&kO~OY$|O#u&lO$z&kO~OV&nOY&oO~O$z&tO~O]#UO^#UO_#UO`#UOeZifZigZihZiiZikZilZimZinZioZipZirZisZiuZivZi$zZi!OZi#ZZi!TZi!UZi~ObZicZi~PD}Ob#VOc#VO~PD}O]#UO^#UO_#UO`#UOb#VOc#VOe#WOf#WOg#WOh#WOi#WOrZisZiuZivZi$zZi!OZi#ZZi!TZi!UZi~OkZilZimZinZioZipZi~PGPOk#XOl#XOm#XOn#XOo#XOp#XO~PGPO]#UO^#UO_#UO`#UOb#VOc#VOe#WOf#WOg#WOh#WOi#WOk#XOl#XOm#XOn#XOo#XOp#XOr#YOs#YO~OuZivZi$zZi!OZi#ZZi!TZi!UZi~PI_O!O&uO~P(iOV&vO~O!T%iO!U&yO~O!T&zO!U&|O~P(iOW#uOYUa]Ua^Ua_Ua`UabUacUaeUafUagUahUaiUakUalUamUanUaoUapUarUasUauUavUa$zUa!OUa#ZUa!TUa!UUa~OW#uOYUX!QUX!^UX~OY#kO!Q$oX!^$oX~O!QcO!^cO~O$z!wi~P(iOc'PO~OTjO!QcO!^cO!`dO!beO!hfO!jgO!lhO!qiO!tSO!|YO#QVO#hWO$cUO$eTO%S[O~O#Z'TO~O#f$aO!O%Ta~O#QVO#hWO$cUO$eTO~O#f&TO!O#ea~O$z'XO~O#QVO#hWO$cUO$eTO$z'XO~O%]&_O#p#oa~O#l!nO$z'XO~OV']O~O!T'^O!U'`O~OV']O%O'aO~O$z'bO~O#r'cO$z'bO~O$z'dO~O#u'eO$z'dO~O!d%XO!T!fX$z!fX~OV'gO~O!T'hO$z!eX~O$z'jO~O$z'kO~P(iO$z'lO~P(iO!T&zO!U'oO~OW#uOYUa!QUa!^Ua~O$z!wq~P(iOc'PO!O%Ra~Oc#ai!O#ai~PNnO!O&XO~P(iO$z'rO~O#QVO#hWO$cUO$eTO$z'rO~O!T'^O!U'vO~OV'wO~O$z'xO~O$z'yO~Ox'zO~O!U'{O!d%XO~O!T'hO$z!ea~O!T$Oa!U$Oa~P(iOc#[a!O#[a~PNnO$z(PO~O!d%XO!T!fi$z!fi~Ox(RO~Ox(SO~O!U(SO~OS#rwx#w#uc!W~",
  goto: ":i%[P%]%]PPP%`PP%hP%q&]PPPP&rPP'WPPPPP'kPPPPPP'}PP(`PPPPPP(p)ZPP)_P)_)xPP)_PPP*OPPP*iP*iP*tP+W+Z*iP*iP*iP+a+dP*iPP*iP+sP+sPPP*iP+v+y,PP,V-P-w.OPPPPP.U.Y.i.s.y/P.pP.y/XP-wP/]0P0UP0eP0hP0lPP0lP0lPP0p0v0|1[1b1h1n1t1z2Q2W2b3O3W3^3m3z4W4_4e4k4qPPPPPPPPPPP4w4{5Y5e5q7R7n)_PPPP8Z8tPPP9UP9[9x9|P:P/u:V-{:Y:_:eRzQU|Rj!OR#pwS#ip!QV#w|#p%tzuPSVv!T!k#[#]#^#_#`#a#c#k#|$T%Z%[%w&Y&zR$[!Zw#[k!P!V#}$Y$n%`%a%b%c%d%e%m%v&r&s'O'W'mu#]k!P!V#}$Y$n%a%b%c%d%e%m%v&r&s'O'W'ms#^k!P!V#}$Y$n%b%c%d%e%m%v&r&s'O'W'mq#_k!P!V#}$Y$n%c%d%e%m%v&r&s'O'W'mo#`k!P!V#}$Y$n%d%e%m%v&r&s'O'W'mm#ak!P!V#}$Y$n%e%m%v&r&s'O'W'm!PmPSVrv!T!Z!k#[#]#^#_#`#a#c#k#|$T%Z%[%w&Y&zT#dl#e!PqPSVrv!T!Z!k#[#]#^#_#`#a#c#k#|$T%Z%[%w&Y&zQ#hoR&w%i!PtPSVrv!T!Z!k#[#]#^#_#`#a#c#k#|$T%Z%[%w&Y&zc[Ob!Y$S$h%}'P'S'pQ%Y!}Q%Z#OQ%[#PQ'f&nQ'|'gR(Q'{R&q%YQ&p%YR'}'hR#RhQ%P!tQ%T!vQ%]#RQ&j%QR&m%UR!SSR!rYQ!jYR!x_X!lY!m!r${bZOb!Y$S$h%}'P'S'pQ!qYS$g!e$^S$r!m!rQ$z!pQ&[$qQ&c${Q'U&TQ'Y&]R's'[|WOXYb!Y!e!m!p!r$S$^$h$k$q${%}&T&]'P'S'['p`![V!Z!]!`!b!k$R$eT$s!n$tS!dV!kR$]!ZX!WV!X!Z!kT'Q%z'RU!_V!Z!kQ$b!`S$d!b$RR&S$eS!eV!kQ$^!ZR%}$TQ$j!eR&Q$^Q$W!YR&V$hU$U!Y$V$hR%|$ST$i!e$^|WOXYb!Y!e!m!p!r$S$^$h$k$q${%}&T&]'P'S'['pa![V!Z!]!`!b!k$R$eV!bV!Z!kQ!pYU$q!m!q!rS&]$r${R'[&cR$y!nT$v!n$yT`ObQ#syR%o#sQbOR!ybQ#v{Q%n#oU%r#v%n&}R&}%sQ#elR%f#eQ%j#hR&x%jQ&{%mR'n&{Q!ORR#z!OQ!{dR%V!{Q'i&pR(O'iQ'_&fR'u'_Q!mYS$o!m${R${!rrXOYb!Y!m!p!r$S$h$q${%}&]'P'S'['pS!hX$kV$k!e$^&TU!XV!Z!kR$Q!XQ'R%zR'q'RS$S!Y$hU%{$S'S'pQ'S%}R'p'PU!`V!Z!kS$c!`$eT$e!b$R^!]V!Z!`!b!k$R$eR$`!]S$V!Y$hR&P$VQ&U$gR'V&UQ$t!nR&^$tQ&`$uR'Z&`QvPR#nvTaObS`Ob_$X!Y$S$h%}'P'S'pcZOb!Y$S$h%}'P'S'pQ}RQ#TjQ#qwR#y!OSkPvQ!PSQ!VVQ#}!TS$Y!Z$TQ$n!kQ%_#[Q%`#]Q%a#^Q%b#_Q%c#`Q%d#aQ%e#cQ%m#kQ%v#|Q&r%ZQ&s%[Q'O%wQ'W&YR'm&z|uPSVv!T!Z!k#[#]#^#_#`#a#c#k#|$T%Z%[%w&Y&zR#lr|sPSVrv!T!k#[#]#^#_#`#a#c#k#|$T%Z%[%w&Y&zR$Z!Z!PnPSVrv!T!Z!k#[#]#^#_#`#a#c#k#|$T%Z%[%w&Y&zbROb!Y$S$h%}'P'S'pV#x}#y%uQ&f$|R't'^|WOXYb!Y!e!m!p!r$S$^$h$k$q${%}&T&]'P'S'['pT$s!n$tT!fV!kR%y$RQ$f!bR%x$RR$_!ZV!cV!Z!kQ$x!nR&b$yT$w!n$y",
  nodeNames: "⚠ LineComment BlockComment Story DivertOperator <- DotSeparatedDivertPathComponents Identifier . ExpressionFunctionCallArguments ( BinaryExpression ArithOp / % * mod ArithOp + - ListOp ? !? ^ has hasnt CompareOp <= < >= > == != LogicOp && and LogicOp || or Float Integer true false String Interpolation { } ExpressionDivertTarget -> ExpressionList ListMember , ) ExpressionFunctionCall - ! not ExpressionVariableName ++ -- ->-> AuthorWarning TODO ListDeclaration LIST DeclarationEqual = ListDefinition ListElementDefinition VariableDeclaration VAR ConstDeclaration CONST ExternalDeclaration EXTERNAL FunctionIdentifier BracketedKnotDeclArguments ref IncludeStatement INCLUDE Included LogicLine ~ ReturnStatement return TempDeclarationOrAssignment temp -= += Choice Bullets ChoiceName BracketedName ChoiceSingleCondition { MixedTextAndLogic ContentText Sequence SequenceTypeWordAnnotation once cycle shuffle stopping : SingleMultilineSequenceElement MixedTextAndLogicInSequence ConditionExpression InnerConditionalContent_InlineAllowed MultilineConditionalBranches SingleMultilineCondition ElseExpression else BlockAndElse InlineConditionalBranches | InnerConditionalContent_InlineDisallowed Glue Tag SequenceOp ChoiceBrackets [ MixedTextAndLogicInChoiceBrackets ] ChoiceTag ] KnotDeclaration KnotTitleEquals function StitchDeclaration StitchTitleEquals Gather GatherDashes Expressions",
  maxTerm: 197,
  context: tracker,
  skippedNodes: [0,1,2,4,133],
  repeatNodeCount: 22,
  tokenData: "-g~RqXY#YYZ#epq#Yqr#lrs$Rst$Wuv$]vw$bxy$myz$rz{$w{|%Z|}&P}!O&U!O!P(f!P!Q(k!Q![(x![!]*b!^!_*g!_!`+P!`!a+m!a!b+z!c!},P!}#O,e#P#Q,j#Q#R,o#R#S)x#T#o,P#o#p,t#p#q,y#q#r-W#r#s-]~~-b~#_Q$g~XY#Ypq#Y+t#lO%S!r$z*Q(n#qQ!X#S!_!`#w!a!b#|&j#|Op&j&j$ROf&j~$WO$t~~$]O%[~~$bO^~~$ePvw$h~$mOr~~$rOY~~$wO!U~&z%OP_&j!|`z{%R`%WP!|`z{%R)p%bQb&j!|`{|%h!_!`%z&z%oP![&j!|`{|%r`%wP!|`{|%r)`&PO!z)`~&UO!T~6z&_U#w`c&z!W#SXY&qpq&q}!O'P!Q!['a!_!`'z!`!a(P`&vR#w`XY&qpq&q}!O&q&z'WR!]&j#w`XY&qpq&q}!O&q#S'fQx#S!O!P'l!Q!['a#S'oP!Q!['r#S'wPw#S!Q!['r)`(PO!y)`.j(WP%O,US#d}!O(Z#d(^P!`!a(a#d(fOS#d~(kOW~~(pP]~z{(s~(xO$h~%x(}Tx#S!O!P)^!Q![(x!c!})x#R#S)x#T#o)x%x)aQ!Q!['r#]#^)g#t)jP#b#c)m#t)pP#_#`)s#t)xO!r#t#t){T!O!P*[!Q![)x!c!})x#R#S)x#T#o)x#t*_P#]#^)g~*gO#Z~~*lRl&j}!O(a!_!`*u!`!a*z~*zOk~#d+PO#h#d+t+WP!d*r#u!Q!_!`+Z'l+bPo&j#r!Q!_!`+e!Q+jP#r!Q!_!`+e~+rPn~!_!`+u~+zOm~~,POe~6z,UTV4U!O!P*[!Q![,P!c!},P#R#S,P#T#o,P~,jO#l~~,oO#n~~,tOg~~,yO#Q~(^-OP#f!r#p#q-R&j-WOu&j~-]O!O~~-bO!t~*Q-gO$z*Q",
  tokenizers: [comments, tags, sequenceSymbols, 4, 5, 6, 7, 8, 9, contentText, new LocalTokenGroup("_~RQYZX~~X~^O$|~~", 14, 181), new LocalTokenGroup("!Q~RRrs[#O#Pa#o#pz~aO$w~~dRO;'Sm;'S;=`r;=`Om~rO$u~~wP$u~;=`<%lm~!PO}~~", 47, 176), new LocalTokenGroup("j~RQYZXz{^~^O$j~~aP!P!Qd~iO$k~~", 25, 163), new LocalTokenGroup("[~RP#P#QU~ZO#p~~", 11, 197)],
  topRules: {"Story":[0,3],"Expressions":[1,132]},
  specialized: [{term: 4, get: (value: keyof typeof spec_DivertOperator) => spec_DivertOperator[value] || -1},{term: 7, get: (value: keyof typeof spec_Identifier) => spec_Identifier[value] || -1}],
  tokenPrec: 2484
})
