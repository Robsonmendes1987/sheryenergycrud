import axios from "axios";

const getDog = async (): Promise<string> => {
  const result = await axios.request({
    url: "https://random.dog/woof.json?filter=mp4,webm",
    method: "get",
  });
  return result.data.url;
};
export default getDog;
