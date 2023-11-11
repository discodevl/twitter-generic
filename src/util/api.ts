import axios from "axios";
import { TweetType, UserType } from "../model/interfaces";

const BASE_URL = "http://localhost:3000/";

export async function getAllTweets(): Promise<TweetType[]> {
  const res = await axios.get(`${BASE_URL}tweets?type=tweet`);
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