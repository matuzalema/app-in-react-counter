var Counter = React.createClass({
	getDefaultProps: function(){
		console.log('ustawianie domyślnych propsów jeśli nie są przekazane do komponentu');
	},

    getInitialState: function() {
    	console.log('początkowy stan komponentu');
        return {
            counter: 0
        };
    },

	increment: function(){
		this.setState({
			counter: this.state.counter + 1
		});
	},
	decrement: function(){
		this.setState({
			counter: this.state.counter - 1
		});
	},
	componentWillMount: function(){
		console.log('bardzo rzadko jest używana, ale cieżko znaleźć inf do czego konkretnie służy');
	},

	render: function(){
		 return (
		 	React.createElement('div', {'className': 'counter'},
		 		React.createElement('h2', {}, 'licznik: ' + this.state.counter),
		 		React.createElement('button', {onClick: this.increment}, 'dodaj'),
		 		React.createElement('button', {onClick: this.decrement}, 'odejmij')
		 	)
		 );
	},

	componentDidMount: function(){
		console.log('aktualizacja stanu komponentu, wywołanie AJAX, pobieranie danych, użycie jQuery');
	},


	componentWillReceiveProps: function(){
        console.log('np sprawdzenie, czy odświeżenie nastąpiło w wyniku zmiany obiektu this.props (a props jeszcze nie jest zaktualizowany, wywołanie this.setState()');
	},
	
	shouldComponentUpdate: function(){
	 	console.log('true/false, np sprawdzenie, czy nowy this.props jest taki sam jak stary, jeśli tak to zwróci false i kolejne metody cyklu beda anulowanie');
        return true;
	},

	componentWillUpdate: function(){
		console.log('jeśli shouldComponentUpdate zwróci true to odpali sie używa sie np do animacji i przygotowania zmian w DOM');
	},
	
	// renderuje

	componentDidUpdate: function(){
		console.log('po zmianach, teraz możliwa jest zmiana DOM');
	},
	componentWillUnmount: function(){
		console.log('czyszczenie komponentu np. anulowanie subskrypcji, żądań serwera, usunicie nasłuchiwania zdarzeń');
	}

});

var element = React.createElement('div', {}, 
    React.createElement('h1', {}, 'Counter in React'),
    React.createElement(Counter, {}),
    React.createElement(Counter, {}),
    React.createElement(Counter,{})
    );
ReactDOM.render(element, document.getElementById('app'));