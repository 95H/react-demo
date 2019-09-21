import React, {
	Component
} from 'react';
import {
	connect
} from 'react-redux';
import store from '../store/store';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			del: store.getState().del.del
		}

	}
	render() {
		const {
			pay,
			del,
			solary,
			deletewang,
			changesolary,
			connectString
		} = this.props;
		let styleDiv = {
			width: '100%',
			height: 500,
			backgroundColor: 'orange',
			buttom: {
				backgroundColor: "greenyellow"
			}
		};
		return (
			<div style = { styleDiv }>
			 {
				this.state.del.map((item, index) => {
					return <p key={index}>{ item}</p>
				})
			}
			<button style={styleDiv.buttom} onClick={()=>deletewang()}>添加</button>
			<br />
			{ solary }
			<br />
			<button style={styleDiv.buttom} onClick={()=>changesolary()}>加薪</button>
			<br />
			{ pay }
			<br />
			<button style={styleDiv.buttom} onClick={()=>connectString()}>拼接</button>
			</div>
		)
	}
	componentDidMount() {
		store.subscribe(() => {
			this.setState({
				del: store.getState().del.del
			})
		})
	}
};

function popArray(state) {
	return {
		// del: state.del.del,
		solary: state.creat.solary,
		pay: state.pay.pay
	}
}

// function popDispath(dispatch) {
// 	return {
// 		deletewang: () => dispatch({
// 			type: 'DEL'
// 		}),
// 		changesolary: () => dispatch({
// 			type: 'CREAT'
// 		}),
// 		connectString: () => dispatch({
// 			type: 'PAY'
// 		}),
// 	}
// }



function popDispath(dispatch) {
	return {
		// deletewang: () => dispatch(function() {
		// 	this.$http.post('URL', parmas)
		// 		.then(response => {})
		// 		.catch(error => {})
		// }),
		changesolary: () => dispatch({
			type: 'CREAT'
		}),
		connectString: () => dispatch({
			type: 'PAY'
		}),
	}
}


export default connect(
	popArray,
	popDispath
)(Home);