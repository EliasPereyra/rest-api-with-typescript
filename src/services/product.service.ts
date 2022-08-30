import { DocumentDefinition, FilterQuery } from "mongoose";
import ProductModel, { ProductDocument } from "../models/product.model";

export async function createProduct(input: DocumentDefinition<Omit<ProductDocument, 'createdAt' | 'updatedAt'>>) {
  return ProductModel.create(input)
}

export async function findProduct(query: FilterQuery<ProductDocument>, options = { lean: true }) {
  return ProductModel.findOne(query, {}, options)
}

export async function findAndUpdateProduct() {

}

export async function deleteProduct() {

}
