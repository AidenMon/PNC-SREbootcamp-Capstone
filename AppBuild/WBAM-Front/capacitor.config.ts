import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'wbam-front',
  webDir: 'dist/wbam-front',
  plugins: {
    CapacitorHttp: {
      enabled: true,
    },
  },
};

export default config;
