import phone_1 from './phone-1.png'
import phone_2 from './phone-2.png'
import phone_3 from './phone-3.png'
import phone_4 from './phone-4.png'
import world from './world.png'
import internet from './internet.png'
import computer from './computer.png'
import time from './time.png';
import call from './call.png';
import mic from './mic.png';
import GPS from './GPS.png';
import location from './location.png';
import call_2 from './call-2.png';
import no_call from './no-call.png';
import remote from './remote-call.png';
import SMS from './SMS.png';
import delet from './del-icon.png';
import boxes from './boxes-icon.png';
import download from './download.png';
import view from './view.png';




export const phone = [
    {
      
    id: 1,
    header: 'Device Control and Locking',
    para: "Device Lock Controller enables device management for credit providers. Your provider can remotely restrict access to your device if you don't make payments. If your device is restricted, basic functionality, such as emergency calling and access to settings, will still be available.",
    image: phone_1,
    list: [
      {
        icon: world,
        title: 'Block Internet Connection',
        services: 'Prevents internet access on the target device.',
      },
      {
        icon: internet,
        title: 'Block Mobile Network',
        services: 'Disables mobile network connectivity.',
      },
      {
        icon: computer,
        title: 'Remotely Lock or Unlock Device',
        services: 'Securely control device access.',
      },
    ],
  },
  {
    image: phone_2,
    id: 2,
    header: 'Real-Time Monitoring',
    para: 'Real-time monitoring is the delivery of continuously updated data about systems, processes or events. Such monitoring provides information streaming at zero or low latency, so there is minimal delay between data collection and analysis.',

    list: [
      {
        icon: time,
        title: 'Real-Time Screen Sharing',
        services: 'Collaborate instantly with live screen sharing',
      },
      {
        icon: call,
        title: 'Record Live Screen and Screenshot Anonymously',
        services: 'Capture screen activity discreetly',
      },
      {
        icon: mic,
        title: 'Live Microphone Access for Listening to Surroundings',
        services: "Listen to the device's surroundings in real-time",
      },
      {
        icon: GPS,
        title: 'GPS-Free Real-Time Tracking',
        services: 'Track device location without GPS',
      },
      {
        icon: location,
        title: 'GPS Position History',
        services: 'Access historical GPS location data',
      },
    ],
  },
  {
    id: 3,
    header: 'Communication Control',
    para: 'A communication controller manages data input and output to a host computer or computer network. The units may be complex front-end mainframe interfaces or simpler devices such as multiplexors, bridges, and routers.',

    image: phone_3,
    list: [
      {
        icon: call_2,
        title: 'Record All Calls, Including Unsupported Devices',
        services: 'Prevents internet access on the target device.',
      },
      {
        icon: no_call,
        title: 'Block Unwanted Contacts',
        services: 'Prevent unwanted communications',
      },
      {
        icon: remote,
        title: 'Remote Call Control',
        services: 'Dial or Disconnect: Manage calls remotely',
      },
      {
        icon: SMS,
        title: 'SMS Control',
        services:
          'Send, Receive, and Read Messages Secretly: Monitor text messages discreetly',
      },
    ],
  },
  {
    id: 4,
    header: 'App and File Management',
    para: 'Real-time monitoring is the delivery of continuously updated data about systems, processes or events. Such monitoring provides information streaming at zero or low latency.',

    image: phone_4,
    list: [
      {
        icon: boxes,
        title: 'Remotely Install or Uninstall Any Apps',
        services: 'Manage apps remotely',
      },
      {
        icon: delet,
        title: 'Remotely Delete Anything Without Limitations',
        services: 'Remove files and data remotely',
      },
      {
        icon:download,
        title:
          'Download Any Details as Files or Folders from the Target Device',
        services: 'Retrieve data to your dashboard',
      },
      {
        icon: view,
        title: 'View Photos and Videos on the Target Phone',
        services: 'Access multimedia files remotely',
      },
    ],
  },
];