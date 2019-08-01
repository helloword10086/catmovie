const URL = {
  // 推荐轮播
  carousel: 'http://m.maoyan.com/ajax/cinemaList?day=2019-07-11&offset=0&limit=20&districtId=-1&lineId=-1&hallType=-1&brandId=-1&serviceId=-1&areaId=-1&stationId=-1&item=&updateShowDay=true&reqId=1562843191301&cityId=1',
  newalbum:'https://u.y.qq.com/cgi-bin/musicu.fcg',
  albumInfo: "https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg",
  songVkey: "https://c.y.qq.com/base/fcgi-bin/fcg_music_express_mobile3.fcg"
}

const PARAM = {
  format: "jsonp",
  inCharset:"utf-8",
  outCharset: "utf-8",
  notice: 0
}
const OPTION = {
  param: 'jsonpCallback',
  prefix: 'callback'
}
const CODE_SUCCESS = 0;

export {URL,PARAM,OPTION,CODE_SUCCESS}
