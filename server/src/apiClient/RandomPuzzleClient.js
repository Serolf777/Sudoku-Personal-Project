import got from "got";

class RandomPuzzleClient {   
  static async getRandomPuzzle(difficulty) {
    try {
      const url = `https://sugoku.herokuapp.com/board?difficulty=${difficulty}`;
      const apiResponse = await got(url);
      const responseBody = apiResponse.body;
      return responseBody;
    } catch (error) {
      return { error: error.message };
    }
  }
}

export default RandomPuzzleClient;