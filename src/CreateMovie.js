import React, { Component } from 'react'
import request from 'superagent';
import Header from './shared/Header.js';

export default class CreateMovie extends Component {
    state = {
        types: [],
        fresh: true,
        type: 1,
    };

    componentDidMount = async () => {
        const types = await request.get('https://damp-falls-48537.herokuapp.com/data');
        
        this.setState({ types: types.body });
    }
    handleNameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    handleTypeChange = (e) => {
        console.log(e.target.value)
        this.setState({ type: Number(e.target.value) })
    }

    handleYearChange = (e) => {
        this.setState({ year: Number(e.target.value) })
    }

    handleRatingChange = (e) => {
        this.setState({ rating: Number(e.target.value) })
    }

    handleFreshChange = (e) => {
        const actualBool = e.target.value === 'false' 
            ? false 
            : true

        this.setState({ fresh: actualBool })
    }

    handleImageChange = (e) => {
        this.setState({ image: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const newMovies = {
            id: this.state.id,
            name: this.state.name,
            type: this.state.type,
            img: this.state.image,
            year: this.state.year,
            rating: this.state.rating,
            fresh: this.state.fresh,
            
        }

        const storedMovies = await request.post('https://damp-falls-48537.herokuapp.com/data', newMovies);


        console.log(storedMovies)

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
            <section>
                <Header />
            </section>
                <form onSubmit={this.handleSubmit}>
                    movies
                    <br/>
                    <label>
                        Name: 
                        <input onChange={this.handleNameChange} />
                    </label>
                    <br/>
                    <label>
                        Type: 
                        <select onChange={ this.handleTypeChange }>
                            { this.state.types.map(type => <option value={type.id}> 
                            {type.type}
                            </option>)}
                        </select>
                    </label>
                    <br/>
                    <label>
                        Year: 
                        <input type='number' onChange={this.handleYearChange} />
                    </label>
                    <br/>
                    <label>
                        Rating: 
                        <input type='number' onChange={this.handleRatingChange} />
                    </label>
                    <br/>
                    <label>
                        Image: 
                        <input onChange={this.handleImageChange} />
                    </label>
                    <br/>

                    <label>
                        Is Fresh: 
                        <select onChange={this.handleFreshChange}>
                            <option value="true" >True</option>
                            <option value="false" >False</option>
                        </select>
                    </label>
                    <br />
                <button>Submit</button>
                </form>
            </div>
        )
    }
}