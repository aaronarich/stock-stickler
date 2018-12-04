// Round the prices to neartest tenth
var priceRound = {};

priceRound.round = function(number, precision) {
    var factor = Math.pow(100, precision);
    var tempNumber = number * factor;
    var roundedTempNumber = Math.round(tempNumber);
    return roundedTempNumber / factor;
};

// $ABB
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/abb/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".abb-0").text(data.symbol);
      $(".abb-1").text(data.companyName);
      $(".abb-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".abb-3").text(priceRound.round(data.change, 1));
  },
});

// $ADM
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/adm/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".adm-0").text(data.symbol);
      $(".adm-1").text(data.companyName);
      $(".adm-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".adm-3").text(priceRound.round(data.change, 1));
  },
});

// $AAV
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/aav/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".aav-0").text(data.symbol);
      $(".aav-1").text(data.companyName);
      $(".aav-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".aav-3").text(priceRound.round(data.change, 1));
  },
});

// $AA
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/aa/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".aa-0").text(data.symbol);
      $(".aa-1").text(data.companyName);
      $(".aa-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".aa-3").text(priceRound.round(data.change, 1));
  },
});

// $APC
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/apc/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".apc-0").text(data.symbol);
      $(".apc-1").text(data.companyName);
      $(".apc-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".apc-3").text(priceRound.round(data.change, 1));
  },
});

// $AAPL
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/aapl/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".aapl-0").text(data.symbol);
      $(".aapl-1").text(data.companyName);
      $(".aapl-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".aapl-3").text(priceRound.round(data.change, 1));
  },
});

// $BPT
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/bpt/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".bpt-0").text(data.symbol);
      $(".bpt-1").text(data.companyName);
      $(".bpt-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".bpt-3").text(priceRound.round(data.change, 1));
  },
});

// $BRK.B
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/brk.b/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".brkb-0").text(data.symbol);
      $(".brkb-1").text(data.companyName);
      $(".brkb-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".brkb-3").text(priceRound.round(data.change, 1));
  },
});

// $CHK
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/chk/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".chk-0").text(data.symbol);
      $(".chk-1").text(data.companyName);
      $(".chk-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".chk-3").text(priceRound.round(data.change, 1));
  },
});

// $CMCSA
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/cmcsa/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".cmcsa-0").text(data.symbol);
      $(".cmcsa-1").text(data.companyName);
      $(".cmcsa-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".cmcsa-3").text(priceRound.round(data.change, 1));
  },
});

// $CZZ
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/czz/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".czz-0").text(data.symbol);
      $(".czz-1").text(data.companyName);
      $(".czz-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".czz-3").text(priceRound.round(data.change, 1));
  },
});

// $DVMT
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/dvmt/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".dvmt-0").text(data.symbol);
      $(".dvmt-1").text(data.companyName);
      $(".dvmt-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".dvmt-3").text(priceRound.round(data.change, 1));
  },
});

// $DVN
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/dvn/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".dvn-0").text(data.symbol);
      $(".dvn-1").text(data.companyName);
      $(".dvn-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".dvn-3").text(priceRound.round(data.change, 1));
  },
});

// $DXC
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/dxc/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".dxc-0").text(data.symbol);
      $(".dxc-1").text(data.companyName);
      $(".dxc-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".dxc-3").text(priceRound.round(data.change, 1));
  },
});

// $FTR
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/ftr/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".ftr-0").text(data.symbol);
      $(".ftr-1").text(data.companyName);
      $(".ftr-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".ftr-3").text(priceRound.round(data.change, 1));
  },
});

// $GE
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/ge/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".ge-0").text(data.symbol);
      $(".ge-1").text(data.companyName);
      $(".ge-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".ge-3").text(priceRound.round(data.change, 1));
  },
});

// $GNW
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/gnw/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".gnw-0").text(data.symbol);
      $(".gnw-1").text(data.companyName);
      $(".gnw-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".gnw-3").text(priceRound.round(data.change, 1));
  },
});

// $HLT
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/hlt/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".hlt-0").text(data.symbol);
      $(".hlt-1").text(data.companyName);
      $(".hlt-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".hlt-3").text(priceRound.round(data.change, 1));
  },
});

// $HPE
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/hpe/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".hpe-0").text(data.symbol);
      $(".hpe-1").text(data.companyName);
      $(".hpe-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".hpe-3").text(priceRound.round(data.change, 1));
  },
});

// $HPQ
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/hpq/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".hpq-0").text(data.symbol);
      $(".hpq-1").text(data.companyName);
      $(".hpq-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".hpq-3").text(priceRound.round(data.change, 1));
  },
});

// $INTC
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/intc/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".intc-0").text(data.symbol);
      $(".intc-1").text(data.companyName);
      $(".intc-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".intc-3").text(priceRound.round(data.change, 1));
  },
});

// $KGC
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/kgc/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".kgc-0").text(data.symbol);
      $(".kgc-1").text(data.companyName);
      $(".kgc-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".kgc-3").text(priceRound.round(data.change, 1));
  },
});

// $MSFT
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/msft/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".msft-0").text(data.symbol);
      $(".msft-1").text(data.companyName);
      $(".msft-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".msft-3").text(priceRound.round(data.change, 1));
  },
});

// $NBR
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/nbr/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".nbr-0").text(data.symbol);
      $(".nbr-1").text(data.companyName);
      $(".nbr-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".nbr-3").text(priceRound.round(data.change, 1));
  },
});

// $NOV
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/nov/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".nov-0").text(data.symbol);
      $(".nov-1").text(data.companyName);
      $(".nov-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".nov-3").text(priceRound.round(data.change, 1));
  },
});

// $NOK
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/nok/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".nok-0").text(data.symbol);
      $(".nok-1").text(data.companyName);
      $(".nok-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".nok-3").text(priceRound.round(data.change, 1));
  },
});

// $PBA
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/pba/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".pba-0").text(data.symbol);
      $(".pba-1").text(data.companyName);
      $(".pba-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".pba-3").text(priceRound.round(data.change, 1));
  },
});

// $PFE
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/pfe/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".pfe-0").text(data.symbol);
      $(".pfe-1").text(data.companyName);
      $(".pfe-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".pfe-3").text(priceRound.round(data.change, 1));
  },
});

// $SDR
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/sdr/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".sdr-0").text(data.symbol);
      $(".sdr-1").text(data.companyName);
      $(".sdr-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".sdr-3").text(priceRound.round(data.change, 1));
  },
});

// $SDT
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/sdt/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".sdt-0").text(data.symbol);
      $(".sdt-1").text(data.companyName);
      $(".sdt-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".sdt-3").text(priceRound.round(data.change, 1));
  },
});

// $PER
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/per/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".per-0").text(data.symbol);
      $(".per-1").text(data.companyName);
      $(".per-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".per-3").text(priceRound.round(data.change, 1));
  },
});

// $SNAP
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/snap/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".snap-0").text(data.symbol);
      $(".snap-1").text(data.companyName);
      $(".snap-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".snap-3").text(priceRound.round(data.change, 1));
  },
});

// $TWTR
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/twtr/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".twtr-0").text(data.symbol);
      $(".twtr-1").text(data.companyName);
      $(".twtr-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".twtr-3").text(priceRound.round(data.change, 1));
  },
});

// $TXN
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/txn/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".txn-0").text(data.symbol);
      $(".txn-1").text(data.companyName);
      $(".txn-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".txn-3").text(priceRound.round(data.change, 1));
  },
});

// $USA
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/usa/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".usa-0").text(data.symbol);
      $(".usa-1").text(data.companyName);
      $(".usa-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".usa-3").text(priceRound.round(data.change, 1));
  },
});

// $VZ
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/vz/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".vz-0").text(data.symbol);
      $(".vz-1").text(data.companyName);
      $(".vz-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".vz-3").text(priceRound.round(data.change, 1));
  },
});

// $WIN
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/win/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".win-0").text(data.symbol);
      $(".win-1").text(data.companyName);
      $(".win-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".win-3").text(priceRound.round(data.change, 1));
  },
});

// $XOM
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/xom/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".xom-0").text(data.symbol);
      $(".xom-1").text(data.companyName);
      $(".xom-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".xom-3").text(priceRound.round(data.change, 1));
  },
});

// $ZNGA
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/znga/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".znga-0").text(data.symbol);
      $(".znga-1").text(data.companyName);
      $(".znga-2").text('$' + priceRound.round(data.latestPrice, 1));
      $(".znga-3").text(priceRound.round(data.change, 1));
  },
});
