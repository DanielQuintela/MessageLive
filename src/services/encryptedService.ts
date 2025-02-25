const bcrypt = require('bcrypt');

export function encryptPassword(password: string) {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
}

export function comparePassword(password:string, hash:string) {
  return bcrypt.compareSync(password, hash);
}
  
   