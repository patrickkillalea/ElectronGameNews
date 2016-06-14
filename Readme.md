# Electron Game News

This is an Electron application which pulls games data from the net and displays it to the user using AngularJS and MongoDB.

It uses ng-route to control the tabs. Styles are inline while app is being developed.

![alt tag](http://i.imgur.com/UGIWo0l.jpg)

#Install

To install, follow the following steps

--- 

Install Git, Node and MongoDB

--- 

Get Code

```
	git clone https://github.com/patrickkillalea/ElectronGameNews
	
	cd ElectronGameNews
```

--- 

Install dependencies

```
	npm install
```

Install bower dependencies 

```
	bower install
```

Install Application dependencies:

Change directory to ```app``` folder, then run

```
	npm install
```


#Run 
---

Run your application by entering following command in your command prompt from the ```ElectronGameNews``` directory

```
	gulp run
```

#Release
---

You can get the release version with following command:

```
	gulp build-electron
```


