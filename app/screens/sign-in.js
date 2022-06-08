import React, { useState } from 'react';
import styled from 'styled-components/native';
import { useDispatch } from 'react-redux';
import { getAuth, signInAnonymously } from "firebase/auth";

import { Label, Input, Button } from '../elements';
import { SafeAreaView } from '../elements';
import { sign_in } from '../redux/userSlice';

const StyledView = styled.View`
    display: flex;
    flex: 1;
    padding-left: 15%;
    padding-right: 15%;
    justify-content: center;
    align-items: center;
    background-color: #E5E5E5;
`;

const StyledElementView = styled.View`
    margin-bottom: 24px;
    width: 100%;
`;

export const SignIn = ({ navigation }) => {

    const [usernameError, setUsernameError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    const handleSignIn = () => {
        if(!username) {
            setUsernameError('Username is required');
            return;
        } else setUsernameError('');

        if(!firstName) {
            setFirstNameError('First Name is required');
            return;
        } else setFirstNameError('');

        setLoading(true);
        const auth = getAuth();
        signInAnonymously(auth)
            .then(() => {
                dispatch(sign_in({
                    username,
                    firstName,
                    lastName
                }));
                setLoading(false);
            })
            .catch((error) => {
                setLoading(false);
                console.log(error.message);
            });
    }


    return (
        <SafeAreaView>
            { loading ? 
            <StyledView>
                <Label>Loading ...</Label>
            </StyledView>
            :
            <StyledView>
                <StyledElementView>
                    <Label>Log in to your account</Label>
                </StyledElementView>
                <StyledElementView>
                    <Input
                        testId="username_input"
                        placeholder="Username"
                        onChangeText={setUsername}
                        value={username}
                        error={usernameError}
                    />
                </StyledElementView>
                <StyledElementView>
                    <Input
                        testId="firstName_input"
                        placeholder="First Name"
                        onChangeText={setFirstName} 
                        value={firstName}
                        error={firstNameError}
                    />
                </StyledElementView>
                <StyledElementView>
                    <Input
                        testId="lastName_input"
                        placeholder="Last Name"
                        onChangeText={setLastName} 
                        value={lastName}
                    />
                </StyledElementView>
                <StyledElementView testId="sign_in">
                    <Button
                        onPress={handleSignIn}
                        title="Sign In"
                    >
                        Sign In
                    </Button>
                </StyledElementView>
            </StyledView>
            }
        </SafeAreaView>
    );
}

export default SignIn;
