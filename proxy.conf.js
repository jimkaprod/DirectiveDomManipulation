const PROXY_CONFIG = {
  "/deezer": {
    target: "https://api.deezer.com",
    secure: false,
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/deezer": "",
    },
    // onProxyRes: function (pr, req, res) {
    //   if (pr.headers["set-cookie"]) {
    //     const cookies = pr.headers["set-cookie"].map((cookie) =>
    //       cookie.replace(/;(\ )*secure/gi, "")
    //     );
    //     pr.headers["set-cookie"] = cookies;
    //   }
    // },
  },
};
module.exports = PROXY_CONFIG;
