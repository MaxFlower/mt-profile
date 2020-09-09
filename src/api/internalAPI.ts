import { PersonData, Skill } from '../definitions/data.interfaces';

const API_URL = 'https://raw.githubusercontent.com/maxflower/mt-profile/master/json';
const OPTIONS = {
  method: 'GET',
  headers: new Headers({'content-type': 'application/json'}),
  mode: 'cors' as RequestMode
};

const apiGet = async <T>(url: string): Promise<T> => {
  const response = await fetch(API_URL + url, OPTIONS);

  console.log(response)

  return response.json();
};

const fetchPersonData = async (url: string) => {
  return apiGet<PersonData>(`/${url}/person.json`);
};

const fetchSkillLabels = async () => {
  return apiGet<Skill[]>('/skills.json');
};

export { fetchPersonData, fetchSkillLabels };
