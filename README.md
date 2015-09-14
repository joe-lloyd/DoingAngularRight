# DoingAngularRight

Creating an angular app using the correct file structure where each component is nearly like a mini app its self whilst making correct usage of Directives services and factories. To avoid using jQuery in the app but still keep the awesome look and feel of bootstrap bootstrap-ui was used. this is a whole bootstrap library with JavaScript components written in angular.

## Setting up

Running the app by selecting the index.html and opening with google chrome/ie/firefox will cause errors because of the way the pages are looked for. To get around this problem install node and then use nmp to get a package called http-server. once this is installed you can then run the app on a local web server by typing "http-server ." into the console when you are in the index directory.

### side note

You can access the app from your phone to see how responsive it is using the device ip address (open cmd line and type "ipconfig" to find it) with the correct port number. The app should appear perfectly mobile friendly.

## File Structure

The way the app is layed out is to help maintain the app no matter how big it gets with each feature haveing its own folder that contains html controllers and services. As well as that there is a shared section that holds cross page chunks of code stored as directives.
