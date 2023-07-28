export default function handler(req, res) {
  console.log("productId", req.query.productId);

  res.status(200).json({
    name: "John Doe",
  });
}
