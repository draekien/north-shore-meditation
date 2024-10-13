import DynamicMap from './dynamic.map';
import type { SharedMapProps } from './map';

export default async function WalkingDirections(props: SharedMapProps) {
  return (
    <DynamicMap
      src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d1393.7654545146197!2d151.1699323190893!3d-33.813562329997495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x6b12af3b921f20eb%3A0xbac0e12674474c91!2sLane%20Cove%20Interchange%2C%20Longueville%20Rd%2C%20Stand%20B%2C%20Lane%20Cove%20North%20NSW!3m2!1d-33.812321!2d151.171509!4m5!1s0x6b12afedfeb57fd9%3A0x5f070473e99a3205!2sNorth%20Shore%20Transcendental%20Meditation%20Sydney%2C%20133%20Longueville%20Rd%2C%20Lane%20Cove%20NSW%202066!3m2!1d-33.8149629!2d151.1697356!5e0!3m2!1sen!2sau!4v1728777163114!5m2!1sen!2sau"
      {...props}
    />
  );
}
