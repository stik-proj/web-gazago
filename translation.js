var path = require("path");
var fs = require("fs");
const { default: axios } = require("axios");

const getTranslationJson = async () => {
  await axios
    .get(
      `https://api.stage.staika.io/services/board/locale-messages?clientId=GAZAGO&sheetName=WEB_GAZAGO`
    )
    .then((res) => {
      const originData = res.data;
      const resKey = Object.keys(originData).map((item) => item);

      resKey.forEach((item) => {
        fs.unlink(
          path.resolve(__dirname + "/public/locales/" + item + "/common.json"),
          (err) => {
            console.log("삭제");
          },
          fs.writeFileSync(
            path.resolve(
              __dirname + "/public/locales/" + item,
              "./common.json"
            ),
            JSON.stringify(res.data[item]),
            "utf8"
          )
        );
      });
      console.log(resKey);
    });
};

getTranslationJson();
