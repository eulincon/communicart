<<<<<<< Updated upstream
export function signIn() {
=======
import PropTypes from 'prop-types';

signIn.propTypes = {
  token: PropTypes.string,
  user: {
    name: PropTypes.string,
    email: PropTypes.string
  }
}

export function signIn() {
  // Mudar para axios.get
>>>>>>> Stashed changes
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'asdfdsfadsf.sdtgretert.rgbvdf52725',
        user: {
          name: 'Lincon',
          email: 'lincon@teste.com.br'
        }
      })
    }, 2000);
  });
};