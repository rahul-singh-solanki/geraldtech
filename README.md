# Gerald Assignment Demo

###  iOS Demo

https://github.com/user-attachments/assets/bab6a443-f2be-4188-b8cf-e4ece49e6434



### 📲 Android Demo
https://github.com/user-attachments/assets/21fd1d4f-b039-4bf1-bc8f-d7d0ad114afb

<br>

# Project Structure
```
src
|-- App.tsx
|-- assets
|   |-- icons
|   |   |-- contact.png
|   |   |-- hamburger.png
|   |   `-- home.png
|   `-- index.ts
|-- components
|   |-- Button.tsx
|   |-- DrawerScreenWrapper.tsx
|   `-- Header.tsx
|-- constants
|   `-- StringConstants.ts
|-- navigators
|   |-- MainNavigator.tsx
|   |-- ScreenOptions.tsx
|   `-- SubNavigators
|       |-- BottomTabNavigator.tsx
|       |-- DrawerContent.tsx
|       |-- DrawerItem.tsx
|       `-- StackNavigator.tsx
|-- screens
|   |-- Contact.tsx
|   |-- DummyScreen.tsx
|   |-- Home.tsx
|   |-- Screen1.tsx
|   `-- Screen2.tsx
|-- types
|   |-- BottomTabType.ts
|   |-- DrawerType.ts
|   `-- StackType.ts
`-- utils
    `-- Colors.ts
```

The project structure contains the following folders:
| Folder | Details |
| ------- | ------- |
| assets | The assets folder contains the images used in the app. |
| components | The component directory contains the reusable components which can be used across the app. |
| constants | The constants folder contains the string constants used in the app. This can help in identifying the existing constants and avoid duplication. |
| navigators | The navigators folder contains the sub navigators which are used to construct the main navigator as defined in the requirement. |
| screens | The screens directory contains the main navigator screens used in the app. |
| types | The types folder contains the typescript types. All the different types like API response, navigator params, etc. will be defined in this folder. |
| utils | The utils folder contains the utility functions, colors and other busisness logic which can be used across the app. |

<br>


## Steps to run the app

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```
