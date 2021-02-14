import React from 'react';

class Searchbar extends React.Component {
    // First way to solve the error may occured in line 23
    // constructor(){
    //     super();
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // }


    state = { term: '' }

    // onInputChange=(event)=>
    // {
    //     this.setState( {term:event.target.value })
    // }

    // onFormSubmit(event)
    // {

    //     event.preventDefault();
    //     console.log(this.state.term); // It will produce an error
    // }
    // Second way to solve the error occured in line 23 is to convert the function as arrow function
    // Arrow function automatically binds this 
    onFormSubmit = (event) => {
        debugger;
        if(this.state.term == ''){

        }
        event.preventDefault();
        this.props.on(this.state.term); // here the call back function got bind with the state value and passed to
        // parent component
        //console.log(this.state.term); 
    }

    render() {
        return (<div className='ui segment'>
            <form className='ui form' onSubmit={this.onFormSubmit}>
                <div className='field'>
                    <label>Search Image</label>
                    <input type='text'
                        value={this.state.term}
                        onChange={(e) => this.setState({ term: e.target.value })}></input>

                </div>
                <button type='submit' class="ui right labeled icon blue basic button" onClick={this.onSearchSubmit}>
                    <i class="right arrow icon"></i>
                Go
                </button>
            </form>

        </div>);
    }
}

export default Searchbar;