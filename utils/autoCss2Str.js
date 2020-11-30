const css2str = require('css2str');
const path = require('path');
const fs = require('fs');

/**
 * @description 读取路径信息
 * @param {string} path 路径
 */
function getFileStat(path){
  return new Promise((resolve, reject) => {
    fs.stat(path, (err, stats) => {
      if(err) {
        resolve(false);
      } else {
        resolve(stats);
      }
    });
  });
}

// 输入的 theme.css
const inFilePath = path.join(`${__dirname}/../src/core/theme.css`);
// 输出的 theme.js
const outFilePath = path.join(`${__dirname}/../src/core/theme.js`);

/**
 * @description 先删除再创建，保证每次都是最新的css文件
 */
async function intialCss2JsFile() {
  const isExist = await getFileStat(outFilePath);
  // 存在文件，删除
  if (isExist) {
    fs.unlinkSync(outFilePath);
  }
  // css 字符串
  const cssStr = css2str(fs.readFileSync(inFilePath));
  const inStr = `module.exports = \`\r\n\t${cssStr}\r\n\`;`;
  // 删除之后重新创建一个空文件
  fs.writeFileSync(outFilePath, inStr);
}

intialCss2JsFile();