import axios from "axios";
import { TweetType, UserType } from "../model/interfaces";

const BASE_URL = "http://localhost:3000/";

export async function getAllTweets(): Promise<TweetType[]> {
  const res = await axios.get(`${BASE_URL}tweets?type=tweet&_sort=creationDate&_order=desc`);
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
    console.log(err)
  }
}

export async function increseLike(id: string, {likes, userID}: {likes: string[]; userID: string}) {
  try {
    await axios.patch(`${BASE_URL}tweets/${id}`, {likes: [...likes, userID]});
  } catch (err) {
    console.log(err)
  }
}

export async function decreseLike(id: string, {likes, userID}: {likes: string[]; userID: string}) {
  try {
    await axios.patch(`${BASE_URL}tweets/${id}`, {likes: [...likes.filter(id => id !== userID)]});
  } catch (err) {
    console.log(err)
  }
}

export async function addTweetToBookmark(id: string, {bookmarks, userID}: {bookmarks: string[]; userID: string}) {
  try {
    await axios.patch(`${BASE_URL}tweets/${id}`, {bookmarks: [...bookmarks, userID]});
  } catch (err) {
    console.log(err)
  }
}
export async function removeTweetToBookmark(id: string, {bookmarks, userID}: {bookmarks: string[]; userID: string}) {
  try {
    await axios.patch(`${BASE_URL}tweets/${id}`, {bookmarks: [...bookmarks.filter(bk => bk !== userID)]});
  } catch (err) {
    console.log(err)
  }
}