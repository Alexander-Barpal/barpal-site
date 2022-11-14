import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class login extends React.Component {
  render(){
    return (
      <div>
			<form action="/login" method="get">
				<input type="submit" value="Login"/>
			</form>
			<form action="/reg" method="get">
				<input type="submit" value="Register"/>
			</form>
		</div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<login/>);