// Round the prices to neartest tenth

// $ABB
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/abb/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".abb-0").text(data.symbol);
      $(".abb-1").text(data.companyName);
      $(".abb-2").text('$' + data.latestPrice);
      $(".abb-3").text(data.change);
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
      $(".adm-2").text('$' + data.latestPrice);
      $(".adm-3").text(data.change);
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
      $(".aav-2").text('$' + data.latestPrice);
      $(".aav-3").text(data.change);
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
      $(".aa-2").text('$' + data.latestPrice);
      $(".aa-3").text(data.change);
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
      $(".apc-2").text('$' + data.latestPrice);
      $(".apc-3").text(data.change);
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
      $(".aapl-2").text('$' + data.latestPrice);
      $(".aapl-3").text(data.change);
  },
});

// $ASG
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/asg/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".asg-0").text(data.symbol);
      $(".asg-1").text(data.companyName);
      $(".asg-2").text('$' + data.latestPrice);
      $(".asg-3").text(data.change);
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
      $(".bpt-2").text('$' + data.latestPrice);
      $(".bpt-3").text(data.change);
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
      $(".brkb-2").text('$' + data.latestPrice);
      $(".brkb-3").text(data.change);
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
      $(".chk-2").text('$' + data.latestPrice);
      $(".chk-3").text(data.change);
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
      $(".cmcsa-2").text('$' + data.latestPrice);
      $(".cmcsa-3").text(data.change);
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
      $(".czz-2").text('$' + data.latestPrice);
      $(".czz-3").text(data.change);
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
      $(".dvmt-2").text('$' + data.latestPrice);
      $(".dvmt-3").text(data.change);
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
      $(".dvn-2").text('$' + data.latestPrice);
      $(".dvn-3").text(data.change);
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
      $(".dxc-2").text('$' + data.latestPrice);
      $(".dxc-3").text(data.change);
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
      $(".ftr-2").text('$' + data.latestPrice);
      $(".ftr-3").text(data.change);
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
      $(".ge-2").text('$' + data.latestPrice);
      $(".ge-3").text(data.change);
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
      $(".gnw-2").text('$' + data.latestPrice);
      $(".gnw-3").text(data.change);
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
      $(".hlt-2").text('$' + data.latestPrice);
      $(".hlt-3").text(data.change);
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
      $(".hpe-2").text('$' + data.latestPrice);
      $(".hpe-3").text(data.change);
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
      $(".hpq-2").text('$' + data.latestPrice);
      $(".hpq-3").text(data.change);
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
      $(".intc-2").text('$' + data.latestPrice);
      $(".intc-3").text(data.change);
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
      $(".kgc-2").text('$' + data.latestPrice);
      $(".kgc-3").text(data.change);
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
      $(".msft-2").text('$' + data.latestPrice);
      $(".msft-3").text(data.change);
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
      $(".nbr-2").text('$' + data.latestPrice);
      $(".nbr-3").text(data.change);
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
      $(".nov-2").text('$' + data.latestPrice);
      $(".nov-3").text(data.change);
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
      $(".nok-2").text('$' + data.latestPrice);
      $(".nok-3").text(data.change);
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
      $(".pba-2").text('$' + data.latestPrice);
      $(".pba-3").text(data.change);
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
      $(".pfe-2").text('$' + data.latestPrice);
      $(".pfe-3").text(data.change);
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
      $(".sdr-2").text('$' + data.latestPrice);
      $(".sdr-3").text(data.change);
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
      $(".sdt-2").text('$' + data.latestPrice);
      $(".sdt-3").text(data.change);
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
      $(".per-2").text('$' + data.latestPrice);
      $(".per-3").text(data.change);
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
      $(".snap-2").text('$' + data.latestPrice);
      $(".snap-3").text(data.change);
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
      $(".twtr-2").text('$' + data.latestPrice);
      $(".twtr-3").text(data.change);
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
      $(".txn-2").text('$' + data.latestPrice);
      $(".txn-3").text(data.change);
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
      $(".vz-2").text('$' + data.latestPrice);
      $(".vz-3").text(data.change);
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
      $(".win-2").text('$' + data.latestPrice);
      $(".win-3").text(data.change);
  },
});

// $WMT
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/wmt/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".wmt-0").text(data.symbol);
      $(".wmt-1").text(data.companyName);
      $(".wmt-2").text('$' + data.latestPrice);
      $(".wmt-3").text(data.change);
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
      $(".znga-2").text('$' + data.latestPrice);
      $(".znga-3").text(data.change);
  },
});
