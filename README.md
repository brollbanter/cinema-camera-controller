# DIY Wireless Touchscreen Cinema Camera Controller


How to build your own wireless touchscreen cinema camera controller, or at least how I made the first version of a DIY simple settings controller for my Z Cam cinema camera that suited my needs at the time. 

The intention of this write up is so that you can treat it like a one time <a href="https://www.kiwico.com/eureka" target="_blank" rel="noopener noreferrer">Eureka Crate from KiwiCo</a> build focused for filmmakers. Although the software side did need some basic knowledge, I document everything I did, and was able to reproduce my results twice by following the instructions. 



## Hardware

### Parts List
Preliminary parts list for DIY tinkerers comes out to around $150 all with 1-2 day shipping in the US at the time of writing the first draft of instructions.

<ul>
  <li>
    ~50$ Raspberry Pi 3b <a href="https://amzn.to/3J5R4oP" target="_blank" rel="noopener">(Supplier 1)</a> <a href="https://amzn.to/3J2SBvZ" target="_blank" rel="noopener">(Supplier 2)</a> <a href="https://amzn.to/3VMP78s" target="_blank" rel="noopener">(Supplier 3)</a> and some <a href="https://www.thingiverse.com/thing:1701186/files" target="_blank" rel="noopener">STL reference designs</a>
  </li>
  <li>
    ~25$ <a href="https://amzn.to/49iq5kA" target="_blank" rel="noopener">18650 UPS</a> with relevant <a href="https://www.waveshare.com/wiki/UPS_HAT" target="_blank" rel="noopener">Docs</a>
  </li>
  <li>
    ~40$ <a href="https://amzn.to/3J6aYQx" target="_blank" rel="noopener"> 4.3" Waveshare</a> with relevant <a href="https://www.waveshare.com/wiki/4.3inch_DSI_LCD" target="_blank" rel="noopener">Docs</a>
  </li>
  <li>
    ~25$ <a href="https://amzn.to/4aiJ9k7" target="_blank" rel="noopener noreferrer">18650 Batteries with charger</a> or <a href="https://amzn.to/3J4HimH" target="_blank" rel="noopener noreferrer">18650 with 4 Bay Charger</a> I just used 2 from an old Portkeys Keygrip
  </li>
  <li>
    ~10$ Micro SD Card <a href="https://amzn.to/3THzQTD" target="_blank" rel="noopener noreferrer">16GB Industrial</a> or <a href="https://amzn.to/3vLvEtV" target="_blank" rel="noopener noreferrer">64GB Sandisk Extreme</a> or any spare you have laying around, the pi 3 doesn't have high read and write speed needs. 
  </li>
  <li>3D Printed Case - the design we had made can be found for <a href="https://ko-fi.com/s/1c18519251" target="_blank" rel="noopener">for free on my Ko-fi</a> but does need 4 <a href="https://amzn.to/4aZlxkV" target="_blank" rel="noopener">M2.5x8mm Screws</a>.
</li>
<li><a href="https://amzn.to/3U22kra" target="_blank" rel="noopener">Ethernet cable</a> for connecting Pi to ssh in</li></ul>
If you don't own a 3D printer or have a friend that will lend you time on theirs, then someplace like <a href="https://www.pcbway.com/rapid-prototyping/manufacture/?type=2" target="_blank" rel="noopener">PCBWay</a> only costs 8$ a part for PETG and roughly double for Nylon. So at most it's a $200 project that takes a few days for parts to arrive. 


### Parts Models
3D Models of all parts can be found in <a href="https://github.com/brollbanter/cinema-camera-controller/tree/main/hardware/parts_ref/3d-models" target="_blank" rel="noopener">3D models</a> folder on the Github Repo


### Hardware Notes

We will be waiting to assemble all the hardware until after preparing the OS, but it is possible to insert the micro SD card if the hardware stack is assembled, just use extreme care.

We selected a Pi 3 due to the low power power demands, however when designing our case, we made it with compatible with Raspberry pi 3 through 5 port cutouts. 

## Software

### Preparing the OS

On <a href="https://www.raspberrypi.com/software/" target="_blank" rel="noopener noreferrer">Raspberry Pi Imager</a> select Pi 3 and choose the recommended Legacy 32 bit desktop environment, then select your storage and click next

#### General Tab

![file](https://brollbanter.com/wp-content/uploads/2024/04/image-1713804721092.png)

1. hostname can be any, its used for identifying this device on your local network when you plug it into ethernet
2. Username and password can be any for this, default for raspian is user pi password raspberry
3. Configure WLAN 
	1. Enter ZCAM SSID
		>ZCAM-F8-###### (can be found on networking menu in camera)
	2. Password - default z cam wifi password is 12345678
	3. Set wireless lan country (Most important step)
4. Set locale for timezone and keyboard layout

#### Services Tabs
be sure to check enable ssh and password authentication, which will match the username and password you made in the general tab

#### Options Tab
All optional, I prefer the alert when its done being burned and disable telemetry.

Click to confirm the settings are applied to the OS.

Wait a bit for the OS to write and verify.

Insert SD card into the Pi 3

Assemble the hardware stack

### First time boot

turn on ups 
- blue screen to generate ssh
- reboots automagically
- welcome to pi screen with text on the bottom. 
>1st boot may take a while and seem like its stopped, that's normal

Once you're on the desktop screen plug in your ethernet to your pi.

ssh in with the user account you created

To ssh in windows Powershell
1. Launch Windows Powershell 
2. `ssh USER@HOSTNAME.local`
> from my example picture earlier it would be `ssh pi@raspberry.local` 
3. yes to fingerprint if needed
4. enter USER password
> these are all the setting you set while preparing the OS image in the general tab

	
	
	sudo apt update
	
	sudo apt upgrade
	
y to continue
	
	
	sudo reboot now
we are now up to date for raspberry pi os but lack all the dependencies we need to run our custom software

### Node Install 

SSH in after the reboot

Using <a href="https://nodejs.org/en/download/package-manager" target="_blank" rel="noopener noreferrer">this</a> as my current reference 
>A  note to new tinkerers, I cite my source here because you should NEVER curl | bash without knowing what the script does, in this case it is how the official documentation distributes it, and so generally safe to do so.

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`


use new ssh connection 

`nvm install 20`

Install the programs needed

` sudo apt-get -y install unclutter firefox-esr` 

 enable i2c 

`sudo raspi-config`

interface options --> I2c select --> Finish

`npm install -g yarn`

Copy the open source software from our <a href="https://github.com/brollbanter/cinema-camera-controller" target="_blank" rel="noopener">Github Repo</a>


`git clone https://github.com/brollbanter/cinema-camera-controller.git c3`
>the c3 at the end places the files from our repo into a directory called c3 on your device. This is mainly so we don't have to type cinema-camera-controller and keeps the folder names cleaner. It is also used in scripts our program uses 

` cd c3/software`

`yarn install`

create camera_state.json 

`nano camera_state.json `

Paste the following and write out and exit 
`{"wifi":"connected","wifi_ssid":"any","camera_url":"http://10.98.33.1"}`

make sure z cam is on at this point if you plan on connecting to test

`cd ~/c3/software/desktop`

`cp start_server.desktop start_ui.desktop ~/Desktop/`
>copies the two pre-made desktop shortcuts to the Desktop

`nano ~/Desktop/start_server.desktop`

>Change USER to your pi install's username and write out

 `nano ~/Desktop/start_ui.desktop`
 
 
>Again change USER to your pi install's username and write out

 
Now you have a Raspberry Pi 3 desktop environment with 2 shortcuts, 1 to start the server and another to start the UI. Be sure to always start the server before the UI. The safest way to shutdown is to exit the UI through the gear cog, navigate to the Pi OS logo then tap Shutdown. Click shutdown again to confirm and wait for the green Pi activity LED to stop flashing, then turn the UPS off. 
 
