export default interface postResponse {
  _id: string;
  featureImage: {
    asset: {
      _ref: string;
    };
  };
  tags: string[];
  author: string;
  excerpt: string;
}
