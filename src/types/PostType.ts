type PostType = {
  subredditPicture: any;
  subredditName: string;
  creationDate?: Date;
  content: string;
  image?: any;
  votesCount: number;
  commentsCount: number;
  isSponsored?: boolean;
  website?: string;
}

export default PostType;