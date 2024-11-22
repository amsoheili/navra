import navraAxios from '@/api/navra-axios';
import { API_ROUTES } from '@/api/api-routes';

export const navraApiService = () => {


  return {
    registerUser(username, email, password){
      return navraAxios.post(API_ROUTES.REGISTER, {
          user: {
            username,
            email,
            password
          }
        });
    },
    loginUser(email, password) {
      return navraAxios.post(API_ROUTES.LOGIN, {
        user: {
          email,
          password
        }
      });
    },
    currentUser() {
      return navraAxios.get(API_ROUTES.CURRENT_USER);
    }
  }

}