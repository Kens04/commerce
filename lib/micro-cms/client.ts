import { createClient } from 'microcms-js-sdk';

// Initialize Client SDK.
export const client = createClient({
  serviceDomain: 'farmlys-news',
  apiKey: process.env.MICROCMS_API_KEY ?? 'default-api-key'
});
