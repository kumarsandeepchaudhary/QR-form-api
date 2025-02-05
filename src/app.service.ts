import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { UserFormDto } from './user-form.dto';

@Injectable()
export class AppService {

  constructor(
  private readonly dataSource: DataSource) { }

  getHello(): string {
    return 'Hello World!';
  }

  private async getQueryData(values, query, apiName) {
    try {
      const result = await this.dataSource.query(query, values);
      if (!result || result.length === 0) {
        return null;
      }
      return result[0];
    } catch (error) {
      throw error;
    }
  }

  async getData(UserFormDto: UserFormDto) {
    console.log(UserFormDto)
    const apiQuery = "INSERT INTO userform (fullName, companyName, jobTitle, workEmail, phoneNo) VALUES (?, ?, ?, ?, ?);";
    const apiData = await this.getQueryData([UserFormDto.fullName, UserFormDto.companyName, UserFormDto.jobTitle, UserFormDto.workEmail, UserFormDto.phoneNo], apiQuery, 'API_QUERY');

    // If API is not linked to any module, then bypass the consumption check
    return apiData;
  }

}
