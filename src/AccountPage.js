import React from 'react';
import ReactDOM from 'react-dom';
import { Page, Toolbar } from 'react-onsenui';

export default class AccountPage extends React.Component {
    render() {
        return (
            <Page
                renderToolbar={() =>
                    <Toolbar>
                        <div className='center'>Title</div>
                    </Toolbar>
                }
            >
                <div>
                    Account Page
        </div>
            </Page>
        );
    }
}