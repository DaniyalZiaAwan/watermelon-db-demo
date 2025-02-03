import { Model } from '@nozbe/watermelondb';
import { field, relation } from '@nozbe/watermelondb/decorators';

export default class Review extends Model {
  static table = 'reviews';

  @field('content') content;
  @relation('product', 'product_id') product;
}
