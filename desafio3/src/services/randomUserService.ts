import axios from 'axios';

class RandomUserService {
  private baseUrl: string = 'https://randomuser.me/api/';

  public async fetchRandomUsers(count: number) {
    try {
      const response = await axios.get(`${this.baseUrl}?results=${count}`);
      return response.data.results;
    } catch (error) {
      throw new Error(`Error fetching random users: ${error}`);
    }
  }
}

export default new RandomUserService();
