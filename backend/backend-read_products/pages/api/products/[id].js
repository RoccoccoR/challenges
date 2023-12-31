import Product from "../../../db/models/Product";

export default async function handler(request, response) {
  const { id } = request.query;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(product);
  } catch (error) {
    response.status(500).json({ status: "Internal Server Error" });
  }
}
