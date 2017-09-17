$(".Rtable--stripe .Rtable-cell").each( function() {
  var order = $(this).attr("style").match(/order\s*:\s*\d/g)[0].replace(/order(\s*):(\s*)/,"");
  if(order % 2 === 0) $(this).addClass("is-striped");
});

// $ABB
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/abb/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".0-0").text(data.symbol);
      $(".0-1").text(data.companyName);
      $(".0-2").text('$' + data.latestPrice);
      $(".0-3").text(data.change + '%');
  },
});

// $ADM
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/adm/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".1-0").text(data.symbol);
      $(".1-1").text(data.companyName);
      $(".1-2").text('$' + data.latestPrice);
      $(".1-3").text(data.change + '%');
  },
});

// $AAV
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/aav/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".2-0").text(data.symbol);
      $(".2-1").text(data.companyName);
      $(".2-2").text('$' + data.latestPrice);
      $(".2-3").text(data.change + '%');
  },
});

// $AA
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/aa/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".3-0").text(data.symbol);
      $(".3-1").text(data.companyName);
      $(".3-2").text('$' + data.latestPrice);
      $(".3-3").text(data.change + '%');
  },
});

// $APC
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/apc/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".4-0").text(data.symbol);
      $(".4-1").text(data.companyName);
      $(".4-2").text('$' + data.latestPrice);
      $(".4-3").text(data.change + '%');
  },
});

// $AAPL
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/aapl/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".5-0").text(data.symbol);
      $(".5-1").text(data.companyName);
      $(".5-2").text('$' + data.latestPrice);
      $(".5-3").text(data.change + '%');
  },
});

// $ARX
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/arx/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".6-0").text(data.symbol);
      $(".6-1").text(data.companyName);
      $(".6-2").text('$' + data.latestPrice);
      $(".6-3").text(data.change + '%');
  },
});

// $BRK.B
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/brk.b/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".7-0").text(data.symbol);
      $(".7-1").text(data.companyName);
      $(".7-2").text('$' + data.latestPrice);
      $(".7-3").text(data.change + '%');
  },
});

// $BPT
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/bpt/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".8-0").text(data.symbol);
      $(".8-1").text(data.companyName);
      $(".8-2").text('$' + data.latestPrice);
      $(".8-3").text(data.change + '%');
  },
});

// $CHK
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/chk/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".9-0").text(data.symbol);
      $(".9-1").text(data.companyName);
      $(".9-2").text('$' + data.latestPrice);
      $(".9-3").text(data.change + '%');
  },
});

// $CMCSA
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/cmcsa/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".10-0").text(data.symbol);
      $(".10-1").text(data.companyName);
      $(".10-2").text('$' + data.latestPrice);
      $(".10-3").text(data.change + '%');
  },
});

// $CZZ
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/czz/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".11-0").text(data.symbol);
      $(".11-1").text(data.companyName);
      $(".11-2").text('$' + data.latestPrice);
      $(".11-3").text(data.change + '%');
  },
});

// $DVN
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/dvn/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".12-0").text(data.symbol);
      $(".12-1").text(data.companyName);
      $(".12-2").text('$' + data.latestPrice);
      $(".12-3").text(data.change + '%');
  },
});

// $FTR
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/ftr/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".13-0").text(data.symbol);
      $(".13-1").text(data.companyName);
      $(".13-2").text('$' + data.latestPrice);
      $(".13-3").text(data.change + '%');
  },
});

// $GE
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/ge/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".14-0").text(data.symbol);
      $(".14-1").text(data.companyName);
      $(".14-2").text('$' + data.latestPrice);
      $(".14-3").text(data.change + '%');
  },
});

// $GNW
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/gnw/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".15-0").text(data.symbol);
      $(".15-1").text(data.companyName);
      $(".15-2").text('$' + data.latestPrice);
      $(".15-3").text(data.change + '%');
  },
});

// $HLT
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/hlt/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".16-0").text(data.symbol);
      $(".16-1").text(data.companyName);
      $(".16-2").text('$' + data.latestPrice);
      $(".16-3").text(data.change + '%');
  },
});

// $HPQ
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/hpq/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".17-0").text(data.symbol);
      $(".17-1").text(data.companyName);
      $(".17-2").text('$' + data.latestPrice);
      $(".17-3").text(data.change + '%');
  },
});

// $HPE
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/hpe/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".18-0").text(data.symbol);
      $(".18-1").text(data.companyName);
      $(".18-2").text('$' + data.latestPrice);
      $(".18-3").text(data.change + '%');
  },
});

// $INTC
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/intc/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".19-0").text(data.symbol);
      $(".19-1").text(data.companyName);
      $(".19-2").text('$' + data.latestPrice);
      $(".19-3").text(data.change + '%');
  },
});

// $KGC
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/kgc/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".20-0").text(data.symbol);
      $(".20-1").text(data.companyName);
      $(".20-2").text('$' + data.latestPrice);
      $(".20-3").text(data.change + '%');
  },
});

// $ASG
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/asg/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".21-0").text(data.symbol);
      $(".21-1").text(data.companyName);
      $(".21-2").text('$' + data.latestPrice);
      $(".21-3").text(data.change + '%');
  },
});

// $MSFT
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/msft/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".22-0").text(data.symbol);
      $(".22-1").text(data.companyName);
      $(".22-2").text('$' + data.latestPrice);
      $(".22-3").text(data.change + '%');
  },
});

// $NBR
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/nbr/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".23-0").text(data.symbol);
      $(".23-1").text(data.companyName);
      $(".23-2").text('$' + data.latestPrice);
      $(".23-3").text(data.change + '%');
  },
});

// $NOV
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/nov/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".24-0").text(data.symbol);
      $(".24-1").text(data.companyName);
      $(".24-2").text('$' + data.latestPrice);
      $(".24-3").text(data.change + '%');
  },
});

// $NOK
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/nok/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".25-0").text(data.symbol);
      $(".25-1").text(data.companyName);
      $(".25-2").text('$' + data.latestPrice);
      $(".25-3").text(data.change + '%');
  },
});

// $PBA
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/pba/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".26-0").text(data.symbol);
      $(".26-1").text(data.companyName);
      $(".26-2").text('$' + data.latestPrice);
      $(".26-3").text(data.change + '%');
  },
});

// $PFE
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/pfe/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".27-0").text(data.symbol);
      $(".27-1").text(data.companyName);
      $(".27-2").text('$' + data.latestPrice);
      $(".27-3").text(data.change + '%');
  },
});

// $SDT
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/sdt/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".28-0").text(data.symbol);
      $(".28-1").text(data.companyName);
      $(".28-2").text('$' + data.latestPrice);
      $(".28-3").text(data.change + '%');
  },
});

// $SDR
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/sdr/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".29-0").text(data.symbol);
      $(".29-1").text(data.companyName);
      $(".29-2").text('$' + data.latestPrice);
      $(".29-3").text(data.change + '%');
  },
});

// $PER
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/per/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".30-0").text(data.symbol);
      $(".30-1").text(data.companyName);
      $(".30-2").text('$' + data.latestPrice);
      $(".30-3").text(data.change + '%');
  },
});

// $TXN
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/txn/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".31-0").text(data.symbol);
      $(".31-1").text(data.companyName);
      $(".31-2").text('$' + data.latestPrice);
      $(".31-3").text(data.change + '%');
  },
});

// $TYO
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/tyo/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".32-0").text(data.symbol);
      $(".32-1").text(data.companyName);
      $(".32-2").text('$' + data.latestPrice);
      $(".32-3").text(data.change + '%');
  },
});

// $TWTR
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/twtr/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".33-0").text(data.symbol);
      $(".33-1").text(data.companyName);
      $(".33-2").text('$' + data.latestPrice);
      $(".33-3").text(data.change + '%');
  },
});

// $VZ
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/vz/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".34-0").text(data.symbol);
      $(".34-1").text(data.companyName);
      $(".34-2").text('$' + data.latestPrice);
      $(".34-3").text(data.change + '%');
  },
});

// $WIN
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/win/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".35-0").text(data.symbol);
      $(".35-1").text(data.companyName);
      $(".35-2").text('$' + data.latestPrice);
      $(".35-3").text(data.change + '%');
  },
});

// $ZNGA
$.ajax({
  type : 'GET',
  url : 'https://api.iextrading.com/1.0/stock/znga/quote',
  dataType : 'jsonp',
  success : function(data) {
      $(".36-0").text(data.symbol);
      $(".36-1").text(data.companyName);
      $(".36-2").text('$' + data.latestPrice);
      $(".36-3").text(data.change + '%');
  },
});
