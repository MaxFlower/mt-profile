import { PersonData, Skill } from '../definitions/data.interfaces';

const API_URL = 'https://github-raw-proxy.herokuapp.com/maxflower/mt-profile/master/json';

const apiGet = async <T>(url: string): Promise<T> => {
  const  xhttp = new XMLHttpRequest();
  return new Promise<T>((resolve, _) => {
    xhttp.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        return resolve(JSON.parse(xhttp.response));
      }
    };
    xhttp.open("GET", API_URL + url, true);
    xhttp.send();
  });
};

const fetchPersonData = async (url: string) => {
  return apiGet<PersonData>(`/${url}/person.json`);
};

const fetchSkillLabels = async () => {
  return apiGet<Skill[]>('/skills.json');
};

export { fetchPersonData, fetchSkillLabels };
