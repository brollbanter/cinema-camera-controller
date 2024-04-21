# Ugly Box Webcontroller

## Project setup
```
yarn install
```

## Development setup
Configure Visual Studio Code for Vue with [these instructions](https://code.visualstudio.com/docs/nodejs/vuejs-tutorial)

Note you will need to run command line things from [the integrated terminal](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial#_integrated-terminal).
Use the yarn commands in the [Project setup]  section to setup and run the project.
You shouldn't need to restart the server but when you do save changes to a file you may get errors in the terminal window running the server. Fix the problems and save the file and the server should pick up the new changes.

To see the application running in your browser, navigate to http://localhost:8080.

To change the url to that of the camera, see the instructions below to specify the camera URL in `.env.local`

### Compiles and hot-reloads for development
```
yarn serve
```

## Project packaging and installation on a Pi

### Compiles and minifies for production
To build the most recent Vue.js code into a server to be run on the pi:
```
yarn build
```

### Bundles the install files and creates uglybox.zip
```
yarn bundle
```

### Prepare the SD card (all these steps are done with SD card in a card reader on your dev computer)
- Install RaspberryPi desktop image on the SD card. The [Raspberry Pi Imager](https://www.raspberrypi.org/software/) software works well for this.

- Copy uglybox.zip to the boot partition.

MacOS:
```
cp uglybox.zip /Volumes/boot
```

Windows: You can use file explorer to do this.

- Set up [ssh](https://www.raspberrypi.org/documentation/remote-access/ssh/) (follow only step 3 to set up a headless Pi) and [wpa_supplicant](https://www.raspberrypi.org/documentation/configuration/wireless/headless.md) on the boot partition according to instructions.

### Install on Pi

- Install SD card into Pi and boot it. Once up ssh into the `pi` account on it and do the following:

```
cp /boot/uglybox.zip .
unzip uglybox.zip
cd uglybox
```

- At this point if you need to configure a camera URL other than the default one you can create a `.env.local` file in the `uglybox` directory and set your alternate URL there with a line like:

```
CAMERA_URL=http://alternate_camera_url
```

- Finally, to install the necessary software on the Pi:

```
./install-pi
```

- The last command should cause the Pi to reboot and when it comes back up it should be running the uglybox menu in kiosk mode

Note, if you're repeating these steps `unzip uglybox.zip` may ask you whether you want to replace existing files. You should answer `A` to replace all files.

## Other esoteric development stuff

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Still photo capture

API call is `GET /ctrl/still?action=cap`
