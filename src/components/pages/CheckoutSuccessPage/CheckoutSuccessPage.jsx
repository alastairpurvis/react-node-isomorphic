/**
 * MIT License
 *
 * Copyright (c) 2017 Skin Moderne Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import React, { Component, PropTypes } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './CheckoutSuccessPage.scss';
import Container from '../../ui/common/Container';
import Title from '../../ui/common/Title';
import CheckoutSuccess from '../../ui/common/CheckoutSuccess';

const title = 'Order has been accepted';

@withStyles(s)
class CheckoutSuccessPage extends Component {
    static pageName = 'success-checkout';

    static contextTypes = {
        setTitle: PropTypes.func.isRequired
    };

    componentWillMount() {
        this.context.setTitle(title);
    }

    render() {
        return (
            <Container contentArea>
                <Title text={title}/>
                <CheckoutSuccess />
            </Container>
        );
    }

}

export default CheckoutSuccessPage;
