export type CommentType = {
    userID: string;
    comment: string;
    creationDate: Date; //new Date().toISOString()
}
export type TweetType = {
    id: string;
    userID: string;
    creationDate: Date; //new Date().toISOString()
    content: string;
    imageURL?: string;
    comments: CommentType[];
    likes: number;
}

export type UserType = {
    id: string;
    name: string;
    bio: string
    imgProfileURL: string;
    imgBannerURL?: string;
    creationDate: Date; //new Date().toISOString()
    following: string[]; //user id arr
    followers: string[]; //user id arr
    posts: TweetType[];
    bookmarks: string[]; //posts id arr
}