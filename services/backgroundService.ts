import BackgroundJob from 'react-native-background-actions';
import { io, Socket } from 'socket.io-client';
import Sound from 'react-native-sound';
import { useGlobal } from '@/components/GlobalSearch'; // Import your global context

let socket: Socket | null = null;

const startAlarm = (): void => {
  const alarm = new Sound('alarm.mp3', Sound.MAIN_BUNDLE, (error) => {
    if (error) {
      console.error('Error loading sound', error);
      return;
    }
    alarm.setNumberOfLoops(-1); // Loop the alarm indefinitely
    alarm.play(); // Play the alarm
  });
};

const backgroundTask = async (taskData?: { [key: string]: any }): Promise<void> => {
  socket = io('ws://your-server-url:3000', {
    transports: ['websocket'],
  });

  socket.on('connect', () => {
    console.log('Connected to server in background');
    
    socket?.on('new_alert', (data: any) => {
      console.log('Background received alert:', data);
      
      // Update global context to notify the UI
      const { setEmergencyAlert } = useGlobal();
      setEmergencyAlert(true); // Set the alert to true when a new alert is received

      startAlarm(); // Play alarm if necessary
    });
  });

  socket.on('connect_error', (err: Error) => {
    console.error('Background connection error:', err);
  });

  // Keep the task alive indefinitely
  await new Promise(() => {});
};

export const startBackgroundService = async (): Promise<void> => {
  await BackgroundJob.start(backgroundTask, {
    taskName: 'WebSocket Listener',
    taskTitle: 'Monitoring Alerts',
    taskDesc: 'Listening for emergency alerts',
    taskIcon: {
      name: 'ic_launcher',
      type: 'mipmap',
    },
    linkingURI: 'your-app-scheme://',
    parameters: {},
  });
};

export const stopBackgroundService = async (): Promise<void> => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
  await BackgroundJob.stop();
};
