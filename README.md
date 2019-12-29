# Default Icons for React Native

### react-native-ico-default

369 Vector Icons for React Native

<img src="./static/leftArrow.png" alt="leftArrow" width="150" height="150"> <img src="./static/menu.png" alt="menu" width="150" height="150"> <img src="./static/question.png" alt="question" width="150" height="150">

## List of icons

- [List of Default Icons](http://ico.simpleness.org/pack/default)

## Usage

```
import Icon from 'react-native-ico-default';


// Inside some view component
render() {
    return (
        <>
          <Icon name="leftArrow" />
          <Icon name="menu" height="40" width="40" />
          <Icon name="question" color="red" />
        </>
    );
}

```

## Installation

#### yarn

```bash
yarn add react-native-ico-default react-native-svg
```

#### npm

```bash
npm install --save react-native-ico-default react-native-svg
```

### Link react-native-svg

```bash
react-native link react-native-svg
```

### pod install ( for iOS )

```
cd ios && pod install && cd ..
```

## API

### <Icon name [color width height ...rest] />

Returns a SvgXml icon by name and group.

 name | optional | default value | description | examples
------|----------|---------------|-------------|---------
name | no |  | name of icon | "leftArrow"
color | yes | | line color, css style | "#00ff00", "#0f0", "green"
width | yes | 20 | width of the icon | 40
height | yes | 20 | height of the icon | 40
...rest | no | | other props | style={{backgroundColor: "#00f"}}

## Icons Made by

[Dave Gandy](https://www.flaticon.com/authors/dave-gandy)

## Created by

Dimitry Ivanov <2@ivanoff.org.ua> # curl -A cv ivanoff.org.ua
