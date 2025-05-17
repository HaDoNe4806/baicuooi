export default function handler(req, res) {
  const flag = req.query.flag || "no-flag";
  console.log("💡 FLAG RECEIVED:", flag); // bắt buộc phải có

  res.status(200).end(); // trả response OK
}
