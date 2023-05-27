export interface Post {
  _id: string;
  title: string;
  sub_title?: string;
  content?: string;
  author?: string;
  publish_date?: Date;
  created_date?: Date;
  created_by?: string;
  modified_date?: Date;
  modified_by?: string;
  is_deleted?: boolean;
  deleted_date?: Date;
  deleted_by?: string;
  slug: string;
  thumbnail_link?: string;
}
