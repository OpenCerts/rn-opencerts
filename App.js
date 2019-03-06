import React from "react";
import { WebView, Text, View, StyleSheet } from "react-native";
import CERT from "./default-certificate";

const FRAMELESS_URL =
  "https://deploy-preview-112--opencerts-development.netlify.com/frameless_viewer/";
const INPUT_ID = "certificateContentsString";

export default class App extends React.Component {
  render() {
    return (
      <WebView
        style={{ flex: 1, width: "100%" }}
        source={{
          uri: FRAMELESS_URL
        }}
        injectedJavaScript={`
          function setNativeValue(element, value) {
            const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
            const prototype = Object.getPrototypeOf(element);
            const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
            
            if (valueSetter && valueSetter !== prototypeValueSetter) {
              prototypeValueSetter.call(element, value);
            } else {
              valueSetter.call(element, value);
            }
          };

          var val = '${JSON.stringify(CERT)}';
          var elm = document.getElementById("${INPUT_ID}");

          setNativeValue(elm, val);
          elm.dispatchEvent(new Event('input', { bubbles: true }));
        `}
      />
    );
  }
}
