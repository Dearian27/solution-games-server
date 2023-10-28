export const randomCode = (length) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let code = '';
  for( let i = 0; i < length; i++ ) {
    code += characters[Math.floor(Math.random() * characters.length)];
  }
  return code;
}