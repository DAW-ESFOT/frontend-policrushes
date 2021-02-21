import {Auth} from '../lib/auth';

const Login = () => {
    const handleLogin = async (data) => {
        try {
            const userData = await Auth.login({
                email: "dayton.collins@hotmail.com",
                password: "123123",
            });

            console.log("userData", userData);

        } catch (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        }
    };

    return(
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;