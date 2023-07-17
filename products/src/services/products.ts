import logger from '../uitilities/logger';
import { db } from '../models';
import { producer } from '../uitilities/kafka';

export class ProductServices {
  public static async productList(query: any) {
    try {
      return await db.products.findAll({
        where: { isDeleted: false },
        attributes: ['id', 'name', 'description', 'price'],
        order: [['createdAt', 'asc']],
        offset: query.page ? (parseInt(query.page) - 1) * parseInt(query.limit) : 0,
        limit: query.limit ? parseInt(query.limit) : 10,
      });
    } catch (err: any) {
      logger.error(err);
      throw new Error(err.message);
    }
  }

  public static async productAdd(body: any, user: any) {
    try {
      const product = await db.products.create({
        name: body.name,
        description: body.description,
        price: body.price,
        userId: user.id as string,
      });
      const messageString = JSON.stringify({ flag: 'productCount', userId: user.id });
      await producer.send({
        topic: 'product-count', // The Kafka topic to send messages to
        messages: [{ value: messageString }], // Message value should be a string or buffer
      });

      return product;
    } catch (err: any) {
      logger.error(err);
      throw new Error(err.message);
    }
  }

  public static async productUpdate(params: any, body: any) {
    try {
      const products = await db.products.findOne({
        where: {
          id: params.id,
        },
      });
      if (!products) {
        return 'notExist';
      } else {
        return await products.update(body);
      }
    } catch (err: any) {
      logger.error(err);
      throw new Error(err.message);
    }
  }

  public static async productDelete(params: any) {
    try {
      const products = await db.products.findOne({
        where: {
          id: params.id,
        },
      });
      if (!products) {
        return 'notExist';
      } else {
        const today = new Date();
        return await products.update({ isDeleted: true, deletedAt: today });
      }
    } catch (err: any) {
      logger.error(err);
      throw new Error(err.message);
    }
  }
}
