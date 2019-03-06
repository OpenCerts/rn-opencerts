# Frameless Certificate Rendering Example Application

This repository is an example of a React Native app (running on [Expo](https://expo.io/) to show how to render an OpenCerts file using a webview.

## Try it out

Download the Expo Client for your ios/android phone at [https://expo.io/tools](https://expo.io/tools).

![QR Code for Expo App](https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=exp://exp.host/@whitefables/rn-opencerts)

## The method

The application simply open the frameless url in a webview and sebsequently injects a javascript script to set the input field in that page to the content of the certificate. 

## Additional Notes

Both this application and the frameless page do not check for the validity of the certificate. The application needs to conduct the 4 step check (according to OpenCerts documentation) prior to displaying the webview. 