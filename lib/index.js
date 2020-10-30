/* eslint-disable no-unused-vars */
var express = require('express');
var path = require('path');
const { execSync } = require('child_process');
const { runInThisContext } = require('vm');
var app = express();
app.use(express.json({ limit: '5mb', extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './public')));

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
let resultList = [];
app.use('/', function (req, res, next) {
  next();
});

app.get('/api/result', function (req, res, next) {
  res.send(resultList)
});
app.get('/api/cpu', function (req, res, next) {
  try {
    let resultStr = execSync("adb shell top -n 1 | grep cpu | awk -F ' ' '{print $2}' |awk -F '%' '{print $1}'").toString();
    let result = resultStr.trim().split('\n')[0];
    res.send(result?result:'0')
  } catch (error) {
    res.send('0')
  }
});
app.get('/api/memory', function (req, res, next) {
  try {
    let resultStr = execSync("adb shell top -n 1 | grep Mem  | awk -F ',' '{print $2}'|awk -F ' ' '{print $1}'|awk -F 'G' '{print $1}'").toString();
    let result = resultStr.split('\n')[0];
    res.send(result?result:'0')
  } catch (error) {
    res.send('0')
  }
});

app.post('/api/run', function (req, res, next) {
  const body = req.body.params;
  console.log(body)
  let duration = body.second;
  res.status(200);
  res.send('ok');
  res.end();
  runTest(duration);
});

async function runTest (duration) {
  resultList = [];
  let start = new Date().getTime();
  console.log('duration---', duration);
  while ((new Date().getTime() - start) < duration * 1000) {
    let imageName = new Date().getTime() + '.jpg';
    resultList.push(imageName);
    const command = "adb shell am instrument -w -r   -e debug false -e class 'com.smart.farmer.ExampleInstrumentedTest#smartTestStep' -e imgName " + imageName + " com.smart.farmer.test/android.support.test.runner.AndroidJUnitRunner";
    console.log(command);
    try {
      let resultStr = execSync(command).toString();
      console.log(resultStr);

      const command2 = "adb pull /storage/emulated/0/Android/data/com.smart.farmer/cache/" + imageName + " " + __dirname + "/public/";
      let resultStr2 = execSync(command2).toString();
      console.log(resultStr2);
    } catch (e) {
      console.log(e);
    }
    await sleep(2000);
  }
}

const server = app.listen(8088, () => {
  console
  var host = server.address().address;
  var port = server.address().port;
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
});