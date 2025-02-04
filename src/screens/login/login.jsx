import { useContext, useState } from "react";
import { loginService } from "../../services/auth.service";
import { AuthContext } from "../../contexts/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null)

  const { login, isAuthLoaded, currentUser } = useContext(AuthContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    loginService(formData)
      .then((res) => {
        // res === { accestoken: klahsdklahslfbaosd.12903u190239012u309234,2189472984912849012}
        login(res.accessToken)
      })
      .catch((error) => {
        setError(error.message)
      });
  }

  if (!isAuthLoaded) {
    return 'loading'
  }

  if (isAuthLoaded && currentUser) {
    return 'Ya estas logueado'
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5 mt-5">Login</h1>
      <form onSubmit={handleSubmit} className="row g-3 border p-3" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <div className="col-md-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input onChange={handleChange} type="email" className="form-control" id="email" name="email" />
        </div>
        <div className="col-md-12">
          <label htmlFor="password" className="form-label">Password</label>
          <input onChange={handleChange} type="password" className="form-control" id="password" name="password" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Login</button>
        </div>
        {error && <div className="alert alert-danger" role="alert">
          {error}
        </div>}

      </form>
    </div>
  );
};

export default Login;
