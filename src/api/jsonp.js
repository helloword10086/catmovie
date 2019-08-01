import originalJsonp from 'jsonp'
import {CODE_SUCCESS} from './config'
const jsonp = (url,  option) => {
    return new Promise((resolve, reject) => {
        // buildUrl将传进来的参数拼成一个get的请求方式
        originalJsonp(url, option, (err, res) => {
            if (!err) {
                if(res && res.code ===200 ){

                    resolve(res)
                }else{
                     reject('接口出错')
                 }
            } else {
                reject(err)
            }
        })
    })
}
/**
 * @param {*} url baidu.com
 * @param {*} data {a:1,b:2}
 * baidu.com?a=1&b=2 [a=1,b=2]
 */
function buildUrl(url, data) {
    let param = [];
    for (var k in data) {
        // 中文路径会出错 要记得encodeURIComponent编码
        // decodeURIComponent解码
        param.push(`${k}=${encodeURIComponent(data[k])}`)
    }
    let paramStr = param.join('&');
    if (url.indexOf('?') === -1) {
        url += "?" + paramStr
    }else{
        url = "&" + paramStr
    }
    return url
}
export default jsonp;
