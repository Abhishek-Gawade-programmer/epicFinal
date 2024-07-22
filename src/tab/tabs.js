$(document).ready(function () {
	var fire = 0;
	var iee = 0;
	var goo = 0;

	function checkforUndefined(e) {
		if (e != undefined)
			return e
		else
			return ""
	}

	//$( "#content" ).tabs(); 
	$('#loading').show();

	var blocklist_json;
	blocklist_json = [{
		Type: "ad",
		URL: "realmediadigital.com",
		Company: "24/7 Media"
	}, {
		Type: "ad",
		URL: "247realmedia.com",
		Company: "24/7 Media"
	}, {
		Type: "ad",
		URL: "realmedia.com",
		Company: "24/7 Media"
	}, {
		Type: "tracker",
		URL: "2leep.com",
		Company: "2leep"
	}, {
		Type: "ad",
		URL: "33across.com",
		Company: "33Across"
	}, {
		Type: "other",
		URL: "37signals.com",
		Company: "37Signals"
	}, {
		Type: "analytics",
		URL: "3dstats.com",
		Company: "3DStats"
	}, {
		Type: "tracker",
		URL: "4stats.de",
		Company: "4stats"
	}, {
		Type: "ad",
		URL: "4wnet.com",
		Company: "4w Marketplace"
	}, {
		Type: "analytics",
		URL: "51.la",
		Company: "51.La"
	}, {
		Type: "ad",
		URL: "5min.com",
		Company: "5min"
	}, {
		Type: "ad",
		URL: "888media.net",
		Company: "888media"
	}, {
		Type: "ad",
		URL: "a8.net",
		Company: "A8"
	}, {
		Type: "tracker",
		URL: "mediaite.com",
		Company: "Abrams Media"
	}, {
		Type: "ad",
		URL: "accelerator-media.com",
		Company: "Accelerator Media"
	}, {
		Type: "ad",
		URL: "accesstrade.net",
		Company: "AccessTrade"
	}, {
		Type: "tracker",
		URL: "p-td.com",
		Company: "Accuen "
	}, {
		Type: "tracker",
		URL: "act-on.com",
		Company: "Act On"
	}, {
		Type: "ad",
		URL: "adonweb.ru",
		Company: "actionpay"
	}, {
		Type: "ad",
		URL: "actionpay.ru",
		Company: "actionpay"
	}, {
		Type: "other",
		URL: "activeconversion.com",
		Company: "ActiveConversion"
	}, {
		Type: "tracker",
		URL: "activemeter.com",
		Company: "ActiveMeter"
	}, {
		Type: "other",
		URL: "activengage.com",
		Company: "ActivEngage"
	}, {
		Type: "ad",
		URL: "acuityplatform.com",
		Company: "Acuity Ads"
	}, {
		Type: "tracker",
		URL: "mm7.net",
		Company: "Acxiom"
	}, {
		Type: "tracker",
		URL: "acxiom-online.com",
		Company: "Acxiom"
	}, {
		Type: "tracker",
		URL: "acxiom.com",
		Company: "Acxiom"
	}, {
		Type: "ad",
		URL: "adbutler.com",
		Company: "Ad Butler"
	}, {
		Type: "ad",
		URL: "a2dfp.net",
		Company: "Ad Decisive"
	}, {
		Type: "ad",
		URL: "addynamo.net",
		Company: "Ad Dynamo"
	}, {
		Type: "ad",
		URL: "admagnet.net",
		Company: "Ad Magnet"
	}, {
		Type: "ad",
		URL: "amimg.net",
		Company: "Ad Magnet"
	}, {
		Type: "ad",
		URL: "adspirit.de",
		Company: "Ad Spirit"
	}, {
		Type: "ad",
		URL: "adspirit.net",
		Company: "Ad Spirit"
	}, {
		Type: "ad",
		URL: "adagionet.com",
		Company: "Ad.agio"
	}, {
		Type: "tracker",
		URL: "adc-serv.net",
		Company: "ad:C media"
	}, {
		Type: "ad",
		URL: "ad360.vn",
		Company: "Ad360"
	}, {
		Type: "ad",
		URL: "ad4game.com",
		Company: "ad4game"
	}, {
		Type: "ad",
		URL: "ad4mat.tr",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.se",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.ru",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.ro",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.pl",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.no",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.nl",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.net",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.mx",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.it",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.hu",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.gr",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.fr",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.fi",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.es",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.dk",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.de",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.cz",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.co.uk",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.ch",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.br",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.bg",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.be",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.at",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad4mat.ar",
		Company: "ad4mat"
	}, {
		Type: "ad",
		URL: "ad6.fr",
		Company: "ad6media"
	}, {
		Type: "ad",
		URL: "ad6media.com",
		Company: "ad6media"
	}, {
		Type: "ad",
		URL: "ad6media.co.uk",
		Company: "ad6media"
	}, {
		Type: "ad",
		URL: "ad6media.es",
		Company: "ad6media"
	}, {
		Type: "ad",
		URL: "ad6media.fr",
		Company: "ad6media"
	}, {
		Type: "ad",
		URL: "adaction.se",
		Company: "AdAction"
	}, {
		Type: "ad",
		URL: "de17a.com",
		Company: "AdAction"
	}, {
		Type: "ad",
		URL: "adaos-ads.net",
		Company: "ADAOS"
	}, {
		Type: "ad",
		URL: "adap.com",
		Company: "Adap.tv"
	}, {
		Type: "ad",
		URL: "adap.tv",
		Company: "Adap.tv"
	}, {
		Type: "ad",
		URL: "adaptv.tv",
		Company: "Adap.tv"
	}, {
		Type: "ad",
		URL: "adaptv.com",
		Company: "Adap.tv"
	}, {
		Type: "ad",
		URL: "adap.tv",
		Company: "Adap.tv"
	}, {
		Type: "other",
		URL: "smrtlnks.com",
		Company: "AdaptiveBlue"
	}, {
		Type: "analytics",
		URL: "yieldoptimizer.com",
		Company: "Adara Media"
	}, {
		Type: "ad",
		URL: "adblade.com",
		Company: "Adblade"
	}, {
		Type: "ad",
		URL: "adbrite.com",
		Company: "AdBrite"
	}, {
		Type: "tracker",
		URL: "adbull.com",
		Company: "AdBull"
	}, {
		Type: "ad",
		URL: "adbuyer.com",
		Company: "AdBuyer.com"
	}, {
		Type: "ad",
		URL: "adcash.com",
		Company: "Adcash"
	}, {
		Type: "ad",
		URL: "adcentriconline.com",
		Company: "AdCentric"
	}, {
		Type: "tracker",
		URL: "adchemy.com",
		Company: "Adchemy"
	}, {
		Type: "ad",
		URL: "adcito.com",
		Company: "Adcito"
	}, {
		Type: "ad",
		URL: "adclear.net",
		Company: "AdClear"
	}, {
		Type: "ad",
		URL: "adclickmedia.com",
		Company: "AdClickMedia"
	}, {
		Type: "ad",
		URL: "adcloud.net",
		Company: "AdCloud"
	}, {
		Type: "ad",
		URL: "addesktop.com",
		Company: "AdConductor"
	}, {
		Type: "tracker",
		URL: "amgdgt.com",
		Company: "Adconion"
	}, {
		Type: "analytics",
		URL: "addfreestats.com",
		Company: "AddFreeStats"
	}, {
		Type: "tracker",
		URL: "addthis.com",
		Company: "AddThis"
	}, {
		Type: "tracker",
		URL: "addthiscdn.com",
		Company: "AddThis"
	}, {
		Type: "tracker",
		URL: "clearspring.com",
		Company: "AddThis"
	}, {
		Type: "tracker",
		URL: "addtoany.com",
		Company: "AddtoAny"
	}, {
		Type: "ad",
		URL: "addynamics.eu",
		Company: "AdDynamics"
	}, {
		Type: "ad",
		URL: "addyon.com",
		Company: "AddyON"
	}, {
		Type: "ad",
		URL: "adeasy.ru/",
		Company: "AdEasy"
	}, {
		Type: "ad",
		URL: "adengage.com",
		Company: "AdEngage"
	}, {
		Type: "ad",
		URL: "adexcite.com/ads",
		Company: "AdExcite"
	}, {
		Type: "tracker",
		URL: "adextent.com",
		Company: "AdExtent"
	}, {
		Type: "ad",
		URL: "adf.ly/conv",
		Company: "AdF.ly"
	}, {
		Type: "ad",
		URL: "adf.ly",
		Company: "AdF.ly"
	}, {
		Type: "ad",
		URL: "adfalcon.com",
		Company: "AdFalcon"
	}, {
		Type: "tracker",
		URL: "adform.net",
		Company: "AdForm"
	}, {
		Type: "ad",
		URL: "adfox.ru",
		Company: "AdFox"
	}, {
		Type: "ad",
		URL: "adwolf.ru",
		Company: "AdFox"
	}, {
		Type: "ad",
		URL: "adfrontiers.com",
		Company: "AdFrontiers"
	}, {
		Type: "ad",
		URL: "adfunkyserver.com",
		Company: "Adfunky"
	}, {
		Type: "ad",
		URL: "adfunky.com",
		Company: "Adfunky"
	}, {
		Type: "ad",
		URL: "adfusion.com",
		Company: "Adfusion"
	}, {
		Type: "ad",
		URL: "adgear.com",
		Company: "AdGear"
	}, {
		Type: "ad",
		URL: "adgenie.co.uk",
		Company: "adGenie"
	}, {
		Type: "ad",
		URL: "adgent007.com",
		Company: "AdGent Digital"
	}, {
		Type: "ad",
		URL: "shorttail.net",
		Company: "AdGent Digital"
	}, {
		Type: "ad",
		URL: "smartredirect.de",
		Company: "adgoal"
	}, {
		Type: "ad",
		URL: "adgoto.com",
		Company: "ADGoto"
	}, {
		Type: "ad",
		URL: "adedy.com/creatives",
		Company: "ADGoto"
	}, {
		Type: "ad",
		URL: "adhands.ru",
		Company: "AdHands"
	}, {
		Type: "tracker",
		URL: "industrybrains.com",
		Company: "Adhere"
	}, {
		Type: "ad",
		URL: "adhese.be",
		Company: "Adhese"
	}, {
		Type: "ad",
		URL: "adhese.com",
		Company: "Adhese"
	}, {
		Type: "ad",
		URL: "adhese.net",
		Company: "Adhese"
	}, {
		Type: "ad",
		URL: "adhitzads.com",
		Company: "AdHitz"
	}, {
		Type: "ad",
		URL: "adhood.com",
		Company: "adhood"
	}, {
		Type: "analytics",
		URL: "adhood.com",
		Company: "adhood Analytics"
	}, {
		Type: "tracker",
		URL: "afy11.net",
		Company: "Adify"
	}, {
		Type: "ad",
		URL: "adinch.com",
		Company: "Adinch"
	}, {
		Type: "ad",
		URL: "eimg.jp",
		Company: "Adingo"
	}, {
		Type: "ad",
		URL: "adingo.jp",
		Company: "Adingo"
	}, {
		Type: "tracker",
		URL: "adinsight.com",
		Company: "AdInsight"
	}, {
		Type: "tracker",
		URL: "adinsight.eu",
		Company: "AdInsight"
	}, {
		Type: "tracker",
		URL: "adinsight.eu",
		Company: "AdInsight"
	}, {
		Type: "ad",
		URL: "adinterax.com",
		Company: "AdInterax"
	}, {
		Type: "ad",
		URL: "adition.com",
		Company: "Adition"
	}, {
		Type: "tracker",
		URL: "adjug.com",
		Company: "AdJug"
	}, {
		Type: "tracker",
		URL: "adjuggler.com",
		Company: "AdJuggler"
	}, {
		Type: "ad",
		URL: "adk2.com",
		Company: "adk2"
	}, {
		Type: "other",
		URL: "akncdn.com",
		Company: "AdKeeper"
	}, {
		Type: "ad",
		URL: "adklik.com.tr",
		Company: "Adklik"
	}, {
		Type: "tracker",
		URL: "blogads.com",
		Company: "Adknowledge"
	}, {
		Type: "tracker",
		URL: "bidsystem.com",
		Company: "Adknowledge"
	}, {
		Type: "tracker",
		URL: "adkengage.com",
		Company: "Adknowledge"
	}, {
		Type: "tracker",
		URL: "adknowledge.com",
		Company: "Adknowledge"
	}, {
		Type: "ad",
		URL: "adkontekst.pl",
		Company: "Adkontekst"
	}, {
		Type: "ad",
		URL: "luxup.ru",
		Company: "AdLabs"
	}, {
		Type: "ad",
		URL: "adlabs.ru",
		Company: "AdLabs"
	}, {
		Type: "ad",
		URL: "adland.co.il",
		Company: "AdLand"
	}, {
		Type: "ad",
		URL: "adimg.net",
		Company: "AdLantis"
	}, {
		Type: "ad",
		URL: "adlantis.jp",
		Company: "AdLantis"
	}, {
		Type: "tracker",
		URL: "adlooxtracking.com",
		Company: "Adloox"
	}, {
		Type: "ad",
		URL: "adman.gr",
		Company: "Adman"
	}, {
		Type: "ad",
		URL: "adman.in.gr",
		Company: "Adman"
	}, {
		Type: "ad",
		URL: "admarvel.com",
		Company: "AdMarvel"
	}, {
		Type: "ad",
		URL: "admaster.net",
		Company: "AdMaster"
	}, {
		Type: "ad",
		URL: "admaxserver.com",
		Company: "Admax"
	}, {
		Type: "ad",
		URL: "admaya.in",
		Company: "Admaya"
	}, {
		Type: "ad",
		URL: "admedia.com",
		Company: "AdMedia"
	}, {
		Type: "ad",
		URL: "admeld.com",
		Company: "AdMeld (Google)"
	}, {
		Type: "ad",
		URL: "atemda.com",
		Company: "AdMeta"
	}, {
		Type: "ad",
		URL: "admicro.vn",
		Company: "AdMicro"
	}, {
		Type: "ad",
		URL: "vcmedia.vn",
		Company: "AdMicro"
	}, {
		Type: "ad",
		URL: "admitad.com",
		Company: "admitad"
	}, {
		Type: "ad",
		URL: "admob.com",
		Company: "AdMob"
	}, {
		Type: "ad",
		URL: "admost.com",
		Company: "adMOST"
	}, {
		Type: "ad",
		URL: "nspmotion.com",
		Company: "Admotion"
	}, {
		Type: "ad",
		URL: "dmmotion.com",
		Company: "Admotion"
	}, {
		Type: "ad",
		URL: "admulti.com",
		Company: "ADmulti"
	}, {
		Type: "ad",
		URL: "adnet.com.tr",
		Company: "Adnet"
	}, {
		Type: "ad",
		URL: "adnet.de",
		Company: "Adnet"
	}, {
		Type: "ad",
		URL: "adnet.vn",
		Company: "Adnet"
	}, {
		Type: "ad",
		URL: "adnet.lt",
		Company: "Adnet Media"
	}, {
		Type: "ad",
		URL: "adclick.lt",
		Company: "Adnet Media"
	}, {
		Type: "ad",
		URL: "adnetwork.pro",
		Company: "AdNetwork Pro"
	}, {
		Type: "ad",
		URL: "adnetwork.net",
		Company: "AdNetwork.net"
	}, {
		Type: "ad",
		URL: "heias.com",
		Company: "Adnologies"
	}, {
		Type: "tracker",
		URL: "adobetag.com",
		Company: "Adobe"
	}, {
		Type: "tracker",
		URL: "everestjs.net",
		Company: "AdLens (Adobe)"
	}, {
		Type: "tracker",
		URL: "everesttech.net",
		Company: "AdLens (Adobe)"
	}, {
		Type: "tracker",
		URL: "touchclarity.com",
		Company: "Omniture (Adobe)"
	}, {
		Type: "tracker",
		URL: "207.net",
		Company: "Omniture (Adobe)"
	}, {
		Type: "tracker",
		URL: "2o7.net",
		Company: "Omniture (Adobe)"
	}, {
		Type: "tracker",
		URL: "omtrdc.net",
		Company: "Omniture (Adobe)"
	}, {
		Type: "tracker",
		URL: "omniture.com",
		Company: "Omniture (Adobe)"
	}, {
		Type: "tracker",
		URL: "du8783wkf05yr.cloudfront.net",
		Company: "Omniture (Adobe)"
	}, {
		Type: "tracker",
		URL: "reedbusiness.net",
		Company: "Omniture (Adobe)"
	}, {
		Type: "tracker",
		URL: "hitbox.com",
		Company: "Omniture (Adobe)"
	}, {
		Type: "tracker",
		URL: "adocean.pl",
		Company: "AdOcean"
	}, {
		Type: "analytics",
		URL: "dmtry.com",
		Company: "Adometry"
	}, {
		Type: "ad",
		URL: "adcde.com",
		Company: "AdOn"
	}, {
		Type: "ad",
		URL: "addlvr.com",
		Company: "AdOn"
	}, {
		Type: "ad",
		URL: "urtbk.com",
		Company: "AdOn"
	}, {
		Type: "ad",
		URL: "sdfje.com",
		Company: "AdOn"
	}, {
		Type: "ad",
		URL: "popcde.com",
		Company: "AdOn"
	}, {
		Type: "ad",
		URL: "mygeek.com",
		Company: "AdOn"
	}, {
		Type: "ad",
		URL: "cpvtgt.com",
		Company: "AdOn"
	}, {
		Type: "ad",
		URL: "cpvfeed.com",
		Company: "AdOn"
	}, {
		Type: "ad",
		URL: "cptgt.com",
		Company: "AdOn"
	}, {
		Type: "ad",
		URL: "adtrgt.com",
		Company: "AdOn"
	}, {
		Type: "ad",
		URL: "bannertgt.com",
		Company: "AdOn"
	}, {
		Type: "ad",
		URL: "adonion.com",
		Company: "AdOnion"
	}, {
		Type: "ad",
		URL: "adoperator.com",
		Company: "Adoperator"
	}, {
		Type: "ad",
		URL: "adorika.com",
		Company: "Adorika"
	}, {
		Type: "ad",
		URL: "adorika.net",
		Company: "Adorika"
	}, {
		Type: "ad",
		URL: "clickotmedia.com",
		Company: "Adorika"
	}, {
		Type: "ad",
		URL: "adotube.com",
		Company: "AdoTube"
	}, {
		Type: "ad",
		URL: "adperium.com",
		Company: "AdPerium"
	}, {
		Type: "ad",
		URL: "adperium.comabd.php",
		Company: "AdPerium"
	}, {
		Type: "ad",
		URL: "adperium.comjsadframe.js",
		Company: "AdPerium"
	}, {
		Type: "ad",
		URL: "adlily.adperium.com",
		Company: "AdPerium"
	}, {
		Type: "ad",
		URL: "adpersia.com",
		Company: "Adpersia"
	}, {
		Type: "analytics",
		URL: "adplan.ne.jp",
		Company: "AdPlan"
	}, {
		Type: "analytics",
		URL: "adplan-ds.com",
		Company: "AdPlan"
	}, {
		Type: "analytics",
		URL: "advg.jp",
		Company: "AdPlan"
	}, {
		Type: "analytics",
		URL: "p-advg.com",
		Company: "AdPlan"
	}, {
		Type: "ad",
		URL: "adplus.co.id",
		Company: "AdPlus"
	}, {
		Type: "tracker",
		URL: "adpredictive.com",
		Company: "AdPredictive"
	}, {
		Type: "ad",
		URL: "adpv.com",
		Company: "Adpv"
	}, {
		Type: "ad",
		URL: "adreactor.com",
		Company: "AdReactor"
	}, {
		Type: "ad",
		URL: "adready.com",
		Company: "AdReady"
	}, {
		Type: "ad",
		URL: "adreadytractions.com",
		Company: "AdReady"
	}, {
		Type: "ad",
		URL: "adrecord.com",
		Company: "Adrecord"
	}, {
		Type: "ad",
		URL: "adriver.ru",
		Company: "AdRiver"
	}, {
		Type: "ad",
		URL: "imiclk.com",
		Company: "Adroit "
	}, {
		Type: "ad",
		URL: "abmr.net",
		Company: "Adroit "
	}, {
		Type: "ad",
		URL: "designbloxlive.com",
		Company: "Adroit Digital Solutions"
	}, {
		Type: "tracker",
		URL: "adrolays.de",
		Company: "Adrolays"
	}, {
		Type: "ad",
		URL: "adroll.com",
		Company: "AdRoll"
	}, {
		Type: "ad",
		URL: "adru.net",
		Company: "adru.net"
	}, {
		Type: "analytics",
		URL: "adsafeprotected.com",
		Company: "AdSafe"
	}, {
		Type: "analytics",
		URL: "adsafeprotected.com",
		Company: "AdSafe"
	}, {
		Type: "ad",
		URL: "adsame.com",
		Company: "Adsame"
	}, {
		Type: "tracker",
		URL: "adscale.de",
		Company: "AdScale"
	}, {
		Type: "ad",
		URL: "adsensecamp.com",
		Company: "AdsenseCamp"
	}, {
		Type: "ad",
		URL: "adserverpub.com",
		Company: "AdServerPub"
	}, {
		Type: "ad",
		URL: "adservicemedia.dk",
		Company: "Adservice Media"
	}, {
		Type: "ad",
		URL: "adshuffle.com",
		Company: "AdShuffle"
	}, {
		Type: "ad",
		URL: "doclix.com",
		Company: "AdSide"
	}, {
		Type: "ad",
		URL: "ltassrv.com",
		Company: "AdSolution"
	}, {
		Type: "tracker",
		URL: "adspeed.com",
		Company: "AdSpeed"
	}, {
		Type: "tracker",
		URL: "adspeed.net",
		Company: "AdSpeed"
	}, {
		Type: "ad",
		URL: "adsrvr.org",
		Company: "Adsrvr"
	}, {
		Type: "ad",
		URL: "adstars.co.id",
		Company: "Adstars"
	}, {
		Type: "ad",
		URL: "4dsply.com",
		Company: "AdSupply"
	}, {
		Type: "ad",
		URL: "adswizz.com",
		Company: "Adswizz"
	}, {
		Type: "ad",
		URL: "adtaily.com",
		Company: "AdTaily"
	}, {
		Type: "ad",
		URL: "adtaily.pl",
		Company: "AdTaily"
	}, {
		Type: "ad",
		URL: "adtechus.com",
		Company: "AdTech"
	}, {
		Type: "tracker",
		URL: "adtech.de",
		Company: "AdTech"
	}, {
		Type: "ad",
		URL: "adtegrity.net",
		Company: "Adtegrity"
	}, {
		Type: "ad",
		URL: "adtiger.de/",
		Company: "AdTiger"
	}, {
		Type: "ad",
		URL: "adtoma.com",
		Company: "Adtoma"
	}, {
		Type: "ad",
		URL: "adtotal.pl",
		Company: "AdTotal"
	}, {
		Type: "tracker",
		URL: "adtraction.com",
		Company: "Adtraction"
	}, {
		Type: "ad",
		URL: "adtraxx.de",
		Company: "AdTraxx"
	}, {
		Type: "ad",
		URL: "livejasmin.com",
		Company: "Adult Network"
	}, {
		Type: "ad",
		URL: "awempire.com",
		Company: "Adult Network"
	}, {
		Type: "ad",
		URL: "adultadworld.com",
		Company: "AdultAdWorld"
	}, {
		Type: "tracker",
		URL: "masslive.com",
		Company: "Advance Digital"
	}, {
		Type: "ad",
		URL: "advansenow.com",
		Company: "Advanse"
	}, {
		Type: "ad",
		URL: "advantagemedia.dk",
		Company: "Advantage Media"
	}, {
		Type: "ad",
		URL: "adnext.fr",
		Company: "Adverline"
	}, {
		Type: "ad",
		URL: "adversalservers.com",
		Company: "Adversal"
	}, {
		Type: "ad",
		URL: "advertstream.com",
		Company: "Advert Stream"
	}, {
		Type: "ad",
		URL: "adverteerdirect.nl",
		Company: "Adverteerdirect"
	}, {
		Type: "ad",
		URL: "adverticum.net",
		Company: "Adverticum"
	}, {
		Type: "ad",
		URL: "hu/g3.js",
		Company: "Adverticum"
	}, {
		Type: "ad",
		URL: "advertise.com",
		Company: "Advertise.com"
	}, {
		Type: "ad",
		URL: "advertisespace.com",
		Company: "AdvertiseSpace"
	}, {
		Type: "ad",
		URL: "advertisespace.com",
		Company: "AdvertiseSpace"
	}, {
		Type: "ad",
		URL: "advertising.com",
		Company: "Advertising.com (AOL)"
	}, {
		Type: "ad",
		URL: "atwola.com",
		Company: "Advertising.com (AOL)"
	}, {
		Type: "ad",
		URL: "aol.com",
		Company: "Advertising.com (AOL)"
	}, {
		Type: "ad",
		URL: "aolcdn.com",
		Company: "Advertising.com (AOL)"
	}, {
		Type: "ad",
		URL: "advertlets.com",
		Company: "Advertlets"
	}, {
		Type: "ad",
		URL: "advertserve.com",
		Company: "AdvertServe"
	}, {
		Type: "ad",
		URL: "am10.ru",
		Company: "advmaker.ru"
	}, {
		Type: "ad",
		URL: "adwitserver.com",
		Company: "Adwit"
	}, {
		Type: "ad",
		URL: "adxion.com",
		Company: "adXion"
	}, {
		Type: "ad",
		URL: "adxpansion.com",
		Company: "AdXpansion"
	}, {
		Type: "tracker",
		URL: "adxpose.com",
		Company: "AdXpose (ComScore)"
	}, {
		Type: "ad",
		URL: "adyard.de",
		Company: "adyard"
	}, {
		Type: "tracker",
		URL: "adzerk.net",
		Company: "Adzerk"
	}, {
		Type: "ad",
		URL: "adzly.com",
		Company: "adzly"
	}, {
		Type: "ad",
		URL: "affec.tv",
		Company: "Affectv"
	}, {
		Type: "ad",
		URL: "banner-rotation.com",
		Company: "Affili.net"
	}, {
		Type: "ad",
		URL: "successfultogether.co.uk",
		Company: "Affili.net"
	}, {
		Type: "ad",
		URL: "webmasterplan.com",
		Company: "Affili.net"
	}, {
		Type: "ad",
		URL: "awin1.com",
		Company: "Affiliate Window"
	}, {
		Type: "ad",
		URL: "affiliate4you.nl",
		Company: "Affiliate4You"
	}, {
		Type: "ad",
		URL: "affbuzzcom",
		Company: "AffiliateBuzz"
	}, {
		Type: "ad",
		URL: "affiliatefuture.com",
		Company: "AffiliateFuture"
	}, {
		Type: "ad",
		URL: "affiliatelounge.com",
		Company: "AffiliateLounge"
	}, {
		Type: "ad",
		URL: "affiliator.com",
		Company: "Affiliator"
	}, {
		Type: "tracker",
		URL: "affimax.de",
		Company: "AffiMax"
	}, {
		Type: "tracker",
		URL: "affinity.com",
		Company: "Affinity"
	}, {
		Type: "ad",
		URL: "afdads.com",
		Company: "AfterDownload"
	}, {
		Type: "ad",
		URL: "addelive.com",
		Company: "AfterDownload"
	}, {
		Type: "tracker",
		URL: "aggregateknowledge.com",
		Company: "Aggregate Knowledge"
	}, {
		Type: "tracker",
		URL: "agkn.com",
		Company: "Aggregate Knowledge"
	}, {
		Type: "other",
		URL: "abmr.net",
		Company: "Akamai"
	}, {
		Type: "ad",
		URL: "akavita.com",
		Company: "Akavita"
	}, {
		Type: "ad",
		URL: "albawaba.com",
		Company: "Al Bawaba Advertising"
	}, {
		Type: "ad",
		URL: "alenty.com",
		Company: "Alenty"
	}, {
		Type: "analytics",
		URL: "alexa.com",
		Company: "Alexa"
	}, {
		Type: "analytics",
		URL: "alexametrics.com",
		Company: "Alexa Metrics"
	}, {
		Type: "analytics",
		URL: "d31qbv1cthcecs.cloudfront.net",
		Company: "Alexa Metrics"
	}, {
		Type: "analytics",
		URL: "alexa.com",
		Company: "Alexa Widget"
	}, {
		Type: "tracker",
		URL: "websitealive.com",
		Company: "AliveChat"
	}, {
		Type: "tracker",
		URL: "websitealive.com",
		Company: "AliveChat"
	}, {
		Type: "tracker",
		URL: "websitealive0.com",
		Company: "AliveChat"
	}, {
		Type: "tracker",
		URL: "websitealive1.com",
		Company: "AliveChat"
	}, {
		Type: "tracker",
		URL: "websitealive2.com",
		Company: "AliveChat"
	}, {
		Type: "tracker",
		URL: "websitealive3.com",
		Company: "AliveChat"
	}, {
		Type: "tracker",
		URL: "websitealive4.com",
		Company: "AliveChat"
	}, {
		Type: "tracker",
		URL: "websitealive5.com",
		Company: "AliveChat"
	}, {
		Type: "tracker",
		URL: "websitealive6.com",
		Company: "AliveChat"
	}, {
		Type: "tracker",
		URL: "websitealive7.com",
		Company: "AliveChat"
	}, {
		Type: "tracker",
		URL: "websitealive8.com",
		Company: "AliveChat"
	}, {
		Type: "tracker",
		URL: "websitealive9.com",
		Company: "AliveChat"
	}, {
		Type: "ad",
		URL: "alluremedia.comau",
		Company: "Allure Media"
	}, {
		Type: "tracker",
		URL: "allyes.com",
		Company: "Allyes"
	}, {
		Type: "ad",
		URL: "pro-market.net",
		Company: "AlmondNet"
	}, {
		Type: "ad",
		URL: "alphabirdnetwork.com",
		Company: "Alphabird"
	}, {
		Type: "ad",
		URL: "alphabird.com",
		Company: "Alphabird"
	}, {
		Type: "tracker",
		URL: "amadesa.com",
		Company: "Amadesa"
	}, {
		Type: "tracker",
		URL: "heavyhearted.com",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "amazon-adsystem.com",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "assoc-amazon.com",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "assoc-amazon.ca",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "assoc-amazon.co.uk",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "assoc-amazon.de",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "assoc-amazon.fr",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "assoc-amazon.jp",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "assoc-amazon.com",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "assoc-amazon.ca",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "assoc-amazon.co.uk",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "assoc-amazon.de",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "assoc-amazon.fr",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "assoc-amazon.jp",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "amazon.com",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "amazon.ca",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "amazon.de",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "amazon.es",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "amazon.fr",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "amazon.it",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "amazon.co.jp",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "amazon.co.uk",
		Company: "Amazon"
	}, {
		Type: "tracker",
		URL: "assoc-amazon.com",
		Company: "Amazon"
	}, {
		Type: "ad",
		URL: "adnetwork.vn",
		Company: "Ambient Digital"
	}, {
		Type: "ad",
		URL: "adnetwork.net.vn",
		Company: "Ambient Digital"
	}, {
		Type: "ad",
		URL: "ambientplatform.vn",
		Company: "Ambient Digital"
	}, {
		Type: "ad",
		URL: "collective-media.net",
		Company: "AMP Platform"
	}, {
		Type: "analytics",
		URL: "anametrix.net",
		Company: "Anametrix"
	}, {
		Type: "analytics",
		URL: "anormal-tracker.de",
		Company: "Anormal Tracker"
	}, {
		Type: "analytics",
		URL: "anormal-tracker.de",
		Company: "Anormal Tracker"
	}, {
		Type: "ad",
		URL: "streampad.com",
		Company: "AOL"
	}, {
		Type: "tracker",
		URL: "appmetrx.com",
		Company: "AppMetrx"
	}, {
		Type: "tracker",
		URL: "adnxs.com",
		Company: "AppNexus"
	}, {
		Type: "tracker",
		URL: "appnexus.com",
		Company: "AppNexus"
	}, {
		Type: "other",
		URL: "apptap.com",
		Company: "apptap"
	}, {
		Type: "other",
		URL: "apture.com",
		Company: "Apture"
	}, {
		Type: "tracker",
		URL: "apxlv.com",
		Company: "Apxlv"
	}, {
		Type: "ad",
		URL: "arubamediamarketing.it",
		Company: "Aruba Media Marketing"
	}, {
		Type: "other",
		URL: "asterpix.com",
		Company: "Asterpix SearchLight"
	}, {
		Type: "analytics",
		URL: "xiti.com",
		Company: "AT Internet"
	}, {
		Type: "analytics",
		URL: "atinternet.com",
		Company: "AT Internet"
	}, {
		Type: "analytics",
		URL: "atinternet.com",
		Company: "AT Internet"
	}, {
		Type: "tracker",
		URL: "atgsvcs.com",
		Company: "Oracle"
	}, {
		Type: "ad",
		URL: "roiservice.com",
		Company: "Atlas ProfitBuilder"
	}, {
		Type: "tracker",
		URL: "atomex.net",
		Company: "Atomex"
	}, {
		Type: "other",
		URL: "attracta.com",
		Company: "Attracta"
	}, {
		Type: "ad",
		URL: "qwobl.net",
		Company: "Audience Ad Network"
	}, {
		Type: "tracker",
		URL: "demdex.net",
		Company: "Audience Manager (Adobe)"
	}, {
		Type: "tracker",
		URL: "revsci.net",
		Company: "Audience Science"
	}, {
		Type: "tracker",
		URL: "targetingmarketplace.com",
		Company: "Audience Science"
	}, {
		Type: "tracker",
		URL: "revsci.net",
		Company: "Audience Science"
	}, {
		Type: "tracker",
		URL: "wunderloop.net",
		Company: "Audience Science"
	}, {
		Type: "ad",
		URL: "audience2media.com",
		Company: "Audience2Media"
	}, {
		Type: "tracker",
		URL: "audiencefuel.com",
		Company: "AudienceFUEL"
	}, {
		Type: "tracker",
		URL: "12mlbe.com",
		Company: "AudienceRate"
	}, {
		Type: "ad",
		URL: "auditude.com",
		Company: "Auditude"
	}, {
		Type: "other",
		URL: "avalanchers.com",
		Company: "Avalanchers"
	}, {
		Type: "ad",
		URL: "avantlink.com",
		Company: "AvantLink"
	}, {
		Type: "ad",
		URL: "avazu.net",
		Company: "Avazu Network"
	}, {
		Type: "tracker",
		URL: "aweber.com",
		Company: "AWeber"
	}, {
		Type: "ad",
		URL: "globe7.com",
		Company: "Axill"
	}, {
		Type: "ad",
		URL: "aztecash.com",
		Company: "Aztecash"
	}, {
		Type: "ad",
		URL: "b2bcontext.ru",
		Company: "B2BContext"
	}, {
		Type: "ad",
		URL: "b2bvideo.ru",
		Company: "B2Bvideo"
	}, {
		Type: "ad",
		URL: "backbeatmedia.com",
		Company: "Back Beat Media"
	}, {
		Type: "analytics",
		URL: "backtype.com",
		Company: "BackType"
	}, {
		Type: "ad",
		URL: "bannerconnect.net",
		Company: "Banner Connect"
	}, {
		Type: "ad",
		URL: "banzaiadv.it",
		Company: "Banzai Advertising"
	}, {
		Type: "tracker",
		URL: "dn3y71tq7jf07.cloudfront.net",
		Company: "Barilliance"
	}, {
		Type: "tracker",
		URL: "barilliance.com",
		Company: "Barilliance"
	}, {
		Type: "ad",
		URL: "batanga.com",
		Company: "Batanga Network"
	}, {
		Type: "tracker",
		URL: "fmpub.net",
		Company: "Battelle Media"
	}, {
		Type: "tracker",
		URL: "baynote.net",
		Company: "Baynote Observer"
	}, {
		Type: "other",
		URL: "bazaarvoice.com",
		Company: "Bazaarvoice"
	}, {
		Type: "ad",
		URL: "mediainter.net",
		Company: "BBelements"
	}, {
		Type: "ad",
		URL: "bbmedia.cz",
		Company: "BBelements"
	}, {
		Type: "ad",
		URL: "bbelements.com",
		Company: "BBelements"
	}, {
		Type: "ad",
		URL: "beaconads.com",
		Company: "Beacon Ads"
	}, {
		Type: "analytics",
		URL: "beencounter.com",
		Company: "Beencounter"
	}, {
		Type: "ad",
		URL: "begun.ru",
		Company: "Begun"
	}, {
		Type: "analytics",
		URL: "belstat.com",
		Company: "BelStat"
	}, {
		Type: "analytics",
		URL: "belstat.be",
		Company: "BelStat"
	}, {
		Type: "analytics",
		URL: "belstat.de",
		Company: "BelStat"
	}, {
		Type: "analytics",
		URL: "belstat.fr",
		Company: "BelStat"
	}, {
		Type: "analytics",
		URL: "belstat.nl",
		Company: "BelStat"
	}, {
		Type: "ad",
		URL: "betweendigital.com",
		Company: "Between Digital"
	}, {
		Type: "ad",
		URL: "bidvertiser.com",
		Company: "BidVertiser"
	}, {
		Type: "ad",
		URL: "bigmobileads.com",
		Company: "Big Mobile"
	}, {
		Type: "other",
		URL: "bigdoor.com",
		Company: "BigDoor"
	}, {
		Type: "tracker",
		URL: "bigmir.net",
		Company: "bigmir"
	}, {
		Type: "ad",
		URL: "binlayer.com",
		Company: "BinLayer"
	}, {
		Type: "other",
		URL: "bitcoinplus.com",
		Company: "Bitcoin Miner"
	}, {
		Type: "ad",
		URL: "bittads.com",
		Company: "BittAds"
	}, {
		Type: "tracker",
		URL: "bizographics.com",
		Company: "Bizo"
	}, {
		Type: "tracker",
		URL: "bizo.com",
		Company: "Bizo"
	}, {
		Type: "tracker",
		URL: "bnmla.com",
		Company: "Blink New Media"
	}, {
		Type: "tracker",
		URL: "susnet.nu",
		Company: "Blog Rating"
	}, {
		Type: "tracker",
		URL: "susnet.se",
		Company: "Blog Rating"
	}, {
		Type: "tracker",
		URL: "bloggurat.net",
		Company: "Blog Ratings"
	}, {
		Type: "tracker",
		URL: "blogglisten.no",
		Company: "Blog Ratings"
	}, {
		Type: "tracker",
		URL: "chart.dk",
		Company: "Blog Ratings"
	}, {
		Type: "tracker",
		URL: "nope.dk",
		Company: "Blog Ratings"
	}, {
		Type: "tracker",
		URL: "statcount.com",
		Company: "Blog Ratings"
	}, {
		Type: "tracker",
		URL: "stealth.nl",
		Company: "Blog Ratings"
	}, {
		Type: "tracker",
		URL: "bobum.nl",
		Company: "Blog Ratings"
	}, {
		Type: "tracker",
		URL: "bobum.nl",
		Company: "Blog Ratings"
	}, {
		Type: "tracker",
		URL: "tyxo.bg",
		Company: "Blog Ratings"
	}, {
		Type: "ad",
		URL: "blogads.com",
		Company: "Blogads"
	}, {
		Type: "ad",
		URL: "blogbang.com",
		Company: "BlogBang"
	}, {
		Type: "other",
		URL: "blogcatalog.com",
		Company: "BlogCatalog"
	}, {
		Type: "other",
		URL: "blogcounter.de",
		Company: "BlogCounter"
	}, {
		Type: "tracker",
		URL: "theblogfrog.com",
		Company: "BlogFrog"
	}, {
		Type: "ad",
		URL: "bloggerads.net",
		Company: "BloggerAds"
	}, {
		Type: "ad",
		URL: "bloghercom",
		Company: "BlogHer"
	}, {
		Type: "tracker",
		URL: "brsrvr.com",
		Company: "BloomReach"
	}, {
		Type: "tracker",
		URL: "brcdn.com",
		Company: "BloomReach"
	}, {
		Type: "tracker",
		URL: "brtstats.com",
		Company: "BloomReach"
	}, {
		Type: "tracker",
		URL: "d3hrg5kicb4pq5.cloudfront.net",
		Company: "BloomReach"
	}, {
		Type: "ad",
		URL: "adrevolver.com",
		Company: "Blue Lithium"
	}, {
		Type: "ad",
		URL: "bluelithium.com",
		Company: "Blue Lithium"
	}, {
		Type: "analytics",
		URL: "bmmetrix.com",
		Company: "Blue Metrix"
	}, {
		Type: "analytics",
		URL: "japanmetrix.jp",
		Company: "Blue Metrix"
	}, {
		Type: "tracker",
		URL: "bluecava.com",
		Company: "BlueCava"
	}, {
		Type: "tracker",
		URL: "bluekai.com",
		Company: "BlueKai"
	}, {
		Type: "tracker",
		URL: "bkrtx.com",
		Company: "BlueKai"
	}, {
		Type: "ad",
		URL: "bluestreak.com",
		Company: "BlueStreak"
	}, {
		Type: "analytics",
		URL: "blvdstatus.com",
		Company: "BLVD Status"
	}, {
		Type: "ad",
		URL: "bol.com",
		Company: "BOL"
	}, {
		Type: "ad",
		URL: "boo-box.com",
		Company: "boo-box"
	}, {
		Type: "tracker",
		URL: "bounceexchange.com",
		Company: "Bounce Exchange"
	}, {
		Type: "ad",
		URL: "brainient.com",
		Company: "Brainient"
	}, {
		Type: "ad",
		URL: "brandaffinity.net",
		Company: "Brand Affinity"
	}, {
		Type: "tracker",
		URL: "brand.net",
		Company: "Valassis Communications"
	}, {
		Type: "ad",
		URL: "brandreachsys.com",
		Company: "BrandReach"
	}, {
		Type: "ad",
		URL: "rtbidder.net",
		Company: "Brandscreen"
	}, {
		Type: "analytics",
		URL: "branica.com",
		Company: "Branica"
	}, {
		Type: "ad",
		URL: "apex-ad.com",
		Company: "Break Media"
	}, {
		Type: "other",
		URL: "brightcove.com",
		Company: "Brightcove"
	}, {
		Type: "analytics",
		URL: "brightedge.com",
		Company: "BrightEdge"
	}, {
		Type: "ad",
		URL: "btrll.com",
		Company: "BrightRoll"
	}, {
		Type: "tracker",
		URL: "btstatic.com",
		Company: "BrightTag"
	}, {
		Type: "tracker",
		URL: "thebrighttag.com",
		Company: "BrightTag"
	}, {
		Type: "ad",
		URL: "brilig.com",
		Company: "Merkle"
	}, {
		Type: "tracker",
		URL: "vindicosuite.com",
		Company: "Broadband Enterprises"
	}, {
		Type: "other",
		URL: "browser-update.org",
		Company: "browser-update"
	}, {
		Type: "tracker",
		URL: "btbuckets.com",
		Company: "BTBuckets"
	}, {
		Type: "analytics",
		URL: "bubblestat.com",
		Company: "Bubblestat"
	}, {
		Type: "ad",
		URL: "brighteroption.com",
		Company: "Buddy Media"
	}, {
		Type: "ad",
		URL: "buddymedia.com",
		Company: "Buddy Media"
	}, {
		Type: "other",
		URL: "bufferapp.com",
		Company: "Buffer Button"
	}, {
		Type: "other",
		URL: "bugherd.com",
		Company: "BugHerd"
	}, {
		Type: "ad",
		URL: "burstbeacon.com",
		Company: "Burst Media"
	}, {
		Type: "ad",
		URL: "burstnet.com",
		Company: "Burst Media"
	}, {
		Type: "tracker",
		URL: "richmetrics.com",
		Company: "Burt AB"
	}, {
		Type: "analytics",
		URL: "businessol.com",
		Company: "BusinessOnLine"
	}, {
		Type: "tracker",
		URL: "buyservices.com",
		Company: "Buy.com"
	}, {
		Type: "ad",
		URL: "buysellads.com",
		Company: "BuySellAds"
	}, {
		Type: "ad",
		URL: "fusionads.net",
		Company: "BuySellAds"
	}, {
		Type: "ad",
		URL: "pulsemgr.com",
		Company: "Buysight"
	}, {
		Type: "ad",
		URL: "buzzbytes.net",
		Company: "Buzz Media"
	}, {
		Type: "ad",
		URL: "buzzador.com",
		Company: "Buzzador"
	}, {
		Type: "tracker",
		URL: "buzzdeck.com",
		Company: "Buzzdeck"
	}, {
		Type: "other",
		URL: "buzzfeed.com",
		Company: "BuzzFeed"
	}, {
		Type: "other",
		URL: "buzzfed.com",
		Company: "BuzzFeed"
	}, {
		Type: "ad",
		URL: "buzzparadise.com",
		Company: "BuzzParadise"
	}, {
		Type: "analytics",
		URL: "buzzster.com",
		Company: "Buzzster"
	}, {
		Type: "ad",
		URL: "networldmedia.net",
		Company: "BV! Media"
	}, {
		Type: "ad",
		URL: "c-on-text.com",
		Company: "C|ON|TEXT"
	}, {
		Type: "analytics",
		URL: "c3metrics.com",
		Company: "C3 Metrics"
	}, {
		Type: "analytics",
		URL: "c3tag.com",
		Company: "C3 Metrics"
	}, {
		Type: "ad",
		URL: "c8.net.ua",
		Company: "C8 Network"
	}, {
		Type: "ad",
		URL: "cadreon.com",
		Company: "Cadreon"
	}, {
		Type: "ad",
		URL: "d1qpxk1wfeh8v1.cloudfront.net",
		Company: "Cadreon"
	}, {
		Type: "ad",
		URL: "carbonads.com",
		Company: "Carbon Ads"
	}, {
		Type: "ad",
		URL: "casalemedia.com",
		Company: "Casale Media"
	}, {
		Type: "ad",
		URL: "castleridgemedia.com",
		Company: "Castle Ridge Media"
	}, {
		Type: "other",
		URL: "cbox.ws",
		Company: "Cbox"
	}, {
		Type: "ad",
		URL: "com.com",
		Company: "CBS Interactive"
	}, {
		Type: "analytics",
		URL: "cedexis.com",
		Company: "Cedexis Radar"
	}, {
		Type: "analytics",
		URL: "cedexis.net",
		Company: "Cedexis Radar"
	}, {
		Type: "ad",
		URL: "centralnervous.net",
		Company: "Central Nervous"
	}, {
		Type: "ad",
		URL: "centraltag.com",
		Company: "CentralTag"
	}, {
		Type: "ad",
		URL: "brand-server.com",
		Company: "Centro"
	}, {
		Type: "tracker",
		URL: "callmeasurement.com",
		Company: "Century Interactive"
	}, {
		Type: "tracker",
		URL: "speed-trap.nl",
		Company: "Cerberus Speed-Trap"
	}, {
		Type: "analytics",
		URL: "certifica.com",
		Company: "Certifica Metric"
	}, {
		Type: "tracker",
		URL: "res-x.com",
		Company: "Certona"
	}, {
		Type: "tracker",
		URL: "chango.ca",
		Company: "Chango"
	}, {
		Type: "tracker",
		URL: "chango.com",
		Company: "Chango"
	}, {
		Type: "tracker",
		URL: "channelintelligence.com",
		Company: "Channel Intelligence"
	}, {
		Type: "analytics",
		URL: "searchmarketing.com",
		Company: "ChannelAdvisor"
	}, {
		Type: "other",
		URL: "channelfinder.net",
		Company: "ChannelFinder"
	}, {
		Type: "other",
		URL: "chaordicsystems.com",
		Company: "Chaordic"
	}, {
		Type: "analytics",
		URL: "chartbeat.com",
		Company: "ChartBeat"
	}, {
		Type: "other",
		URL: "chatwing.com",
		Company: "ChatWing"
	}, {
		Type: "tracker",
		URL: "checkm8.com",
		Company: "Checkm8"
	}, {
		Type: "ad",
		URL: "checkmystats.com.au",
		Company: "CheckMyStats"
	}, {
		Type: "ad",
		URL: "chinesean.com",
		Company: "ChineseAN"
	}, {
		Type: "ad",
		URL: "chitika.net",
		Company: "Chitika"
	}, {
		Type: "tracker",
		URL: "choicestream.com",
		Company: "ChoiceStream"
	}, {
		Type: "ad",
		URL: "gameleads.ru",
		Company: "CityAds"
	}, {
		Type: "ad",
		URL: "cityads.ru",
		Company: "CityAds"
	}, {
		Type: "tracker",
		URL: "civicscience.com",
		Company: "CivicScience"
	}, {
		Type: "tracker",
		URL: "clarityray.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "djers.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "dutrus.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "eurts.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "fanefo.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "hfunt.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "hfutz.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "hinsm.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "japum.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "jhame.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "jyaby.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "jyawd.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "kwobj.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "kyarm.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "lbein.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "ocyss.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "orpae.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "owpas.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "psyng.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "pturt.com",
		Company: "ClarityRay"
	}, {
		Type: "tracker",
		URL: "wredint.com",
		Company: "ClarityRay"
	}, {
		Type: "analytics",
		URL: "csdata1.com",
		Company: "ClearSaleing"
	}, {
		Type: "ad",
		URL: "csm-secure.com",
		Company: "ClearSearch"
	}, {
		Type: "tracker",
		URL: "clickability.com",
		Company: "Clickability"
	}, {
		Type: "ad",
		URL: "clickable.net",
		Company: "Clickable"
	}, {
		Type: "tracker",
		URL: "clickaider.com",
		Company: "ClickAider"
	}, {
		Type: "ad",
		URL: "cbproads.com",
		Company: "ClickBank ProAds"
	}, {
		Type: "ad",
		URL: "clickbooth.com",
		Company: "Clickbooth"
	}, {
		Type: "ad",
		URL: "clickboothlnk.com",
		Company: "Clickbooth"
	}, {
		Type: "tracker",
		URL: "clickdensity.com",
		Company: "ClickDensity"
	}, {
		Type: "tracker",
		URL: "clickdimensions.com",
		Company: "ClickDimensions"
	}, {
		Type: "tracker",
		URL: "clickequations.net",
		Company: "ClickEquations"
	}, {
		Type: "tracker",
		URL: "clickexperts.net",
		Company: "ClickExperts"
	}, {
		Type: "analytics",
		URL: "clickinc.com",
		Company: "ClickInc"
	}, {
		Type: "ad",
		URL: "clickintext.net",
		Company: "ClickInText"
	}, {
		Type: "ad",
		URL: "clickochet.com",
		Company: "Clickochet"
	}, {
		Type: "tracker",
		URL: "clickprotector.com",
		Company: "ClickProtector"
	}, {
		Type: "ad",
		URL: "hatid.com",
		Company: "Clicksor"
	}, {
		Type: "ad",
		URL: "clicksor.com",
		Company: "Clicksor"
	}, {
		Type: "ad",
		URL: "lzjl.com",
		Company: "Clicksor"
	}, {
		Type: "ad",
		URL: "myroitracking.com",
		Company: "Clicksor"
	}, {
		Type: "analytics",
		URL: "clicktale.net",
		Company: "ClickTale"
	}, {
		Type: "analytics",
		URL: "clicktale.pantherssl.com",
		Company: "ClickTale"
	}, {
		Type: "analytics",
		URL: "clicktale.com",
		Company: "ClickTale"
	}, {
		Type: "ad",
		URL: "clickwinks.com",
		Company: "Clickwinks"
	}, {
		Type: "analytics",
		URL: "getclicky.com",
		Company: "Clicky"
	}, {
		Type: "analytics",
		URL: "staticstuff.net",
		Company: "Clicky"
	}, {
		Type: "ad",
		URL: "clicmanager.fr",
		Company: "ClicManager"
	}, {
		Type: "ad",
		URL: "clipsyndicate.com",
		Company: "Clip Syndicate"
	}, {
		Type: "ad",
		URL: "clixgalore.com",
		Company: "ClixGalore"
	}, {
		Type: "analytics",
		URL: "clixmetrix.com",
		Company: "ClixMetrix"
	}, {
		Type: "analytics",
		URL: "clixpy.com",
		Company: "Clixpy"
	}, {
		Type: "ad",
		URL: "clixsense.com",
		Company: "ClixSense"
	}, {
		Type: "ad",
		URL: "clovenetwork.com",
		Company: "Clove Network"
	}, {
		Type: "analytics",
		URL: "clustrmaps.com",
		Company: "ClustrMaps"
	}, {
		Type: "tracker",
		URL: "cnstats.ru",
		Company: "CNStats"
	}, {
		Type: "analytics",
		URL: "cnzz.com",
		Company: "cnzz"
	}, {
		Type: "ad",
		URL: "acc-hd.de",
		Company: "CoAdvertise"
	}, {
		Type: "ad",
		URL: "admission.net",
		Company: "Cobalt Group"
	}, {
		Type: "tracker",
		URL: "cognitivematch.com",
		Company: "Cognitive Match"
	}, {
		Type: "tracker",
		URL: "cmmeglobal.com",
		Company: "Cognitive Match"
	}, {
		Type: "tracker",
		URL: "cogocast.net",
		Company: "Cogocast"
	}, {
		Type: "tracker",
		URL: "collarity.com",
		Company: "Collarity"
	}, {
		Type: "tracker",
		URL: "collective-media.net",
		Company: "Collective Media"
	}, {
		Type: "other",
		URL: "comm100.cn",
		Company: "Comm100"
	}, {
		Type: "other",
		URL: "comm100.com",
		Company: "Comm100"
	}, {
		Type: "ad",
		URL: "apmebf.com",
		Company: "Commission Junction"
	}, {
		Type: "ad",
		URL: "awltovhc.com",
		Company: "Commission Junction"
	}, {
		Type: "ad",
		URL: "emjcd.com",
		Company: "Commission Junction"
	}, {
		Type: "ad",
		URL: "ftjcfx.com",
		Company: "Commission Junction"
	}, {
		Type: "ad",
		URL: "lduhtrp.net",
		Company: "Commission Junction"
	}, {
		Type: "ad",
		URL: "qksz.net",
		Company: "Commission Junction"
	}, {
		Type: "ad",
		URL: "tqlkg.com",
		Company: "Commission Junction"
	}, {
		Type: "ad",
		URL: "tqlkg.com",
		Company: "Commission Junction"
	}, {
		Type: "ad",
		URL: "yceml.net",
		Company: "Commission Junction"
	}, {
		Type: "tracker",
		URL: "communicatorcorp.com",
		Company: "Communicator Corp"
	}, {
		Type: "ad",
		URL: "elementodigital.org",
		Company: "comOn Group"
	}, {
		Type: "ad",
		URL: "complex.com",
		Company: "Complex Media Network"
	}, {
		Type: "ad",
		URL: "complexmedianetwork.com",
		Company: "Complex Media Network"
	}, {
		Type: "ad",
		URL: "conduit.com",
		Company: "Conduit"
	}, {
		Type: "ad",
		URL: "conduit-banners.com",
		Company: "Conduit"
	}, {
		Type: "ad",
		URL: "conduit-data.com",
		Company: "Conduit"
	}, {
		Type: "ad",
		URL: "connexity.net",
		Company: "Connexity"
	}, {
		Type: "ad",
		URL: "cxt.ms",
		Company: "Connexity"
	}, {
		Type: "tracker",
		URL: "connexity.net",
		Company: "Connexity "
	}, {
		Type: "ad",
		URL: "connextra.com",
		Company: "Connextra"
	}, {
		Type: "other",
		URL: "contactatonce.com",
		Company: "Contact at Once"
	}, {
		Type: "tracker",
		URL: "getclicky.com",
		Company: "Contact Privacy Inc. "
	}, {
		Type: "tracker",
		URL: "parsely.com",
		Company: "Contact Privacy Inc. "
	}, {
		Type: "ad",
		URL: "contaxe.com",
		Company: "Conteaxe"
	}, {
		Type: "tracker",
		URL: "content.ad",
		Company: "Content.ad"
	}, {
		Type: "ad",
		URL: "admailtiser.com",
		Company: "ContextIn"
	}, {
		Type: "other",
		URL: "contextly.com",
		Company: "Contextly"
	}, {
		Type: "ad",
		URL: "contextweb.com",
		Company: "ContextWeb"
	}, {
		Type: "tracker",
		URL: "convergetrack.com",
		Company: "ConvergeTrack"
	}, {
		Type: "analytics",
		URL: "conversionruler.com",
		Company: "ConversionRuler"
	}, {
		Type: "tracker",
		URL: "conversive.nl",
		Company: "Conversive"
	}, {
		Type: "tracker",
		URL: "convertglobal.com",
		Company: "Convert Platform"
	}, {
		Type: "tracker",
		URL: "convertglobal.s3.amazonaws.com",
		Company: "Convert Platform"
	}, {
		Type: "tracker",
		URL: "dnhgz729v27ca.cloudfront.net",
		Company: "Convert Platform"
	}, {
		Type: "tracker",
		URL: "d1ivexoxmp59q7.cloudfront.net",
		Company: "Convertro"
	}, {
		Type: "tracker",
		URL: "convertro.com",
		Company: "Convertro"
	}, {
		Type: "tracker",
		URL: "conviva.com",
		Company: "Conviva"
	}, {
		Type: "privacy",
		URL: "cookieq.com",
		Company: "CookieQ"
	}, {
		Type: "ad",
		URL: "copacet.com",
		Company: "Copacet"
	}, {
		Type: "tracker",
		URL: "raasnet.com",
		Company: "CoreAudience"
	}, {
		Type: "analytics",
		URL: "cmcore.com",
		Company: "Coremetrics"
	}, {
		Type: "analytics",
		URL: "coremetrics.com",
		Company: "Coremetrics"
	}, {
		Type: "tracker",
		URL: "coremotives.com",
		Company: "CoreMotives"
	}, {
		Type: "tracker",
		URL: "securepaths.com",
		Company: "CPA Detective"
	}, {
		Type: "ad",
		URL: "cpmprofit.com",
		Company: "CPMProfit"
	}, {
		Type: "ad",
		URL: "cpmstar.com",
		Company: "CPMStar"
	}, {
		Type: "ad",
		URL: "cpxinteractive.com",
		Company: "CPX Interactive"
	}, {
		Type: "ad",
		URL: "cpxadroit.com",
		Company: "CPX Interactive"
	}, {
		Type: "tracker",
		URL: "cqcounter.com",
		Company: "CQ Counter"
	}, {
		Type: "ad",
		URL: "crakmedia.com",
		Company: "Crakmedia Network"
	}, {
		Type: "ad",
		URL: "craktraffic.com",
		Company: "Crakmedia Network"
	}, {
		Type: "analytics",
		URL: "cetrk.com",
		Company: "Crazy Egg"
	}, {
		Type: "analytics",
		URL: "dnn506yrbagrg.cloudfront.net",
		Company: "Crazy Egg"
	}, {
		Type: "ad",
		URL: "creafi-online-media.com",
		Company: "Creafi"
	}, {
		Type: "ad",
		URL: "ctpsnet.com",
		Company: "Crimtan"
	}, {
		Type: "ad",
		URL: "ctasnet.com",
		Company: "Crimtan"
	}, {
		Type: "tracker",
		URL: "criteo.com",
		Company: "Criteo"
	}, {
		Type: "tracker",
		URL: "criteo.net",
		Company: "Criteo"
	}, {
		Type: "analytics",
		URL: "crm-metrix.com",
		Company: "crm metrix"
	}, {
		Type: "analytics",
		URL: "customerconversio.com",
		Company: "crm metrix"
	}, {
		Type: "analytics",
		URL: "crmmetrix.com",
		Company: "crm metrix"
	}, {
		Type: "tracker",
		URL: "crosspixel.net",
		Company: "Cross Pixel Media"
	}, {
		Type: "tracker",
		URL: "crsspxl.com",
		Company: "Cross Pixel Media"
	}, {
		Type: "other",
		URL: "crowdignite.com",
		Company: "Crowd Ignite"
	}, {
		Type: "analytics",
		URL: "crowdscience.com",
		Company: "Crowd Science"
	}, {
		Type: "ad",
		URL: "adisn.com",
		Company: "CrowdGather"
	}, {
		Type: "ad",
		URL: "ctnetwork.hu",
		Company: "CTnetwork"
	}, {
		Type: "ad",
		URL: "bidsystem.com",
		Company: "Cubics"
	}, {
		Type: "ad",
		URL: "cubics.com",
		Company: "Cubics"
	}, {
		Type: "tracker",
		URL: "cxense.com",
		Company: "cXense"
	}, {
		Type: "tracker",
		URL: "amxdt.com",
		Company: "CyberOrganic"
	}, {
		Type: "ad",
		URL: "ds1.nl",
		Company: "Daisycon"
	}, {
		Type: "ad",
		URL: "admonkey.dapper.net",
		Company: "Dapper"
	}, {
		Type: "ad",
		URL: "dashboardad.net",
		Company: "Dashboard Ad"
	}, {
		Type: "analytics",
		URL: "collserve.com",
		Company: "Dataium"
	}, {
		Type: "tracker",
		URL: "datalogix.com",
		Company: "Datalogix"
	}, {
		Type: "tracker",
		URL: "nexac.com",
		Company: "Datalogix"
	}, {
		Type: "tracker",
		URL: "dpmsrv.com",
		Company: "DataPoint Media"
	}, {
		Type: "tracker",
		URL: "datasphere.com",
		Company: "DataSphere"
	}, {
		Type: "tracker",
		URL: "w55c.net",
		Company: "DataXu"
	}, {
		Type: "tracker",
		URL: "dataxu.com",
		Company: "DataXu"
	}, {
		Type: "tracker",
		URL: "pro-market.net",
		Company: "Datonics, LLC"
	}, {
		Type: "tracker",
		URL: "a.live-conversion.com",
		Company: "Datran"
	}, {
		Type: "tracker",
		URL: "displaymarketplace.com",
		Company: "Datran"
	}, {
		Type: "analytics",
		URL: "stormiq.com",
		Company: "DC StormIQ"
	}, {
		Type: "analytics",
		URL: "dc-storm.com",
		Company: "DC StormIQ"
	}, {
		Type: "ad",
		URL: "dedicatedmedia.com",
		Company: "Dedicated Media"
	}, {
		Type: "ad",
		URL: "dedicatednetworks.com",
		Company: "Dedicated Media"
	}, {
		Type: "analytics",
		URL: "degaa.net",
		Company: "Degaa Analytics"
	}, {
		Type: "ad",
		URL: "dmtracker.com",
		Company: "Demand Media"
	}, {
		Type: "ad",
		URL: "dmd53.com",
		Company: "Demand Media"
	}, {
		Type: "tracker",
		URL: "demandbase.com",
		Company: "Demandbase"
	}, {
		Type: "analytics",
		URL: "demandware.com",
		Company: "Demandware Analytics"
	}, {
		Type: "tracker",
		URL: "s2d6.com",
		Company: "dgm"
	}, {
		Type: "tracker",
		URL: "dgm-au.com",
		Company: "dgm"
	}, {
		Type: "ad",
		URL: "dgmatix.com",
		Company: "dgMatix"
	}, {
		Type: "analytics",
		URL: "didit.com",
		Company: "Didit Blizzard"
	}, {
		Type: "analytics",
		URL: "did-it.com",
		Company: "Didit Maestro"
	}, {
		Type: "other",
		URL: "digg.com",
		Company: "Digg "
	}, {
		Type: "ad",
		URL: "wtp101.com",
		Company: "Digilant"
	}, {
		Type: "tracker",
		URL: "tracer.jp",
		Company: "Digital Forest"
	}, {
		Type: "ad",
		URL: "dimpact.co.il",
		Company: "Digital Impact"
	}, {
		Type: "ad",
		URL: "dtzads.com",
		Company: "Digitize"
	}, {
		Type: "other",
		URL: "dihitt.com.br",
		Company: "diHITT Badge"
	}, {
		Type: "tracker",
		URL: "ppctracking.net",
		Company: "Direct Response Group"
	}, {
		Type: "ad",
		URL: "directadvert.ru",
		Company: "DirectAdvert"
	}, {
		Type: "ad",
		URL: "directrev.com",
		Company: "DirectRev"
	}, {
		Type: "tracker",
		URL: "directtrack.com",
		Company: "DirectTrack"
	}, {
		Type: "tracker",
		URL: "onenetworkdirect.net",
		Company: "DirectTrack"
	}, {
		Type: "other",
		URL: "disqus.com",
		Company: "Disqus"
	}, {
		Type: "tracker",
		URL: "vertriebsassistent.de",
		Company: "DiVa"
	}, {
		Type: "analytics",
		URL: "domodomain.com",
		Company: "DomoDomain"
	}, {
		Type: "tracker",
		URL: "trackedlink.net",
		Company: "dotMailer"
	}, {
		Type: "tracker",
		URL: "dtmpub.com",
		Company: "Dotomi"
	}, {
		Type: "tracker",
		URL: "dotomi.com",
		Company: "Dotomi"
	}, {
		Type: "ad",
		URL: "double.net",
		Company: "Double.net"
	}, {
		Type: "tracker",
		URL: "cc-dt.com",
		Company: "Doubleclick"
	}, {
		Type: "tracker",
		URL: "destinationurl.com",
		Company: "DoubleClick"
	}, {
		Type: "tracker",
		URL: "doubleclick.net",
		Company: "DoubleClick"
	}, {
		Type: "tracker",
		URL: "invitemedia.com",
		Company: "DoubleClick"
	}, {
		Type: "tracker",
		URL: "doubleclick.com",
		Company: "DoubleClick"
	}, {
		Type: "ad",
		URL: "doublepimp.com",
		Company: "DoublePimp"
	}, {
		Type: "analytics",
		URL: "doubleverify.com",
		Company: "DoubleVerify"
	}, {
		Type: "ad",
		URL: "adsymptotic.com",
		Company: "Drawbridge"
	}, {
		Type: "tracker",
		URL: "dsmmadvantage.com",
		Company: "DSMM Advantage"
	}, {
		Type: "ad",
		URL: "z5x.net",
		Company: "DSNR Media Group"
	}, {
		Type: "tracker",
		URL: "dsply.com",
		Company: "Dsply"
	}, {
		Type: "ad",
		URL: "durasite.net",
		Company: "DuraSite"
	}, {
		Type: "tracker",
		URL: "dwstat.cn",
		Company: "dwstat.cn"
	}, {
		Type: "tracker",
		URL: "dl-rms.com",
		Company: "Dynamic Logic"
	}, {
		Type: "tracker",
		URL: "dlqm.net",
		Company: "Dynamic Logic"
	}, {
		Type: "tracker",
		URL: "questionmarket.com",
		Company: "Dynamic Logic"
	}, {
		Type: "ad",
		URL: "dynamicyield.com",
		Company: "Dynamic Yield"
	}, {
		Type: "ad",
		URL: "eadv.it",
		Company: "eADV"
	}, {
		Type: "ad",
		URL: "ebay.com",
		Company: "eBay"
	}, {
		Type: "ad",
		URL: "ebuzzing.com",
		Company: "eBuzzing"
	}, {
		Type: "ad",
		URL: "eclick.vn",
		Company: "eClick"
	}, {
		Type: "analytics",
		URL: "econda-monitor.de",
		Company: "Econda"
	}, {
		Type: "ad",
		URL: "edgevertise.com",
		Company: "Edgevertise"
	}, {
		Type: "tracker",
		URL: "effectivemeasure.com",
		Company: "Effective Measure"
	}, {
		Type: "tracker",
		URL: "effectivemeasure.net",
		Company: "Effective Measure"
	}, {
		Type: "ad",
		URL: "elicitapp.com",
		Company: "elicit"
	}, {
		Type: "analytics",
		URL: "en25.com",
		Company: "Eloqua"
	}, {
		Type: "tracker",
		URL: "eloqua.com",
		Company: "Eloqua"
	}, {
		Type: "tracker",
		URL: "mmtro.com",
		Company: "Email Attitude"
	}, {
		Type: "tracker",
		URL: "email-attitude.com",
		Company: "Email Attitude"
	}, {
		Type: "ad",
		URL: "emediate.dk",
		Company: "Emediate"
	}, {
		Type: "ad",
		URL: "emediate.se",
		Company: "Emediate"
	}, {
		Type: "ad",
		URL: "emediate.eu",
		Company: "Emediate"
	}, {
		Type: "analytics",
		URL: "sitecompass.com",
		Company: "Encore Metrics"
	}, {
		Type: "analytics",
		URL: "enectoanalytics.com",
		Company: "Enecto Analytics"
	}, {
		Type: "analytics",
		URL: "enecto.com",
		Company: "Enecto Analytics"
	}, {
		Type: "ad",
		URL: "engineseeker.com",
		Company: "EngineSeeker"
	}, {
		Type: "tracker",
		URL: "enquisite.com",
		Company: "Enquisite"
	}, {
		Type: "ad",
		URL: "adtlgc.com",
		Company: "Enreach"
	}, {
		Type: "tracker",
		URL: "tumri.net",
		Company: "Ensemble"
	}, {
		Type: "tracker",
		URL: "ensighten.com",
		Company: "Ensighten"
	}, {
		Type: "ad",
		URL: "epicgameads.com",
		Company: "Epic Game Ads"
	}, {
		Type: "ad",
		URL: "trafficmp.com",
		Company: "Epic Marketplace"
	}, {
		Type: "ad",
		URL: "e-planning.net",
		Company: "e-planning"
	}, {
		Type: "analytics",
		URL: "eproof.com",
		Company: "eProof"
	}, {
		Type: "tracker",
		URL: "ixicorp.com",
		Company: "Equifax"
	}, {
		Type: "ad",
		URL: "ero-advertising.com",
		Company: "EroAdvertising"
	}, {
		Type: "tracker",
		URL: "d15qhc0lu1ghnk.cloudfront.net",
		Company: "Errorception"
	}, {
		Type: "tracker",
		URL: "errorception.com",
		Company: "Errorception"
	}, {
		Type: "ad",
		URL: "esendra.fi",
		Company: "Esendra"
	}, {
		Type: "analytics",
		URL: "estat.com",
		Company: "eStat"
	}, {
		Type: "ad",
		URL: "etargetnet.com",
		Company: "Etarget"
	}, {
		Type: "ad",
		URL: "etology.com",
		Company: "Etology"
	}, {
		Type: "analytics",
		URL: "etracker.de",
		Company: "etracker"
	}, {
		Type: "analytics",
		URL: "sedotracker.com",
		Company: "etracker"
	}, {
		Type: "analytics",
		URL: "etracker.com",
		Company: "etracker"
	}, {
		Type: "tracker",
		URL: "etrigue.com",
		Company: "Etrigue"
	}, {
		Type: "analytics",
		URL: "eulerian.net",
		Company: "Eulerian"
	}, {
		Type: "ad",
		URL: "euroads.fi",
		Company: "Euroads"
	}, {
		Type: "ad",
		URL: "euroads.dk",
		Company: "Euroads"
	}, {
		Type: "ad",
		URL: "euroads.no",
		Company: "Euroads"
	}, {
		Type: "tracker",
		URL: "euroweb.net",
		Company: "Euroweb Counter"
	}, {
		Type: "tracker",
		URL: "waterfrontmedia.com",
		Company: "Everyday Health"
	}, {
		Type: "ad",
		URL: "betrad.com",
		Company: "Evidon"
	}, {
		Type: "analytics",
		URL: "evisitanalyst.com",
		Company: "eVisitAnalyst"
	}, {
		Type: "analytics",
		URL: "websiteperform.com",
		Company: "eVisitAnalyst"
	}, {
		Type: "analytics",
		URL: "evisitcs.com",
		Company: "eVisitAnalyst"
	}, {
		Type: "other",
		URL: "ixs1.net",
		Company: "eWayDirect"
	}, {
		Type: "tracker",
		URL: "exceptional-js.heroku.com/exceptional.js",
		Company: "Exceptional"
	}, {
		Type: "tracker",
		URL: "exceptional.io",
		Company: "Exceptional"
	}, {
		Type: "tracker",
		URL: "exelator.com",
		Company: "Exelate"
	}, {
		Type: "ad",
		URL: "dynamicoxygen.com",
		Company: "ExitJunction"
	}, {
		Type: "ad",
		URL: "exitjunction.com",
		Company: "ExitJunction"
	}, {
		Type: "ad",
		URL: "exoclick.com",
		Company: "ExoClick"
	}, {
		Type: "tracker",
		URL: "audienceiq.com",
		Company: "Experian"
	}, {
		Type: "ad",
		URL: "tracking100.com",
		Company: "Experimently"
	}, {
		Type: "analytics",
		URL: "expo-max.com",
		Company: "expo-MAX"
	}, {
		Type: "analytics",
		URL: "extreme-dm.com",
		Company: "eXTReMe Tracker"
	}, {
		Type: "tracker",
		URL: "sublimemedia.net",
		Company: "Eyeconomy"
	}, {
		Type: "tracker",
		URL: "eyeota.net",
		Company: "Eyeota"
	}, {
		Type: "ad",
		URL: "eyereturn.com",
		Company: "eyeReturn"
	}, {
		Type: "ad",
		URL: "eyewonder.com",
		Company: "EyeWonder"
	}, {
		Type: "ad",
		URL: "ezakus.net",
		Company: "Ezakus"
	}, {
		Type: "ad",
		URL: "ezanga.com",
		Company: "eZanga"
	}, {
		Type: "tracker",
		URL: "facebook.com",
		Company: "Facebook"
	}, {
		Type: "tracker",
		URL: "facebook.net",
		Company: "Facebook"
	}, {
		Type: "tracker",
		URL: "fbcdn.net",
		Company: "Facebook"
	}, {
		Type: "ad",
		URL: "adsfac.net",
		Company: "Facilitate Digital"
	}, {
		Type: "ad",
		URL: "adsfac.eu",
		Company: "Facilitate Digital"
	}, {
		Type: "ad",
		URL: "adsfac.us",
		Company: "Facilitate Digital"
	}, {
		Type: "ad",
		URL: "adsfac.sg",
		Company: "Facilitate Digital"
	}, {
		Type: "tracker",
		URL: "fathomseo.com",
		Company: "Fathom SEO"
	}, {
		Type: "ad",
		URL: "featurelink.com",
		Company: "FeatureLink"
	}, {
		Type: "ad",
		URL: "fmpub.net",
		Company: "Federated Media"
	}, {
		Type: "other",
		URL: "feedcat.net",
		Company: "FeedCat"
	}, {
		Type: "analytics",
		URL: "feedjit.com",
		Company: "Feedjit"
	}, {
		Type: "tracker",
		URL: "feedperfect.com",
		Company: "FeedPerfect"
	}, {
		Type: "ad",
		URL: "fetchback.com",
		Company: "Fetchback"
	}, {
		Type: "other",
		URL: "financialcontent.com",
		Company: "Financial Content"
	}, {
		Type: "analytics",
		URL: "netflame.cc",
		Company: "Fireclick"
	}, {
		Type: "ad",
		URL: "flagads.net",
		Company: "Flag Ads"
	}, {
		Type: "other",
		URL: "flagcounter.com",
		Company: "Flag Counter"
	}, {
		Type: "ad",
		URL: "flashtalking.com",
		Company: "Flashtalking"
	}, {
		Type: "other",
		URL: "flattr.com",
		Company: "Flattr"
	}, {
		Type: "other",
		URL: "flux.com",
		Company: "Flux"
	}, {
		Type: "tracker",
		URL: "kavijaseuranta.fi",
		Company: "Fonecta"
	}, {
		Type: "ad",
		URL: "foodieblogroll.com",
		Company: "Foodie Blogroll"
	}, {
		Type: "analytics",
		URL: "footprintlive.com",
		Company: "Footprint"
	}, {
		Type: "analytics",
		URL: "foreseeresults.com",
		Company: "ForeSee"
	}, {
		Type: "other",
		URL: "foursquare.com",
		Company: "Foursquare"
	}, {
		Type: "ad",
		URL: "fimserve.com",
		Company: "Fox Audience Network"
	}, {
		Type: "ad",
		URL: "fout.jp",
		Company: "FreakOut"
	}, {
		Type: "analytics",
		URL: "freeonlineusers.com",
		Company: "Free Online Users"
	}, {
		Type: "analytics",
		URL: "fastonlineusers.com",
		Company: "Free Online Users"
	}, {
		Type: "analytics",
		URL: "fastwebcounter.com",
		Company: "Free Online Users"
	}, {
		Type: "other",
		URL: "atoomic.com",
		Company: "Free PageRank"
	}, {
		Type: "other",
		URL: "free-pagerank.com",
		Company: "Free PageRank"
	}, {
		Type: "tracker",
		URL: "fwmrm.net",
		Company: "FreeWheel"
	}, {
		Type: "ad",
		URL: "freenet.de",
		Company: "freeXmedia"
	}, {
		Type: "tracker",
		URL: "friendfeed.com",
		Company: "FriendFeed"
	}, {
		Type: "ad",
		URL: "adultfriendfinder.com",
		Company: "FriendFinder"
	}, {
		Type: "ad",
		URL: "amigos.com",
		Company: "FriendFinder"
	}, {
		Type: "ad",
		URL: "cams.com",
		Company: "FriendFinder"
	}, {
		Type: "ad",
		URL: "cennter.com",
		Company: "FriendFinder"
	}, {
		Type: "ad",
		URL: "double-check.com",
		Company: "FriendFinder"
	}, {
		Type: "ad",
		URL: "facebookofsex.com",
		Company: "FriendFinder"
	}, {
		Type: "ad",
		URL: "getiton.com",
		Company: "FriendFinder"
	}, {
		Type: "ad",
		URL: "hot-dances.com",
		Company: "FriendFinder"
	}, {
		Type: "ad",
		URL: "hot-dances.com",
		Company: "FriendFinder"
	}, {
		Type: "ad",
		URL: "nostringsattached.com",
		Company: "FriendFinder"
	}, {
		Type: "ad",
		URL: "pop6.com",
		Company: "FriendFinder"
	}, {
		Type: "ad",
		URL: "streamray.com",
		Company: "FriendFinder"
	}, {
		Type: "tracker",
		URL: "fruitflan.com",
		Company: "FruitFlan"
	}, {
		Type: "tracker",
		URL: "adflan.com",
		Company: "FruitFlan"
	}, {
		Type: "ad",
		URL: "game-advertising-online.com",
		Company: "Game Advertising Online"
	}, {
		Type: "ad",
		URL: "gamerdna.com",
		Company: "gamerDNA"
	}, {
		Type: "ad",
		URL: "gamned.com",
		Company: "Gamned"
	}, {
		Type: "ad",
		URL: "adbutter.net",
		Company: "Gamned"
	}, {
		Type: "analytics",
		URL: "gaug.es",
		Company: "Gaug.es"
	}, {
		Type: "analytics",
		URL: "gb-world.net",
		Company: "GB-World"
	}, {
		Type: "ad",
		URL: "gemius.pl",
		Company: "Gemius"
	}, {
		Type: "tracker",
		URL: "rsvpgenius.com",
		Company: "Genius"
	}, {
		Type: "tracker",
		URL: "interclick.com",
		Company: "Genome"
	}, {
		Type: "ad",
		URL: "geoads.com",
		Company: "GeoAds"
	}, {
		Type: "tracker",
		URL: "geoplugin.net",
		Company: "geoPlugin"
	}, {
		Type: "analytics",
		URL: "geovisite.com",
		Company: "Geovisite"
	}, {
		Type: "ad",
		URL: "gestionpub.com",
		Company: "GestionPub"
	}, {
		Type: "other",
		URL: "getglue.com",
		Company: "GetGlue"
	}, {
		Type: "other",
		URL: "getsatisfaction.com",
		Company: "GetSatisfaction"
	}, {
		Type: "ad",
		URL: "giantrealm.com",
		Company: "Giant Realm"
	}, {
		Type: "tracker",
		URL: "gigya.co",
		Company: "Gigya"
	}, {
		Type: "tracker",
		URL: "gigya.com",
		Company: "Gigya"
	}, {
		Type: "tracker",
		URL: "gigcount.com",
		Company: "Gigya"
	}, {
		Type: "tracker",
		URL: "gigyahosting1.com",
		Company: "Gigya "
	}, {
		Type: "ad",
		URL: "gittigidiyor.com",
		Company: "GittiGidiyor Affiliate Program"
	}, {
		Type: "ad",
		URL: "glam.com",
		Company: "Glam Media"
	}, {
		Type: "ad",
		URL: "globaltakeoff.net",
		Company: "GlobalTakeoff"
	}, {
		Type: "other",
		URL: "affiliate.godaddy.com",
		Company: "GoDaddy"
	}, {
		Type: "other",
		URL: "trafficfacts.com",
		Company: "GoDaddy"
	}, {
		Type: "tracker",
		URL: "godatafeed.com",
		Company: "GoDataFeed"
	}, {
		Type: "analytics",
		URL: "goingup.com",
		Company: "GoingUp"
	}, {
		Type: "tracker",
		URL: "axf8.net",
		Company: "Gomez"
	}, {
		Type: "ad",
		URL: "goodadvert.ru",
		Company: "GoodADVERT"
	}, {
		Type: "tracker",
		URL: "feedburner.com",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "google.com",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "googlesyndication.com",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "googletagservices.com",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "googleadservices.com",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "doubleclick.net",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "googlesyndication.com",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "doubleclick.net",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "doubleclick.net",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "google.com",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "googletagmanager.com",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "gmodules.com",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "google.com",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "googleadservices.com",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "google-analytics.com",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "google-analytics.com",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "2mdn.net",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "googleusercontent.com",
		Company: "Google"
	}, {
		Type: "tracker",
		URL: "gooo.al",
		Company: "Goooal"
	}, {
		Type: "tracker",
		URL: "gooal.herokuapp.com",
		Company: "Goooal"
	}, {
		Type: "ad",
		URL: "evolvemediametrics.com",
		Company: "Gorilla Nation"
	}, {
		Type: "ad",
		URL: "gorillanation.com",
		Company: "Gorilla Nation"
	}, {
		Type: "analytics",
		URL: "gosquared.com",
		Company: "GoSquared"
	}, {
		Type: "analytics",
		URL: "d1l6p2sc9645hc.cloudfront.net",
		Company: "GoSquared"
	}, {
		Type: "analytics",
		URL: "data.gosquared.com",
		Company: "GoSquared"
	}, {
		Type: "analytics",
		URL: "gostats.com",
		Company: "GoStats"
	}, {
		Type: "tracker",
		URL: "grapeshot.co.uk",
		Company: "Grapeshot"
	}, {
		Type: "tracker",
		URL: "gscontxt.net",
		Company: "Grapeshot"
	}, {
		Type: "analytics",
		URL: "gravity.com",
		Company: "Gravity Insights"
	}, {
		Type: "analytics",
		URL: "grepdata.com",
		Company: "GrepData"
	}, {
		Type: "analytics",
		URL: "d1lm7kd3bd3yo9.cloudfront.net",
		Company: "GrepData"
	}, {
		Type: "ad",
		URL: "greystripe.com",
		Company: "Greystripe"
	}, {
		Type: "ad",
		URL: "gmads.net",
		Company: "GroupM Server"
	}, {
		Type: "ad",
		URL: "gsimedia.net",
		Company: "GSI Media"
	}, {
		Type: "analytics",
		URL: "gtopstats.com",
		Company: "GTop"
	}, {
		Type: "analytics",
		URL: "gtopstats.ro",
		Company: "GTop"
	}, {
		Type: "tracker",
		URL: "gumgum.com",
		Company: "GumGum"
	}, {
		Type: "ad",
		URL: "gunggo.com",
		Company: "Gunggo"
	}, {
		Type: "ad",
		URL: "halogennetwork.com",
		Company: "Halogen Network"
	}, {
		Type: "ad",
		URL: "harrenmedianetwork.com",
		Company: "Harren Media"
	}, {
		Type: "tracker",
		URL: "hiconversion.com",
		Company: "HiConversion"
	}, {
		Type: "ad",
		URL: "hiiir.com",
		Company: "Hiiir"
	}, {
		Type: "ad",
		URL: "comclick.com",
		Company: "Hi-Media Performance"
	}, {
		Type: "ad",
		URL: "himediads.com",
		Company: "Hi-Media Performance"
	}, {
		Type: "analytics",
		URL: "histats.com",
		Company: "Histats"
	}, {
		Type: "tracker",
		URL: "hit.ua",
		Company: "HIT.UA"
	}, {
		Type: "analytics",
		URL: "hit-parade.com",
		Company: "Hit-Parade"
	}, {
		Type: "analytics",
		URL: "hitslink.com",
		Company: "HitsLink"
	}, {
		Type: "analytics",
		URL: "hitsprocessor.com",
		Company: "HitsLink"
	}, {
		Type: "analytics",
		URL: "hitsniffer.com",
		Company: "HitSniffer"
	}, {
		Type: "tracker",
		URL: "hittail.com",
		Company: "HitTail"
	}, {
		Type: "tracker",
		URL: "hitwebcounter.com",
		Company: "hitwebcounter.com"
	}, {
		Type: "tracker",
		URL: "hlserve.com",
		Company: "HookLogic"
	}, {
		Type: "tracker",
		URL: "seesmic.com",
		Company: "HootSuite"
	}, {
		Type: "analytics",
		URL: "hotlog.ru",
		Company: "HotLog"
	}, {
		Type: "tracker",
		URL: "hottraffic.nl",
		Company: "HotTraffic"
	}, {
		Type: "ad",
		URL: "hotwords.com",
		Company: "HotWords"
	}, {
		Type: "ad",
		URL: "hotwords.es",
		Company: "HotWords"
	}, {
		Type: "ad",
		URL: "httpool.com",
		Company: "httppool"
	}, {
		Type: "ad",
		URL: "toboads.com",
		Company: "httppool"
	}, {
		Type: "tracker",
		URL: "hubspot.com",
		Company: "HubSpot"
	}, {
		Type: "tracker",
		URL: "hubspot.com",
		Company: "HubSpot"
	}, {
		Type: "tracker",
		URL: "performable.com",
		Company: "Hubspot"
	}, {
		Type: "tracker",
		URL: "hurra.com",
		Company: "Hurra Tracker"
	}, {
		Type: "ad",
		URL: "hypeads.org",
		Company: "Hype Exchange"
	}, {
		Type: "other",
		URL: "hyves.nl",
		Company: "Hyves"
	}, {
		Type: "analytics",
		URL: "i.ua",
		Company: "i.ua"
	}, {
		Type: "ad",
		URL: "i2i.jp",
		Company: "i2i.jp"
	}, {
		Type: "tracker",
		URL: "iadvize.com",
		Company: "iAdvize"
	}, {
		Type: "tracker",
		URL: "ib-ibi.com",
		Company: "i-Behavior"
	}, {
		Type: "tracker",
		URL: "i-behavior.com",
		Company: "i-behavior"
	}, {
		Type: "tracker",
		URL: "bbelements.com",
		Company: "iBillboard"
	}, {
		Type: "tracker",
		URL: "cmcore.com",
		Company: "IBM"
	}, {
		Type: "analytics",
		URL: "ic-live.com",
		Company: "iCrossing"
	}, {
		Type: "analytics",
		URL: "sptag3.com",
		Company: "iCrossing"
	}, {
		Type: "analytics",
		URL: "icstats.nl",
		Company: "ICStats"
	}, {
		Type: "tracker",
		URL: "ideoclick.com",
		Company: "IdeoClick"
	}, {
		Type: "ad",
		URL: "600z.com",
		Company: "iEntry"
	}, {
		Type: "other",
		URL: "igodigital.com",
		Company: "iGoDigital"
	}, {
		Type: "ad",
		URL: "picadmedia.com",
		Company: "Image Space Media"
	}, {
		Type: "ad",
		URL: "vidigital.ru",
		Company: "imho vi"
	}, {
		Type: "ad",
		URL: "impact-ad.jp",
		Company: "impAct"
	}, {
		Type: "tracker",
		URL: "r7ls.net",
		Company: "Impact Radius"
	}, {
		Type: "tracker",
		URL: "7eer.net",
		Company: "Impact Radius"
	}, {
		Type: "tracker",
		URL: "ojrq.net",
		Company: "Impact Radius"
	}, {
		Type: "tracker",
		URL: "evyy.net",
		Company: "Impact Radius"
	}, {
		Type: "tracker",
		URL: "impactradius.com",
		Company: "Impact Radius"
	}, {
		Type: "ad",
		URL: "impresionesweb.com",
		Company: "Impresiones Web"
	}, {
		Type: "ad",
		URL: "360yield.com",
		Company: "Improve Digital"
	}, {
		Type: "tracker",
		URL: "iljmp.com",
		Company: "Improvely"
	}, {
		Type: "tracker",
		URL: "254a.com",
		Company: "Impulse"
	}, {
		Type: "ad",
		URL: "inadcoads.com",
		Company: "Inadco"
	}, {
		Type: "ad",
		URL: "indieclick.com",
		Company: "IndieClick"
	}, {
		Type: "ad",
		URL: "impressiondesk.com",
		Company: "Infectious Media"
	}, {
		Type: "tracker",
		URL: "infinity-tracking.net",
		Company: "Infinity Tracking"
	}, {
		Type: "ad",
		URL: "influads.com",
		Company: "InfluAds"
	}, {
		Type: "ad",
		URL: "infolinks.com",
		Company: "InfoLinks"
	}, {
		Type: "ad",
		URL: "intextscript.com",
		Company: "InfoLinks"
	}, {
		Type: "analytics",
		URL: "ivwbox.de",
		Company: "INFOnline"
	}, {
		Type: "ad",
		URL: "infra-ad.com",
		Company: "Infra-Ad"
	}, {
		Type: "other",
		URL: "infusionsoft.com",
		Company: "Infusionsoft"
	}, {
		Type: "ad",
		URL: "innity.com",
		Company: "Innity"
	}, {
		Type: "analytics",
		URL: "swordfishdc.com",
		Company: "Innometrics"
	}, {
		Type: "ad",
		URL: "innovid.com",
		Company: "Innovid"
	}, {
		Type: "tracker",
		URL: "inpref.com",
		Company: "Inpref"
	}, {
		Type: "tracker",
		URL: "inpref.s3",
		Company: "Inpref"
	}, {
		Type: "tracker",
		URL: "insightexpressai.com",
		Company: "InsightExpress"
	}, {
		Type: "ad",
		URL: "inskinad.com",
		Company: "InSkin Media"
	}, {
		Type: "tracker",
		URL: "inspectlet.com",
		Company: "Inspectlet"
	}, {
		Type: "ad",
		URL: "intelliad.com",
		Company: "intelliAd"
	}, {
		Type: "ad",
		URL: "intelliad.de",
		Company: "intelliAd"
	}, {
		Type: "analytics",
		URL: "intelligencefocus.com",
		Company: "IntelligenceFocus"
	}, {
		Type: "other",
		URL: "intensedebate.com",
		Company: "Intense Debate"
	}, {
		Type: "tracker",
		URL: "intentmedia.net",
		Company: "Intent Media"
	}, {
		Type: "other",
		URL: "intercom.io",
		Company: "Intercom"
	}, {
		Type: "ad",
		URL: "intergi.com",
		Company: "Intergi"
	}, {
		Type: "ad",
		URL: "intermarkets.net",
		Company: "Intermarkets"
	}, {
		Type: "tracker",
		URL: "intermundomedia.com",
		Company: "InterMundo Media"
	}, {
		Type: "tracker",
		URL: "voice2page.com",
		Company: "InternetAudioAds"
	}, {
		Type: "ad",
		URL: "ibpxl.com",
		Company: "InternetBrands"
	}, {
		Type: "ad",
		URL: "interpolls.com",
		Company: "Interpolls"
	}, {
		Type: "ad",
		URL: "investingchannel.com",
		Company: "InvestingChannel"
	}, {
		Type: "ad",
		URL: "inviziads.com",
		Company: "InviziAds"
	}, {
		Type: "ad",
		URL: "iogous.com",
		Company: "iogous"
	}, {
		Type: "analytics",
		URL: "iperceptions.com",
		Company: "iPerceptions"
	}, {
		Type: "tracker",
		URL: "iplogger.ru",
		Company: "IPLogger"
	}, {
		Type: "ad",
		URL: "centraliprom.com",
		Company: "iprom"
	}, {
		Type: "ad",
		URL: "iprom.net",
		Company: "iprom"
	}, {
		Type: "ad",
		URL: "mediaiprom.com",
		Company: "iprom"
	}, {
		Type: "ad",
		URL: "ipromote.com",
		Company: "iPromote"
	}, {
		Type: "tracker",
		URL: "clickmanage.com",
		Company: "iProspect"
	}, {
		Type: "other",
		URL: "civicscience.com",
		Company: "iQ Poll"
	}, {
		Type: "ad",
		URL: "adsbyisocket.com",
		Company: "isocket"
	}, {
		Type: "ad",
		URL: "isocket.com",
		Company: "isocket"
	}, {
		Type: "analytics",
		URL: "i-stats.com",
		Company: "i-stats"
	}, {
		Type: "ad",
		URL: "ity.im",
		Company: "ity.im"
	}, {
		Type: "privacy",
		URL: "iubenda.com",
		Company: "iubenda"
	}, {
		Type: "tracker",
		URL: "email-reflex.com",
		Company: "ividence"
	}, {
		Type: "tracker",
		URL: "ivimedia.net",
		Company: "ividence"
	}, {
		Type: "other",
		URL: "iwiw.hu",
		Company: "iWiW Widgets"
	}, {
		Type: "tracker",
		URL: "adoftheyear.com",
		Company: "j.a.g. groot"
	}, {
		Type: "ad",
		URL: "jeetyetmedia.com",
		Company: "Jeetyet Media"
	}, {
		Type: "analytics",
		URL: "phone-analytics.com",
		Company: "Jet Interactive"
	}, {
		Type: "ad",
		URL: "jetpackdigital.com",
		Company: "Jetpack Digital"
	}, {
		Type: "ad",
		URL: "jinkcom",
		Company: "Jink"
	}, {
		Type: "ad",
		URL: "jink.de",
		Company: "Jink"
	}, {
		Type: "analytics",
		URL: "jirafe.com",
		Company: "Jirafe"
	}, {
		Type: "ad",
		URL: "jlist.com",
		Company: "J-List Affiliate Program"
	}, {
		Type: "other",
		URL: "haloscan.com",
		Company: "JS-Kit"
	}, {
		Type: "ad",
		URL: "contentabc.com",
		Company: "JuggCash"
	}, {
		Type: "ad",
		URL: "mofos.com",
		Company: "JuggCash"
	}, {
		Type: "ad",
		URL: "juiceadv.com",
		Company: "JuiceADV"
	}, {
		Type: "ad",
		URL: "juicyads.com",
		Company: "JuicyAds"
	}, {
		Type: "ad",
		URL: "juicyads.com",
		Company: "JuicyAds"
	}, {
		Type: "tracker",
		URL: "jumptap.com",
		Company: "Jumptap"
	}, {
		Type: "tracker",
		URL: "jump-time.net",
		Company: "JumpTime"
	}, {
		Type: "tracker",
		URL: "jumptime.com",
		Company: "JumpTime"
	}, {
		Type: "ad",
		URL: "justrelevant.com",
		Company: "Just Relevant"
	}, {
		Type: "other",
		URL: "kaltura.com",
		Company: "Kaltura"
	}, {
		Type: "tracker",
		URL: "kampyle.com",
		Company: "Kampyle"
	}, {
		Type: "ad",
		URL: "kanoodle.com",
		Company: "Kanoodle"
	}, {
		Type: "ad",
		URL: "compete.com",
		Company: "Kantar Media"
	}, {
		Type: "ad",
		URL: "c-col.com",
		Company: "Kantar Media"
	}, {
		Type: "ad",
		URL: "kau.li",
		Company: "Kauli"
	}, {
		Type: "ad",
		URL: "kavanga.ru",
		Company: "Kavanga"
	}, {
		Type: "tracker",
		URL: "xg4ken.com",
		Company: "Kenshoo"
	}, {
		Type: "analytics",
		URL: "keymetric.net",
		Company: "KeyMetric"
	}, {
		Type: "tracker",
		URL: "keynote.com",
		Company: "Keynote"
	}, {
		Type: "tracker",
		URL: "keywordmax.com",
		Company: "KeywordMax"
	}, {
		Type: "analytics",
		URL: "qualaroo.com",
		Company: "KissInsights"
	}, {
		Type: "analytics",
		URL: "kissinsights.com",
		Company: "KissInsights"
	}, {
		Type: "analytics",
		URL: "kissmetrics.com",
		Company: "KissMetrics"
	}, {
		Type: "analytics",
		URL: "doug1izaerwt3.cloudfront.net",
		Company: "KissMetrics"
	}, {
		Type: "ad",
		URL: "103092804.com",
		Company: "Kitara Media"
	}, {
		Type: "tracker",
		URL: "adcastplus.net",
		Company: "Klaustech"
	}, {
		Type: "ad",
		URL: "klikki.com",
		Company: "Klikki"
	}, {
		Type: "ad",
		URL: "kliksaya.com",
		Company: "KlikSaya"
	}, {
		Type: "tracker",
		URL: "dimestore.com",
		Company: "Knowledge Networks"
	}, {
		Type: "ad",
		URL: "atomex.net",
		Company: "Komli"
	}, {
		Type: "tracker",
		URL: "komli.net",
		Company: "Komli"
	}, {
		Type: "tracker",
		URL: "komli.com",
		Company: "Komli"
	}, {
		Type: "ad",
		URL: "komoona.com",
		Company: "Komoona"
	}, {
		Type: "other",
		URL: "kontactor.com",
		Company: "Kontactor"
	}, {
		Type: "tracker",
		URL: "kontera.com",
		Company: "Kontera"
	}, {
		Type: "tracker",
		URL: "korrelate.net",
		Company: "Korrelate"
	}, {
		Type: "tracker",
		URL: "cleanrm.net",
		Company: "Korrelate"
	}, {
		Type: "tracker",
		URL: "korrelate.com",
		Company: "Korrelate"
	}, {
		Type: "tracker",
		URL: "krxd.net",
		Company: "Krux Digital"
	}, {
		Type: "ad",
		URL: "advertising.com",
		Company: "LeadBack"
	}, {
		Type: "tracker",
		URL: "leadforensics.com",
		Company: "LeadForensics"
	}, {
		Type: "analytics",
		URL: "leadforce1.com",
		Company: "LeadFormix"
	}, {
		Type: "analytics",
		URL: "leadformix.com",
		Company: "LeadFormix"
	}, {
		Type: "analytics",
		URL: "trackalyzer.com",
		Company: "LeadLander"
	}, {
		Type: "analytics",
		URL: "formalyzer.com",
		Company: "LeadLander"
	}, {
		Type: "analytics",
		URL: "leadlifesolutions.net",
		Company: "LeadLife"
	}, {
		Type: "tracker",
		URL: "legolas-media.com",
		Company: "Legolas Media"
	}, {
		Type: "other",
		URL: "leiki.com",
		Company: "Leiki"
	}, {
		Type: "tracker",
		URL: "lengow.com",
		Company: "Lengow"
	}, {
		Type: "ad",
		URL: "lexity.com",
		Company: "Lexity"
	}, {
		Type: "ad",
		URL: "lfstmedia.com",
		Company: "LifeStreet Media"
	}, {
		Type: "ad",
		URL: "liftdna.com",
		Company: "LiftDNA"
	}, {
		Type: "ad",
		URL: "ligatus.com",
		Company: "Ligatus"
	}, {
		Type: "tracker",
		URL: "lijit.com",
		Company: "Lijit"
	}, {
		Type: "analytics",
		URL: "linezing.com",
		Company: "LineZing"
	}, {
		Type: "ad",
		URL: "linkconnector.com",
		Company: "LinkConnector"
	}, {
		Type: "privacy",
		URL: "licdn.com",
		Company: "LinkedIn"
	}, {
		Type: "other",
		URL: "linkedin.com",
		Company: "LinkedIn"
	}, {
		Type: "other",
		URL: "linkedin.com",
		Company: "LinkedIn"
	}, {
		Type: "other",
		URL: "linksalpha.com",
		Company: "LinksAlpha"
	}, {
		Type: "ad",
		URL: "linksynergy.com",
		Company: "LinkShare"
	}, {
		Type: "analytics",
		URL: "erovinmo.com",
		Company: "LinkSmart"
	}, {
		Type: "other",
		URL: "linkwithin.com",
		Company: "LinkWithin"
	}, {
		Type: "ad",
		URL: "linkz.net",
		Company: "LinkZ"
	}, {
		Type: "tracker",
		URL: "listrakbi.com",
		Company: "Listrak"
	}, {
		Type: "tracker",
		URL: "listrak.com",
		Company: "Listrak"
	}, {
		Type: "ad",
		URL: "liveads.no",
		Company: "LiveAds"
	}, {
		Type: "analytics",
		URL: "ioninteractive.com",
		Company: "LiveBall"
	}, {
		Type: "analytics",
		URL: "livecounter.dk",
		Company: "Livecounter"
	}, {
		Type: "other",
		URL: "livefyre.com",
		Company: "Livefyre"
	}, {
		Type: "analytics",
		URL: "yadro.ru",
		Company: "LiveInternet"
	}, {
		Type: "other",
		URL: "liveperson.net",
		Company: "LivePerson"
	}, {
		Type: "ad",
		URL: "liverail.com",
		Company: "LiveRail"
	}, {
		Type: "tracker",
		URL: "livestream.com",
		Company: "Livestream"
	}, {
		Type: "other",
		URL: "addtoany.com",
		Company: "Lockerz"
	}, {
		Type: "analytics",
		URL: "logdy.com",
		Company: "Logdy"
	}, {
		Type: "tracker",
		URL: "loggly.com",
		Company: "Loggly"
	}, {
		Type: "ad",
		URL: "lomadee.com",
		Company: "Lomadee"
	}, {
		Type: "analytics",
		URL: "longtailmagic.com",
		Company: "Long Tail Magic"
	}, {
		Type: "analytics",
		URL: "jwpltx.com",
		Company: "LongTail Video"
	}, {
		Type: "tracker",
		URL: "loomia.com",
		Company: "Loomia"
	}, {
		Type: "tracker",
		URL: "lfov.net",
		Company: "LoopFuse OneView"
	}, {
		Type: "tracker",
		URL: "crwdcntrl.net",
		Company: "Lotame"
	}, {
		Type: "tracker",
		URL: "lotame.com",
		Company: "Lotame"
	}, {
		Type: "ad",
		URL: "lucidmedia.com",
		Company: "Lucid Media"
	}, {
		Type: "tracker",
		URL: "luckyorange.com",
		Company: "Lucky Orange"
	}, {
		Type: "tracker",
		URL: "livestatserver.com",
		Company: "Lucky Orange"
	}, {
		Type: "tracker",
		URL: "luminate.com",
		Company: "Luminate"
	}, {
		Type: "tracker",
		URL: "pixazza.com",
		Company: "Luminate"
	}, {
		Type: "analytics",
		URL: "adelixir.com",
		Company: "LXR100"
	}, {
		Type: "analytics",
		URL: "lypn.com",
		Company: "Lynchpin Analytics"
	}, {
		Type: "analytics",
		URL: "clicktracks.com",
		Company: "Lyris"
	}, {
		Type: "analytics",
		URL: "elabs5.com",
		Company: "Lyris"
	}, {
		Type: "analytics",
		URL: "lytiks.com",
		Company: "Lytiks"
	}, {
		Type: "ad",
		URL: "m4n.nl",
		Company: "M4N"
	}, {
		Type: "ad",
		URL: "madisonlogic.com",
		Company: "Madison Logic"
	}, {
		Type: "ad",
		URL: "dinclinx.com",
		Company: "Madison Logic"
	}, {
		Type: "ad",
		URL: "magna.ru",
		Company: "Magna Advertise"
	}, {
		Type: "tracker",
		URL: "domdex.net",
		Company: "Magnetic"
	}, {
		Type: "tracker",
		URL: "domdex.com",
		Company: "Magnetic"
	}, {
		Type: "tracker",
		URL: "qjex.net",
		Company: "Magnetic"
	}, {
		Type: "ad",
		URL: "magnetisemedia.com",
		Company: "Magnetise Group"
	}, {
		Type: "tracker",
		URL: "magnify.net",
		Company: "Magnify"
	}, {
		Type: "tracker",
		URL: "dialogmgr.com",
		Company: "Magnify360"
	}, {
		Type: "tracker",
		URL: "magnify360.com",
		Company: "Magnify360"
	}, {
		Type: "tracker",
		URL: "list.ru",
		Company: "Mail.ru"
	}, {
		Type: "tracker",
		URL: "ok.ru",
		Company: "Mail.ru"
	}, {
		Type: "tracker",
		URL: "odnoklassniki.ru",
		Company: "Mail.ru"
	}, {
		Type: "tracker",
		URL: "mail.ru",
		Company: "Mail.ru"
	}, {
		Type: "tracker",
		URL: "rambler.ru",
		Company: "Mail.ru"
	}, {
		Type: "tracker",
		URL: "mail.ru",
		Company: "Mail.ru"
	}, {
		Type: "tracker",
		URL: "list-manage.com",
		Company: "MailChimp"
	}, {
		Type: "tracker",
		URL: "list-manage1.com",
		Company: "MailChimp"
	}, {
		Type: "tracker",
		URL: "list-manage2.com",
		Company: "MailChimp"
	}, {
		Type: "tracker",
		URL: "list-manage3.com",
		Company: "MailChimp"
	}, {
		Type: "tracker",
		URL: "list-manage4.com",
		Company: "MailChimp"
	}, {
		Type: "tracker",
		URL: "list-manage5.com",
		Company: "MailChimp"
	}, {
		Type: "tracker",
		URL: "list-manage6.com",
		Company: "MailChimp"
	}, {
		Type: "tracker",
		URL: "list-manage7.com",
		Company: "MailChimp"
	}, {
		Type: "tracker",
		URL: "list-manage8.com",
		Company: "MailChimp"
	}, {
		Type: "tracker",
		URL: "list-manage9.com",
		Company: "MailChimp"
	}, {
		Type: "ad",
		URL: "loveadvert.ru",
		Company: "Mamba Play"
	}, {
		Type: "tracker",
		URL: "marinsm.com",
		Company: "Marin Software"
	}, {
		Type: "ad",
		URL: "markandmini.com",
		Company: "Mark & Mini"
	}, {
		Type: "ad",
		URL: "dt07.net",
		Company: "MarketGid"
	}, {
		Type: "ad",
		URL: "dt00.net",
		Company: "MarketGid"
	}, {
		Type: "tracker",
		URL: "marketo.net",
		Company: "Marketo"
	}, {
		Type: "tracker",
		URL: "mktoresp.com",
		Company: "Marketo"
	}, {
		Type: "tracker",
		URL: "mmstat.com",
		Company: "MarkMonitor"
	}, {
		Type: "analytics",
		URL: "marktest.pt",
		Company: "Marktest"
	}, {
		Type: "ad",
		URL: "martiniadnetwork.com",
		Company: "Martini Media"
	}, {
		Type: "other",
		URL: "mashlogic.com",
		Company: "MashLogic"
	}, {
		Type: "other",
		URL: "massrelevance.com",
		Company: "Mass Relevance"
	}, {
		Type: "ad",
		URL: "matchbin.com",
		Company: "Matchbin"
	}, {
		Type: "ad",
		URL: "matchbin.com",
		Company: "Matchbin"
	}, {
		Type: "ad",
		URL: "adsmarket.com",
		Company: "Matomy Market"
	}, {
		Type: "ad",
		URL: "maxlab.ru",
		Company: "Maxlab"
	}, {
		Type: "tracker",
		URL: "maxmind.com",
		Company: "MaxMind"
	}, {
		Type: "tracker",
		URL: "maxymiser.com",
		Company: "Maxymiser"
	}, {
		Type: "other",
		URL: "scanalert.com",
		Company: "McAfee Secure"
	}, {
		Type: "tracker",
		URL: "mconet.biz",
		Company: "MCOnet"
	}, {
		Type: "ad",
		URL: "meaningtool.com",
		Company: "MeaningTool"
	}, {
		Type: "tracker",
		URL: "mookie1.com",
		Company: "Media Innovation Group"
	}, {
		Type: "tracker",
		URL: "media6degrees.com",
		Company: "Media6Degrees"
	}, {
		Type: "tracker",
		URL: "adbuyer.com",
		Company: "MediaBank"
	}, {
		Type: "tracker",
		URL: "mediaforge.com",
		Company: "mediaForge"
	}, {
		Type: "ad",
		URL: "mediagra.com",
		Company: "Mediagra"
	}, {
		Type: "ad",
		URL: "fhserve.com",
		Company: "MediaHub"
	}, {
		Type: "ad",
		URL: "medialand.ru",
		Company: "Medialand"
	}, {
		Type: "tracker",
		URL: "mathtag.com",
		Company: "MediaMath"
	}, {
		Type: "tracker",
		URL: "mathads.com",
		Company: "MediaMath"
	}, {
		Type: "tracker",
		URL: "mediamath.com",
		Company: "MediaMath"
	}, {
		Type: "tracker",
		URL: "media6degrees.com",
		Company: "MediaMath"
	}, {
		Type: "tracker",
		URL: "serving-sys.com",
		Company: "MediaMind"
	}, {
		Type: "tracker",
		URL: "median.hu",
		Company: "Median"
	}, {
		Type: "tracker",
		URL: "mediaplex.com",
		Company: "Mediaplex"
	}, {
		Type: "ad",
		URL: "media-servers.net",
		Company: "MediaShakers"
	}, {
		Type: "ad",
		URL: "mediav.com",
		Company: "MediaV"
	}, {
		Type: "ad",
		URL: "adnetinteractive.net",
		Company: "Mediawhiz"
	}, {
		Type: "ad",
		URL: "adnetinteractive.com",
		Company: "Mediawhiz"
	}, {
		Type: "ad",
		URL: "medleyads.com",
		Company: "Medley"
	}, {
		Type: "ad",
		URL: "e-kolay.net",
		Company: "MedyaNet"
	}, {
		Type: "ad",
		URL: "meebo.com",
		Company: "Meebo"
	}, {
		Type: "analytics",
		URL: "de.com",
		Company: "Meetrics"
	}, {
		Type: "analytics",
		URL: "meetrics.net",
		Company: "Meetrics"
	}, {
		Type: "analytics",
		URL: "megaindex.ru",
		Company: "MegaIndex"
	}, {
		Type: "ad",
		URL: "mercent.com",
		Company: "Mercent"
	}, {
		Type: "tracker",
		URL: "merchantadvantage.com",
		Company: "MerchantAdvantage"
	}, {
		Type: "ad",
		URL: "merchenta.com",
		Company: "Merchenta"
	}, {
		Type: "ad",
		URL: "metanetwork.com",
		Company: "Meta Network"
	}, {
		Type: "tracker",
		URL: "meteorsolutions.com",
		Company: "Meteor Solutions"
	}, {
		Type: "ad",
		URL: "metrigo.com",
		Company: "Metrigo"
	}, {
		Type: "tracker",
		URL: "metriweb.be",
		Company: "MetriWeb"
	}, {
		Type: "ad",
		URL: "microad.jp",
		Company: "MicroAd"
	}, {
		Type: "ad",
		URL: "microadinc.com",
		Company: "MicroAd"
	}, {
		Type: "tracker",
		URL: "atdmt.com",
		Company: "Microsoft"
	}, {
		Type: "tracker",
		URL: "adbureau.net",
		Company: "Microsoft"
	}, {
		Type: "tracker",
		URL: "msads.net",
		Company: "Microsoft"
	}, {
		Type: "tracker",
		URL: "s-msn.com",
		Company: "Microsoft"
	}, {
		Type: "tracker",
		URL: "msn.com",
		Company: "Microsoft"
	}, {
		Type: "tracker",
		URL: "live.com",
		Company: "Microsoft"
	}, {
		Type: "ad",
		URL: "mmismm.com",
		Company: "Mindset Media"
	}, {
		Type: "tracker",
		URL: "mvtracker.com",
		Company: "MindViz Tracker"
	}, {
		Type: "analytics",
		URL: "minewhat.com",
		Company: "MineWhat"
	}, {
		Type: "tracker",
		URL: "mirando.de",
		Company: "Mirando"
	}, {
		Type: "analytics",
		URL: "mxpnl.com",
		Company: "MixPanel"
	}, {
		Type: "analytics",
		URL: "api.mixpanel.com",
		Company: "MixPanel"
	}, {
		Type: "tracker",
		URL: "mlnadvertising.com",
		Company: "MLN Advertising"
	}, {
		Type: "ad",
		URL: "moatads.com",
		Company: "Moat"
	}, {
		Type: "ad",
		URL: "mobify.com",
		Company: "Mobify"
	}, {
		Type: "tracker",
		URL: "mobilemeteor.com",
		Company: "Mobile Meteor"
	}, {
		Type: "tracker",
		URL: "showmeinn.com",
		Company: "Mobile Meteor"
	}, {
		Type: "ad",
		URL: "mobiletheory.com",
		Company: "Mobile Theory"
	}, {
		Type: "analytics",
		URL: "teljari.is",
		Company: "Modernus"
	}, {
		Type: "analytics",
		URL: "monetate.net",
		Company: "Monetate"
	}, {
		Type: "analytics",
		URL: "mongoosemetrics.com",
		Company: "Mongoose Metrics"
	}, {
		Type: "analytics",
		URL: "monitis.com",
		Company: "Monitis"
	}, {
		Type: "tracker",
		URL: "monitus.net",
		Company: "Monitus"
	}, {
		Type: "tracker",
		URL: "monitus.com",
		Company: "Monitus"
	}, {
		Type: "tracker",
		URL: "moon-ray.com",
		Company: "Moonray Autopilot"
	}, {
		Type: "tracker",
		URL: "moonraymarketing.com",
		Company: "Moonray Autopilot"
	}, {
		Type: "analytics",
		URL: "nedstatbasic.net",
		Company: "Motigo Webstats"
	}, {
		Type: "analytics",
		URL: "motigo.com",
		Company: "Motigo Webstats"
	}, {
		Type: "analytics",
		URL: "mouseflow.com",
		Company: "Mouseflow"
	}, {
		Type: "tracker",
		URL: "mousetrace.com",
		Company: "MouseTrace"
	}, {
		Type: "analytics",
		URL: "mvb.me",
		Company: "Movable Media"
	}, {
		Type: "ad",
		URL: "MSN.com",
		Company: "MSN"
	}, {
		Type: "ad",
		URL: "msn.com",
		Company: "MSN Ads"
	}, {
		Type: "tracker",
		URL: "musculahq.appspot.com",
		Company: "Muscula"
	}, {
		Type: "analytics",
		URL: "mybloglog.com",
		Company: "MyBlogLog"
	}, {
		Type: "ad",
		URL: "mybuys.com",
		Company: "MyBuys"
	}, {
		Type: "analytics",
		URL: "mycounter.ua",
		Company: "MyCounter.ua"
	}, {
		Type: "analytics",
		URL: "mycounter.com.ua",
		Company: "MyCounter.ua"
	}, {
		Type: "analytics",
		URL: "mypagerank.net",
		Company: "MyPagerank"
	}, {
		Type: "analytics",
		URL: "mystat.hu",
		Company: "MyStat"
	}, {
		Type: "tracker",
		URL: "mythings.com",
		Company: "myThings"
	}, {
		Type: "tracker",
		URL: "mystat-in.net",
		Company: "Mytop Counter"
	}, {
		Type: "ad",
		URL: "nabbr.com",
		Company: "Nabbr"
	}, {
		Type: "analytics",
		URL: "nakanohito.jp",
		Company: "Nakanohito"
	}, {
		Type: "ad",
		URL: "nanigans.com",
		Company: "Nanigans"
	}, {
		Type: "other",
		URL: "nanorep.com",
		Company: "nanoRep"
	}, {
		Type: "analytics",
		URL: "navegg.com",
		Company: "Navegg"
	}, {
		Type: "analytics",
		URL: "navdmp.com",
		Company: "Navegg"
	}, {
		Type: "analytics",
		URL: "newsinc.com",
		Company: "NDN Analytics"
	}, {
		Type: "analytics",
		URL: "sitestat.com",
		Company: "NedStat"
	}, {
		Type: "analytics",
		URL: "nedstat.com",
		Company: "NedStat"
	}, {
		Type: "other",
		URL: "needle.com",
		Company: "Needle"
	}, {
		Type: "ad",
		URL: "neodatagroup.com",
		Company: "Neodata"
	}, {
		Type: "ad",
		URL: "netcommunities.com",
		Company: "Net Communities"
	}, {
		Type: "ad",
		URL: "netaffiliation.com",
		Company: "NetAffiliation"
	}, {
		Type: "ad",
		URL: "metaffiliation.com",
		Company: "NetAffiliation"
	}, {
		Type: "tracker",
		URL: "netbina.com",
		Company: "NetBina"
	}, {
		Type: "tracker",
		URL: "netmining.com",
		Company: "Netmining"
	}, {
		Type: "tracker",
		URL: "netmng.com",
		Company: "Netmining"
	}, {
		Type: "analytics",
		URL: "netmonitor.fi",
		Company: "NetMonitor"
	}, {
		Type: "analytics",
		URL: "imrworldwide.com",
		Company: "NetRatings "
	}, {
		Type: "analytics",
		URL: "dz.glanceguide.com",
		Company: "NetRatings "
	}, {
		Type: "tracker",
		URL: "cdnma.com",
		Company: "Net-Results"
	}, {
		Type: "tracker",
		URL: "nr7.us",
		Company: "Net-Results"
	}, {
		Type: "tracker",
		URL: "netseer.com",
		Company: "NetSeer"
	}, {
		Type: "ad",
		URL: "netshelter.net",
		Company: "NetShelter"
	}, {
		Type: "analytics",
		URL: "netupdater.info",
		Company: "NetUpdater"
	}, {
		Type: "analytics",
		URL: "netupdater0.de",
		Company: "NetUpdater"
	}, {
		Type: "analytics",
		URL: "netupdater1.de",
		Company: "NetUpdater"
	}, {
		Type: "analytics",
		URL: "netupdater2.de",
		Company: "NetUpdater"
	}, {
		Type: "analytics",
		URL: "netupdater3.de",
		Company: "NetUpdater"
	}, {
		Type: "analytics",
		URL: "netupdater4.de",
		Company: "NetUpdater"
	}, {
		Type: "analytics",
		URL: "netupdater5.de",
		Company: "NetUpdater"
	}, {
		Type: "analytics",
		URL: "netupdater6.de",
		Company: "NetUpdater"
	}, {
		Type: "analytics",
		URL: "netupdater7.de",
		Company: "NetUpdater"
	}, {
		Type: "analytics",
		URL: "netupdater8.de",
		Company: "NetUpdater"
	}, {
		Type: "analytics",
		URL: "netupdater9.de",
		Company: "NetUpdater"
	}, {
		Type: "other",
		URL: "networkedblogs.com",
		Company: "NetworkedBlogs"
	}, {
		Type: "tracker",
		URL: "neustar.biz",
		Company: "Neustar"
	}, {
		Type: "tracker",
		URL: "adadvisor.com",
		Company: "Neustar"
	}, {
		Type: "tracker",
		URL: "localeze.biz",
		Company: "Neustar"
	}, {
		Type: "tracker",
		URL: "targetinfo.com",
		Company: "Neustar"
	}, {
		Type: "tracker",
		URL: "adadvisor.net",
		Company: "Neustar"
	}, {
		Type: "analytics",
		URL: "d1ros97qkrwjf5.cloudfront.net",
		Company: "New Relic"
	}, {
		Type: "analytics",
		URL: "newrelic.com",
		Company: "New Relic"
	}, {
		Type: "analytics",
		URL: "apnewsregistry.com",
		Company: "News Registry"
	}, {
		Type: "other",
		URL: "newstogram.com",
		Company: "Newstogram"
	}, {
		Type: "ad",
		URL: "newtention.net",
		Company: "Newtention"
	}, {
		Type: "ad",
		URL: "newtentionassets.net",
		Company: "Newtention"
	}, {
		Type: "ad",
		URL: "newtention.net",
		Company: "Newtention"
	}, {
		Type: "ad",
		URL: "nexage.com",
		Company: "Nexage"
	}, {
		Type: "tracker",
		URL: "nextjump.com",
		Company: "Next Jump Tracker"
	}, {
		Type: "tracker",
		URL: "nxtck.com",
		Company: "Next Performance"
	}, {
		Type: "ad",
		URL: "nexac.com",
		Company: "NextAction"
	}, {
		Type: "tracker",
		URL: "nextag.com",
		Company: "Nextag"
	}, {
		Type: "analytics",
		URL: "nextstat.com",
		Company: "NextSTAT"
	}, {
		Type: "analytics",
		URL: "shinobi.jp",
		Company: "Ninja Access Analysis"
	}, {
		Type: "analytics",
		URL: "donburako.com",
		Company: "Ninja Access Analysis"
	}, {
		Type: "analytics",
		URL: "cho-chin.com",
		Company: "Ninja Access Analysis"
	}, {
		Type: "analytics",
		URL: "hishaku.com",
		Company: "Ninja Access Analysis"
	}, {
		Type: "other",
		URL: "nk.pl",
		Company: "NK.pl"
	}, {
		Type: "tracker",
		URL: "trkme.net",
		Company: "nonstop Consulting"
	}, {
		Type: "tracker",
		URL: "npario-inc.net",
		Company: "nPario"
	}, {
		Type: "other",
		URL: "nrelate.com",
		Company: "nRelate"
	}, {
		Type: "analytics",
		URL: "nuconomy.com",
		Company: "Nuconomy"
	}, {
		Type: "ad",
		URL: "nuffnang.com",
		Company: "Nuffnang"
	}, {
		Type: "ad",
		URL: "nuggad.net",
		Company: "Nugg.Ad"
	}, {
		Type: "analytics",
		URL: "observerapp.com",
		Company: "Observer"
	}, {
		Type: "ad",
		URL: "adohana.com",
		Company: "Ohana Advertising Network"
	}, {
		Type: "other",
		URL: "olark.com",
		Company: "Olark"
	}, {
		Type: "ad",
		URL: "omgpm.com",
		Company: "OMG"
	}, {
		Type: "analytics",
		URL: "onestat.com",
		Company: "OneStat"
	}, {
		Type: "other",
		URL: "onetruefan.com",
		Company: "OneTrueFan"
	}, {
		Type: "analytics",
		URL: "onlinewebstats.com",
		Company: "Onlinewebstat"
	}, {
		Type: "ad",
		URL: "openadex.dk",
		Company: "Open AdExchange"
	}, {
		Type: "analytics",
		URL: "spylog.com",
		Company: "Openstat"
	}, {
		Type: "analytics",
		URL: "spylog.ru",
		Company: "Openstat"
	}, {
		Type: "analytics",
		URL: "openstat.net",
		Company: "Openstat"
	}, {
		Type: "analytics",
		URL: "opentracker.net",
		Company: "Opentracker"
	}, {
		Type: "ad",
		URL: "openx.net",
		Company: "OpenX"
	}, {
		Type: "ad",
		URL: "openx.org",
		Company: "OpenX"
	}, {
		Type: "ad",
		URL: "openxenterprise.com",
		Company: "OpenX"
	}, {
		Type: "ad",
		URL: "adsummos.net",
		Company: "Operative Media"
	}, {
		Type: "tracker",
		URL: "optify.net",
		Company: "Optify"
	}, {
		Type: "tracker",
		URL: "nprove.com",
		Company: "Optim.al"
	}, {
		Type: "tracker",
		URL: "cpmadvisors.com",
		Company: "Optim.al"
	}, {
		Type: "tracker",
		URL: "orbengine.com",
		Company: "Optim.al"
	}, {
		Type: "ad",
		URL: "optmd.com",
		Company: "Optimax Media Delivery"
	}, {
		Type: "tracker",
		URL: "optimizely.com",
		Company: "Optimizely"
	}, {
		Type: "analytics",
		URL: "optimost.com",
		Company: "Optimost"
	}, {
		Type: "tracker",
		URL: "instantservice.com",
		Company: "Oracle"
	}, {
		Type: "tracker",
		URL: "estara.com",
		Company: "Oracle"
	}, {
		Type: "other",
		URL: "istrack.com",
		Company: "Oracle Live Help"
	}, {
		Type: "analytics",
		URL: "otracking.com",
		Company: "OrangeSoda"
	}, {
		Type: "ad",
		URL: "othersonline.com",
		Company: "Others Online"
	}, {
		Type: "tracker",
		URL: "outbrain.com",
		Company: "Outbrain"
	}, {
		Type: "analytics",
		URL: "oewabox.at",
		Company: "OWA"
	}, {
		Type: "tracker",
		URL: "owneriq.net",
		Company: "OwnerIQ"
	}, {
		Type: "ad",
		URL: "adconnexa.com",
		Company: "OxaMedia"
	}, {
		Type: "ad",
		URL: "ozonemedia.com",
		Company: "Ozone Media"
	}, {
		Type: "ad",
		URL: "777seo.com",
		Company: "Paid-To-Promote"
	}, {
		Type: "ad",
		URL: "paid-to-promote.net",
		Company: "Paid-To-Promote"
	}, {
		Type: "tracker",
		URL: "pardot.com",
		Company: "Pardot"
	}, {
		Type: "tracker",
		URL: "parsely.com",
		Company: "Parse.ly"
	}, {
		Type: "ad",
		URL: "partner-ads.com",
		Company: "Partner-Ads"
	}, {
		Type: "ad",
		URL: "payclick.it",
		Company: "PayClick"
	}, {
		Type: "tracker",
		URL: "peer39.net",
		Company: "Peer39"
	}, {
		Type: "tracker",
		URL: "peerius.com",
		Company: "Peerius"
	}, {
		Type: "tracker",
		URL: "keewurd.com",
		Company: "Peerset"
	}, {
		Type: "ad",
		URL: "pntrs.com",
		Company: "Pepperjam"
	}, {
		Type: "ad",
		URL: "pntrac.com",
		Company: "Pepperjam"
	}, {
		Type: "ad",
		URL: "pntra.com",
		Company: "Pepperjam"
	}, {
		Type: "ad",
		URL: "pjtra.com",
		Company: "Pepperjam"
	}, {
		Type: "ad",
		URL: "gopjn.com",
		Company: "Pepperjam"
	}, {
		Type: "ad",
		URL: "pjatr.com",
		Company: "Pepperjam"
	}, {
		Type: "analytics",
		URL: "percentmobile.com",
		Company: "PercentMobile"
	}, {
		Type: "ad",
		URL: "perfectaudience.com",
		Company: "Perfect Audience"
	}, {
		Type: "ad",
		URL: "performancing.com",
		Company: "Performancing"
	}, {
		Type: "tracker",
		URL: "persianstat.com",
		Company: "PersianStat"
	}, {
		Type: "other",
		URL: "personyze.com",
		Company: "Personyze"
	}, {
		Type: "ad",
		URL: "pheedo.com",
		Company: "Pheedo"
	}, {
		Type: "analytics",
		URL: "phonalytics.com",
		Company: "Phonalytics"
	}, {
		Type: "tracker",
		URL: "pingdom.net",
		Company: "Pingdom"
	}, {
		Type: "other",
		URL: "pinterest.com",
		Company: "Pinterest"
	}, {
		Type: "ad",
		URL: "pirchio.com",
		Company: "Pirchio"
	}, {
		Type: "ad",
		URL: "pixfuture.net",
		Company: "PixFuture"
	}, {
		Type: "ad",
		URL: "piximedia.com",
		Company: "Piximedia"
	}, {
		Type: "ad",
		URL: "creative-serving.com",
		Company: "Platform161"
	}, {
		Type: "ad",
		URL: "p161.net",
		Company: "Platform161"
	}, {
		Type: "ad",
		URL: "plista.com",
		Company: "Plista"
	}, {
		Type: "ad",
		URL: "plugrush.com",
		Company: "PlugRush"
	}, {
		Type: "tracker",
		URL: "po.st",
		Company: "Po.st"
	}, {
		Type: "ad",
		URL: "pocketcents.com",
		Company: "PocketCents"
	}, {
		Type: "tracker",
		URL: "pointroll.com",
		Company: "Pointroll"
	}, {
		Type: "other",
		URL: "polldaddy.com",
		Company: "Polldaddy"
	}, {
		Type: "ad",
		URL: "polyad.net",
		Company: "PolyAd"
	}, {
		Type: "ad",
		URL: "popads.net",
		Company: "PopAds"
	}, {
		Type: "ad",
		URL: "popadscdn.net",
		Company: "PopAds"
	}, {
		Type: "ad",
		URL: "yazcash.com",
		Company: "Pornvertising"
	}, {
		Type: "ad",
		URL: "zeusclciks.com",
		Company: "Pornvertising"
	}, {
		Type: "ad",
		URL: "promoserv.com",
		Company: "Pornvertising"
	}, {
		Type: "ad",
		URL: "dothads.com",
		Company: "Pornvertising"
	}, {
		Type: "ad",
		URL: "advivi.com",
		Company: "Pornvertising"
	}, {
		Type: "ad",
		URL: "adsbookie.com",
		Company: "Pornvertising"
	}, {
		Type: "ad",
		URL: "trafficfactory.biz",
		Company: "Pornvertising"
	}, {
		Type: "tracker",
		URL: "postaffiliatepro.com",
		Company: "Post Affiliate Pro"
	}, {
		Type: "ad",
		URL: "powerlinks.com",
		Company: "PowerLinks"
	}, {
		Type: "ad",
		URL: "ghmedia.com",
		Company: "Precision Health Media"
	}, {
		Type: "ad",
		URL: "precisionclick.com",
		Company: "PrecisionClick"
	}, {
		Type: "ad",
		URL: "lucidcommerce.com",
		Company: "PrecisionDemand"
	}, {
		Type: "ad",
		URL: "adserver.com.br",
		Company: "Predicta"
	}, {
		Type: "tracker",
		URL: "predictiveintent.com",
		Company: "PredictiveIntent"
	}, {
		Type: "other",
		URL: "ppjol.net",
		Company: "Press Plus"
	}, {
		Type: "other",
		URL: "ppjol.com",
		Company: "Press Plus"
	}, {
		Type: "tracker",
		URL: "plssl.com",
		Company: "PressLabs"
	}, {
		Type: "ad",
		URL: "pricegrabber.com",
		Company: "PriceGrabber"
	}, {
		Type: "ad",
		URL: "prismamediadigital.com",
		Company: "Prisma Media Digital"
	}, {
		Type: "tracker",
		URL: "pswec.com",
		Company: "Proclivity"
	}, {
		Type: "ad",
		URL: "projectwonderful.com",
		Company: "Project Wonderful"
	}, {
		Type: "ad",
		URL: "promodity.com",
		Company: "Promodity"
	}, {
		Type: "ad",
		URL: "promodity.appspot.com",
		Company: "Promodity"
	}, {
		Type: "ad",
		URL: "prosperent.com",
		Company: "Prosperent"
	}, {
		Type: "other",
		URL: "providesupport.com",
		Company: "Provide Support"
	}, {
		Type: "tracker",
		URL: "Proximic.com",
		Company: "Proximic"
	}, {
		Type: "ad",
		URL: "pubdirecte.com",
		Company: "Pubdirecte"
	}, {
		Type: "ad",
		URL: "pubgears.com",
		Company: "PubGears"
	}, {
		Type: "tracker",
		URL: "publicidees.com",
		Company: "Public Ideas"
	}, {
		Type: "ad",
		URL: "publicidad.net",
		Company: "Publicidad.net"
	}, {
		Type: "ad",
		URL: "publiclix.com",
		Company: "Publiclix"
	}, {
		Type: "analytics",
		URL: "s3.amazonaws.com/publishflow",
		Company: "PublishFlow"
	}, {
		Type: "analytics",
		URL: "publishflow.com",
		Company: "PublishFlow"
	}, {
		Type: "tracker",
		URL: "pubmatic.com",
		Company: "PubMatic"
	}, {
		Type: "ad",
		URL: "pulse360.com",
		Company: "Pulse360"
	}, {
		Type: "other",
		URL: "punchtab.com",
		Company: "PunchTab"
	}, {
		Type: "analytics",
		URL: "qcri.org",
		Company: "QCRI Analytics"
	}, {
		Type: "other",
		URL: "qrius.me",
		Company: "Qrius"
	}, {
		Type: "tracker",
		URL: "quantserve.com",
		Company: "Quantcast"
	}, {
		Type: "tracker",
		URL: "quantcast.com",
		Company: "Quantcast"
	}, {
		Type: "tracker",
		URL: "quantserve.com",
		Company: "Quantcast"
	}, {
		Type: "tracker",
		URL: "qubitproducts.com",
		Company: "Qubit"
	}, {
		Type: "tracker",
		URL: "easyresearch.se",
		Company: "Questback"
	}, {
		Type: "tracker",
		URL: "quick-counter.net",
		Company: "Quick-counter.net"
	}, {
		Type: "tracker",
		URL: "adsonar.com",
		Company: "Advertising.com (AOL)"
	}, {
		Type: "ad",
		URL: "qnsr.com",
		Company: "Quinn Street"
	}, {
		Type: "ad",
		URL: "thecounter.com",
		Company: "Quinn Street"
	}, {
		Type: "tracker",
		URL: "quintelligence.com",
		Company: "Quintelligence"
	}, {
		Type: "tracker",
		URL: "quisma.com",
		Company: "Quisma"
	}, {
		Type: "tracker",
		URL: "qservz.com",
		Company: "Quisma"
	}, {
		Type: "ad",
		URL: "r66t.com",
		Company: "R66T Advertising"
	}, {
		Type: "other",
		URL: "radarstats.com",
		Company: "RadarStats"
	}, {
		Type: "analytics",
		URL: "radarurl.com",
		Company: "RadarURL"
	}, {
		Type: "tracker",
		URL: "gwallet.com",
		Company: "RadiumOne"
	}, {
		Type: "tracker",
		URL: "rapleaf.com",
		Company: "RapLeaf"
	}, {
		Type: "tracker",
		URL: "rlcdn.com",
		Company: "RapLeaf"
	}, {
		Type: "tracker",
		URL: "rfsoao.com",
		Company: "Razorfish"
	}, {
		Type: "tracker",
		URL: "rbc.ru",
		Company: "RBC"
	}, {
		Type: "ad",
		URL: "rlcdn.net",
		Company: "ReachLocal"
	}, {
		Type: "ad",
		URL: "reachlocal.com",
		Company: "ReachLocal"
	}, {
		Type: "analytics",
		URL: "webspectator.com",
		Company: "Realtime"
	}, {
		Type: "ad",
		URL: "realvu.net",
		Company: "RealVu"
	}, {
		Type: "ad",
		URL: "recreativ.ru",
		Company: "Recreativ"
	}, {
		Type: "other",
		URL: "reddit.com",
		Company: "Reddit"
	}, {
		Type: "ad",
		URL: "grt01.com",
		Company: "RedTram"
	}, {
		Type: "ad",
		URL: "redtram.com",
		Company: "RedTram"
	}, {
		Type: "ad",
		URL: "reduxmedia.com",
		Company: "Redux Media"
	}, {
		Type: "ad",
		URL: "redintelligence.net",
		Company: "redvertisment"
	}, {
		Type: "ad",
		URL: "referlocal.com",
		Company: "ReferLocal"
	}, {
		Type: "tracker",
		URL: "refinedads.com",
		Company: "Refined Labs"
	}, {
		Type: "analytics",
		URL: "reinvigorate.net",
		Company: "Reinvigorate"
	}, {
		Type: "ad",
		URL: "reklamstore.com",
		Company: "Reklam Store"
	}, {
		Type: "ad",
		URL: "reklamport.com",
		Company: "Reklamport"
	}, {
		Type: "ad",
		URL: "delivery.reklamz.com",
		Company: "ReklamZ"
	}, {
		Type: "other",
		URL: "rp-api.com",
		Company: "Repost.us"
	}, {
		Type: "tracker",
		URL: "iesnare.com",
		Company: "ReputationManager"
	}, {
		Type: "ad",
		URL: "reson8.com",
		Company: "Resonate Networks"
	}, {
		Type: "ad",
		URL: "respondhq.com",
		Company: "Respond"
	}, {
		Type: "tracker",
		URL: "rsys4.net",
		Company: "Responsys"
	}, {
		Type: "ad",
		URL: "data.resultlinks.com",
		Company: "Result Links"
	}, {
		Type: "tracker",
		URL: "retargeter.com",
		Company: "ReTargeter"
	}, {
		Type: "ad",
		URL: "clkads.com",
		Company: "RevenueHits"
	}, {
		Type: "tracker",
		URL: "revenuemantra.com",
		Company: "RevenueMantra"
	}, {
		Type: "ad",
		URL: "revenuemax.de",
		Company: "RevenueMax"
	}, {
		Type: "other",
		URL: "revolvermaps.com",
		Company: "Revolver Maps"
	}, {
		Type: "ad",
		URL: "rmbn.ru",
		Company: "Rich Media Banner Network"
	}, {
		Type: "tracker",
		URL: "realvu.net",
		Company: "Rich Media"
	}, {
		Type: "analytics",
		URL: "richmetrics.com",
		Company: "Rich Metrics"
	}, {
		Type: "analytics",
		URL: "d3q6px0y2suh5n.cloudfront.net",
		Company: "Rich Metrics"
	}, {
		Type: "analytics",
		URL: "rich-agent.s3.amazonaws.com",
		Company: "Rich Metrics"
	}, {
		Type: "tracker",
		URL: "richrelevance.com",
		Company: "Rich Relevance"
	}, {
		Type: "ad",
		URL: "yieldmanager.net",
		Company: "Right Media"
	}, {
		Type: "ad",
		URL: "yieldmanager.com",
		Company: "Right Media"
	}, {
		Type: "ad",
		URL: "rmxads.com",
		Company: "Right Media"
	}, {
		Type: "ad",
		URL: "thewheelof.com",
		Company: "Right Media"
	}, {
		Type: "ad",
		URL: "yldmgrimg.net",
		Company: "Right Media"
	}, {
		Type: "ad",
		URL: "yieldmanager.com",
		Company: "Right Media"
	}, {
		Type: "ad",
		URL: "yieldmanager.net",
		Company: "Right Media"
	}, {
		Type: "ad",
		URL: "yieldmanager.com",
		Company: "Right Media"
	}, {
		Type: "ad",
		URL: "doubleclick.net",
		Company: "Right Media"
	}, {
		Type: "tracker",
		URL: "rightwave.com",
		Company: "RightWave"
	}, {
		Type: "ad",
		URL: "rvty.net",
		Company: "Rivity"
	}, {
		Type: "tracker",
		URL: "rkdms.com",
		Company: "RKG"
	}, {
		Type: "tracker",
		URL: "rfihub.com",
		Company: "Rocket Fuel"
	}, {
		Type: "tracker",
		URL: "rfihub.net",
		Company: "Rocket Fuel"
	}, {
		Type: "tracker",
		URL: "sodoit.com",
		Company: "ROI trax"
	}, {
		Type: "tracker",
		URL: "roitrax.com",
		Company: "ROI trax"
	}, {
		Type: "ad",
		URL: "rollad.ru",
		Company: "Rollad"
	}, {
		Type: "ad",
		URL: "rovion.com",
		Company: "Rovion"
	}, {
		Type: "tracker",
		URL: "rsspump.com",
		Company: "RSSPump"
	}, {
		Type: "ad",
		URL: "mobsmith.com",
		Company: "Rubicon Project"
	}, {
		Type: "ad",
		URL: "nearbyad.com",
		Company: "Rubicon Project"
	}, {
		Type: "ad",
		URL: "rubiconproject.com",
		Company: "Rubicon Project"
	}, {
		Type: "tracker",
		URL: "rutarget.ru",
		Company: "rutarget"
	}, {
		Type: "analytics",
		URL: "sageanalyst.net",
		Company: "SageMetrics"
	}, {
		Type: "tracker",
		URL: "sail-horizon.com",
		Company: "Sailthru Horizon"
	}, {
		Type: "ad",
		URL: "app.salecycle.com",
		Company: "SaleCycle"
	}, {
		Type: "tracker",
		URL: "salesforce.com",
		Company: "Salesforce"
	}, {
		Type: "other",
		URL: "liveagentforsalesforce.com",
		Company: "Salesforce"
	}, {
		Type: "tracker",
		URL: "msgapp.com",
		Company: "SalesFusion"
	}, {
		Type: "ad",
		URL: "sanoma.fi",
		Company: "Sanoma"
	}, {
		Type: "tracker",
		URL: "bridgetrack.com",
		Company: "Sapient Corporation"
	}, {
		Type: "tracker",
		URL: "aimatch.com",
		Company: "SAS"
	}, {
		Type: "tracker",
		URL: "saymedia.com",
		Company: "SAY Media"
	}, {
		Type: "tracker",
		URL: "videoegg.com",
		Company: "SAY Media"
	}, {
		Type: "ad",
		URL: "eniro.com",
		Company: "Scandinavian Ad Networks"
	}, {
		Type: "tracker",
		URL: "securestudies.com",
		Company: "ScoreCard Research"
	}, {
		Type: "tracker",
		URL: "scoreresearch.com",
		Company: "ScoreCard Research"
	}, {
		Type: "tracker",
		URL: "scorecardresearch.com",
		Company: "ScoreCard Research"
	}, {
		Type: "analytics",
		URL: "scoutanalytics.net",
		Company: "Scout Analytics"
	}, {
		Type: "ad",
		URL: "scribefire.com",
		Company: "ScribeFire QuickAds"
	}, {
		Type: "other",
		URL: "scribol.com",
		Company: "Scribol"
	}, {
		Type: "ad",
		URL: "scrippsnetworks.com",
		Company: "Scripps Networks"
	}, {
		Type: "ad",
		URL: "scupio.com",
		Company: "Scupio"
	}, {
		Type: "tracker",
		URL: "searchforce.net",
		Company: "SearchForce"
	}, {
		Type: "analytics",
		URL: "searchignite.com",
		Company: "SearchIgnite"
	}, {
		Type: "tracker",
		URL: "srtk.net",
		Company: "SearchRev"
	}, {
		Type: "tracker",
		URL: "securedvisit.com",
		Company: "SecuredVisit"
	}, {
		Type: "analytics",
		URL: "svlu.net",
		Company: "SeeVolution"
	}, {
		Type: "analytics",
		URL: "segment.io",
		Company: "Segment.io"
	}, {
		Type: "analytics",
		URL: "d47xnnr8b1rki.cloudfront.net",
		Company: "Segment.io"
	}, {
		Type: "ad",
		URL: "sekindo.com",
		Company: "Sekindo"
	}, {
		Type: "tracker",
		URL: "semasio.net",
		Company: "Semasio"
	}, {
		Type: "ad",
		URL: "semilo.com",
		Company: "Semilo"
	}, {
		Type: "tracker",
		URL: "sensic.net",
		Company: "SenSic.net"
	}, {
		Type: "ad",
		URL: "sexad.net",
		Company: "SexAdNetwork"
	}, {
		Type: "ad",
		URL: "sexinyourcity.com",
		Company: "SexInYourCity"
	}, {
		Type: "tracker",
		URL: "sextracker.com",
		Company: "SexTracker"
	}, {
		Type: "other",
		URL: "shareaholic.com",
		Company: "Shareaholic"
	}, {
		Type: "ad",
		URL: "shareasale.com",
		Company: "ShareASale"
	}, {
		Type: "other",
		URL: "sharethis.com",
		Company: "ShareThis"
	}, {
		Type: "ad",
		URL: "shareth.ru",
		Company: "ShareThrough"
	}, {
		Type: "analytics",
		URL: "shinystat.com",
		Company: "ShinyStat"
	}, {
		Type: "analytics",
		URL: "shinystat.it",
		Company: "ShinyStat"
	}, {
		Type: "tracker",
		URL: "shop2market.com",
		Company: "Shop2market"
	}, {
		Type: "tracker",
		URL: "shopify.com",
		Company: "Shopify"
	}, {
		Type: "ad",
		URL: "shopzilla.com",
		Company: "Shopzilla"
	}, {
		Type: "ad",
		URL: "mkt51.net",
		Company: "Silverpop"
	}, {
		Type: "ad",
		URL: "pages05.net",
		Company: "Silverpop"
	}, {
		Type: "ad",
		URL: "vtrenz.net",
		Company: "Silverpop"
	}, {
		Type: "ad",
		URL: "simpleadserver.org",
		Company: "Simple AdServer"
	}, {
		Type: "ad",
		URL: "simpleadserver.net",
		Company: "Simple AdServer"
	}, {
		Type: "tracker",
		URL: "simplereach.com",
		Company: "SimpleReach"
	}, {
		Type: "ad",
		URL: "simpli.fi",
		Company: "Simpli.fi"
	}, {
		Type: "ad",
		URL: "simply.com",
		Company: "Simply"
	}, {
		Type: "analytics",
		URL: "singlefeed.com",
		Company: "SingleFeed"
	}, {
		Type: "analytics",
		URL: "sitebro.tw",
		Company: "SiteBro"
	}, {
		Type: "analytics",
		URL: "sitebro.com",
		Company: "SiteBro"
	}, {
		Type: "analytics",
		URL: "sitebro.net",
		Company: "SiteBro"
	}, {
		Type: "other",
		URL: "siteheart.com",
		Company: "SiteHeart"
	}, {
		Type: "tracker",
		URL: "siteimprove.com",
		Company: "Siteimprove"
	}, {
		Type: "analytics",
		URL: "sitemeter.com",
		Company: "SiteMeter"
	}, {
		Type: "tracker",
		URL: "sitescout.com",
		Company: "SiteScout"
	}, {
		Type: "ad",
		URL: "sixapart.com",
		Company: "Six Apart"
	}, {
		Type: "tracker",
		URL: "skimresources.com",
		Company: "Skimbit Ltd"
	}, {
		Type: "ad",
		URL: "skimlinks.com",
		Company: "SkimLinks"
	}, {
		Type: "ad",
		URL: "skimresources.com",
		Company: "SkimLinks"
	}, {
		Type: "analytics",
		URL: "skribit.com",
		Company: "Skribit"
	}, {
		Type: "other",
		URL: "skylines.io",
		Company: "Skylines"
	}, {
		Type: "analytics",
		URL: "skytide.com",
		Company: "SkyTide Anlaytics"
	}, {
		Type: "other",
		URL: "extensionfactory.com",
		Company: "Slice Factory"
	}, {
		Type: "ad",
		URL: "smartadserver.com",
		Company: "Smart AdServer"
	}, {
		Type: "ad",
		URL: "yoc-adserver.com",
		Company: "Smart AdServer"
	}, {
		Type: "tracker",
		URL: "getsmartcontent.com",
		Company: "Smart Content"
	}, {
		Type: "ad",
		URL: "smartdevicemedia.com",
		Company: "Smart Device Media"
	}, {
		Type: "ad",
		URL: "smart4ads.com",
		Company: "smart4ads"
	}, {
		Type: "ad",
		URL: "bepolite.eu",
		Company: "SmartAd"
	}, {
		Type: "ad",
		URL: "smartbn.ru",
		Company: "SmartBN"
	}, {
		Type: "ad",
		URL: "smartcontext.pl",
		Company: "SmartContext"
	}, {
		Type: "tracker",
		URL: "smowtion.com",
		Company: "Smowtion"
	}, {
		Type: "other",
		URL: "snap.com",
		Company: "Snap"
	}, {
		Type: "other",
		URL: "snapengage.com",
		Company: "SnapEngage"
	}, {
		Type: "other",
		URL: "snapabug.appspot.com",
		Company: "SnapEngage"
	}, {
		Type: "tracker",
		URL: "snoobi.com",
		Company: "Snoobi"
	}, {
		Type: "other",
		URL: "socialannex.com",
		Company: "Social Annex"
	}, {
		Type: "other",
		URL: "ratevoice.com",
		Company: "SocialRMS"
	}, {
		Type: "ad",
		URL: "sociomantic.com",
		Company: "Sociomantic"
	}, {
		Type: "tracker",
		URL: "sokrati.com",
		Company: "Sokrati"
	}, {
		Type: "ad",
		URL: "sonobi.com",
		Company: "Sonobi Media"
	}, {
		Type: "analytics",
		URL: "sophus3.com",
		Company: "Sophus3"
	}, {
		Type: "other",
		URL: "soundcloud.com",
		Company: "SoundCloud"
	}, {
		Type: "ad",
		URL: "sparkstudios.com",
		Company: "Spark Studios"
	}, {
		Type: "ad",
		URL: "specificmedia.com",
		Company: "Specific Media"
	}, {
		Type: "ad",
		URL: "adviva.net",
		Company: "Specific Media"
	}, {
		Type: "ad",
		URL: "specificclick.net",
		Company: "SpecificClick"
	}, {
		Type: "tracker",
		URL: "spectate.com",
		Company: "Spectate"
	}, {
		Type: "ad",
		URL: "entireweb.com",
		Company: "SpeedyAds"
	}, {
		Type: "ad",
		URL: "surphace.com",
		Company: "Sphere"
	}, {
		Type: "ad",
		URL: "sphere.com",
		Company: "Sphere"
	}, {
		Type: "ad",
		URL: "spongecell.com",
		Company: "Spongecell"
	}, {
		Type: "ad",
		URL: "sponsorads.de",
		Company: "SponsorAds.de"
	}, {
		Type: "ad",
		URL: "spot200.com",
		Company: "Spot200"
	}, {
		Type: "ad",
		URL: "spotxchange.com",
		Company: "SpotXchange"
	}, {
		Type: "analytics",
		URL: "springmetrics.com",
		Company: "Spring Metrics"
	}, {
		Type: "analytics",
		URL: "d3rmnwi2tssrfx.cloudfront.net",
		Company: "Spring Metrics"
	}, {
		Type: "analytics",
		URL: "stat24.com",
		Company: "Stat24"
	}, {
		Type: "analytics",
		URL: "4u.pl",
		Company: "Stat4u"
	}, {
		Type: "analytics",
		URL: "statcounter.com",
		Company: "Statcounter"
	}, {
		Type: "tracker",
		URL: "stathat.com",
		Company: "StatHat"
	}, {
		Type: "analytics",
		URL: "statisfy.net",
		Company: "Statisfy"
	}, {
		Type: "analytics",
		URL: "statistics.ro",
		Company: "statistics.ro"
	}, {
		Type: "analytics",
		URL: "statsit.com",
		Company: "Statsit"
	}, {
		Type: "tracker",
		URL: "steelhousemedia.com",
		Company: "Steel House Media"
	}, {
		Type: "other",
		URL: "strands.com",
		Company: "Strands"
	}, {
		Type: "analytics",
		URL: "stratigent.com",
		Company: "Stratigent"
	}, {
		Type: "ad",
		URL: "strikead.com",
		Company: "StrikeAd"
	}, {
		Type: "tracker",
		URL: "struq.com",
		Company: "Struq"
	}, {
		Type: "other",
		URL: "stumbleupon.com",
		Company: "StumbleUpon"
	}, {
		Type: "other",
		URL: "stumble-upon.com",
		Company: "StumbleUpon"
	}, {
		Type: "other",
		URL: "su.pr",
		Company: "StumbleUpon"
	}, {
		Type: "tracker",
		URL: "sup.com",
		Company: "SUP media"
	}, {
		Type: "other",
		URL: "supercounters.com",
		Company: "SuperCounters"
	}, {
		Type: "other",
		URL: "surfingbird.ru",
		Company: "Surfingbird"
	}, {
		Type: "other",
		URL: "eu-survey.com",
		Company: "Survey Interactive"
	}, {
		Type: "ad",
		URL: "enigmaadserver.com",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "ctpsnet.com",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "ctasnet.com",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "bluefinmediaads.com",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "adstheaa.com",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "adseekmedia.com",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "ads-littlestarmedia.co.uk",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "ads-creativesyndicator.com",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "adlive.ie",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "abccampaignaudit.co.uk",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "somastackads.com",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "switchadhub.com",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "manutd.com",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "newsnow.net",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "ptdserver.com",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "qsoft.co.uk",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "m80marketing.com",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "simplytechnology.net",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "solvedigital.net",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "switchafrica.com",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "switchads.com",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "w00tads.com",
		Company: "Switch Concepts"
	}, {
		Type: "ad",
		URL: "zetabbs.com",
		Company: "Switch Concepts"
	}, {
		Type: "other",
		URL: "swoop.com",
		Company: "Swoop"
	}, {
		Type: "other",
		URL: "shopximity.com",
		Company: "Swoop"
	}, {
		Type: "tracker",
		URL: "suitesmart.com",
		Company: "Symphony Advanced Media"
	}, {
		Type: "ad",
		URL: "synergy-e.com",
		Company: "Synergy-E"
	}, {
		Type: "ad",
		URL: "synovite-scripts.com",
		Company: "Synovite"
	}, {
		Type: "tracker",
		URL: "taboolasyndication.com",
		Company: "Taboola"
	}, {
		Type: "tracker",
		URL: "taboola.com",
		Company: "Taboola"
	}, {
		Type: "ad",
		URL: "tacoda.net",
		Company: "Tacoda"
	}, {
		Type: "tracker",
		URL: "levexis.com",
		Company: "TagMan"
	}, {
		Type: "ad",
		URL: "tailsweep.com",
		Company: "Tailsweep"
	}, {
		Type: "ad",
		URL: "tanx.com",
		Company: "Tanx"
	}, {
		Type: "tracker",
		URL: "tapad.com",
		Company: "Tapad"
	}, {
		Type: "ad",
		URL: "d2bgg7rjywcwsy.cloudfront.net/js/",
		Company: "TapIt!"
	}, {
		Type: "ad",
		URL: "targetix.net",
		Company: "Targetix"
	}, {
		Type: "ad",
		URL: "tbn.ru",
		Company: "TBN.ru"
	}, {
		Type: "tracker",
		URL: "teads.tv",
		Company: "Teads Technology"
	}, {
		Type: "analytics",
		URL: "tealeaf.com",
		Company: "Tealeaf"
	}, {
		Type: "analytics",
		URL: "d34ko97cxuv4p7.cloudfront.net",
		Company: "Tealium"
	}, {
		Type: "analytics",
		URL: "llnwd.net",
		Company: "Tealium"
	}, {
		Type: "analytics",
		URL: "tealium.com",
		Company: "Tealium"
	}, {
		Type: "ad",
		URL: "toptenreviews.com",
		Company: "TechMediaNetwork"
	}, {
		Type: "ad",
		URL: "technorati.com",
		Company: "Technorati"
	}, {
		Type: "ad",
		URL: "technoratimedia.com",
		Company: "Technorati"
	}, {
		Type: "tracker",
		URL: "tlm100.net",
		Company: "Telemetry"
	}, {
		Type: "tracker",
		URL: "posst.co",
		Company: "TV18 India"
	}, {
		Type: "tracker",
		URL: "socialtwist.com",
		Company: "Tell-a-Friend"
	}, {
		Type: "tracker",
		URL: "tellapart.com",
		Company: "TellApart"
	}, {
		Type: "tracker",
		URL: "tellapart.com",
		Company: "TellApart"
	}, {
		Type: "tracker",
		URL: "teracent.net",
		Company: "Teracent"
	}, {
		Type: "ad",
		URL: "teroti.com",
		Company: "Teroti"
	}, {
		Type: "ad",
		URL: "testnet.be",
		Company: "Testnet"
	}, {
		Type: "ad",
		URL: "tfmmedia.biz",
		Company: "TFM Media"
	}, {
		Type: "ad",
		URL: "decknetwork.net",
		Company: "The Deck"
	}, {
		Type: "tracker",
		URL: "thesearchagency.net",
		Company: "The Search Agency"
	}, {
		Type: "other",
		URL: "thinglink.com",
		Company: "ThingLink"
	}, {
		Type: "tracker",
		URL: "esm1.net",
		Company: "Think Realtime"
	}, {
		Type: "tracker",
		URL: "online-metrix.net",
		Company: "ThreatMetrix"
	}, {
		Type: "tracker",
		URL: "tidaltv.tv",
		Company: "TidalTV"
	}, {
		Type: "tracker",
		URL: "tidaltv.com",
		Company: "TidalTV"
	}, {
		Type: "analytics",
		URL: "tinystat.ir",
		Company: "Tinystat"
	}, {
		Type: "analytics",
		URL: "tinystat.com",
		Company: "Tinystat"
	}, {
		Type: "ad",
		URL: "tldadserv.com",
		Company: "TLDAdserv"
	}, {
		Type: "ad",
		URL: "tlvmedia.com",
		Company: "TLV Media"
	}, {
		Type: "analytics",
		URL: "spring-tns.net",
		Company: "TNS"
	}, {
		Type: "analytics",
		URL: "tns-counter.ru",
		Company: "TNS"
	}, {
		Type: "analytics",
		URL: "tns-cs.net",
		Company: "TNS"
	}, {
		Type: "analytics",
		URL: "statistik-gallup.net",
		Company: "TNS"
	}, {
		Type: "analytics",
		URL: "sesamestats.com",
		Company: "TNS"
	}, {
		Type: "analytics",
		URL: "tns-gallup.dk",
		Company: "TNS"
	}, {
		Type: "analytics",
		URL: "research-int.se",
		Company: "TNS"
	}, {
		Type: "tracker",
		URL: "clickfuse.com",
		Company: "ToneFuse"
	}, {
		Type: "other",
		URL: "topsy.com",
		Company: "Topsy"
	}, {
		Type: "tracker",
		URL: "torbit.com",
		Company: "Torbit"
	}, {
		Type: "ad",
		URL: "total-media.net",
		Company: "Total Media"
	}, {
		Type: "tracker",
		URL: "totango.com",
		Company: "Totango"
	}, {
		Type: "analytics",
		URL: "inq.com",
		Company: "TouchCommerce"
	}, {
		Type: "tracker",
		URL: "tracemyip.org",
		Company: "TraceMyIP"
	}, {
		Type: "tracker",
		URL: "ipnoid.com",
		Company: "TraceMyIP"
	}, {
		Type: "analytics",
		URL: "roia.biz",
		Company: "TrackingSoft"
	}, {
		Type: "analytics",
		URL: "conversionlab.it",
		Company: "Trackset ConversionLab"
	}, {
		Type: "analytics",
		URL: "trackset.com",
		Company: "Trackset ConversionLab"
	}, {
		Type: "analytics",
		URL: "trackset.it",
		Company: "Trackset VisualPath"
	}, {
		Type: "ad",
		URL: "adsrvr.org",
		Company: "TradeDesk"
	}, {
		Type: "ad",
		URL: "tradedoubler.com",
		Company: "TradeDoubler"
	}, {
		Type: "other",
		URL: "tradera.com",
		Company: "Tradera"
	}, {
		Type: "analytics",
		URL: "tradetracker.net",
		Company: "TradeTracker"
	}, {
		Type: "ad",
		URL: "trafficrevenue.net",
		Company: "Traffic Revenue"
	}, {
		Type: "ad",
		URL: "trafficbroker.com",
		Company: "TrafficBroker"
	}, {
		Type: "ad",
		URL: "traffichaus.com",
		Company: "TrafficHaus"
	}, {
		Type: "ad",
		URL: "trafficjunky.net",
		Company: "TrafficJunky"
	}, {
		Type: "ad",
		URL: "traffiliate.com",
		Company: "Traffiliate"
	}, {
		Type: "ad",
		URL: "traffiq.com",
		Company: "Traffiq"
	}, {
		Type: "analytics",
		URL: "trafic.ro",
		Company: "Trafic"
	}, {
		Type: "ad",
		URL: "trafikknett.com",
		Company: "Trafikknett"
	}, {
		Type: "ad",
		URL: "traveladvertising.com",
		Company: "Travora Media"
	}, {
		Type: "tracker",
		URL: "tremormedia.com",
		Company: "Tremor Video"
	}, {
		Type: "tracker",
		URL: "scanscout.com",
		Company: "Tremor Video"
	}, {
		Type: "analytics",
		URL: "tcimg.com",
		Company: "trendcounter"
	}, {
		Type: "ad",
		URL: "tribalfusion.com",
		Company: "Tribal Fusion"
	}, {
		Type: "ad",
		URL: "exponential.com",
		Company: "Tribal Fusion"
	}, {
		Type: "tracker",
		URL: "triggit.com",
		Company: "TriggIt"
	}, {
		Type: "ad",
		URL: "andomedia.com",
		Company: "Triton Digital"
	}, {
		Type: "ad",
		URL: "tritondigital.com",
		Company: "Triton Digital"
	}, {
		Type: "analytics",
		URL: "trovus.co.uk",
		Company: "Trovus Revelations"
	}, {
		Type: "analytics",
		URL: "adlegend.com",
		Company: "TruEffect"
	}, {
		Type: "analytics",
		URL: "truehits.in.th",
		Company: "Truehits.net"
	}, {
		Type: "analytics",
		URL: "addoer.com",
		Company: "Truehits.net"
	}, {
		Type: "analytics",
		URL: "truehits.net",
		Company: "Truehits.net"
	}, {
		Type: "analytics",
		URL: "truehits.net",
		Company: "Truehits.net"
	}, {
		Type: "other",
		URL: "trumba.com",
		Company: "Trumba"
	}, {
		Type: "tracker",
		URL: "tubemogul.com",
		Company: "TubeMogul"
	}, {
		Type: "other",
		URL: "tumblr.com",
		Company: "Tumblr"
	}, {
		Type: "other",
		URL: "tumblr.com",
		Company: "Tumblr"
	}, {
		Type: "tracker",
		URL: "turn.com",
		Company: "Turn Inc."
	}, {
		Type: "tracker",
		URL: "ugdturner.com",
		Company: "Turner Broadcasting"
	}, {
		Type: "other",
		URL: "turnsocial.com",
		Company: "TurnSocial"
	}, {
		Type: "tracker",
		URL: "turntonetworks.com",
		Company: "TurnTo"
	}, {
		Type: "other",
		URL: "turnto.com",
		Company: "TurnTo"
	}, {
		Type: "other",
		URL: "tweetboard.com",
		Company: "Tweetboard"
	}, {
		Type: "other",
		URL: "tweetmeme.com",
		Company: "TweetMeme"
	}, {
		Type: "other",
		URL: "fyre.co",
		Company: "Livefyre"
	}, {
		Type: "other",
		URL: "twitter.com",
		Company: "Twitter"
	}, {
		Type: "other",
		URL: "twimg.com",
		Company: "Twitter"
	}, {
		Type: "analytics",
		URL: "twittercounter.com",
		Company: "TwitterCounter"
	}, {
		Type: "ad",
		URL: "twyn.com",
		Company: "Twyn"
	}, {
		Type: "tracker",
		URL: "tynt.com",
		Company: "Tynt"
	}, {
		Type: "tracker",
		URL: "typekit.net",
		Company: "Typekit (Adobe)"
	}, {
		Type: "tracker",
		URL: "typekit.com",
		Company: "Typekit (Adobe)"
	}, {
		Type: "analytics",
		URL: "typepad.com",
		Company: "Typepad Stats"
	}, {
		Type: "ad",
		URL: "tyroodr.com",
		Company: "Tyroo Direct"
	}, {
		Type: "ad",
		URL: "tyroodirect.com",
		Company: "Tyroo Direct"
	}, {
		Type: "tracker",
		URL: "ubertags.com",
		Company: "UberTags"
	}, {
		Type: "tracker",
		URL: "do.am",
		Company: "uCoz"
	}, {
		Type: "tracker",
		URL: "at.ua",
		Company: "uCoz"
	}, {
		Type: "tracker",
		URL: "ucoz.net",
		Company: "uCoz"
	}, {
		Type: "tracker",
		URL: "ucoz.com",
		Company: "uCoz"
	}, {
		Type: "tracker",
		URL: "ucoz.net",
		Company: "uCoz"
	}, {
		Type: "ad",
		URL: "unanimis.co.uk",
		Company: "Unanimis"
	}, {
		Type: "tracker",
		URL: "d3pkntwtp2ukl5.cloudfront.net",
		Company: "Unbounce"
	}, {
		Type: "tracker",
		URL: "unbounce.com",
		Company: "Unbounce"
	}, {
		Type: "ad",
		URL: "underclick.ru",
		Company: "Underclick"
	}, {
		Type: "tracker",
		URL: "udmserve.net",
		Company: "Underdog Media"
	}, {
		Type: "tracker",
		URL: "undertone.com",
		Company: "Undertone Networks"
	}, {
		Type: "analytics",
		URL: "unica.com",
		Company: "Unica"
	}, {
		Type: "ad",
		URL: "unicast.com",
		Company: "Unicast"
	}, {
		Type: "tracker",
		URL: "unister-adservices.com",
		Company: "Unister"
	}, {
		Type: "tracker",
		URL: "unister-gmbh.de",
		Company: "Unister"
	}, {
		Type: "tracker",
		URL: "unrulymedia.com",
		Company: "Unruly Media"
	}, {
		Type: "ad",
		URL: "legolasmedia.com",
		Company: "UpFront"
	}, {
		Type: "ad",
		URL: "thinkupfront.com",
		Company: "UpFront"
	}, {
		Type: "other",
		URL: "upsellit.com",
		Company: "UpSellit"
	}, {
		Type: "analytics",
		URL: "uptrends.com",
		Company: "Uptrends"
	}, {
		Type: "analytics",
		URL: "webiqonline.com",
		Company: "Usability Sciences"
	}, {
		Type: "ad",
		URL: "usemax.de",
		Company: "Usemax"
	}, {
		Type: "other",
		URL: "userneeds.dk",
		Company: "Userneeds"
	}, {
		Type: "other",
		URL: "userreport.com",
		Company: "UserReport"
	}, {
		Type: "other",
		URL: "uservoice.com",
		Company: "UserVoice"
	}, {
		Type: "other",
		URL: "uservoice.com",
		Company: "UserVoice"
	}, {
		Type: "other",
		URL: "uservoice.com",
		Company: "UserVoice"
	}, {
		Type: "analytics",
		URL: "userzoom.com",
		Company: "UserZoom"
	}, {
		Type: "ad",
		URL: "utarget.ru",
		Company: "uTarget"
	}, {
		Type: "tracker",
		URL: "v12groupinc.com",
		Company: "V12 Group"
	}, {
		Type: "ad",
		URL: "mediaplex.com",
		Company: "ValueClick"
	}, {
		Type: "ad",
		URL: "fastclick.net",
		Company: "ValueClick"
	}, {
		Type: "ad",
		URL: "apmebf.com",
		Company: "ValueClick "
	}, {
		Type: "ad",
		URL: "emjcd.com",
		Company: "ValueClick"
	}, {
		Type: "ad",
		URL: "valuecommerce.com",
		Company: "ValueCommerce"
	}, {
		Type: "tracker",
		URL: "valuedopinions.co.uk",
		Company: "Valued Opinions"
	}, {
		Type: "tracker",
		URL: "vmmpxl.com",
		Company: "Varick Media Management"
	}, {
		Type: "ad",
		URL: "vdopia.com",
		Company: "Vdopia"
	}, {
		Type: "ad",
		URL: "veoxa.com",
		Company: "Veoxa"
	}, {
		Type: "ad",
		URL: "verticalacuity.com",
		Company: "Vertical Acuity"
	}, {
		Type: "tracker",
		URL: "vertical-leap.co.uk",
		Company: "Vertical Leap"
	}, {
		Type: "tracker",
		URL: "verticalnetwork.de",
		Company: "Vertical Network"
	}, {
		Type: "tracker",
		URL: "vresp.com",
		Company: "VerticalResponse"
	}, {
		Type: "analytics",
		URL: "vertster.com",
		Company: "Vertster"
	}, {
		Type: "tracker",
		URL: "veruta.com",
		Company: "Veruta"
	}, {
		Type: "tracker",
		URL: "veruta.com",
		Company: "Veruta"
	}, {
		Type: "analytics",
		URL: "vgwort.de",
		Company: "VG Wort"
	}, {
		Type: "tracker",
		URL: "mtvnservices.com",
		Company: "Viacom"
	}, {
		Type: "tracker",
		URL: "intellitxt.com",
		Company: "Vibrant Ads"
	}, {
		Type: "ad",
		URL: "videobash.com",
		Company: "VideoBash"
	}, {
		Type: "ad",
		URL: "videoclick.ru",
		Company: "videoclick.ru"
	}, {
		Type: "ad",
		URL: "videoclik.ru",
		Company: "videoclick.ru"
	}, {
		Type: "ad",
		URL: "vietad.vn",
		Company: "VietAd"
	}, {
		Type: "ad",
		URL: "viglink.com",
		Company: "VigLink"
	}, {
		Type: "ad",
		URL: "vindicosuite.com",
		Company: "Vindico Group"
	}, {
		Type: "ad",
		URL: "virgul.com",
		Company: "Virgul"
	}, {
		Type: "analytics",
		URL: "visiblemeasures.com",
		Company: "Visible Measures"
	}, {
		Type: "analytics",
		URL: "visistat.com",
		Company: "VisiStat"
	}, {
		Type: "analytics",
		URL: "sa-as.com",
		Company: "VisiStat"
	}, {
		Type: "analytics",
		URL: "visitstreamer.com",
		Company: "Visit Streamer"
	}, {
		Type: "tracker",
		URL: "visitortracklog.com",
		Company: "VisitorTrack"
	}, {
		Type: "analytics",
		URL: "visitorville.com",
		Company: "VisitorVille"
	}, {
		Type: "analytics",
		URL: "visualrevenue.com",
		Company: "Visual Revenue"
	}, {
		Type: "tracker",
		URL: "wingify.com",
		Company: "Visual Website Optimizer"
	}, {
		Type: "tracker",
		URL: "visualwebsiteoptimizer.com",
		Company: "Visual Website Optimizer"
	}, {
		Type: "tracker",
		URL: "d5phz18u4wuww.cloudfront.net",
		Company: "Visual Website Optimizer"
	}, {
		Type: "ad",
		URL: "vdna-assets.com",
		Company: "VisualDNA"
	}, {
		Type: "ad",
		URL: "visualdna.com",
		Company: "VisualDNA"
	}, {
		Type: "ad",
		URL: "visualdna-stats.com",
		Company: "VisualDNA"
	}, {
		Type: "analytics",
		URL: "vivistats.com",
		Company: "ViviStats"
	}, {
		Type: "tracker",
		URL: "vizisense.net",
		Company: "ViziSense"
	}, {
		Type: "analytics",
		URL: "vizu.com",
		Company: "Vizu"
	}, {
		Type: "analytics",
		URL: "vizu.com",
		Company: "Vizu"
	}, {
		Type: "ad",
		URL: "vizury.com",
		Company: "Vizury"
	}, {
		Type: "analytics",
		URL: "vizzit.se",
		Company: "Vizzit"
	}, {
		Type: "other",
		URL: "userapi.com",
		Company: "Vkontakte"
	}, {
		Type: "other",
		URL: "vk.com",
		Company: "Vkontakte"
	}, {
		Type: "other",
		URL: "vkontakte.ru",
		Company: "Vkontakte"
	}, {
		Type: "tracker",
		URL: "voicefive.com",
		Company: "VoiceFive"
	}, {
		Type: "analytics",
		URL: "w3counter.com",
		Company: "W3Counter"
	}, {
		Type: "analytics",
		URL: "w3roi.com",
		Company: "w3roi"
	}, {
		Type: "other",
		URL: "contentwidgets.net",
		Company: "Wahoha"
	}, {
		Type: "other",
		URL: "wahoha.com",
		Company: "Wahoha"
	}, {
		Type: "ad",
		URL: "wsod.com",
		Company: "Wall Street on Demand"
	}, {
		Type: "ad",
		URL: "wamcash.com",
		Company: "Wamcash"
	}, {
		Type: "ad",
		URL: "way2traffic.com",
		Company: "Way2traffic"
	}, {
		Type: "tracker",
		URL: "webserviceaward.com",
		Company: "Web Service Award"
	}, {
		Type: "analytics",
		URL: "webtraxs.com",
		Company: "Web Traxs"
	}, {
		Type: "analytics",
		URL: "wipe.de",
		Company: "Web Wipe Anlaytics"
	}, {
		Type: "ad",
		URL: "webads.nl",
		Company: "WebAds"
	}, {
		Type: "analytics",
		URL: "webantenna.info",
		Company: "WebAntenna"
	}, {
		Type: "tracker",
		URL: "webclicktracker.com",
		Company: "Webclicktracker"
	}, {
		Type: "analytics",
		URL: "webgozar.com",
		Company: "WebGozar"
	}, {
		Type: "analytics",
		URL: "webgozar.ir",
		Company: "WebGozar"
	}, {
		Type: "other",
		URL: "webhelpje.nl",
		Company: "Webhelpje"
	}, {
		Type: "other",
		URL: "webhelpje.be",
		Company: "Webhelpje"
	}, {
		Type: "analytics",
		URL: "weborama.fr",
		Company: "Weborama"
	}, {
		Type: "analytics",
		URL: "webprospector.de",
		Company: "WebProspector"
	}, {
		Type: "tracker",
		URL: "webstat.net",
		Company: "WebStat"
	}, {
		Type: "analytics",
		URL: "web-stat.com",
		Company: "Web-Stat"
	}, {
		Type: "tracker",
		URL: "webstat.se",
		Company: "Webstat.se"
	}, {
		Type: "analytics",
		URL: "webtracker.jp",
		Company: "WebTracker"
	}, {
		Type: "analytics",
		URL: "webtraffic.se",
		Company: "Webtraffic"
	}, {
		Type: "analytics",
		URL: "webtraffic.no",
		Company: "Webtraffic"
	}, {
		Type: "analytics",
		URL: "webtrekk.net",
		Company: "Webtrekk"
	}, {
		Type: "analytics",
		URL: "webtrekk-asia.net",
		Company: "Webtrekk"
	}, {
		Type: "tracker",
		URL: "webtrends.com",
		Company: "WebTrends"
	}, {
		Type: "tracker",
		URL: "webtrendslive.com",
		Company: "WebTrends"
	}, {
		Type: "tracker",
		URL: "webtrendslive.com",
		Company: "WebTrends"
	}, {
		Type: "tracker",
		URL: "webtrends.com",
		Company: "WebTrends"
	}, {
		Type: "tracker",
		URL: "webtrends.com",
		Company: "WebTrends"
	}, {
		Type: "ad",
		URL: "clickshift.com",
		Company: "WebTrends Ads"
	}, {
		Type: "analytics",
		URL: "web-visor.com",
		Company: "WebVisor"
	}, {
		Type: "ad",
		URL: "weebly.com",
		Company: "Weebly"
	}, {
		Type: "ad",
		URL: "where.com",
		Company: "Where"
	}, {
		Type: "tracker",
		URL: "imgur.com",
		Company: "Imgur"
	}, {
		Type: "other",
		URL: "amung.us",
		Company: "Whos.amung.us"
	}, {
		Type: "tracker",
		URL: "whoson.com",
		Company: "WhosOn"
	}, {
		Type: "other",
		URL: "wibiya.com",
		Company: "Wibiya"
	}, {
		Type: "tracker",
		URL: "predictad.com",
		Company: "Widdit"
	}, {
		Type: "tracker",
		URL: "widgetserver.com",
		Company: "WidgetBox"
	}, {
		Type: "ad",
		URL: "widgetbucks.com",
		Company: "WidgetBucks"
	}, {
		Type: "ad",
		URL: "wigetmedia.com",
		Company: "Wiget Media"
	}, {
		Type: "tracker",
		URL: "wikia-beacon.com",
		Company: "Wikia Beacon"
	}, {
		Type: "analytics",
		URL: "wiredminds.de",
		Company: "WiredMinds"
	}, {
		Type: "analytics",
		URL: "woopra.com",
		Company: "Woopra"
	}, {
		Type: "analytics",
		URL: "wordpress.com",
		Company: "Wordpress"
	}, {
		Type: "tracker",
		URL: "wordstream.com",
		Company: "WordStream"
	}, {
		Type: "analytics",
		URL: "wowanalytics.co.uk",
		Company: "Wow Analytics"
	}, {
		Type: "analytics",
		URL: "wysistat.com",
		Company: "WysiStat"
	}, {
		Type: "ad",
		URL: "ru4.com",
		Company: "x+1"
	}, {
		Type: "ad",
		URL: "xplusone.com",
		Company: "x+1"
	}, {
		Type: "analytics",
		URL: "xgraph.net",
		Company: "XGraph"
	}, {
		Type: "tracker",
		URL: "xplosion.de",
		Company: "xplosion"
	}, {
		Type: "ad",
		URL: "xtendmedia.com",
		Company: "XTEND"
	}, {
		Type: "tracker",
		URL: "xyztraffic.com",
		Company: "XYZtraffic"
	}, {
		Type: "tracker",
		URL: "yabuka.com",
		Company: "Yabuka"
	}, {
		Type: "ad",
		URL: "analytics.yahoo.com",
		Company: "Yahoo!"
	}, {
		Type: "ad",
		URL: "yimg.com",
		Company: "Yahoo!"
	}, {
		Type: "ad",
		URL: "overture.com",
		Company: "Yahoo!"
	}, {
		Type: "ad",
		URL: "yahoo.co.jp",
		Company: "Yahoo!"
	}, {
		Type: "ad",
		URL: "overture.com",
		Company: "Yahoo!"
	}, {
		Type: "ad",
		URL: "adinterax.com",
		Company: "Yahoo!"
	}, {
		Type: "ad",
		URL: "yieldmanager.com",
		Company: "Yahoo!"
	}, {
		Type: "ad",
		URL: "yimg.com",
		Company: "Yahoo!"
	}, {
		Type: "ad",
		URL: "yandex.ru",
		Company: "Yandex"
	}, {
		Type: "ad",
		URL: "yandex.ru",
		Company: "Yandex"
	}, {
		Type: "ad",
		URL: "yandex.st",
		Company: "Yandex"
	}, {
		Type: "ad",
		URL: "yashi.com",
		Company: "Yashi"
	}, {
		Type: "ad",
		URL: "adserverplus.com",
		Company: "Ybrant Media"
	}, {
		Type: "ad",
		URL: "addynamix.com",
		Company: "Ybrant Media"
	}, {
		Type: "analytics",
		URL: "yellowtracker.com",
		Company: "YellowTracker"
	}, {
		Type: "ad",
		URL: "sharexy.com",
		Company: "Yepty"
	}, {
		Type: "ad",
		URL: "yepty.com",
		Company: "Yepty"
	}, {
		Type: "ad",
		URL: "xxxwebtraffic.com",
		Company: "YesUp"
	}, {
		Type: "ad",
		URL: "popupxxx.com",
		Company: "YesUp"
	}, {
		Type: "ad",
		URL: "paypopup.com",
		Company: "YesUp"
	}, {
		Type: "ad",
		URL: "onlineadultadvertising.com",
		Company: "YesUp"
	}, {
		Type: "ad",
		URL: "multipops.com",
		Company: "YesUp"
	}, {
		Type: "ad",
		URL: "momentsharing.com",
		Company: "YesUp"
	}, {
		Type: "ad",
		URL: "adsrevenue.net",
		Company: "YesUp"
	}, {
		Type: "ad",
		URL: "infinityads.com",
		Company: "YesUp"
	}, {
		Type: "ad",
		URL: "yieldads.com",
		Company: "YieldAds"
	}, {
		Type: "tracker",
		URL: "yldbt.com",
		Company: "Yieldbot"
	}, {
		Type: "tracker",
		URL: "yb0t.com",
		Company: "Yieldbot"
	}, {
		Type: "ad",
		URL: "yieldbuild.com",
		Company: "YieldBuild"
	}, {
		Type: "ad",
		URL: "yieldlab.net",
		Company: "Yieldlab"
	}, {
		Type: "analytics",
		URL: "yola.net",
		Company: "Yola"
	}, {
		Type: "ad",
		URL: "yumenetworks.com",
		Company: "YuMe"
	}, {
		Type: "ad",
		URL: "metricsdirect.com",
		Company: "Zango"
	}, {
		Type: "ad",
		URL: "zanox.com",
		Company: "Zanox"
	}, {
		Type: "ad",
		URL: "zanox-affiliate.de",
		Company: "Zanox"
	}, {
		Type: "ad",
		URL: "zanox.com",
		Company: "Zanox"
	}, {
		Type: "ad",
		URL: "zapunited.com",
		Company: "zaparena"
	}, {
		Type: "ad",
		URL: "zaparena.com",
		Company: "zaparena"
	}, {
		Type: "ad",
		URL: "zedo.com",
		Company: "Zedo"
	}, {
		Type: "tracker",
		URL: "zemanta.com",
		Company: "Zemanta"
	}, {
		Type: "tracker",
		URL: "zendesk.com",
		Company: "Zendesk"
	}, {
		Type: "ad",
		URL: "zenoviaexchange.com",
		Company: "Zenovia"
	}, {
		Type: "other",
		URL: "zergnet.com",
		Company: "ZergNet"
	}, {
		Type: "ad",
		URL: "app.insightgrit.com",
		Company: "Zeta Search"
	}, {
		Type: "tracker",
		URL: "zimbio.com",
		Company: "Zimbio, Inc."
	}, {
		Type: "other",
		URL: "zippyshare.com",
		Company: "Zippyshare"
	}, {
		Type: "tracker",
		URL: "zopim.com",
		Company: "Zopim"
	}, {
		Type: "tracker",
		URL: "zdbb.net",
		Company: "Ziff Davis"
	}, {
		Company: "[x+1]",
		URL: "",
		Type: ""
	}, {
		Company: "[x+1] xplusone",
		URL: "",
		Type: "Demand Side Platform"
	}, {
		Company: "140 Proof",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "24/7 Media",
		URL: "",
		Type: ""
	}, {
		Company: "24/7 Media",
		URL: "",
		Type: "Ad Network, Ad Server, Data Management Platform"
	}, {
		Company: "33Across",
		URL: "",
		Type: ""
	}, {
		Company: "33Across",
		URL: "",
		Type: "Optimizer, Data Management Platform"
	}, {
		Company: "4INFO",
		URL: "",
		Type: "Ad Network, Mobile"
	}, {
		Company: "Aarki",
		URL: "Aarki.com",
		Type: "Ad Network, Mobile"
	}, {
		Company: "Accordant Media",
		URL: "accordantmedia",
		Type: "Optimizer, Agency"
	}, {
		Company: "Accuen ",
		URL: "AccuEn.org",
		Type: ""
	}, {
		Company: "Accuen Media",
		URL: "accuenmedia.com",
		Type: "Ad Network, Agency"
	}, {
		Company: "actionpay",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "ActionX",
		URL: "",
		Type: "Demand Side Platform, Mobile"
	}, {
		Company: "Acuity Ads",
		URL: "",
		Type: "Demand Side Platform"
	}, {
		Company: "Acxiom",
		URL: "",
		Type: "Data Aggregator/Supplier"
	}, {
		Company: "Ad Desk",
		URL: "actiondesk.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Ad Magnet",
		URL: "",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Ad River",
		URL: "adriver.ru",
		Type: "Ad Server"
	}, {
		Company: "Ad Spirit",
		URL: "adspirit.de",
		Type: "Ad Server"
	}, {
		Company: "ad:C media",
		URL: "",
		Type: "Retargeter, Ad Server, Demand Side Platform"
	}, {
		Company: "ad4mat",
		URL: "ad4game.com\nad4partners.com",
		Type: "Ad Network"
	}, {
		Company: "Adacado",
		URL: "adacado.com",
		Type: "Retargeter"
	}, {
		Company: "Adap.tv",
		URL: "Adap.tv",
		Type: "Ad Exchange, Ad Server"
	}, {
		Company: "Adara Media",
		URL: "",
		Type: "Optimizer, Data Management Platform"
	}, {
		Company: "Adatus",
		URL: "",
		Type: "Ad Exchange, Data Aggregator/Supplier"
	}, {
		Company: "Adblade",
		URL: "adblade.com",
		Type: "Ad Network"
	}, {
		Company: "AdCentric (Cossette)",
		URL: "",
		Type: "Ad Server"
	}, {
		Company: "Adchemy",
		URL: "adchemy-content.com\nadchemy.com",
		Type: "Demand Side Platform, Data Management Platform"
	}, {
		Company: "AdClear",
		URL: "",
		Type: "Analytics Provider"
	}, {
		Company: "AdCloud",
		URL: "adcloud.net",
		Type: "Ad Network"
	}, {
		Company: "AdConductor",
		URL: "",
		Type: "Ad Server"
	}, {
		Company: "Adconion Media Group",
		URL: "",
		Type: "Ad Network, Optimizer"
	}, {
		Company: "AddThis",
		URL: "addthis.com\naddthisedge.com\naddthis",
		Type: "Ad Network, Analytics Provider"
	}, {
		Company: "AddThis (including XGraph)",
		URL: "addthiscdn.com",
		Type: ""
	}, {
		Company: "AdDynamics",
		URL: "appdynamics.com",
		Type: "Ad Server"
	}, {
		Company: "AdECN (Microsoft)",
		URL: "adecn.com",
		Type: "Ad Exchange, Ad Server"
	}, {
		Company: "AdExtent",
		URL: "adextent.com",
		Type: "Demand Side Platform"
	}, {
		Company: "AdForm",
		URL: "adform.net",
		Type: "Analytics Provider, Ad Server"
	}, {
		Company: "AdFox",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "Adfusion",
		URL: "adfusion.com",
		Type: "Ad Server"
	}, {
		Company: "AdGear",
		URL: "AdGear.com",
		Type: "Analytics Provider, Ad Server"
	}, {
		Company: "adGENIE",
		URL: "",
		Type: "Ad Network, Retargeter"
	}, {
		Company: "AdGent Digital",
		URL: "adgent007.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "AdHui",
		URL: "",
		Type: "Optimizer"
	}, {
		Company: "Adinterax (Yahoo!)",
		URL: "adinterax.com",
		Type: "Ad Server"
	}, {
		Company: "Adition Technologies AG",
		URL: "adition.com",
		Type: "Ad Server"
	}, {
		Company: "AdJug",
		URL: "adjug.com",
		Type: "Ad Exchange"
	}, {
		Company: "AdJuggler",
		URL: "adjuggler.com\nadjuggler.net",
		Type: "Analytics Provider, Ad Server"
	}, {
		Company: "AdLantic Online Advertising",
		URL: "atlanticfarmfocus.ca\natlanticbb",
		Type: "Ad Network"
	}, {
		Company: "ADMAN",
		URL: "adman.se\nadmanage.com\nadman.se",
		Type: "Ad Server, Demand Side Platform"
	}, {
		Company: "AdMedia",
		URL: "admedia.com\nadmedias.net",
		Type: "Ad Network"
	}, {
		Company: "AdMeld",
		URL: "admeld.com",
		Type: "Supply Side Platform"
	}, {
		Company: "AdMobius",
		URL: "",
		Type: "Data Management Platform, Mobile"
	}, {
		Company: "Admotion",
		URL: "",
		Type: "Analytics Provider, Ad Server"
	}, {
		Company: "adNET.de",
		URL: "adNET.de",
		Type: "Ad Server"
	}, {
		Company: "Adnologies GmbH",
		URL: "",
		Type: "Retargeter, Ad Server"
	}, {
		Company: "Adobe Marketing Cloud (Analytics)",
		URL: "",
		Type: "Analytics Provider"
	}, {
		Company: "Adobe Marketing Cloud (Analytics) Formerly Site Catalyst HBX",
		URL: "",
		Type: "Analytics Provider"
	}, {
		Company: "Adobe Marketing Cloud (Media Optimizer)",
		URL: "",
		Type: "Retargeter, Ad Server, Demand Side Platform, Creative/Ad Format Technology, Data Management Platform"
	}, {
		Company: "Adobe Marketing Cloud (Media Optimizer) Formerly AdLens",
		URL: "",
		Type: "Ad Network, Optimizer"
	}, {
		Company: "Adobe Marketing Cloud (Target)",
		URL: "",
		Type: "Optimizer"
	}, {
		Company: "AdOcean",
		URL: "",
		Type: "Retargeter, Ad Server"
	}, {
		Company: "Adometry",
		URL: "",
		Type: "Analytics Provider, Ad Verification"
	}, {
		Company: "AdoTube",
		URL: "adotube.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "AdReady",
		URL: "adready.com\nadreadytractions.com",
		Type: "Ad Network, Ad Server, Demand Side Platform"
	}, {
		Company: "AdRoll",
		URL: "adroll.com",
		Type: "Ad Network, Retargeter"
	}, {
		Company: "AdSame",
		URL: "adsame.com",
		Type: "Demand Side Platform, Supply Side Platform, Data Management Platform"
	}, {
		Company: "AdServerPub",
		URL: "adserverpub.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "AdShuffle",
		URL: "adshuffle.com",
		Type: "Ad Server"
	}, {
		Company: "AdSpeed",
		URL: "adspeed.net\nadspeed.com",
		Type: "Analytics Provider, Ad Server"
	}, {
		Company: "ADTECH",
		URL: "adtechus.com\nadtech.de",
		Type: "Ad Server"
	}, {
		Company: "Adtelligence",
		URL: "advanced-intelligence.com",
		Type: "Analytics Provider, Optimizer"
	}, {
		Company: "Advance Media",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "Advertising.com",
		URL: "Advertising.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "AdvertServe",
		URL: "advertserve.com",
		Type: "Ad Server"
	}, {
		Company: "AD-X",
		URL: "adxpose.com",
		Type: "Analytics Provider, Mobile"
	}, {
		Company: "adXion",
		URL: "adxion.com",
		Type: "Ad Network"
	}, {
		Company: "adyard",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "ADZ",
		URL: "adzerk.net\nadziff.com\nadzouk.com\nadzmob.com\nadzerk.net\nadziff.com\nadzouk.com\nadzmob.com\nadzhub.com\nadzonk.com\nadzs.com\nadzoe.de",
		Type: "Demand Side Platform"
	}, {
		Company: "Aerify Media",
		URL: "",
		Type: "Demand Side Platform, Mobile"
	}, {
		Company: "Affectv",
		URL: "",
		Type: "Data Management Platform"
	}, {
		Company: "AfterDownload",
		URL: "afterdownload.com\nafterdownloads.com",
		Type: "Ad Network"
	}, {
		Company: "Aggregate Knowledge",
		URL: "aggregateknowledge.com",
		Type: "Analytics Provider, Data Aggregator/Supplier, Data Management Platform"
	}, {
		Company: "Akamai Technologies",
		URL: "akamaihd.net\nakamai.net\nakamai.com",
		Type: "Analytics Provider, Data Aggregator/Supplier, Data Management Platform"
	}, {
		Company: "Alenty",
		URL: "alenty.com",
		Type: "Analytics Provider, Optimizer"
	}, {
		Company: "Allyes",
		URL: "allyes.com",
		Type: "Ad Network"
	}, {
		Company: "Alm Media Properties",
		URL: "",
		Type: "Publisher"
	}, {
		Company: "Amobee",
		URL: "amobee.com",
		Type: "Ad Server, Demand Side Platform, Mobile"
	}, {
		Company: "AOL Advertising",
		URL: "aolcdn.com\naol.com\naolanswers.com\naolcdn.com\naol.co.uk\naol.de\naol.de\naol.ca\naolhealth.com",
		Type: "Ad Network, Ad Server, Demand Side Platform, Mobile"
	}, {
		Company: "AOL Behavioral Advertising (Tacoda)",
		URL: "",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "AOL Sponsored Listings (Quigo)",
		URL: "",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Applifier",
		URL: "applifier.com",
		Type: "Ad Network"
	}, {
		Company: "AppLovin",
		URL: "",
		Type: "Data Management Platform, Mobile"
	}, {
		Company: "AppNexus",
		URL: "",
		Type: "Ad Exchange, Ad Server, Demand Side Platform, Supply Side Platform"
	}, {
		Company: "appssavvy",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "APT from Yahoo!",
		URL: "apture.com",
		Type: "Ad Exchange"
	}, {
		Company: "AT Internet",
		URL: "",
		Type: "Analytics Provider"
	}, {
		Company: "ATG Commerce",
		URL: "atgsvcs.com\natgsvcs.com\natgstores.com",
		Type: "Data Management Platform"
	}, {
		Company: "Audience Ad Network (Adnamic)",
		URL: "audienceprofiler.com\naudienceamplify.com\naudienceiq.com",
		Type: "Ad Network"
	}, {
		Company: "Audience2Media",
		URL: "audience2media.com",
		Type: "Ad Network, Retargeter"
	}, {
		Company: "AudienceRate",
		URL: "audiencerate.com",
		Type: "Analytics Provider, Optimizer, Retargeter"
	}, {
		Company: "AudienceScience",
		URL: "",
		Type: "Ad Network, Data Management Platform"
	}, {
		Company: "AudienceScience Connect",
		URL: "audienceiq.com",
		Type: "Ad Network"
	}, {
		Company: "Avail",
		URL: "",
		Type: "Retargeter, Data Management Platform"
	}, {
		Company: "Avazu Network",
		URL: "avazutracking.net\navazu.net\navazudsp.net",
		Type: "Retargeter, Demand Side Platform"
	}, {
		Company: "BannerConnect",
		URL: "bannerconnect.com\nbannerconnect.net",
		Type: "Ad Network"
	}, {
		Company: "Batanga Network",
		URL: "batanga.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Bazaarvoice",
		URL: "",
		Type: "Ad Network, Data Management Platform"
	}, {
		Company: "Beencounter",
		URL: "Beencounter.com",
		Type: "Analytics Provider, Optimizer"
	}, {
		Company: "bitly",
		URL: "bit.ly",
		Type: "Analytics Provider"
	}, {
		Company: "Bizo",
		URL: "bizographics.com\nbizo.com",
		Type: "Ad Network, Data Aggregator/Supplier, Data Management Platform"
	}, {
		Company: "Blinkx",
		URL: "blinkx.com",
		Type: "Ad Network, Publisher"
	}, {
		Company: "BlueCava",
		URL: "bluecava.com",
		Type: "Data Aggregator/Supplier, Mobile"
	}, {
		Company: "BlueKai",
		URL: "bluekai.com",
		Type: "Data Aggregator/Supplier"
	}, {
		Company: "Brainient",
		URL: "brainient.com",
		Type: "Optimizer, Retargeter"
	}, {
		Company: "Brand.net",
		URL: "Brand.net",
		Type: "Ad Network, Mobile"
	}, {
		Company: "Brandscreen",
		URL: "",
		Type: "Demand Side Platform"
	}, {
		Company: "Break Media",
		URL: "breakmedia.com",
		Type: "Ad Network, Publisher"
	}, {
		Company: "BridgeTrack ",
		URL: "bridgetrack.com",
		Type: "Ad Server, Demand Side Platform"
	}, {
		Company: "BrightRoll",
		URL: "brightshare.com\nbrightcove.com\nbrighthouse.com\nbrighteroption.com\nbrighthub.com\nbrightsideofnews.com\nbrightedge.com",
		Type: "Ad Network, Ad Server, Mobile"
	}, {
		Company: "Brilig",
		URL: "brilig.com",
		Type: "Ad Exchange, Data Aggregator/Supplier, Data Management Platform"
	}, {
		Company: "BTBuckets",
		URL: "btbuckets.com",
		Type: "Analytics Provider, Data Aggregator/Supplier"
	}, {
		Company: "Burst Media",
		URL: "burstnet.com\nburst.net\nburstbeacon.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Buysight",
		URL: "",
		Type: "Ad Network, Retargeter"
	}, {
		Company: "C3 Metrics",
		URL: "c3metrics.com\nc3tag.com",
		Type: "Analytics Provider"
	}, {
		Company: "Captify",
		URL: "",
		Type: "Retargeter"
	}, {
		Company: "Casale Media",
		URL: "casalemedia.com",
		Type: "Ad Exchange, Ad Network, Creative/Ad Format Technology"
	}, {
		Company: "CBS Interactive",
		URL: "cbslocal.com\ncbsnews.com\ncbsistatic.com\ncbsnews\ncbslocal",
		Type: "Ad Network"
	}, {
		Company: "Celebrus Technologies (formerly Speed-Trap)",
		URL: "",
		Type: "Analytics Provider, Data Management Platform"
	}, {
		Company: "Chango",
		URL: "chango.com",
		Type: "Ad Network, Retargeter"
	}, {
		Company: "Channel Intelligence",
		URL: "channelintelligence.com",
		Type: "Analytics Provider, Optimizer"
	}, {
		Company: "Chitika",
		URL: "chitika.net\nchitika.com",
		Type: "Ad Network"
	}, {
		Company: "ChoiceStream",
		URL: "choicestream.com",
		Type: "Optimizer, Ad Server"
	}, {
		Company: "ClickCertain",
		URL: "clickcertain.com",
		Type: "Ad Exchange"
	}, {
		Company: "ClickDistrict",
		URL: "",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "ClickTale",
		URL: "clicktale.net",
		Type: "Analytics Provider"
	}, {
		Company: "Clove Network",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "CoAdvertise",
		URL: "coadvertise.com",
		Type: "Ad Exchange"
	}, {
		Company: "Cobalt Group",
		URL: "cobaltgroup.com",
		Type: "Agency, Demand Side Platform"
	}, {
		Company: "Cognitive Match",
		URL: "cognitivematch.com",
		Type: "Optimizer, Data Management Platform"
	}, {
		Company: "Collective Media",
		URL: "collective-media.net",
		Type: "Ad Network, Data Aggregator/Supplier, Data Management Platform"
	}, {
		Company: "Connexity",
		URL: "connexity.net",
		Type: "Analytics Provider, Data Management Platform"
	}, {
		Company: "Connextra",
		URL: "connextra.com",
		Type: "Ad Server"
	}, {
		Company: "Constant Contact",
		URL: "constantcontact.com",
		Type: "Data Management Platform"
	}, {
		Company: "Contextin",
		URL: "",
		Type: "Data Management Platform"
	}, {
		Company: "Conversion Ruler",
		URL: "conversionruler.com",
		Type: "Analytics Provider, Data Aggregator/Supplier"
	}, {
		Company: "Convert Insights (formerly Reedge)",
		URL: "convertglobal.com\nconvertmarketing.net\nconvertlanguage.com\nconvertsocial.com",
		Type: "Analytics Provider, Optimizer"
	}, {
		Company: "Convertro",
		URL: "convertro.com",
		Type: "Analytics Provider, Optimizer"
	}, {
		Company: "CookieQ (Baycloud Systems)",
		URL: "",
		Type: "Online Privacy Platform"
	}, {
		Company: "Core Audience (formerly Red Aril)",
		URL: "",
		Type: "Data Management Platform"
	}, {
		Company: "CoreAudience (formerly RedAril)",
		URL: "",
		Type: ""
	}, {
		Company: "Cox Digital Solutions",
		URL: "coxnewsweb.com\ncox.com",
		Type: "Ad Network"
	}, {
		Company: "CPMStar",
		URL: "cpmstar.com",
		Type: "Ad Network"
	}, {
		Company: "CPX Interactive",
		URL: "cpxinteractive.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Crimtan",
		URL: "",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Criteo",
		URL: "criteo.net\ncriteo.com",
		Type: "Ad Network, Retargeter"
	}, {
		Company: "Cross Pixel",
		URL: "crosspixel.net\ncrosspixelmedia.com",
		Type: "Data Aggregator/Supplier, Data Management Platform"
	}, {
		Company: "Cross Pixel Media",
		URL: "crosspixel.net\ncrosswalkmail.com\ncrosspixelmedia.com\ncrossmediaservices.com",
		Type: ""
	}, {
		Company: "Crowd Science",
		URL: "crowdscience.com",
		Type: "Analytics Provider, Data Aggregator/Supplier"
	}, {
		Company: "cXense",
		URL: "cxense.com",
		Type: "Analytics Provider, Ad Server, Data Management Platform"
	}, {
		Company: "Dapper",
		URL: "dapper.net",
		Type: "Ad Network, Optimizer"
	}, {
		Company: "Datalogix",
		URL: "",
		Type: "Data Aggregator/Supplier, Data Management Platform, Mobile"
	}, {
		Company: "DataPoint Media",
		URL: "datapointed.net",
		Type: "Analytics Provider, Retargeter, Data Management Platform"
	}, {
		Company: "DataXu",
		URL: "",
		Type: "Optimizer, Demand Side Platform"
	}, {
		Company: "Datonics",
		URL: "",
		Type: "Data Aggregator/Supplier"
	}, {
		Company: "Dedicated Media",
		URL: "dedicatednetworks.com\ndedicatednetworks.com\ndedicatedmedia.com",
		Type: "Ad Network"
	}, {
		Company: "Delta Projects",
		URL: "delta-search.com\ndelta.com",
		Type: "Ad Server, Demand Side Platform, Data Aggregator/Supplier"
	}, {
		Company: "Demand Media",
		URL: "demandbase.com\ndemandmedia.com",
		Type: "Ad Network, Publisher"
	}, {
		Company: "Digilant",
		URL: "",
		Type: "Ad Network, Optimizer"
	}, {
		Company: "Digitize",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "DirectREV",
		URL: "directrev.com",
		Type: "Ad Exchange"
	}, {
		Company: "Dotomi",
		URL: "dotomi.com",
		Type: "Retargeter, Data Aggregator/Supplier"
	}, {
		Company: "DoubleClick",
		URL: "doubleclick.net\ndoubleclick.com",
		Type: "Ad Exchange, Ad Server"
	}, {
		Company: "DoubleClick Bid Manager (formerly Invite Media)",
		URL: "",
		Type: "Demand Side Platform"
	}, {
		Company: "Drawbridge",
		URL: "devbridge.com",
		Type: "Ad Network, Analytics Provider"
	}, {
		Company: "Dynamic Logic",
		URL: "dynamicyield.com\ndynamicoxygen.com",
		Type: "Analytics Provider, Optimizer, Research Provider"
	}, {
		Company: "Effective Measure",
		URL: "effectivemeasure.net",
		Type: "Analytics Provider"
	}, {
		Company: "Eloqua",
		URL: "eloqua.com",
		Type: "Analytics Provider"
	}, {
		Company: "Emediate",
		URL: "emediate.se",
		Type: "Ad Server"
	}, {
		Company: "Encore Media Metrics",
		URL: "",
		Type: "Analytics Provider"
	}, {
		Company: "engage:BDR (Blink New Media)",
		URL: "engagesciences.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Ensemble",
		URL: "",
		Type: "Demand Side Platform"
	}, {
		Company: "e-planning",
		URL: "e-planning.net\neplans.com",
		Type: "Analytics Provider, Ad Server"
	}, {
		Company: "eStat",
		URL: "estat.com",
		Type: "Analytics Provider"
	}, {
		Company: "etracker GmbH",
		URL: "etracker.com\netracker.de",
		Type: "Analytics Provider"
	}, {
		Company: "Eulerian Technologies",
		URL: "eulerian.net\neuleriancdn.net",
		Type: "Analytics Provider, Ad Server"
	}, {
		Company: "Evidon",
		URL: "",
		Type: "Online Privacy Platform"
	}, {
		Company: "eXelate",
		URL: "exelator.com",
		Type: "Ad Exchange, Data Aggregator/Supplier"
	}, {
		Company: "Experian Marketing Services",
		URL: "experiandirect.com",
		Type: "Data Aggregator/Supplier, Data Management Platform"
	}, {
		Company: "Experimently",
		URL: "",
		Type: "Analytics Provider, Data Management Platform"
	}, {
		Company: "Exponential Interactive",
		URL: "exponential.com",
		Type: "Ad Network"
	}, {
		Company: "Eyeota",
		URL: "eyeota.net",
		Type: "Data Aggregator/Supplier"
	}, {
		Company: "eyeReturn Marketing",
		URL: "",
		Type: "Analytics Provider, Ad Server"
	}, {
		Company: "Eyeview",
		URL: "eyeviewdigital.com",
		Type: "Ad Server"
	}, {
		Company: "Ezakus",
		URL: "ezakus.net",
		Type: "Data Management Platform"
	}, {
		Company: "Fabric",
		URL: "fabricww.com",
		Type: "Data Management Platform"
	}, {
		Company: "Facilitate Digital",
		URL: "",
		Type: "Analytics Provider, Ad Server"
	}, {
		Company: "Fairfax Digital",
		URL: "fairfaxregional.com\nfairfax.com\nfairfaxmedia.com",
		Type: "Publisher"
	}, {
		Company: "Federated Media",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "Fetchback",
		URL: "fetchback.com",
		Type: "Retargeter, Ad Server"
	}, {
		Company: "Fireclick",
		URL: "fire-engine-photos.com\nfirestormgames.co.uk\nfireball.de\nfirecold.com\nfirefoxfacts.com",
		Type: "Analytics Provider"
	}, {
		Company: "Firefly Video",
		URL: "fire-engine-photos.com\nfirewallguide.com\nfirestormgames.co.uk\nfiregob.com",
		Type: "Ad Network"
	}, {
		Company: "Flashtalking",
		URL: "flashtalking.com",
		Type: "Ad Server"
	}, {
		Company: "Forbes Media Extension (FMX)",
		URL: "forbes.com\nforbesadvocate.com",
		Type: "Ad Network"
	}, {
		Company: "FreakOut",
		URL: "freakshare.com\nfreakshare.net\nfilesharefreak.com\nfreakads.com\nfreaksofcock.com",
		Type: "Demand Side Platform"
	}, {
		Company: "FreeWheel",
		URL: "fourwheeler.com",
		Type: "Ad Server"
	}, {
		Company: "Full Circle Studies",
		URL: "",
		Type: "Research Provider"
	}, {
		Company: "Full Tango",
		URL: "",
		Type: "Optimizer, Agency"
	}, {
		Company: "Gemius SA",
		URL: "gemtrackers.com\ngematsu.com",
		Type: "Analytics Provider, Ad Server"
	}, {
		Company: "Genome",
		URL: "",
		Type: "Analytics Provider, Data Management Platform"
	}, {
		Company: "Glam Media",
		URL: "glam.com\nglamourvanity.com\nglamourmagazine.co.uk",
		Type: "Ad Exchange, Ad Network, Mobile"
	}, {
		Company: "GoldSpot Media",
		URL: "gold4rs.com\ngold1013fm.com\ngoldenskate.com\ngoldcoastunited.com\ngolderotica.com\ngoldporntube.com\ngoldengirlfinance.ca\ngoldentalk.com\ngoldstats.com\ngoldtradingexperts.com",
		Type: "Ad Network, Mobile"
	}, {
		Company: "Google",
		URL: "google.com",
		Type: ""
	}, {
		Company: "Google",
		URL: "doubleclick.net",
		Type: ""
	}, {
		Company: "Google",
		URL: "invitemedia.com",
		Type: ""
	}, {
		Company: "Google",
		URL: "admeld.com",
		Type: ""
	}, {
		Company: "Google",
		URL: "googlesyndication.com",
		Type: ""
	}, {
		Company: "Google",
		URL: "googleadservices.com",
		Type: ""
	}, {
		Company: "Google",
		URL: "",
		Type: "Ad Network, Analytics Provider, Publisher, Mobile"
	}, {
		Company: "Google AdSense",
		URL: "googleadservicepixel.com",
		Type: "Supply Side Platform"
	}, {
		Company: "Google AdWords",
		URL: "googletagservices.com\ngoogleadservices.com",
		Type: "Ad Server"
	}, {
		Company: "Google Analytics",
		URL: "googlesyndication.com\ngoogletutor.com\ngoogle.com",
		Type: "Analytics Provider"
	}, {
		Company: "Google Display Network",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "Goviral",
		URL: "goviral-content.com",
		Type: "Ad Server, Creative/Ad Format Technology"
	}, {
		Company: "Grapeshot",
		URL: "grapeshot.co.uk",
		Type: "Ad Server"
	}, {
		Company: "Gravity",
		URL: "gravity.com",
		Type: "Analytics Provider"
	}, {
		Company: "GroovinAds",
		URL: "groovinads.com",
		Type: "Ad Server"
	}, {
		Company: "GroupM",
		URL: "groupcommerce.com\ngroupon.com\ngrouponcdn.com",
		Type: "Agency"
	}, {
		Company: "GSI Media Network",
		URL: "gsimedia.net",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Harren Media",
		URL: "harrenmedianetwork.com",
		Type: "Ad Network"
	}, {
		Company: "Hi-media Performance",
		URL: "himediads.com\nhimediadx.com",
		Type: "Ad Network"
	}, {
		Company: "Hurra Communications",
		URL: "hurra.com",
		Type: "Optimizer"
	}, {
		Company: "iAd Network",
		URL: "",
		Type: "Ad Network, Mobile"
	}, {
		Company: "i-Behavior",
		URL: "",
		Type: "Retargeter, Data Aggregator/Supplier, Data Management Platform, Mobile"
	}, {
		Company: "iCrossing",
		URL: "",
		Type: "Analytics Provider, Optimizer, Agency"
	}, {
		Company: "IDG TechNetwork",
		URL: "idg.com\nidgentertainment.de",
		Type: "Ad Network"
	}, {
		Company: "IgnitionOne",
		URL: "ign.com",
		Type: "Ad Network, Optimizer, Data Aggregator/Supplier"
	}, {
		Company: "Improve Digital",
		URL: "",
		Type: "Supply Side Platform"
	}, {
		Company: "Inadco",
		URL: "inskinad.com",
		Type: "Ad Network"
	}, {
		Company: "Infectious Media",
		URL: "infectiousmedia.com",
		Type: "Demand Side Platform"
	}, {
		Company: "Inflection Point Media",
		URL: "inflectionpointmedia.com",
		Type: "Ad Network, Retargeter, Ad Server"
	}, {
		Company: "INFOnline",
		URL: "infopolit.com\ninforotor.net\nizhevskinfo.ru\ninfomine.com\ninfoq.com\ninformer.com\ninfospace.com\ninfos-du-net.com\nindiainfoline.com\ninformationmadness.com\ninformationweek.com\ninfowars.com\ninfoworld.com",
		Type: "Analytics Provider"
	}, {
		Company: "InMobi",
		URL: "inmobi.com\nintomobile.com\ninsidemobileapps.com",
		Type: "Ad Network, Mobile"
	}, {
		Company: "Innity",
		URL: "innity.net\ninnity.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Insight Express",
		URL: "insightexpress.com\ninsightexpressai.com",
		Type: "Analytics Provider, Research Provider"
	}, {
		Company: "InSkin Media",
		URL: "inskinmedia.com\ninskinad.com",
		Type: "Creative/Ad Format Technology"
	}, {
		Company: "intelliAd",
		URL: "intelliad.de\nintelliad-tracking.com",
		Type: "Optimizer, Data Management Platform"
	}, {
		Company: "IntelligenceFocus",
		URL: "intelligencefocus.com",
		Type: "Analytics Provider, Optimizer"
	}, {
		Company: "Intelligent Reach",
		URL: "",
		Type: "Optimizer, Data Management Platform"
	}, {
		Company: "Intent IQ",
		URL: "iqnomy.com",
		Type: "Ad Server, Data Management Platform, Mobile"
	}, {
		Company: "Intent Media",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "Intergi Entertainment",
		URL: "intergi.com\nintergid.ru",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Intermarkets",
		URL: "intermarkets.net",
		Type: "Ad Network, Agency"
	}, {
		Company: "InterMundo Media",
		URL: "intermundomedia.com",
		Type: "Ad Network"
	}, {
		Company: "Interpolls",
		URL: "interpolls.com",
		Type: "Ad Server"
	}, {
		Company: "Inuvo",
		URL: "inuvo.com",
		Type: "Ad Network"
	}, {
		Company: "Invite Media",
		URL: "invitemedia.com",
		Type: ""
	}, {
		Company: "iPromote",
		URL: "ipromote.com",
		Type: "Ad Network"
	}, {
		Company: "IXI Corp",
		URL: "ixitools.com\nixigo.com\nixiaa.com\nifixit.com",
		Type: "Research Provider, Retargeter, Data Aggregator/Supplier"
	}, {
		Company: "JasperLabs",
		URL: "",
		Type: "Ad Server, Creative/Ad Format Technology"
	}, {
		Company: "Jemm Group",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "JiWire",
		URL: "jwire.com\njiwire.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Jumptap",
		URL: "jumpelead.com\njumptags.com\njumptap.com\njumptogames.com\njumptv.com\njump-time.net",
		Type: "Ad Network, Mobile"
	}, {
		Company: "Kanoodle",
		URL: "Kanoodle.com",
		Type: "Ad Network"
	}, {
		Company: "Kavanga",
		URL: "Kavanga.ru",
		Type: "Ad Network"
	}, {
		Company: "Keyade",
		URL: "",
		Type: "Agency"
	}, {
		Company: "Kinetic Social ",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "KissMetrics",
		URL: "kissmetrics.com",
		Type: "Analytics Provider"
	}, {
		Company: "Komli Media",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "Kontera Technologies",
		URL: "kontera.com",
		Type: "Ad Network"
	}, {
		Company: "Korrelate",
		URL: "Korrelate.com",
		Type: "Analytics Provider, Optimizer"
	}, {
		Company: "Krux Digital",
		URL: "",
		Type: "Data Aggregator/Supplier, Data Management Platform"
	}, {
		Company: "Legolas Media",
		URL: "legolas-media.com",
		Type: "Data Aggregator/Supplier, Data Management Platform"
	}, {
		Company: "Lena Grove Media",
		URL: "",
		Type: "Demand Side Platform"
	}, {
		Company: "LifeStreet Media",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "Ligatus",
		URL: "Ligatus.com",
		Type: "Ad Network"
	}, {
		Company: "Lijit Networks",
		URL: "Lijit.com",
		Type: "Ad Network"
	}, {
		Company: "LiveIntent",
		URL: "LiveIntent.com",
		Type: "Ad Server, Data Aggregator/Supplier"
	}, {
		Company: "LiveRail",
		URL: "LiveRail.com",
		Type: "Ad Server, Supply Side Platform"
	}, {
		Company: "LiveRamp",
		URL: "",
		Type: "Retargeter"
	}, {
		Company: "LocalResponse",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "Lotame",
		URL: "",
		Type: "Analytics Provider, Data Management Platform"
	}, {
		Company: "LucidMedia",
		URL: "lucidcommerce.com\nlucidel.com\nlucidchart.com",
		Type: "Demand Side Platform"
	}, {
		Company: "Lucky Orange",
		URL: "luckyorange.com",
		Type: "Analytics Provider"
	}, {
		Company: "Madison Logic",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "Magnetic",
		URL: "",
		Type: "Ad Exchange, Retargeter, Data Aggregator/Supplier"
	}, {
		Company: "MainADV SRL",
		URL: "mainadv.vom",
		Type: "Research Provider"
	}, {
		Company: "Mark & Mini",
		URL: "",
		Type: "Creative/Ad Format Technology"
	}, {
		Company: "Markit on Demand",
		URL: "",
		Type: "Ad Network, Mobile"
	}, {
		Company: "Martini Media",
		URL: "martiniadnetwork.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Matiro",
		URL: "",
		Type: "Demand Side Platform"
	}, {
		Company: "Matomy Media",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "MaxPoint Interactive",
		URL: "",
		Type: "Analytics Provider, Ad Server"
	}, {
		Company: "MBuy (formerly AdBuyer)",
		URL: "",
		Type: "Demand Side Platform"
	}, {
		Company: "MEC Global",
		URL: "meccahoo.com\nmemecdn.com\nmechodownload.com\nmemecounter.com",
		Type: "Agency"
	}, {
		Company: "Media Armor",
		URL: "Mediaarmor.com",
		Type: "Analytics Provider, Mobile"
	}, {
		Company: "Media Innovation Group",
		URL: "",
		Type: "Optimizer, Data Management Platform"
	}, {
		Company: "Media IQ",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "Media Motive (Carsales.com Network)",
		URL: "",
		Type: "Ad Network, Publisher"
	}, {
		Company: "Media6Degrees",
		URL: "Media6Degrees.com",
		Type: "Ad Network, Data Aggregator/Supplier"
	}, {
		Company: "MediaBrix",
		URL: "",
		Type: "Ad Server, Creative/Ad Format Technology, Mobile"
	}, {
		Company: "Mediacom",
		URL: "Mediacomtoday.com\nmediacomcable.com",
		Type: "Agency"
	}, {
		Company: "MediaCrossing",
		URL: "",
		Type: "Demand Side Platform"
	}, {
		Company: "mediaFORGE",
		URL: "mediaforge.com",
		Type: "Retargeter"
	}, {
		Company: "Medialets",
		URL: "",
		Type: "Analytics Provider, Ad Server, Mobile"
	}, {
		Company: "MediaMath",
		URL: "",
		Type: "Demand Side Platform"
	}, {
		Company: "MediaMind",
		URL: "",
		Type: "Optimizer, Ad Server, Demand Side Platform"
	}, {
		Company: "Mediaplex",
		URL: "Mediaplex.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "mediascale",
		URL: "",
		Type: "Optimizer, Ad Server"
	}, {
		Company: "Mediasyndicator",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "MediaV",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "Meetrics",
		URL: "metricsdirect.com\nmongoosemetrics.com",
		Type: "Analytics Provider"
	}, {
		Company: "Merchenta",
		URL: "merchenta.com",
		Type: "Retargeter"
	}, {
		Company: "Meteor Solutions",
		URL: "meteorsolutions.com",
		Type: "Ad Network, Data Aggregator/Supplier"
	}, {
		Company: "Metrigo",
		URL: "metrigo.com",
		Type: "Demand Side Platform"
	}, {
		Company: "Mi9 (Ninemsn Advertising) ",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "Miaozhen",
		URL: "",
		Type: "Data Aggregator/Supplier"
	}, {
		Company: "MicroAd",
		URL: "",
		Type: "Ad Network, Retargeter, Ad Server"
	}, {
		Company: "Microsoft adCenter",
		URL: "microsoft.com",
		Type: "Ad Network"
	}, {
		Company: "Microsoft Advertising",
		URL: "microsoft-advertising.com",
		Type: "Ad Exchange, Ad Network, Ad Server, Mobile"
	}, {
		Company: "Microsoft Atlas",
		URL: "microsoftaffiliates.net",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Microsoft Media Network",
		URL: "microsoft-watch.com",
		Type: "Ad Network"
	}, {
		Company: "Millennial Media",
		URL: "",
		Type: "Ad Server, Mobile"
	}, {
		Company: "Mixpanel",
		URL: "mixpanel.com",
		Type: "Analytics Provider, Mobile"
	}, {
		Company: "Mixpo",
		URL: "mixpo.com",
		Type: ""
	}, {
		Company: "MLN Advertising",
		URL: "mlnadvertising.com",
		Type: "Ad Server, Data Management Platform"
	}, {
		Company: "Monster Worldwide",
		URL: "monster.com\nmonsterindia.com",
		Type: "Ad Network"
	}, {
		Company: "Motrixi",
		URL: "",
		Type: "Ad Network, Mobile"
	}, {
		Company: "MyBlogLog",
		URL: "mybloglog.com",
		Type: "Analytics Provider"
	}, {
		Company: "MyBuys",
		URL: "mybuys.com",
		Type: "Ad Network, Retargeter"
	}, {
		Company: "MyThings ",
		URL: "mythings.com",
		Type: "Ad Network, Retargeter"
	}, {
		Company: "Nanigans",
		URL: "Nanigans.com",
		Type: "Demand Side Platform"
	}, {
		Company: "Navegg",
		URL: "Navegg.com",
		Type: "Analytics Provider, Optimizer"
	}, {
		Company: "Neodata",
		URL: "Neodata-group.com",
		Type: "Ad Server, Data Management Platform, Mobile"
	}, {
		Company: "Netmining",
		URL: "Netmining.com",
		Type: "Ad Network, Retargeter, Data Aggregator/Supplier"
	}, {
		Company: "NetSeer",
		URL: "NetSeer.com",
		Type: "Ad Network"
	}, {
		Company: "Neustar IP Intelligence (formerly Quova)",
		URL: "",
		Type: "Advertiser, Data Management Platform"
	}, {
		Company: "News Registry (NewsRight)",
		URL: "",
		Type: "Analytics Provider, Data Aggregator/Supplier"
	}, {
		Company: "Next Audience",
		URL: "",
		Type: "Ad Server, Demand Side Platform"
	}, {
		Company: "Next Performance",
		URL: "",
		Type: "Ad Network, Retargeter"
	}, {
		Company: "Nielsen",
		URL: "",
		Type: "Analytics Provider, Optimizer, Research Provider"
	}, {
		Company: "Nielsen (Formerly NetRatings SiteCensus)",
		URL: "netratings.com",
		Type: "Analytics Provider, Research Provider"
	}, {
		Company: "NowSpots",
		URL: "nowspots.com",
		Type: "Ad Network"
	}, {
		Company: "nPario",
		URL: "npario-inc.net",
		Type: "Data Management Platform"
	}, {
		Company: "Nugg.ad",
		URL: "Nuggad.net",
		Type: "Ad Network, Retargeter, Ad Server"
	}, {
		Company: "OneSpot",
		URL: "",
		Type: "Retargeter, Creative/Ad Format Technology"
	}, {
		Company: "Onet",
		URL: "onetime.com\nonetravel.com",
		Type: "Ad Network"
	}, {
		Company: "OpenX",
		URL: "openx.com\nopenx.net\nopenx.org\nopenxenterprise.com\nopenxtracker.com",
		Type: "Ad Exchange"
	}, {
		Company: "Operative Media",
		URL: "",
		Type: "Optimizer"
	}, {
		Company: "Optim.al",
		URL: "",
		Type: "Ad Network, Analytics Provider"
	}, {
		Company: "Optimax Media Delivery",
		URL: "",
		Type: "Ad Server"
	}, {
		Company: "Optimizely",
		URL: "optimatic.com\noptimalroi.info\noptimum.net\noptimizely.com\noptimost.com\noptimizavr.ru\noptimumenergy.com",
		Type: "Optimizer"
	}, {
		Company: "Oracle Corporation",
		URL: "oraclebroadcasting.com'",
		Type: "Data Management Platform"
	}, {
		Company: "Outbrain",
		URL: "outbrain.com",
		Type: "Ad Network"
	}, {
		Company: "OwnerIQ",
		URL: "owneriq.net",
		Type: "Ad Network, Data Aggregator/Supplier, Data Management Platform"
	}, {
		Company: "OxaMedia",
		URL: "",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Parse.ly",
		URL: "parse.ly",
		Type: "Data Management Platform"
	}, {
		Company: "Perfect Audience",
		URL: "",
		Type: "Retargeter"
	}, {
		Company: "Pictela",
		URL: "",
		Type: "Ad Server, Creative/Ad Format Technology"
	}, {
		Company: "Piximedia",
		URL: "pixiq.com",
		Type: "Agency"
	}, {
		Company: "Platform161",
		URL: "",
		Type: "Ad Network, Data Management Platform"
	}, {
		Company: "Playnomics",
		URL: "",
		Type: "Retargeter, Data Management Platform"
	}, {
		Company: "Plista",
		URL: "plista.com",
		Type: "Ad Network"
	}, {
		Company: "Pointroll",
		URL: "pointroll.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "PowerLinks",
		URL: "powerlinks.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Proclivity Systems",
		URL: "proclivitysystems.com",
		Type: "Analytics Provider, Research Provider, Data Management Platform"
	}, {
		Company: "Proximic",
		URL: "proximic.com",
		Type: "Optimizer, Ad Verification, Data Management Platform"
	}, {
		Company: "Public-Idees",
		URL: "publicidees.com",
		Type: "Ad Network, Retargeter"
	}, {
		Company: "PubMatic",
		URL: "PubMatic.com",
		Type: "Supply Side Platform, Mobile"
	}, {
		Company: "PubSquared",
		URL: "",
		Type: "Supply Side Platform"
	}, {
		Company: "Pulse 360",
		URL: "pulse360.com",
		Type: "Ad Network, Optimizer, Ad Server"
	}, {
		Company: "Pulsepoint Ad Exchange",
		URL: "pulselog.com\npulsemaps.com\nphotopulse.ru",
		Type: "Ad Exchange"
	}, {
		Company: "Pulsepoint Audience",
		URL: "pulse.co.uk\npulsemgr.com\npulsetv.com",
		Type: "Data Aggregator/Supplier, Data Management Platform"
	}, {
		Company: "Quantcast",
		URL: "quantcast.com",
		Type: "Data Management Platform"
	}, {
		Company: "QuinStreet",
		URL: "quinstreet.com\nquintelligence.com\nquinet.it",
		Type: "Ad Network"
	}, {
		Company: "Quisma",
		URL: "quisma.com",
		Type: "Agency"
	}, {
		Company: "RadiumOne",
		URL: "",
		Type: "Ad Network, Data Management Platform, Mobile"
	}, {
		Company: "RapLeaf",
		URL: "",
		Type: "Data Aggregator/Supplier"
	}, {
		Company: "REA Group ",
		URL: "",
		Type: "Ad Network, Publisher"
	}, {
		Company: "redvertisment",
		URL: "",
		Type: "Ad Exchange, Ad Server"
	}, {
		Company: "Relestar (Relevad Corporation) ",
		URL: "relestar.com",
		Type: "Ad Network, Demand Side Platform"
	}, {
		Company: "Relevate Group",
		URL: "",
		Type: "Data Aggregator/Supplier, Data Management Platform"
	}, {
		Company: "Resonate Insights",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "ReTargeter",
		URL: "retargeter.com",
		Type: "Retargeter"
	}, {
		Company: "REVV for Mobile (formerly Mobsmith)",
		URL: "",
		Type: "Ad Server, Mobile"
	}, {
		Company: "RewardTV",
		URL: "rewardtv.com",
		Type: "Research Provider, Data Aggregator/Supplier"
	}, {
		Company: "RichRelevance",
		URL: "RichRelevance.com",
		Type: "Optimizer, Ad Server, Creative/Ad Format Technology"
	}, {
		Company: "Right Media",
		URL: "rightsidenews.com\nrightdiagnosis.com\nrightstats.com\nrightmove.co.uk\nrightstuf.com\nrightnow.com",
		Type: "Ad Exchange, Ad Server"
	}, {
		Company: "Rivity",
		URL: "",
		Type: "Demand Side Platform"
	}, {
		Company: "Rocket Fuel",
		URL: "",
		Type: "Ad Network, Data Management Platform"
	}, {
		Company: "Rovion",
		URL: "rovion.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Rubicon Project",
		URL: "rubiconproject.com",
		Type: "Ad Exchange, Supply Side Platform"
	}, {
		Company: "Safecount",
		URL: "",
		Type: "Research Provider"
	}, {
		Company: "Say Media",
		URL: "saymefdia.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "ScanScout",
		URL: "scanscout.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Semasio",
		URL: "semasio.net",
		Type: "Data Management Platform"
	}, {
		Company: "Set.tv",
		URL: "",
		Type: "Agency"
	}, {
		Company: "Shareaholic",
		URL: "Shareaholic.com",
		Type: "Publisher"
	}, {
		Company: "ShareThis",
		URL: "ShareThis.com",
		Type: "Ad Network"
	}, {
		Company: "ShareThrough",
		URL: "ShareThrough.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Shopzilla",
		URL: "Shopzilla-images.com",
		Type: "Ad Server"
	}, {
		Company: "Simpli.fi",
		URL: "Simpli.fi",
		Type: "Retargeter, Ad Server, Demand Side Platform"
	}, {
		Company: "Simply",
		URL: "simply.com\nsimplyassist.co.uk\nsimplyhired.com",
		Type: "Ad Server"
	}, {
		Company: "SiteScout",
		URL: "SiteScout.com",
		Type: "Ad Server, Demand Side Platform"
	}, {
		Company: "Smart AdServer",
		URL: "smartadserver.com\nsmartaddressbar.com",
		Type: "Ad Server"
	}, {
		Company: "Smowtion",
		URL: "Smowtion.com",
		Type: "Ad Network, Data Management Platform"
	}, {
		Company: "Snoobi Oy",
		URL: "Snoobi.com ",
		Type: "Analytics Provider"
	}, {
		Company: "Sociomantic Labs GmbH",
		URL: "sociomaniatic.vom",
		Type: "Ad Server"
	}, {
		Company: "Sophus3",
		URL: "sophus3.com",
		Type: "Analytics Provider"
	}, {
		Company: "Specific Media",
		URL: "specificmedia.com\nspecificclick.net",
		Type: "Ad Network, Data Aggregator/Supplier"
	}, {
		Company: "Speed Shift Media",
		URL: "speedtest.net\nspeedsuccess.net\nspeedppc.com\nspeedtv.com\nspeedmonkey.net\nspeedtest.net\nspeedera.net\nspeedppc.com\nspeedyshare.com\nsitespeedlab.com\nspeed-trap.com\nspeedcount.de\nspeedcounter.net\nspeedtracker.de\nspeedbit.com",
		Type: "Ad Network"
	}, {
		Company: "Spongecell",
		URL: "spongecell.com",
		Type: "Ad Server"
	}, {
		Company: "SpotXchange",
		URL: "spotxchange.com",
		Type: "Ad Exchange"
	}, {
		Company: "SteelHouse",
		URL: "steelhousemedia.com",
		Type: "Retargeter"
	}, {
		Company: "StrikeAd",
		URL: "strikead.com",
		Type: "Demand Side Platform, Mobile"
	}, {
		Company: "Struq",
		URL: "struq.com",
		Type: "Ad Network, Retargeter, Ad Server"
	}, {
		Company: "SundaySky",
		URL: "sundaysky.com\nsundayskylb1.com",
		Type: "Retargeter, Creative/Ad Format Technology"
	}, {
		Company: "Taboola",
		URL: "taboola.com\ntaboolasyndication.com",
		Type: "Ad Network"
	}, {
		Company: "TagMan",
		URL: "",
		Type: "Optimizer"
	}, {
		Company: "Tanx",
		URL: "tanx.com",
		Type: "Ad Exchange"
	}, {
		Company: "Tapad",
		URL: "tapad.com",
		Type: "Ad Network, Mobile"
	}, {
		Company: "TARGUSinfo",
		URL: "targetedinfo.com",
		Type: "Data Aggregator/Supplier"
	}, {
		Company: "Telemetry",
		URL: "telemetryverification.net",
		Type: "Ad Server"
	}, {
		Company: "TellApart",
		URL: "tellapart.com",
		Type: "Retargeter"
	}, {
		Company: "Telstra Advertising Network",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "Terra (formerly EZTarget Media)",
		URL: "terradaily.com\nterra.com",
		Type: "Ad Network"
	}, {
		Company: "the Rubicon Project",
		URL: "",
		Type: ""
	}, {
		Company: "The Trade Desk",
		URL: "traffictrader.net\ntradeboss.com\ntradearabia.com\ntradeaboat.co.nz\ntradekey.com\ntradecarview.com\ntradelab.fr\ntrade-it.co.uk\ntraderonline.com\ntrademe.co.nz\ntradedoubler.com\ntradepub.com\ntradetracker.net\ntradeexpert.net\ntradepopups.com",
		Type: "Demand Side Platform"
	}, {
		Company: "Think Realtime (Echo Search Media)",
		URL: "thinkbroadband.com\nthinkingwithportals.com\nthinkbaby.co.uk\nthinkbabynames.com\nthinkdigit.com\nthinkingwithportals.com\nthinkexist.com\nthinkbabynames.com\nthinkgeek.com\nthinkatheist\nthinkprogress.org\nthinkteletronics.com",
		Type: "Ad Network, Retargeter"
	}, {
		Company: "Tomorrow Focus Media",
		URL: "tomopop.com",
		Type: "Ad Network"
	}, {
		Company: "TrackingSoft",
		URL: "tracking101.com\ntracking11.com\ntrackingoffer.net\ntracking202.com\ntracetracking.net\ntracking100.com\ntracking202.com\ntrackinglabs.com",
		Type: "Analytics Provider"
	}, {
		Company: "TradeDoubler",
		URL: "tradedoubler.com",
		Type: "Ad Network"
	}, {
		Company: "Traffective",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "Traffiliate",
		URL: "",
		Type: "Ad Network, Optimizer"
	}, {
		Company: "Travora Media",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "Tremor Video",
		URL: "tremormedia.com",
		Type: "Ad Network, Optimizer, Mobile"
	}, {
		Company: "Tribal Fusion",
		URL: "",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Triggit",
		URL: "triggit.com",
		Type: "Demand Side Platform, Data Aggregator/Supplier"
	}, {
		Company: "TruEffect",
		URL: "",
		Type: "Analytics Provider"
	}, {
		Company: "TubeMogul",
		URL: "tubemogul.com",
		Type: "Ad Server"
	}, {
		Company: "Turn",
		URL: "turnstylenews.com\nturnto23\nturnstylenews.com\nturnto.com\nturnsocial.com",
		Type: "Demand Side Platform, Data Management Platform"
	}, {
		Company: "Tynt Multimedia",
		URL: "Tynt.com",
		Type: "Analytics Provider"
	}, {
		Company: "Unanimis",
		URL: "unanimis.co.uk",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Underdog Media",
		URL: "",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Undertone",
		URL: "undertone.com",
		Type: "Ad Network, Creative/Ad Format Technology"
	}, {
		Company: "uniQlick",
		URL: "",
		Type: "Ad Server, Demand Side Platform"
	}, {
		Company: "ValueClick Media",
		URL: "valueclickmedia.com\nvalueclick.com\nvalueclick.net",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "Valued Interactive Media",
		URL: "valuedopinions.co.uk\nvimeo.com",
		Type: "Data Management Platform"
	}, {
		Company: "Varick Media Management",
		URL: "vmm-satellite1.com",
		Type: "Ad Network, Optimizer, Agency"
	}, {
		Company: "VCCP Search",
		URL: "",
		Type: "Agency, Ad Server"
	}, {
		Company: "Vdopia",
		URL: "vdopia.com",
		Type: "Ad Network, Mobile"
	}, {
		Company: "Venatus Media",
		URL: "",
		Type: "Ad Network"
	}, {
		Company: "Vertical Search Works",
		URL: "verticalsearchworks.com\nvertical-leap.co.uk\nvertical-leap.net\nverticalscope.com\nvertical-n.de\nverticalnetwork.de",
		Type: "Ad Network, Optimizer"
	}, {
		Company: "Veruta",
		URL: "",
		Type: "Retargeter"
	}, {
		Company: "Vibrant Media",
		URL: "vibrantmedia.com",
		Type: "Ad Network, Ad Server"
	}, {
		Company: "VideoHub",
		URL: "videohub.com",
		Type: "Ad Network"
	}, {
		Company: "Videology (TidalTV)",
		URL: "videolan.org\nvideolansoftware.com",
		Type: "Ad Network, Analytics Provider"
	}, {
		Company: "Vindico Group",
		URL: "vindicosuite.com",
		Type: "Ad Server"
	}, {
		Company: "Visible Measures",
		URL: "visiblemeasures.com",
		Type: "Analytics Provider"
	}, {
		Company: "VisualDNA (formerly Imagini)",
		URL: "visualdna-stats.com\nvisualdna.com",
		Type: "Data Aggregator/Supplier"
	}, {
		Company: "Vizu",
		URL: "vizu.com",
		Type: "Optimizer, Research Provider"
	}, {
		Company: "Vizury",
		URL: "vizury.com",
		Type: "Ad Network, Retargeter"
	}, {
		Company: "VoiceFive Networks (Scorecard Research)",
		URL: "voicefive.com",
		Type: "Research Provider, Data Aggregator/Supplier"
	}, {
		Company: "WebAntenna",
		URL: "webantenna.info",
		Type: "Analytics Provider"
	}, {
		Company: "Weborama",
		URL: "weborama.fr",
		Type: "Analytics Provider, Optimizer, Data Aggregator/Supplier"
	}, {
		Company: "Webtraffic",
		URL: "webtraffic.se\nwebtrafficagents.com\nwebtraffiq.com",
		Type: "Ad Network"
	}, {
		Company: "Webtrekk",
		URL: "webtrekk.de\nwebtrekk.net",
		Type: "Analytics Provider"
	}, {
		Company: "webtrends",
		URL: "webtrends.com\nwebtrendslive.com",
		Type: "Analytics Provider, Optimizer"
	}, {
		Company: "Widdit",
		URL: "",
		Type: "Optimizer"
	}, {
		Company: "Xaxis",
		URL: "",
		Type: "Ad Network, Data Management Platform"
	}, {
		Company: "XiTi",
		URL: "xiti.com",
		Type: "Analytics Provider"
	}, {
		Company: "xplosion interactive",
		URL: "xplosion.de",
		Type: "Retargeter"
	}, {
		Company: "Xrost",
		URL: "",
		Type: "Ad Exchange, Data Aggregator/Supplier"
	}, {
		Company: "Yahoo Japan",
		URL: "",
		Type: "Ad Network, Publisher"
	}, {
		Company: "Yahoo!",
		URL: "yahoo.com\nyahoo.co",
		Type: "Ad Network, Publisher"
	}, {
		Company: "Yahoo! Ad Network",
		URL: "yahoo.net",
		Type: "Ad Network, Publisher, Ad Server"
	}, {
		Company: "Yahoo! Web Analytics",
		URL: "yahooapis.com",
		Type: "Analytics Provider"
	}, {
		Company: "YD ",
		URL: "",
		Type: "Agency"
	}, {
		Company: "Yieldbot",
		URL: "yieldbot.com",
		Type: "Analytics Provider, Data Management Platform"
	}, {
		Company: "YuMe",
		URL: "yumenetworks.com",
		Type: "Ad Network, Ad Server, Mobile"
	}, {
		Company: "Zedo",
		URL: "zedomax.com\nzedo.com",
		Type: "Ad Server"
	}, {
		Company: "Ziff Davis",
		URL: "Ziffdavisenterprise.com\nziffdavis.com",
		Type: "Ad Network, Publisher, Demand Side Platform"
	}, {
		Company: "Chango",
		URL: "chango.com",
		Type: "Search"
	}, {
		Company: "Google",
		URL: "google.com",
		Type: "Search"
	}, {
		Company: "Steelhouse",
		URL: "steelhouse.com",
		Type: "Search"
	}, {
		Company: "doubleclick",
		URL: "doubleclick.com",
		Type: "Search"
	}, {
		Company: "Microsoft",
		URL: "microsoft.com",
		Type: "Search"
	}, {
		Company: "Magnetic",
		URL: "magnetic.com",
		Type: "Search"
	}, {
		Company: "Simpli",
		URL: "simpli.fi",
		Type: "Search"
	}, {
		Company: "Yahoo",
		URL: "yahoo.com",
		Type: "Search"
	}, {
		Company: "Adroll",
		URL: "adroll.com",
		Type: "Search"
	}, {
		Company: "Retargeter",
		URL: "retargeter.com",
		Type: "Search"
	}, {
		Company: "Fetchback",
		URL: "fetchback.com",
		Type: "Search"
	}, {
		Company: "Reachlocal",
		URL: "reachlocal.com",
		Type: "Search"
	}, {
		Company: "Mediaforge",
		URL: "mediaforge.com",
		Type: "Search"
	}, {
		Company: "Criteo",
		URL: "criteo.com",
		Type: "Search"
	}];
	chrome.cookies.getOtherBrowserChrome({
		"url": "https://www.epicbrowser.com",
		"name": "__utma"
	}, function (cookies) {

		$("#loading").delay(2000).hide(0);

		$("#iee").hide();
		$("#fee").hide();

		$("#gog").show();

		$("#ie").hide();
		$("#firefoxx").hide();

		$("#google").show();


		if (cookies != null) {
			try {
				$('#AnalysisFirefox').hide();
				$('#OtherSearchFirefox').hide();
				$('#OfflineTrackerFirefox').hide();
				$('#adTrackerFirefox').hide();
				$('#HorizontalFirefox').hide();
				var ChromeCookies = new Array();
				//code to remove duplicates
				var TrackingCookies = new Array();
				var CookieType = new Array();
				var AdCookies = new Array();
				var OtherCookies = new Array();
				ChromeCookies = UniqueArray(cookies);

				for (i = 0; i < ChromeCookies.length; i++) {
					for (j = 0; j < blocklist_json.length; j++) {
						if (ChromeCookies[i] == blocklist_json[j].URL) {
							TrackingCookies.push(blocklist_json[j].Company);
							break;
							// if (blocklist_json[j].Type != "") {
							//CookieType.push(blocklist_json[j].Type);

							// if ((blocklist_json[j].Type == 'ad') || (blocklist_json[j].Type == 'tracker')) {
							//AdCookies.push(blocklist_json[j].Company);
							// }
							//if (blocklist_json[j].Type == 'Search') {
							//    OtherCookies.push(blocklist_json[j].Company);
							//}
							// }
						}
					}
				}
				TrackingCookies = UniqueArray(TrackingCookies);

				$('#gog').append('<table id="xyz"></table>');
				var tablex = $('#gog').children();

				if (TrackingCookies.length == 0) {
					$("#slider").hide();
					tablex.append("<tr style='height:40%'>  <td style='color:black;font-family:Arial,Helvetica,sans-serif;font-size:16px;padding:10px 0px 0px 10px;margin-left:2px;margin-right:2px;'><strong><b>We're unable to access your Google Chrome.  If it is open, please close Chrome then run this again (via the new tab page).  If that doesn't work, Chrome may have been installed in a non-standard location which we can't access.</strong></b></td></tr>");
					//tablex.append("saurav");
				} else {
					$("#slider").show();
					var total_cookies = UniqueArray(ChromeCookies);
					var total_tracking_cookies = UniqueArray(TrackingCookies);
					var adcookie_count = UniqueArray(AdCookies);
					var othercookie_count = UniqueArray(OtherCookies);

					tablex.append("<tr id='messageTableTr1' style='height:10px;'>  <td colspan='10'><h3 style='color:black;font-family:Arial,Helvetica,sans-serif;font-size:16px;padding:0px 0px 0px 10px;margin:5px 5px 5px 0px;overflow:hidden;'>We found " + total_cookies.length + " companies storing data in Chrome and tracking at least part of your browsing. </h3></td></tr><tr style='background-color:#FFFFFF;'></tr>");
					tablex.append("<tr id='messageTableTr2' style='height:10px;'> <td colspan='10'><h3 style='color:black;font-family:Arial,Helvetica,sans-serif;font-size:16px;padding:0px 0px 0px 10px;margin:0px 5px 5px 0px;'>We found " + total_tracking_cookies.length + " data collectors in Chrome tracking, saving and often selling your browsing. </h3></td></tr><tr style='background-color:#FFFFFF;'></tr>");
					tablex.append("<tr style='height:10px;'>  <td colspan='10'><h3 style='color:black;font-family:Arial,Helvetica,sans-serif;font-size:16px;padding:0px 0px 0px 10px;margin:0px 5px 0px 0px;'>Here is a list of the trackers we found (data collectors, ad networks, widgets & others): </h3></td></tr><tr style='background-color:#FFFFFF;'></tr> ");

					$('#chrome_array').val(TrackingCookies);
					($('#google_chrome_count')).html('(' + TrackingCookies.length + " Trackers)");
					$('#google').append('<table1 id="main" text-align="center"  border="0"  class="oliver" cellpadding="3" cellspacing="0"></table>');

					var table1 = $('#google').children();
					for (var i = 0; i < TrackingCookies.length; i++) {
						if ((TrackingCookies.length - i) >= 4)
							table1.append("<tr><td>" + TrackingCookies[i] + "</td><td>" + TrackingCookies[++i] + "</td><td>" + TrackingCookies[++i] + "</td><td>" + TrackingCookies[++i] + "</td></tr>");
						else {
							var n = TrackingCookies.length - i;
							if (n == 3)
								table1.append("<tr><td>" + TrackingCookies[i] + "</td><td>" + TrackingCookies[++i] + "</td><td>" + TrackingCookies[++i] + "</td></tr>");
							else if (n == 2)
								table1.append("<tr><td>" + TrackingCookies[i] + "</td><td>" + TrackingCookies[++i] + "</td></tr>");
							else
								table1.append("<tr><td>" + TrackingCookies[i] + "</td><td>");
						}
					}
				}
			} catch (e) {
				alert(e)
			}
		} else {
			alert("No Trackers Found!")
		}

	})

	$("#google_chrome_tab").click(function () {
		$("#loading").show();

		chrome.cookies.getOtherBrowserChrome({
			"url": "https://www.epicbrowser.com",
			"name": "__utma"
		}, function (cookies) {

			$("#loading").delay(1500).hide(0);
			//document.getElementById("firefoxx").style.visibility="visible";

			$("#google_chrome_tab").addClass('active-side-nav');

			$("#firefox_tab").removeClass('active-side-nav');
			$("#internet_explorer_tab").removeClass('active-side-nav');
			$("#main").hide();
			$("#ie").hide();
			$("#firefoxx").hide();

			$("#google").show();

			$("#xyz").hide();
			$("#iee").hide();
			$("#fee").hide();

			$("#gog").show();

			if (cookies != null) {
				try {
					goo++;

					$('#AnalysisFirefox').hide();
					$('#OtherSearchFirefox').hide();
					$('#OfflineTrackerFirefox').hide();
					$('#adTrackerFirefox').hide();
					$('#HorizontalFirefox').hide();
					var ChromeCookies = new Array();
					//code to remove duplicates
					var TrackingCookies = new Array();
					var CookieType = new Array();
					var AdCookies = new Array();
					var OtherCookies = new Array();
					ChromeCookies = UniqueArray(cookies);

					for (i = 0; i < ChromeCookies.length; i++) {
						for (j = 0; j < blocklist_json.length; j++) {
							if (ChromeCookies[i] == blocklist_json[j].URL) {
								TrackingCookies.push(blocklist_json[j].Company);
								break;
								// if (blocklist_json[j].Type != "") {
								//  CookieType.push(blocklist_json[j].Type);

								// if ((blocklist_json[j].Type == 'ad') || (blocklist_json[j].Type == 'tracker')) {
								// AdCookies.push(blocklist_json[j].Company);
								//}
								//if (blocklist_json[j].Type == 'Search') {
								//  OtherCookies.push(blocklist_json[j].Company);
								//}
								//}
							}
						}
					}
					TrackingCookies = UniqueArray(TrackingCookies);
					if (TrackingCookies.length == 0) {
						$("#slider").hide();
					}

					if (goo == 1) {
						$('#gog').append('<table></table>');
						var tablex = $('#gog').children();

						if (TrackingCookies.length == 0) {
							tablex.append("<tr style='height:40%'>  <td style='color:black;font-family:Arial,Helvetica,sans-serif;font-size:16px;padding:10px 0px 0px 10px;margin-left:2px;margin-right:2px;'><strong><b>We're unable to access your Google Chrome.  If it is open, please close Chrome then run this again (via the new tab page).  If that doesn't work, Chrome may have been installed in a non-standard location which we can't access.</strong></b></td></tr>");
						} else {

							$("#slider").show();

							var total_cookies = UniqueArray(ChromeCookies);
							var total_tracking_cookies = UniqueArray(TrackingCookies);
							var adcookie_count = UniqueArray(AdCookies);
							var othercookie_count = UniqueArray(OtherCookies);

							tablex.append("<tr id='messageTableTr1' style='height:10px;'>  <td colspan='30'><h3 style='color:black;font-family:Arial,Helvetica,sans-serif;font-size:16px;padding:0px 0px 0px 10px;margin:5px 5px 5px 0px;overflow:hidden;'>We found " + total_cookies.length + " companies storing data in Chrome and tracking at least part of your browsing. </h3></td></tr><tr style='background-color:#FFFFFF;'></tr>");
							tablex.append("<tr id='messageTableTr2' style='height:10px;'> <td colspan='30'><h3 style='color:black;font-family:Arial,Helvetica,sans-serif;font-size:16px;padding:0px 0px 0px 10px;margin:5px 5px 5px 0px;overflow:hidden;'>We found " + total_tracking_cookies.length + " data collectors in Chrome tracking, saving and often selling your browsing. </h3></td></tr><tr style='background-color:#FFFFFF;'></tr>");
							tablex.append("<tr style='height:10px;'>  <td colspan='30'><h3 style='color:black;font-family:Arial,Helvetica,sans-serif;font-size:16px;padding:0px 0px 0px 10px;margin:5px 5px 0px 0px;overflow:hidden;'>Here is a list of the trackers we found (data collectors, ad networks, widgets & others): </h3></td></tr><tr style='background-color:#FFFFFF;'></tr> ");
							$('#chrome_array').val(TrackingCookies);
							($('#google_chrome_count')).html('(' + TrackingCookies.length + " Trackers)");

							var ChromeCookies = new Array();
							ChromeCookies = UniqueArray(cookies);

							$('#google').append('<table text-align="center"  border="0"  class="oliver" cellpadding="5" cellspacing="0"></table>');

							var table = $('#google').children();

							for (var i = 0; i < TrackingCookies.length; i++) {
								if ((TrackingCookies.length - i) >= 4)
									table.append("<tr><td>" + checkforUndefined(TrackingCookies[i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td></tr>");
								else {
									var n = TrackingCookies.length - i;
									if (n == 3)
										table.append("<tr><td>" + checkforUndefined(TrackingCookies[i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td></tr>");
									else if (n == 2)
										table.append("<tr><td>" + checkforUndefined(TrackingCookies[i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td></tr>");
									else
										table.append("<tr><td>" + checkforUndefined(TrackingCookies[i]) + "</td><td>");
								}
							}
						}
					}
				} catch (e) {
					alert(e)
				}
			} else {
				alert("No Trackers Found!")
			}

		})
	});
	// ***** End of Chrome *****

	// ***** Firefox *****
	$("#firefox_tab").click(function () {

		$("#loading").show();
		//document.getElementById("google").style.display="none";
		//document.getElementById("ie").style.display="none";
		//document.getElementById("firefoxx").style.visibility="visible";
		$(this).addClass('active-side-nav');

		$("#google_chrome_tab").removeClass('active-side-nav');
		$("#internet_explorer_tab").removeClass('active-side-nav');

		$("#main").hide();
		$("#ie").hide();

		$("#google").hide();
		$("#firefoxx").show();
		$("#xyz").hide();
		$("#iee").hide();
		$("#gog").hide();

		$("#fee").show();
		chrome.cookies.getOtherBrowserFirefox({
			"url": "https://www.epicbrowser.com",
			"name": "__utma"
		}, function (cookies) {

			console.log(cookies)

			$("#loading").delay(2000).hide(0);


			if (cookies != null) {
				try {
					fire++;

					$('#AnalysisFirefox').hide();
					$('#OtherSearchFirefox').hide();
					$('#OfflineTrackerFirefox').hide();
					$('#adTrackerFirefox').hide();
					$('#HorizontalFirefox').hide();
					var ChromeCookies = new Array();
					//code to remove duplicates
					var TrackingCookies = new Array();
					var CookieType = new Array();
					var AdCookies = new Array();
					var OtherCookies = new Array();
					ChromeCookies = UniqueArray(cookies);

					for (i = 0; i < ChromeCookies.length; i++) {
						for (j = 0; j < blocklist_json.length; j++) {
							if (ChromeCookies[i] == blocklist_json[j].URL) {
								TrackingCookies.push(blocklist_json[j].Company);
								break;
								//if (blocklist_json[j].Type != "") {
								//  CookieType.push(blocklist_json[j].Type);

								// if ((blocklist_json[j].Type == 'ad') || (blocklist_json[j].Type == 'tracker')) {
								// AdCookies.push(blocklist_json[j].Company);
								// }
								//if (blocklist_json[j].Type == 'Search') {
								//OtherCookies.push(blocklist_json[j].Company);
								//}
								//}
							}
						}
					}
					TrackingCookies = UniqueArray(TrackingCookies);
					// TrackingCookies = UniqueArray(TrackingCookies);
					if (TrackingCookies.length == 0) {
						$("#slider").hide();
					}

					if (fire == 1) {
						$('#fee').append('<table></table>');
						var tabley = $('#fee').children();
						if (TrackingCookies.length == 0) {
							tabley.append("<tr style='height:40%'>  <td style='color:black;font-family:Arial,Helvetica,sans-serif;font-size:16px;padding:10px 0px 0px 10px;margin-left:2px;margin-right:2px;'><strong><b>We're unable to access your Mozilla Firefox.  If it is open, please close Firefox then run this again (via the new tab page).  If that doesn't work, Firefox may have been installed in a non-standard location which we can't access.</strong></b></td></tr>");
							//tablex.append("saurav");
						} else {
							$("#slider").show();
							var total_cookies = UniqueArray(ChromeCookies);
							var total_tracking_cookies = UniqueArray(TrackingCookies);
							var adcookie_count = UniqueArray(AdCookies);
							var othercookie_count = UniqueArray(OtherCookies);

							tabley.append("<tr id='messageTableTr1' style='height:10px;'>  <td colspan='30'><h3 style='color:black;font-family:Arial,Helvetica,sans-serif;font-size:16px; padding:0px 0px 0px 10px;margin:5px 5px 5px 0px;overflow:hidden;'>We found " + total_cookies.length + " companies storing data in Firefox and tracking at least part of your browsing. </h3></td></tr><tr style='background-color:#FFFFFF;'></tr>");
							tabley.append("<tr id='messageTableTr2' style='height:10px'> <td colspan='30'><h3 style='color:black;font-family:Arial,Helvetica,sans-serif;font-size:16px;padding:0px 0px 0px 10px;margin:0px 5px 5px 0px;'>We found " + total_tracking_cookies.length + " data collectors in Firefox tracking, saving and often selling your browsing. </h3></td></tr><tr style='background-color:#FFFFFF;'></tr>");
							tabley.append("<tr style='height:10px;'>  <td colspan='30'><h3 style='color:black;font-family:Arial,Helvetica,sans-serif;font-size:16px;padding:0px 0px 0px 10px;margin:0px 5px 0px 0px;'>Here is a list of the trackers we found (data collectors, ad networks, widgets & others): </h3></td></tr><tr style='background-color:#FFFFFF;'></tr> ");
							($('#firefox_count')).html('(' + TrackingCookies.length + " Trackers)");
							$('#firefox_array').val(TrackingCookies);

							var ChromeCookies = new Array();
							ChromeCookies = UniqueArray(cookies);

							$('#firefoxx').append('<table text-align="center"  border="0"  class="oliver" cellpadding="25" cellspacing="20"></table>');

							var table = $('#firefoxx').children();

							for (var i = 0; i < TrackingCookies.length; i++) {
								if ((TrackingCookies.length - i) >= 4)
									table.append("<tr><td>" + checkforUndefined(TrackingCookies[i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td></tr>");
								else {
									var n = TrackingCookies.length - i;
									if (n == 3)
										table.append("<tr><td>" + checkforUndefined(TrackingCookies[i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td></tr>");
									else if (n == 2)
										table.append("<tr><td>" + checkforUndefined(TrackingCookies[i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td></tr>");
									else
										table.append("<tr><td>" + checkforUndefined(TrackingCookies[i]) + "</td><td>");
								}
							}
						}
					}
				} catch (e) {
					alert(e)
				}
			} else {
				alert("No Trackers Found!")
			}

		})
	});

	$("#internet_explorer_tab").click(function () {

		$("#loading").show();
		chrome.cookies.getOtherBrowserSafari({
			"url": "https://www.epicbrowser.com",
			"name": "__utma"
		}, function (cookies) {

			$("#loading").delay(1500).hide(0);
			$("#internet_explorer_tab").addClass('active-side-nav');
			$("#firefox_tab").removeClass('active-side-nav');
			$("#google_chrome_tab").removeClass('active-side-nav');

			$("#xyz").hide();
			$("#fee").hide();
			$("#gog").hide();

			$("#iee").show();
			$("#main").hide();
			$("#firefoxx").hide();
			$("#google").hide();
			$("#ie").show();

			if (cookies != null) {
				try {
					iee++;

					$('#AnalysisFirefox').hide();
					$('#OtherSearchFirefox').hide();
					$('#OfflineTrackerFirefox').hide();
					$('#adTrackerFirefox').hide();
					$('#HorizontalFirefox').hide();
					var ChromeCookies = new Array();
					//code to remove duplicates
					var TrackingCookies = new Array();
					var CookieType = new Array();
					var AdCookies = new Array();
					var OtherCookies = new Array();
					ChromeCookies = UniqueArray(cookies);


					for (i = 0; i < ChromeCookies.length; i++) {
						for (j = 0; j < blocklist_json.length; j++) {
							if (ChromeCookies[i] == blocklist_json[j].URL) {
								TrackingCookies.push(blocklist_json[j].Company);
								break;

								//if (blocklist_json[j].Type != "") {
								//CookieType.push(blocklist_json[j].Type);

								//if ((blocklist_json[j].Type == 'ad') || (blocklist_json[j].Type == 'tracker')) {
								//AdCookies.push(blocklist_json[j].Company);
								//}
								//if (blocklist_json[j].Type == 'Search') {
								// OtherCookies.push(blocklist_json[j].Company);
								//}
								// }
							}
						}
					}
					TrackingCookies = UniqueArray(TrackingCookies);
					if (TrackingCookies.length == 0) {
						$("#slider").hide();
					}
					if (iee == 1) {
						$('#iee').append('<table></table>');
						var tablez = $('#iee').children();
						if (TrackingCookies.length == 0) {
							tablez.append("<tr style='height:40%'>  <td style='color:black;font-family:Arial,Helvetica,sans-serif;font-size:16px;padding:10px 0px 0px 10px;margin-left:2px;margin-right:2px;'><strong><b>We're unable to access your Safari.  If it is open, please close Safari then run this again (via the new tab page).  If that doesn't work, Safari may have been installed in a non-standard location which we can't access.</strong></b></td></tr>");
							//tablex.append("saurav");
						} else {
							$("#slider").show();

							var total_cookies = UniqueArray(ChromeCookies);
							var total_tracking_cookies = UniqueArray(TrackingCookies);
							var adcookie_count = UniqueArray(AdCookies);
							var othercookie_count = UniqueArray(OtherCookies);

							tablez.append("<tr id='messageTableTr1' style='height:10px;'>  <td colspan='30'><h3 style='color:black;font-family:Arial,Helvetica,sans-serif;font-size:16px; padding:0px 0px 0px 10px;margin:5px 5px 5px 0px;overflow:hidden;'>We found " + total_cookies.length + " companies storing data in Safari and tracking at least part of your browsing. </h3></td></tr><tr style='background-color:#FFFFFF;'></tr><hr>");
							tablez.append("<tr id='messageTableTr2' style='height:10px;'> <td colspan='30'><h3 style='color:black;font-family:Arial,Helvetica,sans-serif;font-size:16px;padding:0px 0px 0px 10px;margin:0px 5px 5px 0px;'>We found " + total_tracking_cookies.length + " data collectors in Safari tracking, saving and often selling your browsing. </h3></td></tr><tr style='background-color:#FFFFFF;'></tr>");
							tablez.append("<tr style='height:10px;'>  <td colspan='30'><h3 style='color:black;font-family:Arial,Helvetica,sans-serif;font-size:16px;padding:0px 0px 0px 10px;margin:0px 5px 0px 0px;'>Here is a list of the trackers we found (data collectors, ad networks, widgets & others): </h3></td></tr><tr style='background-color:#FFFFFF;'></tr> ");
							$('#internet_explorer_array').val(TrackingCookies);
							($('#internet_explorer_count')).html('(' + TrackingCookies.length + " Trackers)");

							var ChromeCookies = new Array();
							ChromeCookies = UniqueArray(cookies);

							$('#ie').append('<table text-align="center"  border="0"  class="oliver" cellpadding="25" cellspacing="15"></table>');

							var table = $('#ie').children();
							for (var i = 0; i < TrackingCookies.length; i++) {
								if (TrackingCookies.length - i >= 4)
									table.append("<tr><td>" + checkforUndefined(TrackingCookies[i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td></tr>");
								else {
									var n = TrackingCookies.length - i;
									if (n = 3)
										table.append("<tr><td>" + checkforUndefined(TrackingCookies[i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td></tr>");
									if (n == 2)
										table.append("<tr><td>" + checkforUndefined(TrackingCookies[i]) + "</td><td>" + checkforUndefined(TrackingCookies[++i]) + "</td></tr>");
									if (n == 1)
										table.append("<tr><td>" + checkforUndefined(TrackingCookies[i]) + "</td></tr>");
								}
							}
						}
					}
				} catch (e) {
					alert(e)
				}
			} else {
				alert("No Trackers Found!")
			}

		})
	});
});


function UniqueArray(a) {
	//Adds new uniqueArr values to temp array
	//var names = ["Mike","Matt","Nancy","Adam","Jenny","Nancy","Carl"];
	var uniqueNames = [];
	// ***** Below function is not splitting the URL's, so commented out and wrote Javascript code. May 2023 *****
	// $.each(a, function(i, el) {
	//     if($.inArray(el, uniqueNames) === -1) uniqueNames.push(el);
	// }); **************

	const str = a.toString();
	var splitArray = str.split(",");
	// alert("splitArray.length "+ splitArray.length);

	for (var i = 0; i < splitArray.length; i ++) {
		var currentValue = splitArray[i].trim();

		if(!uniqueNames.includes(currentValue)) {
			uniqueNames.push(currentValue);
		}
	}

	return uniqueNames;
	/* var temp = new Array();
	for(var i=0;i<a.length;i++){
	if(!contains(temp, a[i])){
	temp.length+=1;
	temp[temp.length-1]=a[i];
	}
	}
	return temp; */
}

function contains(a, e) {
	for (j = 0; j < a.length; j++)
		if (a[j] == e) {
			alert(a[j] + ";" + e);
			return true
		}
	return false;
}




chrome.runtime.sendMessage({
	"testing": "yes"
}, function (res) {
	console.log(res)
});
