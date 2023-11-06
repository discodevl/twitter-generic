import axios from "axios";
import { TweetType } from "../model/interfaces";

const BASE_URL = "http://localhost:3000/";

export async function getAllTweets(): Promise<TweetType[]> {
  const res = await axios.get(`${BASE_URL}tweets`);
  return res.data;
}
