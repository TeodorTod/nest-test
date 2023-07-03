import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/create-user.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('Inside pipe');
    console.log(value);


    const parseAgeInt = parseInt(value.age.toString())
    if (isNaN(parseAgeInt)) {
      console.log(`${value.age} is not a number`);
      throw new HttpException('Invalid data type for number', HttpStatus.BAD_REQUEST)
    } 
    console.log(`${value.age} is a number`);
    return { ...value, age: parseAgeInt }
  }
}
