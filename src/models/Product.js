import { Model } from '@nozbe/watermelondb';
import { field, children } from '@nozbe/watermelondb/decorators';

export default class Product extends Model {
  static table = 'products';

  @field('name') name;
  @field('description') description;
  @field('price') price;
  @field('poster') poster;
  @field('is_popular') is_popular;

  @children('reviews') reviews;
}

