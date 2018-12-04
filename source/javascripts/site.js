// Round the prices to neartest tenth
var priceRound = {};

priceRound.round = function(number, precision) {
    var factor = Math.pow(100, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
};

// Batch process all quotes in a single request
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/market/batch?symbols=AA,AAV,ABB,ADM,APC,AAPL,BPT,BRK.B,CHK,CMCSA,CZZ,DVMT,DVN,DXC,FTR,GE,GNW,HLT,HPE,HPQ,INTC,KGC,MSFT,NBR,NOK,NOV,PBA,PFE,PER,SDR,SDT,SNAP,TWTR,TXN,USA,VZ,WIN,XOM,ZNGA&types=quote',
  dataType : 'jsonp',
  success : function(data) {

    $(".aa-0").text(data.AA.quote.symbol);
    $(".aa-1").text(data.AA.quote.companyName);
    $(".aa-2").text('$' + priceRound.round(data.AA.quote.latestPrice, 1));
    $(".aa-3").text(priceRound.round(data.AA.quote.change, 1));

    $(".aapl-0").text(data.AAPL.quote.symbol);
    $(".aapl-1").text(data.AAPL.quote.companyName);
    $(".aapl-2").text('$' + priceRound.round(data.AAPL.quote.latestPrice, 1));
    $(".aapl-3").text(priceRound.round(data.AAPL.quote.change, 1));

    $(".aav-0").text(data.AAV.quote.symbol);
    $(".aav-1").text(data.AAV.quote.companyName);
    $(".aav-2").text('$' + priceRound.round(data.AAV.quote.latestPrice, 1));
    $(".aav-3").text(priceRound.round(data.AAV.quote.change, 1));

    $(".abb-0").text(data.ABB.quote.symbol);
    $(".abb-1").text(data.ABB.quote.companyName);
    $(".abb-2").text('$' + priceRound.round(data.ABB.quote.latestPrice, 1));
    $(".abb-3").text(priceRound.round(data.ABB.quote.change, 1));

    $(".adm-0").text(data.ADM.quote.symbol);
    $(".adm-1").text(data.ADM.quote.companyName);
    $(".adm-2").text('$' + priceRound.round(data.ADM.quote.latestPrice, 1));
    $(".adm-3").text(priceRound.round(data.ADM.quote.change, 1));

    $(".apc-0").text(data.APC.quote.symbol);
    $(".apc-1").text(data.APC.quote.companyName);
    $(".apc-2").text('$' + priceRound.round(data.APC.quote.latestPrice, 1));
    $(".apc-3").text(priceRound.round(data.APC.quote.change, 1));

    $(".bpt-0").text(data.BPT.quote.symbol);
    $(".bpt-1").text(data.BPT.quote.companyName);
    $(".bpt-2").text('$' + priceRound.round(data.BPT.quote.latestPrice, 1));
    $(".bpt-3").text(priceRound.round(data.BPT.quote.change, 1));

    // $(".brkb-0").text(data.BRKB.quote.symbol);
    // $(".brkb-1").text(data.BRKB.quote.companyName);
    // $(".brkb-2").text('$' + priceRound.round(data.BRKB.quote.latestPrice, 1));
    // $(".brkb-3").text(priceRound.round(data.BRKB.quote.change, 1));

    $(".chk-0").text(data.CHK.quote.symbol);
    $(".chk-1").text(data.CHK.quote.companyName);
    $(".chk-2").text('$' + priceRound.round(data.CHK.quote.latestPrice, 1));
    $(".chk-3").text(priceRound.round(data.CHK.quote.change, 1));

    $(".cmcsa-0").text(data.CMCSA.quote.symbol);
    $(".cmcsa-1").text(data.CMCSA.quote.companyName);
    $(".cmcsa-2").text('$' + priceRound.round(data.CMCSA.quote.latestPrice, 1));
    $(".cmcsa-3").text(priceRound.round(data.CMCSA.quote.change, 1));

    $(".czz-0").text(data.CZZ.quote.symbol);
    $(".czz-1").text(data.CZZ.quote.companyName);
    $(".czz-2").text('$' + priceRound.round(data.CZZ.quote.latestPrice, 1));
    $(".czz-3").text(priceRound.round(data.CZZ.quote.change, 1));

    $(".dvmt-0").text(data.DVMT.quote.symbol);
    $(".dvmt-1").text(data.DVMT.quote.companyName);
    $(".dvmt-2").text('$' + priceRound.round(data.DVMT.quote.latestPrice, 1));
    $(".dvmt-3").text(priceRound.round(data.DVMT.quote.change, 1));

    $(".dvn-0").text(data.DVN.quote.symbol);
    $(".dvn-1").text(data.DVN.quote.companyName);
    $(".dvn-2").text('$' + priceRound.round(data.DVN.quote.latestPrice, 1));
    $(".dvn-3").text(priceRound.round(data.DVN.quote.change, 1));

    $(".dxc-0").text(data.DXC.quote.symbol);
    $(".dxc-1").text(data.DXC.quote.companyName);
    $(".dxc-2").text('$' + priceRound.round(data.DXC.quote.latestPrice, 1));
    $(".dxc-3").text(priceRound.round(data.DXC.quote.change, 1));

    $(".ftr-0").text(data.FTR.quote.symbol);
    $(".ftr-1").text(data.FTR.quote.companyName);
    $(".ftr-2").text('$' + priceRound.round(data.FTR.quote.latestPrice, 1));
    $(".ftr-3").text(priceRound.round(data.FTR.quote.change, 1));

    $(".ge-0").text(data.GE.quote.symbol);
    $(".ge-1").text(data.GE.quote.companyName);
    $(".ge-2").text('$' + priceRound.round(data.GE.quote.latestPrice, 1));
    $(".ge-3").text(priceRound.round(data.GE.quote.change, 1));

    $(".gnw-0").text(data.GNW.quote.symbol);
    $(".gnw-1").text(data.GNW.quote.companyName);
    $(".gnw-2").text('$' + priceRound.round(data.GNW.quote.latestPrice, 1));
    $(".gnw-3").text(priceRound.round(data.GNW.quote.change, 1));

    $(".hlt-0").text(data.HLT.quote.symbol);
    $(".hlt-1").text(data.HLT.quote.companyName);
    $(".hlt-2").text('$' + priceRound.round(data.HLT.quote.latestPrice, 1));
    $(".hlt-3").text(priceRound.round(data.HLT.quote.change, 1));

    $(".hpe-0").text(data.HPE.quote.symbol);
    $(".hpe-1").text(data.HPE.quote.companyName);
    $(".hpe-2").text('$' + priceRound.round(data.HPE.quote.latestPrice, 1));
    $(".hpe-3").text(priceRound.round(data.HPE.quote.change, 1));

    $(".hpq-0").text(data.HPQ.quote.symbol);
    $(".hpq-1").text(data.HPQ.quote.companyName);
    $(".hpq-2").text('$' + priceRound.round(data.HPQ.quote.latestPrice, 1));
    $(".hpq-3").text(priceRound.round(data.HPQ.quote.change, 1));

    $(".intc-0").text(data.INTC.quote.symbol);
    $(".intc-1").text(data.INTC.quote.companyName);
    $(".intc-2").text('$' + priceRound.round(data.INTC.quote.latestPrice, 1));
    $(".intc-3").text(priceRound.round(data.INTC.quote.change, 1));

    $(".kgc-0").text(data.KGC.quote.symbol);
    $(".kgc-1").text(data.KGC.quote.companyName);
    $(".kgc-2").text('$' + priceRound.round(data.KGC.quote.latestPrice, 1));
    $(".kgc-3").text(priceRound.round(data.KGC.quote.change, 1));

    $(".msft-0").text(data.MSFT.quote.symbol);
    $(".msft-1").text(data.MSFT.quote.companyName);
    $(".msft-2").text('$' + priceRound.round(data.MSFT.quote.latestPrice, 1));
    $(".msft-3").text(priceRound.round(data.MSFT.quote.change, 1));

    $(".nbr-0").text(data.NBR.quote.symbol);
    $(".nbr-1").text(data.NBR.quote.companyName);
    $(".nbr-2").text('$' + priceRound.round(data.NBR.quote.latestPrice, 1));
    $(".nbr-3").text(priceRound.round(data.NBR.quote.change, 1));

    $(".nok-0").text(data.NOK.quote.symbol);
    $(".nok-1").text(data.NOK.quote.companyName);
    $(".nok-2").text('$' + priceRound.round(data.NOK.quote.latestPrice, 1));
    $(".nok-3").text(priceRound.round(data.NOK.quote.change, 1));

    $(".nov-0").text(data.NOV.quote.symbol);
    $(".nov-1").text(data.NOV.quote.companyName);
    $(".nov-2").text('$' + priceRound.round(data.NOV.quote.latestPrice, 1));
    $(".nov-3").text(priceRound.round(data.NOV.quote.change, 1));

    $(".pba-0").text(data.PBA.quote.symbol);
    $(".pba-1").text(data.PBA.quote.companyName);
    $(".pba-2").text('$' + priceRound.round(data.PBA.quote.latestPrice, 1));
    $(".pba-3").text(priceRound.round(data.PBA.quote.change, 1));

    $(".per-0").text(data.PER.quote.symbol);
    $(".per-1").text(data.PER.quote.companyName);
    $(".per-2").text('$' + priceRound.round(data.PER.quote.latestPrice, 1));
    $(".per-3").text(priceRound.round(data.PER.quote.change, 1));

    $(".pfe-0").text(data.PFE.quote.symbol);
    $(".pfe-1").text(data.PFE.quote.companyName);
    $(".pfe-2").text('$' + priceRound.round(data.PFE.quote.latestPrice, 1));
    $(".pfe-3").text(priceRound.round(data.PFE.quote.change, 1));

    $(".sdr-0").text(data.SDR.quote.symbol);
    $(".sdr-1").text(data.SDR.quote.companyName);
    $(".sdr-2").text('$' + priceRound.round(data.SDR.quote.latestPrice, 1));
    $(".sdr-3").text(priceRound.round(data.SDR.quote.change, 1));

    $(".sdt-0").text(data.SDT.quote.symbol);
    $(".sdt-1").text(data.SDT.quote.companyName);
    $(".sdt-2").text('$' + priceRound.round(data.SDT.quote.latestPrice, 1));
    $(".sdt-3").text(priceRound.round(data.SDT.quote.change, 1));

    $(".snap-0").text(data.SNAP.quote.symbol);
    $(".snap-1").text(data.SNAP.quote.companyName);
    $(".snap-2").text('$' + priceRound.round(data.SNAP.quote.latestPrice, 1));
    $(".snap-3").text(priceRound.round(data.SNAP.quote.change, 1));

    $(".twtr-0").text(data.TWTR.quote.symbol);
    $(".twtr-1").text(data.TWTR.quote.companyName);
    $(".twtr-2").text('$' + priceRound.round(data.TWTR.quote.latestPrice, 1));
    $(".twtr-3").text(priceRound.round(data.TWTR.quote.change, 1));

    $(".txn-0").text(data.TXN.quote.symbol);
    $(".txn-1").text(data.TXN.quote.companyName);
    $(".txn-2").text('$' + priceRound.round(data.TXN.quote.latestPrice, 1));
    $(".txn-3").text(priceRound.round(data.TXN.quote.change, 1));

    $(".usa-0").text(data.USA.quote.symbol);
    $(".usa-1").text(data.USA.quote.companyName);
    $(".usa-2").text('$' + priceRound.round(data.USA.quote.latestPrice, 1));
    $(".usa-3").text(priceRound.round(data.USA.quote.change, 1));

    $(".vz-0").text(data.VZ.quote.symbol);
    $(".vz-1").text(data.VZ.quote.companyName);
    $(".vz-2").text('$' + priceRound.round(data.VZ.quote.latestPrice, 1));
    $(".vz-3").text(priceRound.round(data.VZ.quote.change, 1));

    $(".win-0").text(data.WIN.quote.symbol);
    $(".win-1").text(data.WIN.quote.companyName);
    $(".win-2").text('$' + priceRound.round(data.WIN.quote.latestPrice, 1));
    $(".win-3").text(priceRound.round(data.WIN.quote.change, 1));

    $(".xom-0").text(data.XOM.quote.symbol);
    $(".xom-1").text(data.XOM.quote.companyName);
    $(".xom-2").text('$' + priceRound.round(data.XOM.quote.latestPrice, 1));
    $(".xom-3").text(priceRound.round(data.XOM.quote.change, 1));

    $(".znga-0").text(data.ZNGA.quote.symbol);
    $(".znga-1").text(data.ZNGA.quote.companyName);
    $(".znga-2").text('$' + priceRound.round(data.ZNGA.quote.latestPrice, 1));
    $(".znga-3").text(priceRound.round(data.ZNGA.quote.change, 1));
  },
});
