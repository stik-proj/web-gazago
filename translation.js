var path = require("path");
var fs = require("fs");
const { default: axios } = require("axios");

const getTranslationJson = async () => {
  const apiEnv =
    process.env.NODE_ENV === "production"
      ? "https://api.staika.io"
      : "https://api.stage.staika.io";
  await axios
    .get(
      `${apiEnv}/services/board/api/locale-messages?clientId=GAZAGO&sheetName=WEB_GAZAGO`
    )
    .then((res) => {
      const originData = res.data;
      const resKey = Object.keys(originData).map((item) => item);

      resKey.forEach((item) => {
        console.log(__dirname + "/src/locales/" + item + "/common.json");
        // fs.unlink(
        //   path.resolve(__dirname + "/src/locales/" + item + "/common.json"),
        //   (err) => {
        //     console.log("삭제");
        //   }
        // );
        fs.writeFileSync(
          path.resolve(__dirname + "/src/locales/" + item, "./common.json"),
          JSON.stringify(res.data[item]),
          "utf8"
        );
      });
    });

  // await axios.post(
  //   `https://api.stage.staika.io/services/board/locale-messages?clientId=GAZAGO&sheetName=WEB_GAZAGO`
  // );
};

getTranslationJson();
