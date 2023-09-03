
export default class RestLogService {

  // send req to backend
  public static async findAllLogs(): Promise<any> {
    const response = await fetch('http://localhost:3000/logs');
    return await response.json();
  }
}
