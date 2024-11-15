import httpService from "../httpService";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function saveWeeklyProduct(product: any) {
  try {
    const method = product.id ? "put" : "post";
    const url = "/weekly-products";
    const response = await httpService[method](url, product);
    return response.data;
  } catch (error) {
    console.error("Failed to save product", error);
    throw new Error("Failed to save product");
  }
}

export async function deleteWeeklyProduct(productId: number) {
  try {
    const response = await httpService.delete(`/weekly-products/${productId}`);
    return response.data;
  } catch (error) {
    console.error("Failed to delete product", error);
    throw new Error("Failed to delete product");
  }
}
