export default function handler(req, res) {
  const flag = req.query.flag || "no-flag";
  console.log("💡 FLAG RECEIVED:", flag); // log để xem trong Vercel

  res.status(200).send("Logged!");
}
