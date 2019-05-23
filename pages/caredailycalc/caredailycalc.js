//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    diaperThinMoneyPerBag: [118, 98, 93, 83, 78, 73],
    diaperThinMoneyPerBox: [354, 294, 279, 249, 234, 219],
    diaperNBSoftMoneyPerBag: [58, 48, 43, 38, 35.5, 33],
    diaperNBSoftMoneyPerBox: [348, 288, 258, 228, 213, 198],
    diaperSoftMoneyPerBag: [108, 93, 88, 78, 73, 68],
    diaperSoftMoneyPerBox: [324, 279, 264, 234, 219, 204],
    laraThinMoneyPerBag: [88, 73, 68, 63, 58, 53],
    laraThinMoneyPerBox: [352, 292, 272, 252, 232, 212],
    laraSoftMoneyPerBag: [78, 68, 63, 58, 53, 48],
    laraSoftMoneyPerBox: [312, 272, 252, 232, 212, 192],

    diaperSoftThinSMTestMoneyPerBag: [100, 100, 100, 100, 100, 100],
    diaperSoftThinLTestMoneyPerBag: [120, 120, 120, 120, 120, 120],
    diaperSoftXLTestMoneyPerBag: [130, 130, 130, 130, 130, 130],
    laraSoftLTestMoneyPerBag: [80, 80, 80, 80, 80, 80],
    laraSoftXLTestMoneyPerBag: [85, 85, 85, 85, 85, 85],
    laraSoftXXLTestMoneyPerBag: [90, 90, 90, 90, 90, 90],
    laraThinXLTestMoneyPerBag: [145, 145, 145, 145, 145, 145],

    wipesSmallMoneyPerBag: [5, 2.33, 2.25, 2.17, 2.13, 2.08],
    wipesSmallMoneyPerBox: [120, 56, 54, 52, 51, 50],
    wipesBigMoneyPerBag: [13.8, 6.33, 6.33, 6.33, 6.33, 6.33],
    wipesBigMoneyPerBox: [82.8, 38, 38, 38, 38, 38],
    womenPantsMoneyPerBag: [18, 13, 12, 11, 9, 8],
    womenPantsMoneyPerBox: [540, 390, 360, 330, 270, 240],
    breastPadMoneyPerBag: [36, 26, 24, 22, 20, 18],
    breastPadMoneyPerBox: [648, 468, 432, 396, 360, 324],
    pants190MoneyPerBag: [16, 12, 11, 10, 8, 7],
    pants190MoneyPerBox: [768, 576, 528, 480, 384, 336],
    pants240MoneyPerBag: [18, 14, 13, 12, 10, 9],
    pants240MoneyPerBox: [864, 672, 624, 576, 480, 432],
    pants280MoneyPerBag: [20, 16, 15, 14, 12, 11],
    pants280MoneyPerBox: [960, 768, 720, 672, 576, 528],
    pants400MoneyPerBag: [24, 19, 18, 17, 15, 14],
    pants400MoneyPerBox: [1152, 912, 864, 816, 720, 672],
    laundryDetergentMoneyPerBag: [28, 17.6, 16.6, 14.6, 13.6, 12.6],
    laundryDetergentMoneyPerBox: [140, 88, 83, 73, 68, 63],
    laundrySoapMoneyPerBag: [18, 10, 10, 10, 10, 10],
    laundrySoapMoneyPerBox: [324, 180, 180, 180, 180, 180],
    sweatbandMoneyPerBag: [27.5, 16, 16, 16, 16, 16],
    sweatbandMoneyPerBox: [448, 256, 256, 256, 256, 256],
    shampooMoneyPerBag: [68, 54, 50, 46, 42, 38],
    shampooMoneyPerBox: [816, 648, 600, 552, 504, 456],
    destinMoneyPerBag: [38, 30, 27, 24, 21, 18],
    destinMoneyPerBox: [1824, 1440, 1296, 1152, 1008, 864],
    creamPinkMoneyPerBag: [68, 54, 50, 46, 42, 38],
    creamPinkMoneyPerBox: [2448, 1944, 1800, 1656, 1512, 1368],
    creamBlueMoneyPerBag: [58, 44, 40, 36, 33, 30],
    creamBlueMoneyPerBox: [2088, 1584, 1440, 1296, 1188, 1080],
    softTissueMoneyPerBag: [17.5, 17.5, 12, 11.58, 11.17, 10.75],
    softTissueMoneyPerBox: [200, 200, 144, 139, 134, 129],

    array: ['零售', '天使', '分销', '一级', '总代', '钻代'],
    objectArray: [
      {
        id: 0,
        name: '零售'
      },
      {
        id: 1,
        name: '天使'
      },
      {
        id: 2,
        name: '分销'
      },
      {
        id: 3,
        name: '一级'
      },
      {
        id: 4,
        name: '总代'
      },
      {
        id: 5,
        name: '钻代'
      }
    ],
    indexSell: 0,
    indexBuy: 0,
    sumSellMoney: 0.0,
    sumBuyMoney: 0.0,
    sumDMoney: 0.0,
    thin_s: 0,
    thin_m: 0,
    thin_l: 0,
    thin_xl: 0,
    thin_l_l: 0,
    thin_l_xl: 0,
    thin_l_xxl: 0,
    soft_nb: 0,
    soft_s: 0,
    soft_m: 0,
    soft_l: 0,
    soft_xl: 0,
    soft_l_l: 0,
    soft_l_xl: 0,
    soft_l_xxl: 0,
    thin_t_s: 0,
    thin_t_m: 0,
    thin_t_l: 0,
    thin_tl_xl: 0,
    soft_t_s: 0,
    soft_t_m: 0,
    soft_t_l: 0,
    soft_t_xl: 0,
    soft_tl_l: 0,
    soft_tl_xl: 0,
    soft_tl_xxl: 0,
    wipes_small: 0,
    wipes_big: 0,
    women_pants: 0,
    breast_pad: 0,
    pants_190: 0,
    pants_240: 0,
    pants_280: 0,
    pants_400: 0,
    soft_tissue: 0,
    laundry_detergent: 0,
    laundry_soap: 0,
    sweatband: 0,
    shampoo: 0,
    destin: 0,
    cream_pink: 0,
    cream_blue: 0
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  bindInput: function (e) {
    var id = e.currentTarget.id;
    var inputN = e.detail.value;
    checkIsInteger(inputN);
  },
  bindPickerSellChange: function (e) {
    this.setData({
      indexSell: e.detail.value
    })
  },
  bindPickerBuyChange: function (e) {
    this.setData({
      indexBuy: e.detail.value
    })
  },
  formSubmit: function (e) {
    var flag = true;
    var contentStr = '请校验输入值是否都是数字!';
    checkIsInteger(e.detail.value.thin_s);
    checkIsInteger(e.detail.value.thin_m);
    checkIsInteger(e.detail.value.thin_l);
    checkIsInteger(e.detail.value.thin_xl);
    checkIsInteger(e.detail.value.thin_l_l);
    checkIsInteger(e.detail.value.thin_l_xl);
    checkIsInteger(e.detail.value.thin_l_xxl);
    checkIsInteger(e.detail.value.soft_nb);
    checkIsInteger(e.detail.value.soft_s);
    checkIsInteger(e.detail.value.soft_m);
    checkIsInteger(e.detail.value.soft_l);
    checkIsInteger(e.detail.value.soft_xl);
    checkIsInteger(e.detail.value.soft_l_l);
    checkIsInteger(e.detail.value.soft_l_xl);
    checkIsInteger(e.detail.value.soft_l_xxl);
    checkIsInteger(e.detail.value.thin_t_s);
    checkIsInteger(e.detail.value.thin_t_m);
    checkIsInteger(e.detail.value.thin_t_l);
    checkIsInteger(e.detail.value.thin_tl_xl);
    checkIsInteger(e.detail.value.soft_t_s);
    checkIsInteger(e.detail.value.soft_t_m);
    checkIsInteger(e.detail.value.soft_t_l);
    checkIsInteger(e.detail.value.soft_t_xl);
    checkIsInteger(e.detail.value.soft_tl_l);
    checkIsInteger(e.detail.value.soft_tl_xl);
    checkIsInteger(e.detail.value.soft_tl_xxl);
    checkIsInteger(e.detail.value.wipes_small);
    checkIsInteger(e.detail.value.wipes_big);
    checkIsInteger(e.detail.value.women_pants);
    checkIsInteger(e.detail.value.breast_pad);
    checkIsInteger(e.detail.value.pants_190);
    checkIsInteger(e.detail.value.pants_240);
    checkIsInteger(e.detail.value.pants_280);
    checkIsInteger(e.detail.value.pants_400);
    checkIsInteger(e.detail.value.soft_tissue);
    checkIsInteger(e.detail.value.laundry_detergent);
    checkIsInteger(e.detail.value.laundry_soap);
    checkIsInteger(e.detail.value.sweatband);
    checkIsInteger(e.detail.value.shampoo);
    checkIsInteger(e.detail.value.destin);
    checkIsInteger(e.detail.value.cream_pink);
    checkIsInteger(e.detail.value.cream_blue);
    var thin_s = parseIntIgnoreNull(e.detail.value.thin_s);
    var thin_m = parseIntIgnoreNull(e.detail.value.thin_m);
    var thin_l = parseIntIgnoreNull(e.detail.value.thin_l);
    var thin_xl = parseIntIgnoreNull(e.detail.value.thin_xl);
    var thin_l_l = parseIntIgnoreNull(e.detail.value.thin_l_l);
    var thin_l_xl = parseIntIgnoreNull(e.detail.value.thin_l_xl);
    var thin_l_xxl = parseIntIgnoreNull(e.detail.value.thin_l_xxl);
    var soft_nb = parseIntIgnoreNull(e.detail.value.soft_nb);
    var soft_s = parseIntIgnoreNull(e.detail.value.soft_s);
    var soft_m = parseIntIgnoreNull(e.detail.value.soft_m);
    var soft_l = parseIntIgnoreNull(e.detail.value.soft_l);
    var soft_xl = parseIntIgnoreNull(e.detail.value.soft_xl);
    var soft_l_l = parseIntIgnoreNull(e.detail.value.soft_l_l);
    var soft_l_xl = parseIntIgnoreNull(e.detail.value.soft_l_xl);
    var soft_l_xxl = parseIntIgnoreNull(e.detail.value.soft_l_xxl);
    var thin_t_s = parseIntIgnoreNull(e.detail.value.thin_t_s);
    var thin_t_m = parseIntIgnoreNull(e.detail.value.thin_t_m);
    var thin_t_l = parseIntIgnoreNull(e.detail.value.thin_t_l);
    var thin_tl_xl = parseIntIgnoreNull(e.detail.value.thin_tl_xl);
    var soft_t_s = parseIntIgnoreNull(e.detail.value.soft_t_s);
    var soft_t_m = parseIntIgnoreNull(e.detail.value.soft_t_m);
    var soft_t_l = parseIntIgnoreNull(e.detail.value.soft_t_l);
    var soft_t_xl = parseIntIgnoreNull(e.detail.value.soft_t_xl);
    var soft_tl_l = parseIntIgnoreNull(e.detail.value.soft_tl_l);
    var soft_tl_xl = parseIntIgnoreNull(e.detail.value.soft_tl_xl);
    var soft_tl_xxl = parseIntIgnoreNull(e.detail.value.soft_tl_xxl);
    var wipes_small = parseIntIgnoreNull(e.detail.value.wipes_small);
    var wipes_big = parseIntIgnoreNull(e.detail.value.wipes_big);
    var women_pants = parseIntIgnoreNull(e.detail.value.women_pants);
    var breast_pad = parseIntIgnoreNull(e.detail.value.breast_pad);
    var pants_190 = parseIntIgnoreNull(e.detail.value.pants_190);
    var pants_240 = parseIntIgnoreNull(e.detail.value.pants_240);
    var pants_280 = parseIntIgnoreNull(e.detail.value.pants_280);
    var pants_400 = parseIntIgnoreNull(e.detail.value.pants_400);
    var soft_tissue = parseIntIgnoreNull(e.detail.value.soft_tissue);
    var laundry_detergent = parseIntIgnoreNull(e.detail.value.laundry_detergent);
    var laundry_soap = parseIntIgnoreNull(e.detail.value.laundry_soap);
    var sweatband = parseIntIgnoreNull(e.detail.value.sweatband);
    var shampoo = parseIntIgnoreNull(e.detail.value.shampoo);
    var destin = parseIntIgnoreNull(e.detail.value.destin);
    var cream_pink = parseIntIgnoreNull(e.detail.value.cream_pink);
    var cream_blue = parseIntIgnoreNull(e.detail.value.cream_blue);
    var packing = e.detail.value.packing_group;
    if ("bag" == packing) {
      var sumSellMoney = this.data.diaperThinMoneyPerBag[this.data.indexSell] *
        (thin_s + thin_m + thin_l + thin_xl)
        + this.data.diaperNBSoftMoneyPerBag[this.data.indexSell] * soft_nb
        + this.data.diaperSoftMoneyPerBag[this.data.indexSell] * (soft_s + soft_m + soft_l + soft_xl)
        + this.data.laraThinMoneyPerBag[this.data.indexSell] * (thin_l_l + thin_l_xl + thin_l_xxl)
        + this.data.laraSoftMoneyPerBag[this.data.indexSell] * (soft_l_l + soft_l_xl + soft_l_xxl)
        + this.data.diaperSoftThinSMTestMoneyPerBag[this.data.indexSell] * (thin_t_s + thin_t_m + soft_t_s + soft_t_m)
        + this.data.diaperSoftThinLTestMoneyPerBag[this.data.indexSell] * (thin_t_l + soft_t_l)
        + this.data.diaperSoftXLTestMoneyPerBag[this.data.indexSell] * soft_t_xl
        + this.data.laraSoftLTestMoneyPerBag[this.data.indexSell] * soft_tl_l
        + this.data.laraSoftXLTestMoneyPerBag[this.data.indexSell] * soft_tl_xl
        + this.data.laraSoftXXLTestMoneyPerBag[this.data.indexSell] * soft_tl_xxl
        + this.data.laraThinXLTestMoneyPerBag[this.data.indexSell] * thin_tl_xl
        + this.data.wipesSmallMoneyPerBag[this.data.indexSell] * wipes_small
        + this.data.wipesBigMoneyPerBag[this.data.indexSell] * wipes_big
        + this.data.womenPantsMoneyPerBag[this.data.indexSell] * women_pants
        + this.data.breastPadMoneyPerBag[this.data.indexSell] * breast_pad
        + this.data.pants190MoneyPerBag[this.data.indexSell] * pants_190
        + this.data.pants240MoneyPerBag[this.data.indexSell] * pants_240
        + this.data.pants280MoneyPerBag[this.data.indexSell] * pants_280
        + this.data.pants400MoneyPerBag[this.data.indexSell] * pants_400
        + this.data.laundryDetergentMoneyPerBag[this.data.indexSell] * laundry_detergent
        + this.data.laundrySoapMoneyPerBag[this.data.indexSell] * laundry_soap
        + this.data.sweatbandMoneyPerBag[this.data.indexSell] * sweatband
        + this.data.shampooMoneyPerBag[this.data.indexSell] * shampoo
        + this.data.destinMoneyPerBag[this.data.indexSell] * destin
        + this.data.creamPinkMoneyPerBag[this.data.indexSell] * cream_pink
        + this.data.creamBlueMoneyPerBag[this.data.indexSell] * cream_blue
        + this.data.softTissueMoneyPerBag[this.data.indexSell] * soft_tissue;

      this.setData({ "sumSellMoney": sumSellMoney.toFixed(1) });
      var sumBuyMoney = this.data.diaperThinMoneyPerBag[this.data.indexBuy] *
        (thin_s + thin_m + thin_l + thin_xl)
        + this.data.diaperNBSoftMoneyPerBag[this.data.indexBuy] * soft_nb
        + this.data.diaperSoftMoneyPerBag[this.data.indexBuy] * (soft_s + soft_m + soft_l + soft_xl)
        + this.data.laraThinMoneyPerBag[this.data.indexBuy] * (thin_l_l + thin_l_xl + thin_l_xxl)
        + this.data.laraSoftMoneyPerBag[this.data.indexBuy] * (soft_l_l + soft_l_xl + soft_l_xxl)
        + this.data.diaperSoftThinSMTestMoneyPerBag[this.data.indexBuy] * (thin_t_s + thin_t_m + soft_t_s + soft_t_m)
        + this.data.diaperSoftThinLTestMoneyPerBag[this.data.indexBuy] * (thin_t_l + soft_t_l)
        + this.data.diaperSoftXLTestMoneyPerBag[this.data.indexBuy] * soft_t_xl
        + this.data.laraSoftLTestMoneyPerBag[this.data.indexBuy] * soft_tl_l
        + this.data.laraSoftXLTestMoneyPerBag[this.data.indexBuy] * soft_tl_xl
        + this.data.laraSoftXXLTestMoneyPerBag[this.data.indexBuy] * soft_tl_xxl
        + this.data.laraThinXLTestMoneyPerBag[this.data.indexBuy] * thin_tl_xl
        + this.data.wipesSmallMoneyPerBag[this.data.indexBuy] * wipes_small
        + this.data.wipesBigMoneyPerBag[this.data.indexBuy] * wipes_big
        + this.data.womenPantsMoneyPerBag[this.data.indexBuy] * women_pants
        + this.data.breastPadMoneyPerBag[this.data.indexBuy] * breast_pad
        + this.data.pants190MoneyPerBag[this.data.indexBuy] * pants_190
        + this.data.pants240MoneyPerBag[this.data.indexBuy] * pants_240
        + this.data.pants280MoneyPerBag[this.data.indexBuy] * pants_280
        + this.data.pants400MoneyPerBag[this.data.indexBuy] * pants_400
        + this.data.laundryDetergentMoneyPerBag[this.data.indexBuy] * laundry_detergent
        + this.data.laundrySoapMoneyPerBag[this.data.indexBuy] * laundry_soap
        + this.data.sweatbandMoneyPerBag[this.data.indexBuy] * sweatband
        + this.data.shampooMoneyPerBag[this.data.indexBuy] * shampoo
        + this.data.destinMoneyPerBag[this.data.indexBuy] * destin
        + this.data.creamPinkMoneyPerBag[this.data.indexBuy] * cream_pink
        + this.data.creamBlueMoneyPerBag[this.data.indexBuy] * cream_blue
        + this.data.softTissueMoneyPerBag[this.data.indexBuy] * soft_tissue;

      this.setData({ "sumBuyMoney": sumBuyMoney.toFixed(1) });
      var sumDMoney = sumBuyMoney - sumSellMoney;
      this.setData({ "sumDMoney": sumDMoney.toFixed(1) });
    } else if ("box" == packing) {
      var sumSellMoney = this.data.diaperThinMoneyPerBox[this.data.indexSell] *
        (thin_s + thin_m + thin_l + thin_xl)
        + this.data.diaperNBSoftMoneyPerBox[this.data.indexSell] * soft_nb
        + this.data.diaperSoftMoneyPerBox[this.data.indexSell] * (soft_s + soft_m + soft_l + soft_xl)
        + this.data.laraThinMoneyPerBox[this.data.indexSell] * (thin_l_l + thin_l_xl + thin_l_xxl)
        + this.data.laraSoftMoneyPerBox[this.data.indexSell] * (soft_l_l + soft_l_xl + soft_l_xxl)
        + this.data.diaperSoftThinSMTestMoneyPerBag[this.data.indexSell] * (thin_t_s + thin_t_m + soft_t_s + soft_t_m)
        + this.data.diaperSoftThinLTestMoneyPerBag[this.data.indexSell] * (thin_t_l + soft_t_l)
        + this.data.diaperSoftXLTestMoneyPerBag[this.data.indexSell] * soft_t_xl
        + this.data.laraSoftLTestMoneyPerBag[this.data.indexSell] * soft_tl_l
        + this.data.laraSoftXLTestMoneyPerBag[this.data.indexSell] * soft_tl_xl
        + this.data.laraSoftXXLTestMoneyPerBag[this.data.indexSell] * soft_tl_xxl
        + this.data.laraThinXLTestMoneyPerBag[this.data.indexSell] * thin_tl_xl
        + this.data.wipesSmallMoneyPerBox[this.data.indexSell] * wipes_small
        + this.data.wipesBigMoneyPerBox[this.data.indexSell] * wipes_big
        + this.data.womenPantsMoneyPerBox[this.data.indexSell] * women_pants
        + this.data.breastPadMoneyPerBox[this.data.indexSell] * breast_pad
        + this.data.pants190MoneyPerBox[this.data.indexSell] * pants_190
        + this.data.pants240MoneyPerBox[this.data.indexSell] * pants_240
        + this.data.pants280MoneyPerBox[this.data.indexSell] * pants_280
        + this.data.pants400MoneyPerBox[this.data.indexSell] * pants_400
        + this.data.laundryDetergentMoneyPerBox[this.data.indexSell] * laundry_detergent
        + this.data.laundrySoapMoneyPerBox[this.data.indexSell] * laundry_soap
        + this.data.sweatbandMoneyPerBox[this.data.indexSell] * sweatband
        + this.data.shampooMoneyPerBox[this.data.indexSell] * shampoo
        + this.data.destinMoneyPerBox[this.data.indexSell] * destin
        + this.data.creamPinkMoneyPerBox[this.data.indexSell] * cream_pink
        + this.data.creamBlueMoneyPerBox[this.data.indexSell] * cream_blue
        + this.data.softTissueMoneyPerBox[this.data.indexSell] * soft_tissue;
      this.setData({ "sumSellMoney": sumSellMoney.toFixed(1) });
      var sumBuyMoney = this.data.diaperThinMoneyPerBox[this.data.indexBuy] *
        (thin_s + thin_m + thin_l + thin_xl)
        + this.data.diaperNBSoftMoneyPerBox[this.data.indexBuy] * soft_nb
        + this.data.diaperSoftMoneyPerBox[this.data.indexBuy] * (soft_s + soft_m + soft_l + soft_xl)
        + this.data.laraThinMoneyPerBox[this.data.indexBuy] * (thin_l_l + thin_l_xl + thin_l_xxl)
        + this.data.laraSoftMoneyPerBox[this.data.indexBuy] * (soft_l_l + soft_l_xl + soft_l_xxl)
        + this.data.diaperSoftThinSMTestMoneyPerBag[this.data.indexBuy] * (thin_t_s + thin_t_m + soft_t_s + soft_t_m)
        + this.data.diaperSoftThinLTestMoneyPerBag[this.data.indexBuy] * (thin_t_l + soft_t_l)
        + this.data.diaperSoftXLTestMoneyPerBag[this.data.indexBuy] * soft_t_xl
        + this.data.laraSoftLTestMoneyPerBag[this.data.indexBuy] * soft_tl_l
        + this.data.laraSoftXLTestMoneyPerBag[this.data.indexBuy] * soft_tl_xl
        + this.data.laraSoftXXLTestMoneyPerBag[this.data.indexBuy] * soft_tl_xxl
        + this.data.laraThinXLTestMoneyPerBag[this.data.indexBuy] * thin_tl_xl
        + this.data.wipesSmallMoneyPerBox[this.data.indexBuy] * wipes_small
        + this.data.wipesBigMoneyPerBox[this.data.indexBuy] * wipes_big
        + this.data.womenPantsMoneyPerBox[this.data.indexBuy] * women_pants
        + this.data.breastPadMoneyPerBox[this.data.indexBuy] * breast_pad
        + this.data.pants190MoneyPerBox[this.data.indexBuy] * pants_190
        + this.data.pants240MoneyPerBox[this.data.indexBuy] * pants_240
        + this.data.pants280MoneyPerBox[this.data.indexBuy] * pants_280
        + this.data.pants400MoneyPerBox[this.data.indexBuy] * pants_400
        + this.data.laundryDetergentMoneyPerBox[this.data.indexBuy] * laundry_detergent
        + this.data.laundrySoapMoneyPerBox[this.data.indexBuy] * laundry_soap
        + this.data.sweatbandMoneyPerBox[this.data.indexBuy] * sweatband
        + this.data.shampooMoneyPerBox[this.data.indexBuy] * shampoo
        + this.data.destinMoneyPerBox[this.data.indexBuy] * destin
        + this.data.creamPinkMoneyPerBox[this.data.indexBuy] * cream_pink
        + this.data.creamBlueMoneyPerBox[this.data.indexBuy] * cream_blue
        + this.data.softTissueMoneyPerBox[this.data.indexBuy] * soft_tissue;
      this.setData({ "sumBuyMoney": sumBuyMoney.toFixed(1) });
      var sumDMoney = sumBuyMoney - sumSellMoney;
      this.setData({ "sumDMoney": sumDMoney.toFixed(1) });
    } else {
      wx.showModal({
        title: '提示',
        content: '请选择包装单位',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定');
          } else if (res.cancel) {
            console.log('用户点击取消');
          }
        }
      })
    }

  },
  formReset: function () {
    console.log('form发生了reset事件');
  },
  onLoad: function () {
  }
})
function checkIsInteger(str) {
  //如果为空，则通过校验 
  if (str == "") {
    return true;
  }
  if (/^(\-?)(\d+)$/.test(str)) {
    return true;
  }
  else {
    wx.showModal({
      title: '提示',
      content: '请输入数字，最大长度3',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定');
        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    })
  }
}
function parseIntIgnoreNull(str) {
  if (str == "") {
    return 0;
  } else {
    return parseInt(str);
  }
} 