import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import { io, Socket } from 'socket.io-client';
import { Audio } from 'expo-av';

const BACKGROUND_TASK = 'BACKGROUND_TASK';
let socket: Socket | null = null;
let soundObject: Audio.Sound | null = null; 

// Load and play the alarm sound
const startAlarm = async (): Promise<void> => {
  try {
    if (!soundObject) {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/sound/alarm.wav'),
        { shouldPlay: true, isLooping: true }
      );
      soundObject = sound;
    }
    await soundObject.playAsync();
  } catch (error) {
    console.error('Error playing alarm sound:', error);
  }
};

// Stop the alarm sound
const stopAlarm = async (): Promise<void> => {
  try {
    if (soundObject) {
      await soundObject.stopAsync();
      soundObject = null;
    }
  } catch (error) {
    console.error('Error stopping alarm sound:', error);
  }
};

// Define the background task
TaskManager.defineTask(BACKGROUND_TASK, async () => {
  try {
    if (!socket) {
      socket = io('ws://hexa-emergency-backend-service.onrender.com/', { transports: ['websocket'] });

      socket.on('connect', () => {
        console.log('Connected to server in background');

        socket?.on('new_alert', (data: string) => {
          console.log('Background received alert:', data);
          startAlarm(); // Start alarm when alert is received
        });
      });

      socket.on('connect_error', (err: Error) => {
        console.error('Background connection error:', err);
      });
    }
  } catch (error) {
    console.error('Error in background task', error);
  }

  return BackgroundFetch.BackgroundFetchResult.NewData;// Ensure task returns a valid value
});

// Register the background task
export const startBackgroundService = async (): Promise<void> => {
  try {
    const isRegistered = await BackgroundFetch.getStatusAsync();
    if (isRegistered !== BackgroundFetch.BackgroundFetchStatus.Available) {
      console.warn('Background Fetch is not available');
      return;
    }

    await BackgroundFetch.registerTaskAsync(BACKGROUND_TASK, {
      minimumInterval: 60, // Minimum interval in seconds
      stopOnTerminate: false, // Keep running after app termination
      startOnBoot: true, // Start task after reboot
    });

    console.log('Background service started');
  } catch (error) {
    console.error('Error starting background service', error);
  }
};

// Stop the background service
export const stopBackgroundService = async (): Promise<void> => {
  try {
    if (socket) {
      socket.disconnect();
      socket = null;
      console.log('Socket disconnected');
    }

    await BackgroundFetch.unregisterTaskAsync(BACKGROUND_TASK);
    console.log('Background service stopped');

    stopAlarm(); // Ensure the alarm stops when service is stopped
  } catch (error) {
    console.error('Error stopping background service', error);
  }
};
