import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvellousChk'
})
export class marvellousChk implements PipeTransform {

  transform(value: number, param : string): string {
    let str : string = "";
    let flag : boolean = false;
      
    if (param == "Even")
    {
        if (value % 2 == 0)
        {
          str = "It is Even number!!"
        }
        else 
        {
          str = "It is not Even number!!"
        }
    }
    else if (param == "Odd")
    {
      if (value % 2 != 0)
      {
        str = "It is Odd number!!"
      }
      else 
      {
        str = "It is not Odd number!!"
      }
    }
    else if (param == "Prime")
    {
      flag = this.GetPrime(value);
      if (flag)
      {
        str = "It is Prime number!!"
      }
      else 
      {
        str = "It is not Prime number!!"
      }
    }
    else if (param == "Perfect")
    {
      flag = this.GetPerfect(value);
      if (flag)
      {
        str = "It is Perfect number!!"
      }
      else 
      {
        str = "It is not Perfect number!!"
      }
    }
    return str;
  }

  GetPerfect(num: number): boolean {
    let flag : boolean = false;
    let result : number = 0;
    let sum : number =0;
    for (var i = 1; i < num; i++)
    {
        result = num % i;
        if (result == 0)
        {
            sum += i;
        }
    }
    console.log(sum);

    if (sum == num)
    {
      flag = true;
    }

    return flag
  }
    
  GetPrime(num: number): boolean {
    let flag : boolean = false;
    let result : number = 0;
    for (var i = 2; i < num; i++)
    {
        result = num % i;
        if (result == 0 && i < num)
        {
            flag = false;
            break;
        }
        else
        {
            flag = true;
        }
    }

    return flag
  }
  
}

