/*************************************

项目名称：波点音乐

**************************************

[rewrite_local]
https:\/\/bd-api\.kuwo\.cn url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/bodianyinyue.js

[mitm]
hostname = bd-api.kuwo.cn

*************************************/
var body = $response.body;
body = body.replace(/\"expireDate":\d+/g, '\"expireDate":4092599349000');
body = body.replace(/\"isVip":\d+/g, '\"isVip":1');
body = body.replace(/\"vip":\d+/g, '\"vip":1');
body = body.replace(/\"isPay":\d+/g, '\"isPay":1');
body = body.replace(/\"isMv":\d+/g, '\"isMv":0');
$done({body});
