import React from 'react';
import {axiosWithAuth} from "../auth/axiosAuth";

class Login extends React.Component{

    constructor(){
        super();
        this.state = {
            credentials: {
                username: "",
                password: ""
            }
        }
    }

    changeHandler = event => {
        this.setState({
            credentials: {
                ...this.state.credentials, 
                [event.target.name]: event.target.value
            }
        })
    }


    componentDidMount(){
        if(sessionStorage.getItem("token")){
            this.setState({...this.state, isLoggedIn: true});
        }
        else{
            this.setState({...this.state, isLoggedIn: false});
        }
    }


    login = event => {
        event.preventDefault();
        axiosWithAuth()
            .post("/api/login", this.state.credentials)
            .then(res => {
                console.log("login", res.data)
                //const {data} = res;
                localStorage.setItem("token", res.data.payload);
                //console.log(localStorage)
                //this.setState({...this.state, isLoggedIn: true})
                this.props.history.push("/protected")
                console.log(this.props.history)
            })
            .catch(err => console.log(err.response))
    }

    

    render(){
        return(
            <div>
                <form onSubmit={this.login}>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={this.state.credentials.username} 
                        onChange={this.changeHandler}
                    />
                    
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={this.state.credentials.password} 
                        onChange={this.changeHandler}
                    />
                    <button>Log In!</button>
                </form>
            </div>
        )
    }
}

export default Login;