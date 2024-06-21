let array = [];
const SignUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    let newUser = { name, email, password };
    array.push(newUser);
    return res.status(201).json({ message: "signup successful" });
  } catch (error) {
    return res.send(503).json(error.message);
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    let isEmailPresent = array.find((el) => el.email == email);
    if (!isEmailPresent) {
     return res.status(404).json({ message: "invalid email" });
    }
    let match = array.find(
      (el) => el.email == email && el.password == password
    );
    if (!match) {
     return  res.status(404).json({ message: "invalid password" });
    }
    return res.status(200).json({ message: "login success" });
  } catch (error) {
    return res.send(503).json(error.message);
  }
};
const Users = async(req,res)=>{
    try {
       return  res.status(200).json({user_data:array})
    } catch (error) {
        return res.send(503).json(error.message); 
    }
}

module.exports = {SignUp , Login,Users}