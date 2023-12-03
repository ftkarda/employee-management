export interface Employee {
  id: number;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date;
  basicSalary: number;
  status: string;
  group: string;
  description: string;
}

export const generateDummyData = (): Employee[] => {
  const dummyData: Employee[] = [];

  for (let i = 1; i <= 100; i++) {
    dummyData.push({
      id: i+1,
      username: `user${i}`,
      firstName: `FirstName${i}`,
      lastName: `LastName${i}`,
      email: `user${i}@example.com`,
      birthDate: new Date(1990 + i, 0, 1),
      basicSalary: Math.random() * 50000 + 50000,
      status: i % 2 === 0 ? 'Active' : 'Inactive',
      group: i % 2 === 0 ? 'Group A' : 'Group B',
      description: `Description for user ${i}`,
    });
  }
  
  return dummyData;
};