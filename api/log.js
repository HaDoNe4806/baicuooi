export default function handler(req, res) {
  const flag = req.query.flag;
  console.log("FLAG:", flag);
  res.status(200).send("ok");
}
