export function signIn() {
  // Mudar para axios.get
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