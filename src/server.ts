const app = require("./app");

const port: number = Number(process.env.PORT) || 3000;

exports = app.listen(port, () => {
  console.log(("  App is running at http://localhost:%d in"), port);
  console.log("  Press CTRL-C to stop\n");
});
