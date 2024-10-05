### Create an Auth0 Account

### Navigate to the Applications tab and click on Create Application.

### Choose a name for your application, select Single Page Application (SPA), and then click Create.

### In quickstart, select react

### In the settings for the application, get the Client ID and Domain. You’ll need these values for your React app.

### set callback & Logout URL to http://localhost:3000/

### Click documentation and select SPA and react and select Integrate with an existing application

### Select your application and click save

### Configure Auth0 by saving all three urls with http://localhost:3000/

### Install Auth0 SDK for React - npm install @auth0/auth0-react

## Configure the Auth0Provider component

```
import { Auth0Provider } from '@auth0/auth0-react';

<Auth0Provider
			domain="dev-s24lff5dwvh8rmto.us.auth0.com"
			clientId="ZkD5LoLq2F2eDGUwNypJwZ1nmbhn4Gz5"
			authorizationParams={{
				redirect_uri: window.location.origin,
			}}
		>
			<App />
		</Auth0Provider>
```

## Add login, authentication, and logout functionality

```
import { useAuth0 } from "@auth0/auth0-react";

const { loginWithRedirect, user, isAuthenticated, logout } = useAuth0();
```
