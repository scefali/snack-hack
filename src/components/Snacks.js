import React from 'react';
import styled from 'styled-components';

import { getSnacks } from '../api';

import OneProduct from './OneSnack';


class Snacks extends React.Component {
    state = {snacks: []}
    async componentDidMount() {
        const snacks = await getSnacks();
        this.setState({snacks})
    }

    renderSnack(snack) {
        return (
            <OneProduct key={snack.id} snack={snack} />
        )
    }

    render() {
        return (
            <Container>
                <Header >Snacks</Header>
                <ProductContainer>
                    {this.state.snacks.map(this.renderSnack)}
                    {/* <OneProduct
                        label="Kettle Chips"
                        image={kettleChips}
                    />
                    <OneProduct
                        label="Protein Bars"
                        image={proteinBars}
                    />
                    <OneProduct
                        label="Real Fruit YoYo"
                        image={realFruitYoyo}
                    /> */}
                </ProductContainer>
            </Container>
        )
    }
}



const Container = styled.div`
    max-width: 1200px;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-left: 20px;
    margin-top: 50px;
`;

const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    float: left;
    align-items: flex-start;

`;

const Header = styled.h2``;



export default Snacks;