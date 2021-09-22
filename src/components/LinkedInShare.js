import React from "react";

import { withRouter } from 'react-router-dom';

import {
    // Box,
    // Flex,
    Text
} from "@chakra-ui/react"

import UserSession from './UserSession';

const axios = require('axios');

// import Certificate from "./Certificate";

// import LinkedIn from "./LinkedIn";

class LinkedInShare extends React.Component {
    constructor(props) {
        super(props)
        // this.state = {
        //     authorization_code: '',
        //     access_code: '',
        // };
        this.handleAccess = this.handleAccess.bind(this)
    }

    handleAccess = ({ authorization_code }) => {

        let data = new FormData(); // Currently empty
        data.append('grant_type', 'authorization_code');
        data.append('code', authorization_code);
        data.append('client_id', '782r44eaplkfzr');
        data.append('client_secret', 'VGKnUhm3eZPNl5Io');
        data.append('redirect_uri', 'http://localhost:3000/share');

        // const response = await LinkedInAuth();

        let config = {
            headers: {
                'Content-Type': 'x-www-form-urlencoded',
            }
        }
        // console.log('body', body.entries())
        console.log('handleAccess antes do post', authorization_code)

        axios.post('https://radiant-brushlands-64499.herokuapp.com/https://www.linkedin.com/oauth/v2/accessToken?'
        +'grant_type=authorization_code&client_id=782r44eaplkfzr&client_secret=VGKnUhm3eZPNl5Io&redirect_uri=http://localhost:3000/share&code='+authorization_code,data,config
        )
            .then(function (response) {
                console.log('.then do post', response.data);
                UserSession.setAccessToken(response.data.access_token, response.data.expires_in)
                // console.log('.then do post', response.data);
                // window.open(response.headers['x-final-url'], '_blank').focus();
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        // window.open(url, '_blank').focus();
    };

    componentDidMount() {

        const access_token = this.handleAccess({ authorization_code: this.props.location.search.slice(6) })
        console.log('access_token', access_token)
    }

    render() {
        return (
            <>
                <Text>
                    O Access Token do LinkedIn
                    <br/>
                    {UserSession.getAccessToken()}
                    {/* {this.props.match.params.code} */}
                </Text>
            </>
        )
    }
}

// export default LinkedInShare;
export default withRouter(LinkedInShare);