import axios from "axios";
import { TweetType, UserType } from "../model/interfaces";

const BASE_URL = "http://localhost:3000/";

export async function getAllTweets(): Promise<TweetType[]> {
  const res = await axios.get(
    `${BASE_URL}tweets?type=tweet&_sort=creationDate&_order=desc`
  );
  return res.data;
}
export async function getTweetsByUser(id: string): Promise<TweetType[]> {
  const res = await axios.get(`${BASE_URL}tweets?userID=${id}`);
  return res.data;
}

export async function getUserByID(id: string): Promise<UserType> {
  const res = await axios.get(`${BASE_URL}users/${id}`);
  return res.data;
}
export async function getTweetByID(id: string): Promise<TweetType> {
  const res = await axios.get(`${BASE_URL}tweets/${id}`);
  return res.data;
}

export async function postTweet(postBody: TweetType) {
  try {
    await axios.post(`${BASE_URL}tweets`, { ...postBody });
  } catch (err) {
    console.log(err);
  }
}

export async function increseLike(
  id: string,
  { likes, userID }: { likes: string[]; userID: string }
) {
  try {
    await axios.patch(`${BASE_URL}tweets/${id}`, { likes: [...likes, userID] });
  } catch (err) {
    console.log(err);
  }
}

export async function decreseLike(
  id: string,
  { likes, userID }: { likes: string[]; userID: string }
) {
  try {
    await axios.patch(`${BASE_URL}tweets/${id}`, {
      likes: [...likes.filter((id) => id !== userID)],
    });
  } catch (err) {
    console.log(err);
  }
}

export async function increaseBookmark(id: string, bookmarksQnt: number) {
  try {
    await axios.patch(`${BASE_URL}tweets/${id}`, {
      bookmarksQuantity: bookmarksQnt + 1,
    });
  } catch (err) {
    console.log(err);
  }
}
export async function decreaseBookmark(id: string, bookmarksQnt: number) {
  try {
    await axios.patch(`${BASE_URL}tweets/${id}`, {
      bookmarksQuantity: bookmarksQnt,
    });
  } catch (err) {
    console.log(err);
  }
}

export async function addBookmarkToUser(
  userID: string,
  { bookmarkList, tweetID }: { bookmarkList: string[]; tweetID: string }
) {
  try {
    await axios.patch(`${BASE_URL}users/${userID}`, {
      bookmarks: [...bookmarkList, tweetID],
    });
  } catch (err) {
    console.log(err);
  }
}

export async function removeBookmarkToUser(
  userID: string,
  { bookmarkList, tweetID }: { bookmarkList: string[]; tweetID: string }
) {
  console.log(...bookmarkList.filter((bk) => bk !== tweetID))
  try {
    await axios.patch(`${BASE_URL}users/${userID}`, {
      bookmarks: [...bookmarkList.filter((bk) => bk !== tweetID)],
    });
  } catch (err) {
    console.log(err);
  }
}
