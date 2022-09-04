export interface EmploymentTitle{
  companyName?:string,
  currentlyWorking?:boolean,
  role?:string,
  startingYear?:string
}

export interface EducationTitle{
  CGPA?:string,
  currentlyStudying?:boolean,
  degree?:string,
  educationLevel?:string,
  endingYear?:string,
}

export interface User {
    name?: string;
    photoUrl?: string;
    email?: string;
    employmentList?:Array<EmploymentTitle>,
    educationList?:Array<EmploymentTitle>,
  }

  
