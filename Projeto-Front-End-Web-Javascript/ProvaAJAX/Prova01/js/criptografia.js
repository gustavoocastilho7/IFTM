import bcrypt from "https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm";

const senhaUser = "ana123carol";
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(senhaUser, salt);
